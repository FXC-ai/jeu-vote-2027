# Mettre en place Laravel avec Nginx et PHP-FPM dans Docker

Ce tutoriel construit un environnement de développement composé de deux conteneurs :

```text
Navigateur
    │
    │ HTTP/HTTPS
    ▼
Nginx
    ├── sert directement CSS, JavaScript, images…
    │
    └── transmet index.php avec FastCGI
                    │
                    ▼
                PHP-FPM
                    │
                    ▼
                 Laravel
```

L'objectif n'est pas seulement d'obtenir un environnement fonctionnel. Chaque étape explique ce que Docker, Nginx et PHP-FPM font, afin de pouvoir diagnostiquer le système sans dépendre d'une suite de commandes magiques.

## 1. Comprendre les responsabilités

- Nginx reçoit les requêtes HTTP et HTTPS.
- Nginx sert les fichiers statiques.
- PHP-FPM exécute le code PHP.
- Laravel reçoit les requêtes qui ne correspondent pas à un fichier statique.

FastCGI est le protocole utilisé entre Nginx et PHP-FPM. Ce n'est ni un conteneur ni un programme supplémentaire. Le navigateur ne le voit jamais.

## 2. Arborescence cible

```text
projet/
├── certs/
│   ├── local-nginx.crt
│   └── local-nginx.key
├── nginx/
│   └── conf-dev.d/
│       └── default.conf
├── php-fpm/
│   ├── Dockerfile
│   └── app/
│       ├── app/
│       ├── bootstrap/
│       ├── public/
│       │   └── index.php
│       ├── routes/
│       ├── artisan
│       └── composer.json
└── docker-compose-dev.yml
```

Le dossier `php-fpm/app` est la racine de l'application Laravel.

Le seul dossier Laravel accessible depuis Internet est :

```text
php-fpm/app/public
```

Il ne faut jamais configurer Nginx pour servir toute l'application Laravel. Cela exposerait potentiellement `.env`, le code source et d'autres fichiers privés.

## 3. Construire l'image PHP de développement

### Le Dockerfile

Créer `php-fpm/Dockerfile` :

```dockerfile
# Étape temporaire fournissant Node et NPM
FROM node:24-trixie-slim AS node

# Image finale
FROM php:8.4-fpm-trixie

ARG WWW_USER=1000
ARG WWW_GROUP=1000

WORKDIR /app

RUN apt-get update \
    && apt-get install -y --no-install-recommends \
        git \
        unzip \
    && rm -rf /var/lib/apt/lists/*

# Récupérer Node depuis l'étape temporaire
COPY --from=node /usr/local/bin/node /usr/local/bin/node
COPY --from=node /usr/local/lib/node_modules /usr/local/lib/node_modules

RUN ln -s /usr/local/lib/node_modules/npm/bin/npm-cli.js /usr/local/bin/npm \
    && ln -s /usr/local/lib/node_modules/npm/bin/npx-cli.js /usr/local/bin/npx

# Récupérer Composer depuis son image officielle
COPY --from=composer:2 /usr/bin/composer /usr/local/bin/composer

# Créer un utilisateur correspondant à l'utilisateur de la machine
RUN groupadd --gid "${WWW_GROUP}" webapp \
    && useradd \
        --uid "${WWW_USER}" \
        --gid "${WWW_GROUP}" \
        --create-home \
        --shell /bin/bash \
        webapp

USER webapp

ENV COMPOSER_HOME=/home/webapp/.composer
ENV PATH="${COMPOSER_HOME}/vendor/bin:${PATH}"

RUN composer global require laravel/installer
```

### Comprendre les deux `FROM`

Ce Dockerfile utilise un build multi-stage :

```text
Étape node
└── fournit Node et NPM

Étape PHP
├── constitue l'image finale
├── reçoit Node et NPM
├── reçoit Composer
└── exécute PHP-FPM
```

L'image finale n'est pas basée simultanément sur PHP et Node. Elle est basée sur PHP, avec quelques fichiers copiés depuis les autres images.

La première ligne :

```dockerfile
FROM node:24-trixie-slim AS node
```

crée une étape temporaire nommée `node`.

La seconde ligne :

```dockerfile
FROM php:8.4-fpm-trixie
```

commence l'image finale.

Une instruction comme :

```dockerfile
COPY --from=node /usr/local/bin/node /usr/local/bin/node
```

copie un fichier depuis l'étape temporaire dans l'image finale.

### Construire l'image

Depuis la racine du dépôt :

```bash
sudo docker build \
    --build-arg WWW_USER="$(id -u)" \
    --build-arg WWW_GROUP="$(id -g)" \
    -f php-fpm/Dockerfile \
    -t jeu-vote-php-dev \
    php-fpm
```

### Vérifier les outils

```bash
sudo docker run --rm jeu-vote-php-dev php --version
```

```bash
sudo docker run --rm jeu-vote-php-dev composer --version
```

```bash
sudo docker run --rm jeu-vote-php-dev node --version
```

```bash
sudo docker run --rm jeu-vote-php-dev npm --version
```

```bash
sudo docker run --rm jeu-vote-php-dev laravel --version
```

Ne pas passer à la suite tant qu'une de ces vérifications échoue.

## 4. Créer l'application Laravel proprement

L'installeur Laravel veut créer un nouveau dossier. Il est donc plus simple de monter le dossier parent `php-fpm`, puis de lui demander de créer `app`.

Avant la commande, `php-fpm/app` ne doit pas exister :

```bash
test ! -e php-fpm/app && echo "Le dossier cible est disponible"
```

Créer l'application :

```bash
sudo docker run --rm -it \
    -v "$PWD/php-fpm:/workspace" \
    -w /workspace \
    jeu-vote-php-dev \
    laravel new app
```

Cette partie :

```text
-v "$PWD/php-fpm:/workspace"
```

crée le montage suivant :

```text
Machine                       Conteneur
./php-fpm            →        /workspace
```

La commande :

```text
laravel new app
```

crée donc :

```text
Conteneur                     Machine
/workspace/app       →        ./php-fpm/app
```

Cela évite :

- `laravel new .`, mal géré par l'installeur actuel ;
- la création accidentelle de `/app/app` ;
- les erreurs de permission provoquées par une tentative de création dans `/`.

## 5. Configurer Docker Compose

Créer `docker-compose-dev.yml` :

```yaml
services:
  nginx:
    image: nginx:stable-alpine
    container_name: jeu-vote-nginx
    restart: unless-stopped

    security_opt:
      - no-new-privileges:true

    ports:
      - "80:80"
      - "443:443"

    volumes:
      - ./php-fpm/app/public:/app/public:ro
      - ./nginx/conf-dev.d/default.conf:/etc/nginx/conf.d/default.conf:ro
      - ./certs:/etc/nginx/certs:ro

  php-fpm:
    build:
      context: ./php-fpm
      dockerfile: Dockerfile
      args:
        WWW_USER: "${HOST_UID:-1000}"
        WWW_GROUP: "${HOST_GID:-1000}"

    volumes:
      - ./php-fpm/app:/app
```

### Comprendre les volumes

Nginx voit uniquement :

```text
Machine                       Conteneur Nginx
./php-fpm/app/public  →       /app/public
```

PHP-FPM voit toute l'application :

```text
Machine                       Conteneur PHP-FPM
./php-fpm/app         →       /app
```

Les deux conteneurs voient donc le point d'entrée PHP au même emplacement :

```text
/app/public/index.php
```

Cette égalité de chemins simplifie fortement la configuration FastCGI.

### Pourquoi PHP-FPM n'a pas de `ports`

Il n'est pas nécessaire d'écrire :

```yaml
ports:
  - "9000:9000"
```

Nginx et PHP-FPM appartiennent automatiquement au même réseau Compose. Nginx peut joindre PHP-FPM avec :

```text
php-fpm:9000
```

`php-fpm` est le nom du service et `9000` est le port interne de PHP-FPM. Ce port n'a pas besoin d'être exposé à la machine ni à Internet.

### Comprendre la syntaxe des ports

```yaml
ports:
  - "443:443"
```

signifie :

```text
port de la machine : port du conteneur
443                : 443
```

Un mapping comme :

```yaml
- "8443:443"
```

exposerait le port `443` du conteneur sur le port `8443` de la machine.

## 6. Configurer Nginx

Créer `nginx/conf-dev.d/default.conf` :

```nginx
server {
    listen 80;
    server_name localhost;

    return 301 https://$host$request_uri;
}

server {
    listen 443 ssl;
    server_name localhost;

    ssl_certificate /etc/nginx/certs/local-nginx.crt;
    ssl_certificate_key /etc/nginx/certs/local-nginx.key;

    ssl_protocols TLSv1.2 TLSv1.3;

    root /app/public;
    index index.php;

    location / {
        try_files $uri $uri/ /index.php?$query_string;
    }

    location ~ \.php$ {
        try_files $uri =404;

        include fastcgi_params;
        fastcgi_pass php-fpm:9000;

        fastcgi_param SCRIPT_FILENAME $document_root$fastcgi_script_name;
        fastcgi_param HTTPS on;
    }
}
```

### `root`

```nginx
root /app/public;
```

`root` indique où Nginx cherche les fichiers.

Pour une requête :

```text
/build/assets/app.css
```

Nginx cherche :

```text
/app/public/build/assets/app.css
```

`root` désigne un dossier, jamais `index.php`.

### `index`

```nginx
index index.php;
```

Lorsqu'un répertoire est demandé, Nginx essaie son fichier `index.php`.

### `try_files`

```nginx
try_files $uri $uri/ /index.php?$query_string;
```

Nginx procède dans cet ordre :

1. cherche un fichier correspondant à l'URL ;
2. cherche un répertoire correspondant ;
3. sinon, transmet la requête à `/index.php`.

Exemples :

```text
/favicon.ico
→ /app/public/favicon.ico existe
→ Nginx sert le fichier
```

```text
/build/assets/app.css
→ le fichier existe
→ Nginx le sert
```

```text
/dashboard
→ aucun fichier /app/public/dashboard
→ Nginx utilise /index.php
→ Laravel traite /dashboard
```

### `fastcgi_pass`

```nginx
fastcgi_pass php-fpm:9000;
```

Nginx contacte le service Compose `php-fpm` sur son port interne `9000`.

### `SCRIPT_FILENAME`

```nginx
fastcgi_param SCRIPT_FILENAME $document_root$fastcgi_script_name;
```

Pour `/index.php` :

```text
$document_root        = /app/public
$fastcgi_script_name  = /index.php
```

Le résultat transmis à PHP-FPM est :

```text
/app/public/index.php
```

PHP-FPM possède bien ce fichier, car toute l'application est montée dans `/app`.

## 7. Créer un certificat HTTPS local

Créer le dossier :

```bash
mkdir -p certs
```

Créer un certificat autosigné :

```bash
openssl req \
    -x509 \
    -nodes \
    -newkey rsa:2048 \
    -days 365 \
    -keyout certs/local-nginx.key \
    -out certs/local-nginx.crt \
    -subj "/CN=localhost" \
    -addext "subjectAltName=DNS:localhost"
```

Le navigateur affichera un avertissement, car le certificat n'est pas signé par une autorité reconnue. C'est normal en développement.

## 8. Configurer Laravel

Dans `php-fpm/app/.env` :

```dotenv
APP_URL=https://localhost
```

Laravel peut utiliser SQLite au début :

```dotenv
DB_CONNECTION=sqlite
```

L'installeur crée normalement :

```text
database/database.sqlite
```

## 9. Démarrer l'environnement

Valider d'abord le fichier Compose :

```bash
docker compose -f docker-compose-dev.yml config
```

Puis construire et démarrer :

```bash
sudo docker compose -f docker-compose-dev.yml up -d --build
```

Voir les services :

```bash
sudo docker compose -f docker-compose-dev.yml ps
```

Voir les journaux :

```bash
sudo docker compose -f docker-compose-dev.yml logs -f
```

Tester :

```bash
curl -k -i https://localhost/
```

Résultat attendu :

```text
HTTP/1.1 200 OK
Server: nginx
X-Powered-By: PHP
```

## 10. Comprendre `restart`, `recreate` et `build`

### Le code Laravel a changé

Aucune reconstruction n'est nécessaire : le code est monté avec un volume.

Recharger simplement la page.

### La configuration Nginx a changé

Tester la syntaxe :

```bash
sudo docker compose -f docker-compose-dev.yml exec nginx nginx -t
```

Puis recharger Nginx :

```bash
sudo docker compose -f docker-compose-dev.yml exec nginx nginx -s reload
```

### Le Dockerfile a changé

Reconstruire l'image et recréer PHP-FPM :

```bash
sudo docker compose -f docker-compose-dev.yml up -d \
    --build \
    --force-recreate \
    php-fpm
```

### Les volumes ou ports Compose ont changé

Un simple `restart` ne suffit pas. Il faut recréer le conteneur :

```bash
sudo docker compose -f docker-compose-dev.yml up -d \
    --force-recreate \
    nginx
```

Règle à retenir :

```text
restart
→ redémarre le même conteneur avec les mêmes volumes et ports

--force-recreate
→ crée un nouveau conteneur avec la nouvelle configuration Compose

--build
→ reconstruit l'image depuis le Dockerfile
```

## 11. Diagnostiquer sans deviner

### Vérifier la configuration réellement chargée par Nginx

```bash
sudo docker compose -f docker-compose-dev.yml exec nginx nginx -T
```

Ne pas se contenter de lire le fichier sur la machine : il faut vérifier ce que le processus utilise réellement.

### Vérifier ce que Nginx voit

```bash
sudo docker compose -f docker-compose-dev.yml exec nginx \
    ls -la /app/public
```

Il faut notamment voir :

```text
index.php
build/
favicon.ico
```

### Vérifier ce que PHP-FPM voit

```bash
sudo docker compose -f docker-compose-dev.yml exec php-fpm \
    ls -la /app/public/index.php
```

### Vérifier la résolution réseau

```bash
sudo docker compose -f docker-compose-dev.yml exec nginx \
    getent hosts php-fpm
```

### Vérifier le port PHP-FPM

```bash
sudo docker compose -f docker-compose-dev.yml exec nginx \
    nc -zv php-fpm 9000
```

### Tester directement un fichier statique

```bash
curl -k -i https://localhost/favicon.ico
```

Si cela fonctionne mais que `/` échoue, le problème se situe probablement dans `try_files` ou dans la transmission vers PHP-FPM.

## 12. Lire les erreurs courantes

### `502 Bad Gateway`

Exemple de journal :

```text
connect() failed (111: Connection refused)
```

Nginx trouve le conteneur, mais aucun processus n'écoute sur le port demandé.

Vérifier :

```nginx
fastcgi_pass php-fpm:9000;
```

Ne pas utiliser `5173` : ce port appartient généralement à Vite, pas à PHP-FPM.

### `File not found.` avec `X-Powered-By: PHP`

La requête atteint PHP-FPM, mais le chemin transmis dans `SCRIPT_FILENAME` n'existe pas dans son conteneur.

Comparer la configuration :

```bash
sudo docker compose -f docker-compose-dev.yml exec nginx nginx -T
```

avec le fichier réellement visible par PHP-FPM :

```bash
sudo docker compose -f docker-compose-dev.yml exec php-fpm \
    ls -la /app/public/index.php
```

### `404 Not Found` généré par Nginx

Nginx ne trouve pas le fichier et n'envoie pas la requête à Laravel.

Vérifier :

```nginx
root /app/public;
```

et :

```nginx
try_files $uri $uri/ /index.php?$query_string;
```

### `403 Forbidden` sur `/`

Nginx a trouvé un répertoire, mais aucun index exploitable et l'affichage du répertoire est interdit.

Vérifier :

```nginx
index index.php;
```

ainsi que la présence de :

```text
/app/public/index.php
```

### `network ... not found`

Un ancien conteneur référence un réseau Docker supprimé.

```bash
sudo docker compose -f docker-compose-dev.yml down --remove-orphans
sudo docker compose -f docker-compose-dev.yml up -d --build
```

### Une modification Compose semble ignorée

Si un volume, un port ou un réseau a été modifié, `restart` ne suffit pas :

```bash
sudo docker compose -f docker-compose-dev.yml up -d --force-recreate
```

### Nginx continue d'utiliser une ancienne configuration

Valider d'abord la syntaxe :

```bash
sudo docker compose -f docker-compose-dev.yml exec nginx nginx -t
```

Une erreur de syntaxe, comme un point-virgule manquant, empêche Nginx de charger la nouvelle configuration.

Afficher ensuite la configuration effectivement chargée :

```bash
sudo docker compose -f docker-compose-dev.yml exec nginx nginx -T
```

## 13. Méthode de diagnostic autonome

Pour chaque problème, suivre toujours cet ordre :

1. identifier qui produit la réponse : Nginx ou PHP ;
2. lire les journaux du service concerné ;
3. vérifier la configuration effectivement chargée ;
4. vérifier les fichiers visibles dans chaque conteneur ;
5. vérifier le réseau et le port ;
6. modifier une seule chose ;
7. recharger ou recréer selon le type de changement ;
8. tester immédiatement avec `curl`.

Le point central est celui-ci :

```text
Ne jamais raisonner uniquement à partir des chemins de la machine.

Toujours demander :
« Dans quel conteneur suis-je, et quel chemin ce conteneur voit-il ? »
```

C'est cette question qui permet de comprendre la majorité des problèmes de communication entre Nginx et PHP-FPM dans Docker.


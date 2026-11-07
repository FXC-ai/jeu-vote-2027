# Jeu-vote.fr

## Table des matières

- 1. Pitch : — 3
- 2. Overview du projet – Liste des features — 3
  - 2.1 Gestion des utilisateurs : — 3
  - 2.2 Liste des questionnaires : — 3
    - 2.2.1 Classement par thème : — 3
  - 2.3 Questionnaires : — 4
  - 2.4 Résultats — 4
  - 2.5 Comparateur : — 4
  - 2.6 Accueil / Candidats / FAQ / À propos / Contact — 4
- 3. Structure permanente du site — 5
  - 3.1 Le header — 5
  - 3.2 Le footer — 5
- 4. Gestion du profil utilisateur — 5
  - 4.1 Création d’un profil — 5
  - 4.2 Chargement d’un profil — 5
- 5. Liste des questionnaires — 6
  - 5.1 Questionnaires par thème — 6
    - 5.1.1 Vue d’ensemble — 6
    - 5.1.2 Thèmes généraux — 6
    - 5.1.3 Questionnaires de chaque thème général — 6
  - 5.2 Questionnaire transversaux — 7
- 6. Questionnaire — 7
  - 6.1. Fonctionnement des questionnaires — 7
    - 6.1.1 Évaluation des propositions — 7
    - 6.1.2 Retrait d’un candidat — 7
    - 6.1.3 Modification des propositions — 8
    - 6.1.4 Validation des questionnaires — 9
    - 6.1.5 Accès aux résultats — 9
    - 6.1.6 Sauvegarde des réponses — 9
  - 6.2. Questionnaires par thème — 9
  - 6.3. Questionnaires transversaux — 10
- 7. Pages de résultats — 10
  - 7.1 Les différents types de résultat — 10
    - 7.1.1 Le diagramme en barres divergentes horizontales (DBDH) — 10
    - 7.1.2 Le diagramme en barres empilées normalisées horizontales (DBENH) — 10
    - 7.1.3 Le podium — 11
    - 7.1.4 Prise en compte des candidats actifs — 11
  - 7.2 Résultat d’un questionnaire — 11
  - 7.3 Résultat d’un thème général — 12
  - 7.4 Résultats globaux — 12
    - 7.4.1. Résultats globaux des questionnaires par thème — 12
    - 7.4.2. Résultats globaux des questionnaires transversaux — 12
- 8 Le comparateur — 13
  - 8.1 Les différentes métriques de comparaison — 13
    - 8.1.1 Le score d’affinité entre les deux profils — 13
    - 8.1.2 Le taux de concordance — 13
    - 8.1.3 Le taux d’opposition — 13
    - 8.1.4 Le taux de neutralité divergente — 13
    - 8.1.5 Les plus forts accords et désaccords — 14
    - 8.1.6 Les graphiques de comparaison — 14
    - 8.1.7 Prise en compte des propositions actives — 14
  - 8.2 Comparaison pour un questionnaire donnée — 15
  - 8.3 Comparaison des résultats d’un thème général — 15
  - 8.4 Comparaison des résultats globaux — 15
    - 8.4.1 Comparaison globale des questionnaires par thème — 15
    - 8.4.2 Comparaison globale des questionnaires transversaux — 16
- 9. Pages d’informations — 16
  - 9.1 Page d’Accueil — 16
  - 9.2 FAQ — 16
  - 9.3 Page « À propos » — 17
  - 9.4 Page « Contact » — 17
  - 9.5 Page « Candidats » — 17
- 10 Gestion du premier et du second tour — 17
  - 10.1 Principe général — 17
  - 10.2 Comportement du second tour — 18
  - 10.3 Ancien utilisateur — 18
    - 10.3.1 Si un questionnaire a été validé au premier tour (Validé) — 18
    - 10.3.2 Questionnaire commencé mais non validé au premier tour (En cours ou A compléter) — 18
    - 10.3.3 Questionnaire jamais commencé (A Commencer) — 19
    - 10.3.4 Validation des questionnaires entre les deux tours — 19
  - 10.4 Nouvel utilisateur au second tour — 20
  - 10.5 Cas particuliers des questionnaires — 20
  - 10.6 Résultats au second tour — 21
  - 10.7 Comparaisons au second tour — 22
  - 10.8 Retour au premier tour — 22
  - 10.9 Navigation entre les tours — 22
- 11. Adaptation aux différents formats d’écran — 22
- 12 Contenu du site — 23
- 13 Autres projets similaires : — 24

## 1. Pitch :

Le site permet aux utilisateurs d’évaluer des propositions issues des programmes des candidats à l’élection présidentielle française de 2027, sans connaître l’identité du candidat à l’origine de chacune d’elles.

Une fois un questionnaire terminé, l’identité des candidats associés aux propositions évaluées est révélée. L’utilisateur accède alors à des graphiques lui permettant de visualiser et de comparer son degré d’affinité avec chacun des candidats.

Il peut également partager ses résultats et comparer son profil à celui d’autres utilisateurs de son choix. Le site fournit un moteur de comparaison qui permet aux utilisateurs de comparer leurs notes avec celles d’autres utilisateurs.

## 2. Overview du projet – Liste des features

Jeu-vote.fr est une application web de « civic tech » centrée sur les propositions des candidats à l’élection présidentielle française de 2027.

### 2.1 Gestion des utilisateurs :

L'inscription sur le site ne nécessite aucune adresse e-mail. L'utilisateur doit uniquement choisir un login et un mot de passe, puis compléter un CAPTCHA.

Chaque profil est accessible en lecture seule à partir de son login, ce qui permet de consulter les réponses et les résultats de son propriétaire. Pour accéder à son profil en lecture et en écriture, l'utilisateur doit s'authentifier avec son login et son mot de passe.

L'utilisateur peut à tout moment modifier son login ou son mot de passe, ainsi que supprimer définitivement son compte.

### 2.2 Liste des questionnaires :

#### 2.2.1 Classement par thème :

Les questionnaires sont organisés par thèmes généraux, eux-mêmes divisés en thèmes. Chaque thème correspond à un questionnaire consacré à un domaine précis.

Exemples de thèmes : la décentralisation, la réforme territoriale, …

Pour chaque questionnaire, l’utilisateur peut voir sa progression, exprimée par le nombre de propositions déjà notées sur le nombre total de propositions (par exemple : 26/47).

Pour chaque thème général, il peut également voir le nombre de questionnaires validés sur le nombre total de questionnaires que contient le thème général considéré (par exemple : 7/11).

Depuis cette page, l’utilisateur peut accéder aux résultats disponibles et lancer des comparaisons avec d’autres profils, à l’échelle d’un questionnaire, d’un thème général ou de l’ensemble des questionnaires.

### 2.3 Questionnaires :

Chaque questionnaire porte sur un thème précis et rassemble l’ensemble des propositions des candidats qui s’y rapportent. L’utilisateur évalue chaque proposition sur une échelle allant de -3 à +3.

L’utilisateur peut sauvegarder ses réponses à tout moment et reprendre ultérieurement un questionnaire commencé. Une sauvegarde automatique est également effectuée à intervalles réguliers.

Une fois toutes les propositions notées, l’utilisateur peut valider définitivement le questionnaire et accéder à ses résultats. Après validation, les réponses ne sont plus modifiables.

### 2.4 Résultats

Le site propose trois niveaux de résultats :

- les résultats d’un questionnaire,
- les résultats d’un thème général regroupant plusieurs questionnaires
- les résultats globaux, accessibles lorsque l’ensemble des questionnaires a été validé.
### 2.5 Comparateur :

Le site permet de comparer les résultats de deux utilisateurs à trois niveaux :

- pour un questionnaire donné,
- pour l’ensemble des questionnaires d’un thème général
- pour la totalité des questionnaires.
### 2.6 Accueil / Candidats / FAQ / À propos / Contact

La page d’accueil présente le fonctionnement général du site et fournit aux utilisateurs les informations essentielles pour commencer à utiliser le site.

La page « Candidats » présente les candidats à l’élection présidentielle française de 2027, accompagnés de leurs principales informations et du nombre de propositions recensées pour chaque thème général.

La FAQ répond aux principales questions que les utilisateurs pourraient se poser concernant le fonctionnement du site.

La page « À propos » présente les objectifs du projet, sa méthodologie et les sources utilisées pour recueillir les propositions des candidats. Elle présente également l’équipe derrière le site.

Enfin, un formulaire de contact permet aux utilisateurs de signaler des erreurs, de formuler des remarques ou de contacter l’équipe du site.

## 3. Structure permanente du site

### 3.1 Le header

L’en-tête du site contient un menu de navigation permanent donnant accès aux pages suivantes : Accueil, Profil, Questionnaires, FAQ, À propos et Contact.

Le menu « Profil » permet de créer un nouveau profil ou de modifier un profil existant, à condition d’être authentifié avec son login et son mot de passe. L’en-tête comporte également un formulaire de connexion avec deux champs, « Login » et « Mot de passe », ainsi qu’un bouton « Charger ».

Le menu « Questionnaires » propose deux entrées : « Questionnaires transversaux » et « Questionnaires par thème ».

L’état du profil actif doit être clairement identifiable : l’interface doit indiquer si le profil est consulté en lecture seule ou si l’utilisateur dispose également des droits de modification.

### 3.2 Le footer

Il apparait à la fin du scroll et ne contient que 2 informations : le nom du site et l’année de mise en ligne

## 4. Gestion du profil utilisateur

### 4.1 Création d’un profil

Lors de la création de son profil, l’utilisateur choisit un login unique et un mot de passe. Le login est public et permet à d’autres utilisateurs de consulter son profil en lecture seule. Le mot de passe reste privé et permet à son propriétaire d’accéder aux fonctionnalités de modification.

Aucune information personnelle, telle qu’une adresse e-mail, un numéro de téléphone ou une identité réelle, n’est demandée lors de l’inscription.

Aucun système de récupération de compte n’est prévu. En cas de perte de ses identifiants, l’utilisateur perd définitivement l’accès en écriture à son profil.

### 4.2 Chargement d’un profil

Un utilisateur peut charger un profil existant en renseignant son login, avec ou sans mot de passe. Les fonctionnalités accessibles dépendent du mode d’authentification.

**Accès en lecture seule :**

Lorsque l’utilisateur renseigne uniquement un login valide, le profil correspondant est chargé en lecture seule. Il peut consulter les résultats des questionnaires validés et accéder aux fonctionnalités de comparaison disponibles, mais ne peut ni répondre aux questionnaires ni modifier les réponses existantes.

**Accès en lecture et en écriture :**

Lorsque l’utilisateur renseigne un login valide accompagné du mot de passe correspondant, il dispose d’un accès complet à son profil. Il peut commencer de nouveaux questionnaires, reprendre ceux en cours et modifier ses réponses tant qu’ils n’ont pas été définitivement validés.

Une fois un questionnaire validé, les réponses deviennent définitives et ne peuvent plus être modifiées. Cette restriction doit être appliquée et garantie côté backend.

## 5. Liste des questionnaires

### 5.1 Questionnaires par thème

La page « Questionnaires par thème » est accessible depuis le menu « Questionnaires » de l’en-tête. Elle présente l’ensemble des questionnaires, regroupés par thèmes généraux.

Elle est organisée en trois niveaux : une vue d’ensemble de la progression de l’utilisateur, la liste des thèmes généraux et, pour chacun d’eux, les questionnaires correspondant aux différents thèmes.

#### 5.1.1 Vue d’ensemble

En haut de la page, une vue d’ensemble indique la progression globale de l’utilisateur, exprimée par le nombre de questionnaires validés sur le nombre total de questionnaires.

Deux boutons permettent d’accéder aux résultats globaux et à la comparaison globale avec un autre profil. Ces boutons ne deviennent actifs que lorsque l’utilisateur a validé l’ensemble des questionnaires.

#### 5.1.2 Thèmes généraux

Chaque thème général est présenté sous la forme d’un bloc dépliable dont l’en-tête affiche son nom et la progression de l’utilisateur, exprimée par le nombre de questionnaires validés sur le nombre total de questionnaires du thème général.

Deux boutons permettent d’accéder aux « Résultats du thème général » et à la « Comparaison du thème général ». Ces fonctionnalités ne deviennent accessibles que lorsque tous les questionnaires du thème général ont été définitivement validés.

#### 5.1.3 Questionnaires de chaque thème général

Chaque questionnaire peut présenter quatre statuts :

- À faire : l’utilisateur n’a pas encore commencé le questionnaire et aucune proposition n’a été notée. La jauge de progression est à 0 %, le compteur indique 0 proposition notée sur le nombre total de propositions et le bouton affiche « Démarrer ».
- En cours : le questionnaire n’a jamais été définitivement validé, mais au moins une de ses propositions a déjà été notée, directement ou depuis un autre questionnaire. La jauge et le compteur reflètent le nombre de propositions déjà notées. Le bouton affiche « Continuer ». Ce statut est conservé tant que le questionnaire n’a pas été validé, même lorsque toutes les propositions ont été notées.
- Terminé : toutes les propositions ont été notées et le questionnaire a été définitivement validé, manuellement ou automatiquement. La jauge affiche 100 %, le compteur indique N/N propositions et les boutons « Résultats » et « Comparer » deviennent accessibles.
- À compléter : le questionnaire a déjà été définitivement validé, mais une ou plusieurs propositions ont été ajoutées ou ont subi une modification de fond nécessitant une nouvelle évaluation. La jauge et le compteur sont actualisés pour tenir compte des propositions à noter ou à réévaluer. Le bouton « Compléter » permet à l’utilisateur de reprendre le questionnaire sans pouvoir modifier ses autres réponses. Les résultats et les comparaisons deviennent temporairement indisponibles jusqu’à sa nouvelle validation.
Une simple correction orthographique d’une proposition ne modifie pas le statut du questionnaire et ne nécessite pas de nouvelle évaluation.

Un questionnaire est automatiquement validé lorsque toutes les réponses aux propositions qu’il contient sont déjà verrouillées par la validation d’autres questionnaires. Dans ce cas, il passe directement au statut « Terminé », sans intervention de l’utilisateur.

En revanche, si toutes les propositions ont été notées mais qu’au moins une réponse reste modifiable, l’utilisateur doit valider explicitement le questionnaire.

### 5.2 Questionnaire transversaux

La page des questionnaire transversaux ont la même vue d’ensemble que les questionnaires par thème. En haut de la page, une vue d’ensemble indique donc la progression globale de l’utilisateur, exprimée par le nombre de questionnaires validés sur le nombre total de questionnaires.

Deux boutons permettent d’accéder aux résultats globaux et à la comparaison globale avec un autre profil. Ces boutons ne deviennent actifs que lorsque l’utilisateur a validé l’ensemble des questionnaires transversaux.

Le site propose également des questionnaires transversaux, conçus pour permettre aux utilisateurs d’obtenir rapidement des résultats en évaluant un nombre limité de propositions issues de différents thèmes.

Chaque questionnaire transversal est composé d’un échantillon de propositions identique pour tous les utilisateurs, afin de permettre la comparaison de leurs réponses sur une même base.

Chaque questionnaire dispose d’une jauge de progression et d’un compteur indiquant le nombre de propositions notées sur le nombre total de propositions.

Comme pour les questionnaires par thème, les boutons disponibles s’adaptent au statut du questionnaire : « Démarrer », « Continuer », « Compléter », « Résultats » et « Comparer ».

## 6. Questionnaire

### 6.1. Fonctionnement des questionnaires

Tous les questionnaires, qu’ils soient par thème ou transversaux, reposent sur les mêmes règles de notation, de sauvegarde et de validation.

#### 6.1.1 Évaluation des propositions

L’utilisateur évalue chaque proposition sur une échelle de valeurs entières allant de -3 à +3. L’identité du candidat associé reste masquée tant que le questionnaire n’a pas été définitivement validé.

Les réponses sont communes à tous les questionnaires contenant une même proposition. Lorsqu’une proposition est notée dans un questionnaire, sa note est automatiquement reportée dans tous les autres questionnaires où elle apparaît, y compris entre le premier et le second tour.

Une réponse reste modifiable jusqu’à son verrouillage définitif. La validation d’un questionnaire verrouille toutes les réponses aux propositions qu’il contient, quel que soit le questionnaire ou le tour dans lequel elles apparaissent.

#### 6.1.2 Retrait d’un candidat

Lorsqu’un candidat est retiré du site, il devient inactif, ainsi que l’ensemble des propositions qui lui sont associées. Ces données restent conservées dans la base de données, mais ne sont plus prises en compte dans les questionnaires, les résultats et les comparaisons.

Les questionnaires précédemment validés qui contenaient des propositions de ce candidat conservent leur statut « Terminé ». Les propositions du candidat retiré disparaissent des questionnaires et les compteurs de progression sont actualisés en conséquence.

Les réponses enregistrées aux propositions du candidat retiré sont conservées dans la base de données, mais deviennent inactives.

Si un questionnaire ne contient plus aucune proposition active après le retrait d’un candidat, il est considéré comme hors périmètre et ne compte plus dans les conditions de progression et de validation des résultats agrégés.

#### 6.1.3 Modification des propositions

**Modification de fond d’une proposition :**

Lorsqu’une proposition subit une modification de fond, les réponses précédemment attribuées à cette proposition doivent être réévaluées, y compris celles qui avaient été définitivement verrouillées.

Tous les questionnaires précédemment validés contenant cette proposition passent alors au statut « À compléter ». L’ancienne réponse est conservée dans la base de données, mais n’est plus considérée comme une évaluation valide de la proposition modifiée.

L’utilisateur peut attribuer une nouvelle note à la proposition concernée, sans pouvoir modifier ses réponses aux autres propositions déjà verrouillées.

Une fois toutes les propositions en attente de réévaluation notées, l’utilisateur peut cliquer sur le bouton « Valider ». Les nouvelles notes sont alors définitivement verrouillées et automatiquement reportées dans tous les questionnaires où figurent les propositions concernées.

Tous les questionnaires précédemment validés contenant ces propositions retrouvent automatiquement le statut « Terminé », à condition qu’aucune autre proposition ne reste à évaluer ou à réévaluer. Dans le cas contraire, ils conservent le statut « À compléter » jusqu’à ce que toutes les propositions concernées aient été évaluées et validées.

**Correction orthographique :**

Une simple correction orthographique ne nécessite aucune nouvelle évaluation et ne modifie pas le statut des questionnaires.

**Ajout d’une proposition :**

Lorsqu’une proposition est ajoutée, tous les questionnaires précédemment validés qui la contiennent passent au statut « À compléter ».

L’utilisateur doit évaluer cette nouvelle proposition, puis valider le questionnaire. La réponse est alors définitivement verrouillée dans tous les questionnaires où elle apparaît.

Les questionnaires précédemment validés retrouvent automatiquement le statut « Terminé » dès lors qu’aucune autre proposition ne reste à évaluer ou à réévaluer.

**Suppression d’une proposition :**

Lorsqu’une proposition est supprimée, elle disparaît des questionnaires concernés. Les compteurs de progression sont actualisés et les résultats et comparaisons sont recalculés à partir des propositions restantes, sans modifier le statut de validation des questionnaires.

#### 6.1.4 Validation des questionnaires

La validation d’un questionnaire peut être manuelle ou automatique.

**Validation manuelle :**

Lorsque l’utilisateur clique sur « Valider », deux situations sont possibles :

- Si toutes les propositions ont été notées, un message de félicitations confirme la validation et propose un bouton permettant d’accéder aux résultats.
- Si certaines propositions n’ont pas été notées, un message d’erreur apparaît et les propositions concernées sont signalées par un point d’exclamation.
La validation définitive verrouille toutes les réponses aux propositions du questionnaire, y compris lorsqu’elles apparaissent dans d’autres questionnaires.

**Validation automatique :**

Lorsqu’un questionnaire contient uniquement des propositions dont les réponses ont déjà été définitivement verrouillées par la validation d’autres questionnaires, il est automatiquement validé, sans intervention de l’utilisateur.

Cette règle s’applique aux questionnaires par thème et aux questionnaires transversaux, au premier comme au second tour.

Le simple fait d’avoir noté toutes les propositions ne suffit donc pas à déclencher une validation automatique : toutes les réponses doivent également être verrouillées.

#### 6.1.5 Accès aux résultats

Les résultats et les comparaisons deviennent accessibles uniquement après validation définitive, qu’elle soit manuelle ou automatique.

Ils sont calculés à chaque consultation à partir des propositions et des réponses disponibles dans le périmètre concerné. Si un questionnaire passe au statut « À compléter », ces fonctionnalités deviennent temporairement indisponibles jusqu’à sa nouvelle validation.

#### 6.1.6 Sauvegarde des réponses

L’utilisateur peut sauvegarder manuellement ses réponses à tout moment. Un message discret apparaît en bas à gauche de l’écran pour confirmer la réussite de la sauvegarde ou signaler son échec.

Une sauvegarde automatique est également prévue, avec une fréquence indicative d’une minute, à confirmer lors de l’implémentation. En cas d’échec, trois nouvelles tentatives sont effectuées avant d’attendre le prochain cycle de sauvegarde.

Une sauvegarde est également tentée lorsque l’utilisateur quitte le questionnaire, dans la mesure où les possibilités techniques le permettent. Si des réponses n’ont pas pu être sauvegardées avant la fermeture de la page, elles peuvent être perdues.

### 6.2. Questionnaires par thème

Chaque questionnaire par thème regroupe l’intégralité des propositions recensées des candidats portant sur un thème précis, comme l’agriculture, la santé ou la fiscalité.

Chaque proposition est associée à un seul candidat. Une même mesure peut donc apparaître plusieurs fois dans un questionnaire si elle est défendue par plusieurs candidats.

Les questionnaires sont organisés par thèmes généraux, chacun regroupant plusieurs thèmes. Chaque thème correspond à un questionnaire distinct.

### 6.3. Questionnaires transversaux

Les questionnaires transversaux permettent aux utilisateurs d’obtenir rapidement des résultats en évaluant un échantillon de propositions issues de différents thèmes généraux.

Le site proposera une dizaine de questionnaires transversaux constitués manuellement, afin de présenter des échantillons représentatifs des propositions recensées. Contrairement aux questionnaires par thème, ils n’ont pas vocation à couvrir l’intégralité des propositions de la base de données.

Chaque questionnaire transversal contient le même ensemble de propositions pour tous les utilisateurs, afin de permettre la comparaison de leurs réponses.

Le nombre de propositions par questionnaire n’est pas encore définitivement fixé. Il sera déterminé une fois la base de données constituée, en tenant compte notamment du nombre de propositions disponibles pour chaque candidat.

Les questionnaires transversaux du second tour seront reconstruits pour tenir compte des deux candidats finalistes, plutôt que simplement filtrés à partir des questionnaires du premier tour. La méthode exacte de constitution des échantillons reste à définir.

## 7. Pages de résultats

### 7.1 Les différents types de résultat

Les résultats sont présentés à l’aide de deux types de graphiques complémentaires et d’un classement des candidats favoris.

#### 7.1.1 Le diagramme en barres divergentes horizontales (DBDH)

Il représente le niveau d’affinité de l’utilisateur avec chaque candidat. Chaque barre correspond à un candidat et indique la moyenne des notes attribuées à ses propositions, sur une échelle allant de -3 à +3.

Pour un candidat donné, le score d’affinité est calculé selon la formule suivante :

Score d’affinité = Somme des notes attribuées aux propositions du candidat / Nombre de propositions du candidat dans le périmètre considéré.

Le nombre de propositions évaluées est affiché à côté de chaque barre, afin de permettre à l’utilisateur d’interpréter le score en tenant compte du volume de propositions concernées.

#### 7.1.2 Le diagramme en barres empilées normalisées horizontales (DBENH)

Il représente, pour chaque candidat, la répartition des propositions évaluées favorablement, défavorablement ou de manière neutre. Chaque barre est divisée en trois segments : « Accord », « Neutre / Indécis » et « Désaccord », dont les proportions sont exprimées en pourcentage.

Les notes strictement positives (+1, +2, +3) sont considérées comme favorables, les notes strictement négatives (-1, -2, -3) comme défavorables et la note 0 comme neutre. Le nombre de propositions correspondant à chaque catégorie est également indiqué.

Les deux graphiques sont systématiquement présentés ensemble afin de permettre une lecture complémentaire des résultats. Un score d’affinité de 0 peut ainsi correspondre à des réponses toutes neutres ou à une compensation entre des évaluations positives et négatives.

Dans les deux graphiques, les candidats sont affichés dans un ordre alphabétique fixe, indépendamment de leurs scores d’affinité.

#### 7.1.3 Le podium

Il présente les deux candidats avec lesquels l’utilisateur possède les niveaux d’affinité les plus élevés. Le classement est établi successivement selon trois critères :

1. Le score d’affinité, du plus élevé au plus faible.
2. En cas d’égalité, le nombre de propositions évaluées favorablement, du plus élevé au plus faible.
3. Si l’égalité persiste, le nombre total de propositions du candidat dans le périmètre considéré, du plus élevé au plus faible.
Lorsqu’un seul candidat dispose de propositions dans le périmètre considéré, la deuxième place du podium reste vide.

#### 7.1.4 Prise en compte des candidats actifs

Les graphiques et les classements sont calculés dynamiquement, à chaque consultation, à partir des propositions actives appartenant au périmètre considéré.

Lorsqu’un candidat devient inactif, il disparaît des graphiques et des podiums. Les résultats sont automatiquement recalculés sans ses propositions, sans que les questionnaires précédemment validés perdent leur statut.

Un candidat actif ne disposant d’aucune proposition dans le périmètre considéré reste distinct d’un candidat inactif : le premier peut apparaître sans score, tandis que le second n’est plus affiché.

### 7.2 Résultat d’un questionnaire

Les résultats d’un questionnaire deviennent accessibles uniquement lorsque toutes ses propositions ont été notées et que le questionnaire a été définitivement validé. La validation donne donc accès aux résultats qui révèleront l’identité du candidat à l’origine de chaque proposition et permet de comparer ses résultats avec ceux d’un autre utilisateur ayant validé le même questionnaire.

La page de résultats présente trois éléments :

- Un diagramme en barres divergentes horizontales (DBDH) représentant le niveau d’affinité de l’utilisateur avec chaque candidat, calculé à partir de la moyenne des notes attribuées à ses propositions.
- Un diagramme en barres empilées normalisées horizontales (DBENH) présentant, pour chaque candidat, la proportion de propositions évaluées favorablement, défavorablement ou de manière neutre.
- Le détail des réponses, présentant chaque proposition accompagnée du nom du candidat correspondant et d’une échelle horizontale allant de -3 à +3, sur laquelle un curseur indique la note attribuée par l’utilisateur.
Si un candidat ne possède aucune proposition dans le questionnaire, aucun score d’affinité ne lui est attribué. Son absence de propositions doit être clairement distinguée d'une évaluation neutre.

### 7.3 Résultat d’un thème général

Les résultats d’un thème général deviennent accessibles lorsque tous les questionnaires qui lui sont associés ont été définitivement validés. La comparaison avec un autre profil devient également disponible, à condition que celui-ci ait validé les mêmes questionnaires.

Les résultats sont calculés à partir de l’ensemble des propositions individuelles appartenant aux questionnaires du thème général. Le score d’affinité de chaque candidat correspond à la moyenne des notes attribuées à ses propositions, et non à la moyenne des scores obtenus dans les différents questionnaires.

La page présente trois éléments :

- Un diagramme en barres divergentes horizontales (DBDH) représentant le niveau d’affinité de l’utilisateur avec chaque candidat sur l’ensemble du thème général.
- Un diagramme en barres empilées normalisées horizontales (DBENH) présentant, pour chaque candidat, la proportion de propositions évaluées favorablement, défavorablement ou de manière neutre.
- Un podium pour chaque questionnaire du thème général, mettant en évidence les deux candidats avec lesquels l’utilisateur présente les niveaux d’affinité les plus élevés dans le questionnaire concerné.
### 7.4 Résultats globaux

Le site propose deux types de résultats globaux : ceux des questionnaires par thème et ceux des questionnaires transversaux.

Chaque type de résultat devient accessible lorsque l’utilisateur a définitivement validé l’ensemble des questionnaires correspondants. La comparaison globale avec un autre profil devient également disponible, à condition que celui-ci ait validé les mêmes questionnaires.

#### 7.4.1. Résultats globaux des questionnaires par thème

Les résultats sont calculés à partir de l’ensemble des propositions actives de la base de données, selon les mêmes règles d’agrégation que les résultats d’un thème général.

La page présente trois éléments :

- Un diagramme en barres divergentes horizontales (DBDH) représentant le niveau d’affinité global de l’utilisateur avec chaque candidat.
- Un diagramme en barres empilées normalisées horizontales (DBENH) présentant, pour chaque candidat, la proportion de propositions évaluées favorablement, défavorablement ou de manière neutre.
- Un podium pour chaque thème général, mettant en évidence les deux candidats avec lesquels l’utilisateur présente les niveaux d’affinité les plus élevés dans le thème général concerné.
#### 7.4.2. Résultats globaux des questionnaires transversaux

Les résultats sont calculés à partir de l’ensemble des propositions présentes dans les questionnaires transversaux, sans prendre en compte les propositions qui n’y figurent pas. Une proposition présente dans plusieurs questionnaires transversaux n’est comptabilisée qu’une seule fois dans les résultats agrégés.

La page reprend les mêmes éléments que celle des résultats globaux des questionnaires par thème : un DBDH, un DBENH et des podiums.

Les podiums présentent, pour chaque questionnaire transversal, les deux candidats avec lesquels l’utilisateur possède les niveaux d’affinité les plus élevés.

## 8 Le comparateur

### 8.1 Les différentes métriques de comparaison

Les pages de comparaison permettent de confronter les réponses de deux utilisateurs afin de mesurer leurs convergences et leurs divergences politiques. Pour lancer une comparaison, l’utilisateur doit renseigner le login d’un second profil. Les deux profils doivent avoir définitivement validé les questionnaires correspondant au périmètre de comparaison sélectionné.

La comparaison repose sur quatre indicateurs complémentaires.

#### 8.1.1 Le score d’affinité entre les deux profils

Il mesure leur degré de proximité en calculant la distance moyenne entre les notes attribuées aux mêmes propositions, puis en convertissant cette distance en pourcentage.

Pour chaque proposition, la distance correspond à la valeur absolue de la différence entre les notes des deux utilisateurs. Cette distance est comprise entre 0 et 6.

Le score d’affinité est calculé selon la formule suivante :

Score d’affinité (%) = 100 × (1 − Somme des distances / (6 × Nombre de propositions comparées))

Un score de 100 % signifie que les deux utilisateurs ont attribué exactement les mêmes notes à toutes les propositions. Un score de 0 % signifie qu’ils ont systématiquement attribué des notes opposées aux extrêmes de l’échelle (-3 et +3).

#### 8.1.2 Le taux de concordance

Il correspond au pourcentage de propositions pour lesquelles les deux utilisateurs expriment une opinion de même sens : deux notes positives, deux notes négatives ou deux notes neutres.

Taux de concordance (%) = 100 × Nombre de propositions concordantes / Nombre total de propositions comparées

#### 8.1.3 Le taux d’opposition

Il correspond au pourcentage de propositions pour lesquelles les deux utilisateurs expriment des opinions de sens opposés : l’un attribue une note positive et l’autre une note négative.

Taux d’opposition (%) = 100 × Nombre de propositions opposées / Nombre total de propositions comparées

#### 8.1.4 Le taux de neutralité divergente

Il correspond au pourcentage de propositions pour lesquelles un utilisateur attribue une note neutre (0) tandis que l’autre attribue une note positive ou négative.

Taux de neutralité divergente (%) = 100 × Nombre de propositions présentant une neutralité divergente / Nombre total de propositions comparées Pour ces trois derniers indicateurs, seule la catégorie de la réponse est prise en compte, indépendamment de son intensité. Ainsi, une opposition entre +1 et -1 est comptabilisée de la même manière qu’une opposition entre +3 et -3. De même, les situations 0/+1 et 0/+3 sont toutes deux considérées comme des cas de neutralité divergente.

Les trois taux sont complémentaires et leur somme est égale à 100 %.

#### 8.1.5 Les plus forts accords et désaccords

Pour chaque proposition, la distance entre les réponses des deux utilisateurs est calculée en prenant la valeur absolue de la différence entre leurs notes :

Distance = |Note du profil A − Note du profil B|

Cette distance est comprise entre 0 et 6.

Un encart présente les propositions sur lesquelles les deux utilisateurs ont les plus forts accords et désaccords :

- Plus forts accords : les propositions présentant les distances les plus faibles.
- Plus forts désaccords : les propositions présentant les distances les plus élevées.
Lorsque plusieurs propositions présentent la même distance minimale ou maximale, on en affiche seulement 3 de chaque.

#### 8.1.6 Les graphiques de comparaison

Deux graphiques permettent de comparer les affinités politiques des profils avec chaque candidat :

- Le diagramme en barres divergentes horizontales (DBDH) affiche, pour chaque candidat, les scores d’affinité des deux profils, accompagnés du nombre de propositions évaluées.
- Le diagramme en barres empilées normalisées horizontales (DBENH) présente, pour chaque candidat et pour chacun des deux profils, la répartition des réponses favorables, neutres et défavorables, avec les effectifs correspondants.
Dans les deux graphiques, les données du profil A sont affichées au-dessus de celles du profil B afin de faciliter leur comparaison.

Sur ordinateur comme sur mobile, les données des deux profils sont toujours présentées verticalement, l’une au-dessus de l’autre, et jamais côte à côte.

#### 8.1.7 Prise en compte des propositions actives

Toutes les comparaisons sont calculées dynamiquement à partir des propositions actives appartenant au périmètre considéré.

Lorsqu’un candidat est retiré, ses propositions sont exclues des calculs des scores d’affinité, des taux de concordance, d’opposition et de neutralité divergente, ainsi que de la recherche des plus forts accords et désaccords.

Les comparaisons précédemment accessibles restent disponibles dès lors que les questionnaires concernés conservent leur statut validé. Leurs résultats sont recalculés à chaque consultation.

### 8.2 Comparaison pour un questionnaire donnée

La comparaison d’un questionnaire devient accessible lorsque les deux profils ont définitivement validé celui-ci.

La page reprend les indicateurs et les graphiques présentés dans la section précédente, auxquels s’ajoute le détail des réponses aux différentes propositions du questionnaire.

Pour chaque proposition, une échelle horizontale allant de -3 à +3 affiche deux curseurs représentant les notes attribuées par les utilisateurs. Chaque curseur est identifié par une couleur distincte : bleu pour le profil A et violet pour le profil B.

Les deux profils sont également identifiés par leur login afin de permettre à l’utilisateur de distinguer facilement leurs réponses.

### 8.3 Comparaison des résultats d’un thème général

La comparaison des résultats d’un thème général devient accessible lorsque les deux profils ont définitivement validé l’ensemble des questionnaires qui lui sont associés.

Les indicateurs de comparaison sont calculés à partir de toutes les propositions appartenant aux questionnaires du thème général, selon les mêmes méthodes que pour la comparaison d’un questionnaire isolé.

La page présente les éléments suivants :

- Les indicateurs de comparaison : le score d’affinité entre les deux profils, le taux de concordance, le taux d’opposition et le taux de neutralité divergente.
- Un diagramme en barres divergentes horizontales (DBDH) comparant les scores d’affinité des deux profils avec chaque candidat.
- Un diagramme en barres empilées normalisées horizontales (DBENH) comparant, pour chaque candidat, la répartition des réponses favorables, neutres et défavorables des deux profils.
- Un podium pour chaque profil, présentant les deux candidats avec lesquels il possède le plus d’affinité sur l’ensemble du thème général.
Dans les deux graphiques, les données du profil A sont affichées au-dessus de celles du profil B, selon une présentation identique sur ordinateur et sur mobile.

Contrairement à la comparaison d’un questionnaire isolé, cette page ne présente pas le détail des réponses proposition par proposition.

### 8.4 Comparaison des résultats globaux

Le site propose deux types de comparaisons globales : celles des questionnaires par thème et celles des questionnaires transversaux.

Chaque comparaison devient accessible lorsque les deux profils ont définitivement validé l’ensemble des questionnaires correspondant au périmètre sélectionné.

#### 8.4.1 Comparaison globale des questionnaires par thème

Les indicateurs de comparaison sont calculés à partir de l’ensemble des propositions actives de la base de données, selon les mêmes méthodes que pour les autres niveaux de comparaison.

La page présente les éléments suivants :

- Les indicateurs de comparaison : le score d’affinité entre les deux profils, le taux de concordance, le taux d’opposition et le taux de neutralité divergente.
- Un diagramme en barres divergentes horizontales (DBDH) comparant les scores d’affinité globaux des deux profils avec chaque candidat.
- Un diagramme en barres empilées normalisées horizontales (DBENH) comparant, pour chaque candidat, la répartition des réponses favorables, neutres et défavorables des deux profils.
#### 8.4.2 Comparaison globale des questionnaires transversaux

Les indicateurs de comparaison sont calculés à partir de l’ensemble des propositions actives présentes dans les questionnaires transversaux, sans prendre en compte les propositions qui n’y figurent pas.

Lorsqu’une proposition apparaît dans plusieurs questionnaires transversaux, elle n’est comptabilisée qu’une seule fois.

La page reprend les mêmes indicateurs et graphiques que la comparaison globale des questionnaires par thème, mais uniquement à partir des propositions des questionnaires transversaux.

Dans les deux types de comparaisons globales, les données du profil A sont affichées au-dessus de celles du profil B, selon une présentation identique sur ordinateur et sur mobile.

## 9.Pages d’informations

### 9.1 Page d’Accueil

La page d’accueil doit permettre aux visiteurs de comprendre rapidement le concept du site et de découvrir ses principales fonctionnalités, en mettant particulièrement en avant le moteur de comparaison.

Elle présente le principe d’anonymisation des propositions politiques, leur évaluation par les utilisateurs, puis la révélation de l’identité des candidats et la consultation des résultats.

Une place centrale doit être accordée au moteur de comparaison, qui permet de confronter les réponses de deux utilisateurs afin de mesurer leurs convergences et leurs divergences politiques, aussi bien sur un questionnaire précis que sur un thème général ou sur l’ensemble des propositions.

La page permet également d’accéder directement aux questionnaires, de créer un profil ou de charger un profil existant.

**Texte de présentation principal :**

« Évaluez les propositions des candidats à l’élection présidentielle de 2027 sans connaître leur identité, découvrez vos affinités politiques et comparez vos réponses avec celles de vos proches grâce à notre comparateur. »

### 9.2 FAQ

La FAQ doit répondre aux principales interrogations des utilisateurs concernant le fonctionnement du site, l’évaluation des propositions et l’interprétation des résultats.

Elle doit notamment expliquer :

- Pourquoi l’identité des candidats est masquée pendant les questionnaires.
- Comment fonctionne l’échelle de notation de -3 à +3.
- Comment sont calculés et interprétés les scores d’affinité avec les candidats.
- Comment fonctionne le moteur de comparaison entre deux profils.
- Pourquoi certains candidats disposent de peu de propositions, voire d’aucune, dans certains questionnaires.
- Pourquoi la validation d’un questionnaire est définitive.
- Pourquoi un questionnaire précédemment validé peut repasser au statut « À compléter ».
- Quelles sont les conséquences de la perte du login ou du mot de passe, en l’absence de procédure de récupération de compte.
### 9.3 Page « À propos »

La page « À propos » présente les objectifs du projet, sa méthodologie et les principes qui encadrent son fonctionnement.

Elle détaille également les méthodes de calcul des scores d’affinité et des indicateurs utilisés par le moteur de comparaison.

Une attention particulière est accordée aux limites méthodologiques.

Enfin, la page présente d’autres projets proposant des fonctionnalités similaires ou poursuivant des objectifs comparables.

### 9.4 Page « Contact »

La page « Contact » présente brièvement l’équipe à l’origine du projet et met à disposition un formulaire permettant aux utilisateurs de la contacter.

Ce formulaire permet notamment de signaler une erreur dans les propositions ou dans le fonctionnement du site, de poser une question ou de transmettre une remarque.

### 9.5 Page « Candidats »

La page « Candidats » présente l’ensemble des candidats à l’élection présidentielle française de 2027.

Pour chaque candidat, elle affiche les informations suivantes :

- Son nom et son prénom.
- Sa date de naissance.
- Son parti politique.
- Le nombre de propositions recensées pour chaque thème général.
La page présente uniquement les candidats actifs. Lorsqu’un candidat est retiré, il disparaît de cette page, mais ses informations et ses propositions restent conservées dans la base de données.

## 10 Gestion du premier et du second tour

### 10.1 Principe général

Le site propose deux modes de fonctionnement correspondant aux deux tours de l’élection présidentielle française de 2027 : « Premier tour » et « Second tour ».

Le passage d’un mode à l’autre s’effectue à l’aide d’un bouton situé dans l’en-tête du site. Ce bouton reste désactivé tant que les résultats officiels du premier tour ne sont pas connus et que les deux candidats finalistes n’ont pas été identifiés.

L’activation du mode « Second tour » est effectuée manuellement par l’administrateur du site.

Une fois ce mode activé, le second tour devient le mode affiché par défaut. Le premier tour reste accessible et conserve ses fonctionnalités : les utilisateurs peuvent consulter leurs réponses et leurs résultats et terminer les questionnaires qu’ils n’ont pas fait ou terminés.

Chaque changement de mode redirige automatiquement l’utilisateur vers la page d’accueil du tour sélectionné.

### 10.2 Comportement du second tour

Au second tour, les questionnaires, les résultats et les comparaisons sont automatiquement adaptés pour ne prendre en compte que les propositions des deux candidats finalistes.

Les réponses aux propositions des deux candidats finalistes sont communes aux deux tours. Toute réponse donnée au premier tour est automatiquement reportée au second tour, et inversement. Cette synchronisation reste active après l’activation du second tour : l’utilisateur peut donc continuer à compléter ses questionnaires dans l’un ou l’autre mode sans avoir à évaluer plusieurs fois une même proposition.

Lorsqu’un questionnaire a été définitivement validé au premier tour, toutes les réponses qu’il contient sont verrouillées. Si la version du second tour ne contient que des propositions dont les réponses sont ainsi verrouillées, elle est automatiquement validée, sans intervention de l’utilisateur.

Cette règle s’applique également dans le sens inverse : un questionnaire du premier tour est automatiquement validé si toutes les réponses aux propositions qu’il contient ont déjà été verrouillées depuis d’autres questionnaires.

### 10.3 Ancien utilisateur

#### 10.3.1 Si un questionnaire a été validé au premier tour (Validé)

**Pour les questionnaires transversaux :**

Concernant les questionnaires transversaux, ils ne seront pas validés systématiquement puisqu’ils seront reconstruits pour le second tour. Ce sera du cas par cas en fonction des réponses que l’utilisateur aura donnée au premier tour.

**Pour les questionnaires pas thème :**

Lorsqu’un utilisateur a définitivement validé un questionnaire par thème au premier tour, toutes les réponses aux propositions qu’il contient sont verrouillées. Le questionnaire correspondant au second tour est donc automatiquement considéré comme validé, dès lors qu’il contient au moins une proposition de l’un des deux finalistes.

Les propositions des candidats éliminés sont retirées de la version du second tour, tandis que les réponses concernant les deux finalistes sont conservées.

Aucune nouvelle validation n’est nécessaire et l’utilisateur peut directement accéder aux résultats du questionnaire, recalculés à partir des seules propositions des deux finalistes.

Si le questionnaire ne contient aucune proposition des finalistes, il est considéré comme hors périmètre du second tour, conformément aux règles définies dans la section 10.5.

#### 10.3.2 Questionnaire commencé mais non validé au premier tour (En cours ou A compléter)

**Questionnaire en cours au premier tour**

Lorsqu’un utilisateur a commencé un questionnaire au premier tour sans l’avoir définitivement validé, les réponses déjà données aux propositions des deux finalistes sont conservées.

Les propositions des candidats éliminés ne sont plus affichées dans la version du second tour. L’utilisateur peut alors reprendre son questionnaire et évaluer les propositions restantes auxquelles il n’a pas encore répondu.

Une fois toutes les propositions notées, il peut valider définitivement le questionnaire. Si toutes les réponses sont déjà verrouillées par la validation d’autres questionnaires, la validation est automatique.

**Questionnaire « À compléter » au premier tour**

Lorsqu’un questionnaire précédemment validé passe au statut « À compléter » à la suite de l’ajout ou de la modification de fond d’une proposition, seules les propositions concernées doivent être évaluées ou réévaluées.

Au second tour, seules les propositions des deux finalistes sont prises en compte. Si aucune des propositions nécessitant une nouvelle évaluation ne concerne les finalistes, le questionnaire du second tour conserve son statut « Terminé ».

Dans le cas contraire, il passe au statut « À compléter » jusqu’à ce que les propositions concernées aient été réévaluées et que le questionnaire soit de nouveau validé, manuellement ou automatiquement.

#### 10.3.3 Questionnaire jamais commencé (A Commencer)

Lorsqu’un utilisateur n’a jamais commencé un questionnaire au premier tour, il accède directement à sa version du second tour, qui contient uniquement les propositions des deux candidats finalistes.

Il peut alors évaluer ces propositions et valider définitivement le questionnaire selon les règles habituelles du second tour.

#### 10.3.4 Validation des questionnaires entre les deux tours

Les réponses aux propositions des deux candidats finalistes sont communes aux deux tours. Lorsqu’une proposition est évaluée dans un mode, sa note est automatiquement reportée dans l’autre.

La validation définitive d’un questionnaire verrouille toutes les réponses aux propositions qu’il contient, quel que soit le tour dans lequel elles apparaissent. Ces réponses ne peuvent donc plus être modifiées dans l’autre mode, même si le questionnaire correspondant n’a pas encore été validé.

**Questionnaires par thème**

Lorsqu’un questionnaire par thème est définitivement validé au premier tour, sa version du second tour est automatiquement validée, dès lors qu’elle contient au moins une proposition de l’un des deux finalistes.

En revanche, la validation d’un questionnaire au second tour n’entraîne pas nécessairement celle de sa version du premier tour, puisque des propositions des candidats éliminés peuvent encore nécessiter une évaluation.

**Questionnaires transversaux**

Les questionnaires transversaux du second tour sont reconstruits à partir des propositions des deux finalistes. Ils disposent donc de leur propre statut de validation, indépendamment des questionnaires transversaux du premier tour.

Les réponses déjà enregistrées sont automatiquement récupérées. Lorsqu’un questionnaire transversal du second tour contient uniquement des propositions dont les réponses sont déjà verrouillées, il est automatiquement validé.

**Règle générale de validation automatique**

Quel que soit le type de questionnaire ou le tour considéré, un questionnaire est automatiquement validé dès lors que toutes les réponses aux propositions qu’il contient ont été définitivement verrouillées par la validation d’autres questionnaires.

Dans le cas contraire, il conserve son statut jusqu’à sa validation selon les règles habituelles.

### 10.4 Nouvel utilisateur au second tour

Après l’activation du second tour, celui-ci devient le mode affiché par défaut pour tous les utilisateurs, qu’ils disposent déjà d’un profil ou qu’ils viennent d’en créer un.

Un nouvel utilisateur accède donc initialement aux questionnaires du second tour, qui contiennent uniquement les propositions des deux candidats finalistes. Il peut les remplir et les valider selon les règles habituelles.

Il conserve néanmoins la possibilité de passer au mode « Premier tour » pour évaluer les propositions de l’ensemble des candidats et accéder aux résultats et aux comparaisons correspondants.

Les réponses aux propositions communes aux deux tours sont automatiquement synchronisées. Leur verrouillage et la validation automatique des questionnaires suivent les règles définies dans les sections précédentes.

### 10.5 Cas particuliers des questionnaires

Le fonctionnement des questionnaires au second tour dépend du nombre de candidats finalistes disposant de propositions dans le thème concerné. Trois situations sont possibles :

**Les deux finalistes disposent de propositions**

Le questionnaire fonctionne normalement. L’utilisateur peut évaluer les propositions des deux candidats et accéder aux résultats après validation définitive.

**Un seul finaliste dispose de propositions**

Le questionnaire reste accessible et peut être validé normalement. Les résultats affichent les deux finalistes, mais aucun score d’affinité n’est calculé pour le candidat ne disposant d’aucune proposition.

**Aucun des deux finalistes ne dispose de propositions**

Le questionnaire reste visible dans la liste, mais il est désactivé et ne peut pas être rempli. Il est exclu du calcul de la progression et des conditions de validation du thème général et des résultats globaux.

Un message explicatif apparaît sous son intitulé : « Aucun des candidats présents au second tour ne possède de proposition dans ce questionnaire. »

Cette règle s’applique également aux questionnaires validés au premier tour qui ne contiennent plus aucune proposition au second tour. Ils sont considérés comme hors périmètre et non comme des questionnaires validés.

**Cas particulier des questionnaires transversaux**

Au second tour, les questionnaires transversaux sont reconstruits à partir des propositions des deux candidats finalistes, plutôt que simplement filtrés à partir des questionnaires du premier tour.

Cette reconstruction permet d’éviter que certains questionnaires ne comportent que très peu de propositions, voire aucune, ou qu’ils soient excessivement déséquilibrés en faveur de l’un des deux candidats.

Les nouveaux échantillons sont identiques pour tous les utilisateurs afin de permettre la comparaison de leurs résultats.

Les réponses déjà attribuées aux propositions présentes dans ces nouveaux questionnaires sont automatiquement récupérées, conformément au principe de synchronisation des réponses.

La méthode exacte de constitution des échantillons sera définie une fois la base de données remplie, en fonction du nombre et de la répartition des propositions disponibles pour les deux finalistes.

### 10.6 Résultats au second tour

Au second tour, les résultats sont recalculés en prenant uniquement en compte les propositions des deux candidats finalistes. Les propositions des candidats éliminés sont exclues des calculs, mais les réponses correspondantes restent conservées et consultables dans les résultats du premier tour.

**Résultats d’un questionnaire**

Les scores d’affinité et les graphiques sont recalculés à partir des seules propositions des deux finalistes, selon les mêmes méthodes qu’au premier tour.

**Résultats d’un thème général**

Les résultats d’un thème général sont calculés à partir des questionnaires qui contiennent au moins une proposition de l’un des deux finalistes. Les questionnaires devenus vides au second tour sont exclus des calculs.

**Résultats globaux**

Au second tour, les résultats globaux sont calculés selon deux périmètres distincts :

- Résultats globaux des questionnaires par thème : ils sont calculés à partir de l’ensemble des propositions actives des deux candidats finalistes.
- Résultats globaux des questionnaires transversaux : ils sont calculés uniquement à partir des propositions actives présentes dans les questionnaires transversaux du second tour. Chaque proposition n’est comptabilisée qu’une seule fois, même si elle apparaît dans plusieurs questionnaires.
Dans les deux cas, les candidats éliminés n’apparaissent plus dans les graphiques ni dans les classements du second tour.

**Validation et progression au second tour**

Pour accéder aux résultats d’un thème général, l’utilisateur doit avoir définitivement validé tous les questionnaires de ce thème contenant au moins une proposition de l’un des deux finalistes.

De même, les résultats globaux deviennent accessibles lorsque tous les questionnaires pertinents du second tour ont été validés.

Dans les deux cas, les questionnaires ne contenant aucune proposition des finalistes sont considérés comme hors périmètre. Ils ne sont pris en compte ni dans le calcul de la progression ni dans les conditions de validation.

### 10.7 Comparaisons au second tour

Au second tour, les comparaisons entre deux profils sont possibles dès lors que les deux utilisateurs ont définitivement validé les questionnaires correspondant au périmètre de comparaison sélectionné.

Les réponses peuvent avoir été données au premier ou au second tour : elles sont conservées et réutilisées sans distinction.

Les indicateurs de comparaison et les graphiques sont recalculés uniquement à partir des propositions des deux candidats finalistes, selon les mêmes méthodes qu’au premier tour. Les réponses concernant les candidats éliminés ne sont pas prises en compte.

### 10.8 Retour au premier tour

Après l’activation du second tour, le mode « Premier tour » reste entièrement accessible depuis l’en- tête du site. Les utilisateurs conservent la possibilité de commencer, compléter et valider les questionnaires du premier tour, ainsi que de consulter leurs résultats et d’effectuer des comparaisons.

Les réponses aux propositions des deux finalistes sont automatiquement synchronisées entre les deux tours. Une réponse donnée dans un mode apparaît donc également dans l’autre.

La validation définitive d’un questionnaire verrouille toutes les réponses aux propositions qu’il contient, dans les deux modes. Ainsi, lorsqu’un questionnaire est validé au second tour, les réponses correspondantes ne peuvent plus être modifiées au premier tour, même si le questionnaire de ce dernier n’a pas encore été validé.

Les questionnaires des deux tours conservent néanmoins leurs propres conditions de validation, puisqu’ils ne contiennent pas nécessairement les mêmes propositions.

### 10.9 Navigation entre les tours

Un bouton situé dans l’en-tête du site permet de passer du mode « Premier tour » au mode « Second tour », et inversement. Ce bouton devient actif uniquement après l’annonce des résultats officiels du premier tour et l’activation du second tour par l’administrateur.

Une fois le second tour activé, celui-ci devient le mode affiché par défaut pour tous les utilisateurs.

Chaque changement de mode redirige automatiquement l’utilisateur vers la page d’accueil du tour sélectionné, sans conserver la page précédemment consultée ni la position de défilement.

La couleur de l’en-tête est différente pour chaque mode afin que l’utilisateur puisse identifier facilement le tour de l’élection présidentielle dans lequel il se trouve.

## 11. Adaptation aux différents formats d’écran

Le site doit être conçu selon une approche mobile-first, afin de garantir une utilisation optimale sur smartphone, tablette et ordinateur.

L’interface doit s’adapter automatiquement à la taille de l’écran. Le menu de navigation, affiché horizontalement sur ordinateur, est remplacé par un menu burger sur mobile.

Les informations relatives aux deux profils comparés doivent toujours être présentées verticalement, l’une au-dessus de l’autre, quelle que soit la taille de l’écran.

Une attention particulière doit être portée à la lisibilité des graphiques. Ceux-ci doivent rester compréhensibles sur mobile, sans nécessiter de zoom ni de défilement horizontal. Les libellés doivent rester lisibles et aucune information essentielle ne doit être accessible uniquement au survol de la souris.

De manière générale, les tableaux trop larges doivent être évités au profit de présentations verticales adaptées aux petits écrans.

## 12 Contenu du site

Les questionnaires sont répartis en 10 thèmes généraux, eux-mêmes subdivisés en 33 thèmes. Chaque thème correspond à un questionnaire.

| Thèmes généraux | Thèmes |
| --- | --- |
| 1. Finances publiques | Économies & hausses de dépenses |
|  | Dette & déficit |
|  | Fiscalité |
|  | Secteur bancaire & finance |
| 2. Intérieur & Justice | Immigration |
|  | Justice & pénitentiaire |
|  | Lutte contre le narcotrafic |
|  | Sécurité intérieure |
|  | Outre-mer |
| 3. Social & Solidarité | Allocations & prestations sociales |
|  | Santé |
|  | Culture |
|  | Logement |
|  | Transports |
| 4. Travail & Retraites | Emploi & travail |
|  | Système de retraite |
|  | Industrie & relocalisation |
|  | Entreprises |
| 5. Environnement | Énergie |
|  | Écologie |
|  | Agriculture |
| 6. Europe & international | Affaires étrangères & diplomatie |
|  | Union Européenne |
| 7. Gouvernance & République | Démocratie, élections & pouvoir législatif |
|  | Égalité, laïcité & droits individuels |
|  | Numérique & IA |
|  | Recherche & science |
| 8. Réformes de l'État | Administrations & opérateurs |
|  | Fonction publique |
| 9. Éducation & Jeunesse | Services de la petite enfance |
|  | Éducation nationale |
|  | Enseignement supérieur |
| 10. Défense | Défense & armées |

## 13 Autres projets similaires :

Cette section recense différents projets proposant des outils de comparaison de programmes politiques, d'analyse des propositions électorales ou d'aide au positionnement politique.

**Concept identique :**

- https://www.candidator.fr/
- https://programme-candidat.fr/
- https://comparateur.nosservicespublics.fr/
- https://monvote2027.fr/
- https://www.ifrap.org/comparateurs/presidentielles-2027
**Concept similaire :**

- https://kinoument.fr/
- https://dbhq.github.io/
**A l’étranger :**

- https://www.smartvote.ch/
- https://ici.radio-canada.ca/info/2026/elections-quebec/comparateur-programmes-plateformes-partis/

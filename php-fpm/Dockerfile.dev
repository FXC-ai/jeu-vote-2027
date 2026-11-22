FROM node:24-trixie-slim AS node

FROM php:8.4-fpm-trixie

ARG WWW_USER=1000
ARG WWW_GROUP=1000

WORKDIR /app

RUN apt-get update \
    && apt-get install -y \
        libpq-dev \
        git \
        unzip \
    && docker-php-ext-install pdo pdo_pgsql \
    && rm -rf /var/lib/apt/lists/*

# Installer Node et NPM depuis l’image officielle Node
COPY --from=node /usr/local/bin/node /usr/local/bin/node
COPY --from=node /usr/local/lib/node_modules /usr/local/lib/node_modules

RUN ln -s /usr/local/lib/node_modules/npm/bin/npm-cli.js /usr/local/bin/npm \
    && ln -s /usr/local/lib/node_modules/npm/bin/npx-cli.js /usr/local/bin/npx


# Installer l'extension pour postgres
# COPY --from=mlocati/php-extension-installer /usr/bin/install-php-extensions /usr/local/bin/

# RUN install-php-extensions pdo_pgsql


# Installer Composer depuis son image officielle
COPY --from=composer:2 /usr/bin/composer /usr/local/bin/composer

# Installer les scripts de démarrage hors de /app, qui est remplacé par un
# volume en développement.
COPY --chmod=755 entrypoint-dev.sh /usr/local/bin/entrypoint-dev.sh
COPY --chmod=755 entrypoint.sh /usr/local/bin/entrypoint.sh

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


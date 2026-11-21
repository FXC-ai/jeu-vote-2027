#!/bin/sh
set -eu

rm -f /tmp/jeu-vote-ready

echo "Instalation des dépendances PHP..."
composer install

echo "Instalation des dépendances JS..."
npm ci

echo "Running migrations..."
php artisan migrate --force

echo "Build frontend..."
npm run build

echo "Starting php-fpm..."
touch /tmp/jeu-vote-ready
exec php-fpm -F
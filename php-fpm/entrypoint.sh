#!/bin/sh
set -eu

rm -f /tmp/jeu-vote-ready

echo "Running migrations..."
php artisan migrate --force

echo "Starting php-fpm..."
touch /tmp/jeu-vote-ready
exec php-fpm -F
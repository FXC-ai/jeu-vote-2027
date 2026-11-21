#!/bin/sh
set -eu

rm -f /tmp/jeu-vote-ready

echo "Running migrations..."
php artisan migrate --force

echo "Starting Vite..."
npm run dev -- --host 0.0.0.0 &

echo "Starting php-fpm..."
touch /tmp/jeu-vote-ready
exec php-fpm -F

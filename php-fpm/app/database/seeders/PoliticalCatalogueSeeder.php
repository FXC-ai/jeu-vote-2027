<?php

namespace Database\Seeders;

use App\Models\GeneralTheme;
use App\Models\Theme;
use Illuminate\Database\Seeder;
use Illuminate\Support\Str;

class PoliticalCatalogueSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $catalogue = [
            'Finances publiques' => [
                'Économies & hausses de dépenses', 'Dette & déficit', 'Fiscalité', 'Secteur bancaire & finance',
            ],
            'Intérieur & Justice' => [
                'Immigration', 'Justice & pénitentiaire', 'Lutte contre le narcotrafic', 'Sécurité intérieure', 'Outre-mer',
            ],
            'Social & Solidarité' => [
                'Allocations & prestations sociales', 'Santé', 'Culture', 'Logement', 'Transports',
            ],
            'Travail & Retraites' => [
                'Emploi & travail', 'Système de retraite', 'Industrie & relocalisation', 'Entreprises',
            ],
            'Environnement' => ['Énergie', 'Écologie', 'Agriculture'],
            'Europe & international' => ['Affaires étrangères & diplomatie', 'Union Européenne'],
            'Gouvernance & République' => [
                'Démocratie, élections & pouvoir législatif', 'Égalité, laïcité & droits individuels',
                'Numérique & IA', 'Recherche & science',
            ],
            'Réformes de l’État' => ['Administrations & opérateurs', 'Fonction publique'],
            'Éducation & Jeunesse' => ['Services de la petite enfance', 'Éducation nationale', 'Enseignement supérieur'],
            'Défense' => ['Défense & armées'],
        ];

        $generalThemeSortOrder = 0;

        foreach ($catalogue as $generalThemeName => $themes) {
            $generalThemeSortOrder++;
            $generalTheme = GeneralTheme::query()->updateOrCreate(
                ['slug' => Str::slug($generalThemeName)],
                ['name' => $generalThemeName, 'sort_order' => $generalThemeSortOrder, 'is_active' => true],
            );

            foreach ($themes as $themeOrder => $themeName) {
                Theme::query()->updateOrCreate(
                    ['slug' => Str::slug($themeName)],
                    [
                        'general_theme_id' => $generalTheme->id,
                        'name' => $themeName,
                        'sort_order' => $themeOrder + 1,
                        'is_active' => true,
                    ],
                );
            }
        }
    }
}

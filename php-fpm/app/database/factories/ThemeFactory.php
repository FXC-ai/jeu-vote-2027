<?php

namespace Database\Factories;

use App\Models\GeneralTheme;
use App\Models\Theme;
use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends Factory<Theme>
 */
class ThemeFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        return [
            'general_theme_id' => GeneralTheme::factory(),
            'name' => fake()->unique()->words(2, true),
            'slug' => fake()->unique()->slug(),
            'sort_order' => fake()->unique()->numberBetween(1, 1000),
            'is_active' => true,
        ];
    }
}

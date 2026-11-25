<?php

namespace Database\Factories;

use App\Models\GeneralTheme;
use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends Factory<GeneralTheme>
 */
class GeneralThemeFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        return [
            'name' => fake()->unique()->words(2, true),
            'slug' => fake()->unique()->slug(),
            'sort_order' => fake()->unique()->numberBetween(1, 1000),
            'is_active' => true,
        ];
    }
}

<?php

namespace Database\Factories;

use App\Models\Candidate;
use App\Models\Proposal;
use App\Models\Theme;
use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends Factory<Proposal>
 */
class ProposalFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        return [
            'candidate_id' => Candidate::factory(),
            'theme_id' => Theme::factory(),
            'text' => fake()->sentence(),
            'source_title' => fake()->sentence(3),
            'source_url' => fake()->url(),
            'is_active' => true,
        ];
    }

    public function inactive(): static
    {
        return $this->state(fn (): array => ['is_active' => false]);
    }
}

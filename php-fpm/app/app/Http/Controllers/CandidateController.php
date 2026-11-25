<?php

namespace App\Http\Controllers;

use App\Models\Candidate;
use Inertia\Inertia;
use Inertia\Response;

class CandidateController extends Controller
{
    public function index(): Response
    {
        $candidates = Candidate::query()
            ->where('is_active', true)
            ->with([
                'party',
                'activeProposals.themes' => fn ($query) => $query
                    ->where('themes.is_active', true)
                    ->with('generalTheme'),
            ])
            ->orderBy('last_name')
            ->orderBy('first_name')
            ->get()
            ->map(function (Candidate $candidate): array {
                $proposalCountsByGeneralTheme = [];

                foreach ($candidate->activeProposals as $proposal) {
                    foreach ($proposal->themes as $theme) {
                        $generalTheme = $theme->generalTheme;
                        $proposalCountsByGeneralTheme[$generalTheme->id] ??= [
                            'name' => $generalTheme->name,
                            'sortOrder' => $generalTheme->sort_order,
                            'proposalIds' => [],
                        ];
                        $proposalCountsByGeneralTheme[$generalTheme->id]['proposalIds'][$proposal->id] = true;
                    }
                }

                uasort($proposalCountsByGeneralTheme, fn (array $first, array $second): int => $first['sortOrder'] <=> $second['sortOrder']);

                return [
                    'name' => $candidate->first_name.' '.$candidate->last_name,
                    'birthDate' => $candidate->birth_date?->toDateString(),
                    'party' => $candidate->party->name,
                    'proposalCountsByGeneralTheme' => array_values(array_map(
                        fn (array $generalTheme): array => [
                            'name' => $generalTheme['name'],
                            'count' => count($generalTheme['proposalIds']),
                        ],
                        $proposalCountsByGeneralTheme,
                    )),
                ];
            });

        return Inertia::render('public/candidates', [
            'candidates' => $candidates,
        ]);
    }
}

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
                'activeProposals' => fn ($query) => $query
                    ->whereHas('theme', fn ($themeQuery) => $themeQuery
                        ->where('themes.is_active', true)
                        ->whereHas('generalTheme', fn ($generalThemeQuery) => $generalThemeQuery
                            ->where('is_active', true)))
                    ->with('theme.generalTheme'),
            ])
            ->orderBy('last_name')
            ->orderBy('first_name')
            ->get()
            ->map(function (Candidate $candidate): array {
                $proposalCountsByGeneralTheme = [];

                foreach ($candidate->activeProposals as $proposal) {
                    $generalTheme = $proposal->theme?->generalTheme;

                    if ($generalTheme === null) {
                        continue;
                    }

                    $proposalCountsByGeneralTheme[$generalTheme->id] ??= [
                        'name' => $generalTheme->name,
                        'sortOrder' => $generalTheme->sort_order,
                        'count' => 0,
                    ];
                    $proposalCountsByGeneralTheme[$generalTheme->id]['count']++;
                }

                uasort($proposalCountsByGeneralTheme, fn (array $first, array $second): int => $first['sortOrder'] <=> $second['sortOrder']);

                return [
                    'name' => $candidate->first_name.' '.$candidate->last_name,
                    'birthDate' => $candidate->birth_date?->toDateString(),
                    'party' => $candidate->party->name,
                    'proposalCountsByGeneralTheme' => array_values(array_map(
                        fn (array $generalTheme): array => [
                            'name' => $generalTheme['name'],
                            'count' => $generalTheme['count'],
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

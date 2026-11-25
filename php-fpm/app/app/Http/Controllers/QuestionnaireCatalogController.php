<?php

namespace App\Http\Controllers;

use App\Models\GeneralTheme;
use App\Models\Theme;
use Inertia\Inertia;
use Inertia\Response;

class QuestionnaireCatalogController extends Controller
{
    /**
     * Handle the incoming request.
     */
    public function __invoke(): Response
    {
        $generalThemes = GeneralTheme::query()
            ->where('is_active', true)
            ->with([
                'activeThemes' => fn ($query) => $query
                    ->withCount('activeProposals')
                    ->orderBy('sort_order'),
            ])
            ->orderBy('sort_order')
            ->get()
            ->map(fn (GeneralTheme $generalTheme): array => [
                'name' => $generalTheme->name,
                'questionnaires' => $generalTheme->activeThemes
                    ->map(fn (Theme $theme): array => [
                        'name' => $theme->name,
                        'activeProposalCount' => $theme->active_proposals_count,
                    ])
                    ->values(),
            ]);

        return Inertia::render('public/questionnaires', [
            'generalThemes' => $generalThemes,
        ]);
    }
}

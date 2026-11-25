<?php

use App\Mail\ContactMessageMail;
use App\Models\Candidate;
use App\Models\GeneralTheme;
use App\Models\Party;
use App\Models\Proposal;
use App\Models\Theme;
use Database\Seeders\PoliticalCatalogueSeeder;
use Illuminate\Support\Facades\Mail;

it('shows active candidates with their party and active proposal counts by general theme', function () {
    $party = Party::factory()->create(['name' => 'Parti exemple']);
    $finance = GeneralTheme::factory()->create(['name' => 'Finances publiques']);
    $fiscality = Theme::factory()->for($finance)->create(['name' => 'Fiscalité', 'sort_order' => 1]);
    $candidate = Candidate::factory()->for($party)->create([
        'first_name' => 'Camille',
        'last_name' => 'Exemple',
        'is_active' => true,
    ]);
    $inactiveCandidate = Candidate::factory()->for($party)->inactive()->create([
        'first_name' => 'Alex',
        'last_name' => 'Retiré',
    ]);
    $activeProposal = Proposal::factory()->for($candidate)->for($fiscality)->create();
    Proposal::factory()->for($candidate)->for($fiscality)->inactive()->create();
    Proposal::factory()->for($inactiveCandidate)->for($fiscality)->create();

    $this->get(route('candidates.index'))
        ->assertOk()
        ->assertInertia(fn ($page) => $page
            ->component('public/candidates')
            ->has('candidates', 1)
            ->where('candidates.0.name', 'Camille Exemple')
            ->where('candidates.0.party', 'Parti exemple')
            ->where('candidates.0.proposalCountsByGeneralTheme.0.name', 'Finances publiques')
            ->where('candidates.0.proposalCountsByGeneralTheme.0.count', 1)
        );
});

it('lists active themes with active proposal counts without exposing proposals or their sources', function () {
    $generalTheme = GeneralTheme::factory()->create(['name' => 'Finances publiques']);
    $theme = Theme::factory()->for($generalTheme)->create(['name' => 'Fiscalité', 'sort_order' => 1]);
    $proposal = Proposal::factory()->for($theme)->create([
        'text' => 'Texte copié exactement depuis la source.',
        'source_url' => 'https://example.test/source-exacte',
        'is_active' => true,
    ]);
    $this->assertDatabaseHas('proposals', [
        'id' => $proposal->id,
        'theme_id' => $theme->id,
        'text' => 'Texte copié exactement depuis la source.',
        'source_url' => 'https://example.test/source-exacte',
    ]);
    $themeWithoutActiveProposals = Theme::factory()->for($generalTheme)->create([
        'name' => 'Questionnaire vide',
        'sort_order' => 2,
    ]);
    Proposal::factory()->for($themeWithoutActiveProposals)->inactive()->create();

    $this->get(route('questionnaires.index'))
        ->assertOk()
        ->assertInertia(fn ($page) => $page
            ->component('public/questionnaires')
            ->has('generalThemes', 1)
            ->where('generalThemes.0.name', 'Finances publiques')
            ->has('generalThemes.0.questionnaires', 2)
            ->where('generalThemes.0.questionnaires.0.name', 'Fiscalité')
            ->where('generalThemes.0.questionnaires.0.activeProposalCount', 1)
            ->where('generalThemes.0.questionnaires.1.name', 'Questionnaire vide')
            ->where('generalThemes.0.questionnaires.1.activeProposalCount', 0)
            ->missing('generalThemes.0.questionnaires.0.proposals')
        );
});

it('renders the public information pages through their Inertia components', function (string $path, string $component) {
    $this->get($path)
        ->assertOk()
        ->assertInertia(fn ($page) => $page->component($component));
})->with([
    'home' => ['/', 'public/home'],
    'FAQ' => ['/faq', 'public/faq'],
    'methodology' => ['/about', 'public/about'],
    'contact' => ['/contact', 'public/contact'],
]);

it('seeds the ten general themes and thirty-three questionnaires from the specification', function () {
    $this->seed(PoliticalCatalogueSeeder::class);

    $this->assertDatabaseCount('general_themes', 10);
    $this->assertDatabaseCount('themes', 33);
});

it('sends a contact message to the configured recipient', function () {
    Mail::fake();
    config()->set('contact.recipient', 'equipe@example.test');

    $this->post(route('contact.store'), [
        'name' => 'Camille',
        'email' => 'camille@example.test',
        'subject' => 'Une question',
        'message' => 'Bonjour, voici mon message.',
    ])->assertRedirect(route('contact.index'))
        ->assertSessionHas('status', 'Votre message a été envoyé. Merci.');

    Mail::assertSent(ContactMessageMail::class, fn (ContactMessageMail $mail): bool => $mail->hasTo('equipe@example.test')
        && $mail->email === 'camille@example.test'
        && $mail->body === 'Bonjour, voici mon message.');
});

it('rejects invalid contact details without sending an email', function () {
    Mail::fake();

    $this->from(route('contact.index'))
        ->post(route('contact.store'), [
            'name' => '',
            'email' => 'not-an-email',
            'subject' => '',
            'message' => '',
        ])
        ->assertSessionHasErrors(['name', 'email', 'subject', 'message']);

    Mail::assertNothingSent();
});

<?php

use App\Http\Controllers\AboutController;
use App\Http\Controllers\CandidateController;
use App\Http\Controllers\ContactController;
use App\Http\Controllers\FaqController;
use App\Http\Controllers\PublicHomeController;
use App\Http\Controllers\QuestionnaireCatalogController;
use Illuminate\Support\Facades\Route;

Route::get('/', PublicHomeController::class)->name('home');
Route::get('/candidates', [CandidateController::class, 'index'])->name('candidates.index');
Route::get('/questionnaires', QuestionnaireCatalogController::class)->name('questionnaires.index');
Route::get('/faq', FaqController::class)->name('faq');
Route::get('/about', AboutController::class)->name('about');
Route::get('/contact', [ContactController::class, 'index'])->name('contact.index');
Route::post('/contact', [ContactController::class, 'store'])
    ->middleware('throttle:5,1')
    ->name('contact.store');

Route::middleware(['auth', 'verified'])->group(function () {
    Route::inertia('dashboard', 'dashboard')->name('dashboard');
});

require __DIR__.'/settings.php';

<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up(): void
    {
        Schema::create('parties', function (Blueprint $table): void {
            $table->id();
            $table->string('name')->unique();
            $table->string('website_url')->nullable();
            $table->timestamps();
        });

        Schema::create('general_themes', function (Blueprint $table): void {
            $table->id();
            $table->string('name')->unique();
            $table->string('slug')->unique();
            $table->unsignedSmallInteger('sort_order')->unique();
            $table->boolean('is_active')->default(true)->index();
            $table->timestamps();
        });

        Schema::create('candidates', function (Blueprint $table): void {
            $table->id();
            $table->foreignId('party_id')->constrained()->restrictOnDelete();
            $table->string('first_name');
            $table->string('last_name');
            $table->date('birth_date')->nullable();
            $table->boolean('is_active')->default(true)->index();
            $table->timestamps();
            $table->index(['is_active', 'last_name', 'first_name']);
        });

        Schema::create('themes', function (Blueprint $table): void {
            $table->id();
            $table->foreignId('general_theme_id')->constrained()->restrictOnDelete();
            $table->string('name');
            $table->string('slug')->unique();
            $table->unsignedSmallInteger('sort_order');
            $table->boolean('is_active')->default(true)->index();
            $table->timestamps();
            $table->unique(['general_theme_id', 'sort_order']);
        });

        Schema::create('proposals', function (Blueprint $table): void {
            $table->id();
            $table->foreignId('candidate_id')->constrained()->restrictOnDelete();
            $table->foreignId('theme_id')->constrained()->restrictOnDelete();
            $table->text('text');
            $table->string('source_title');
            $table->text('source_url');
            $table->boolean('is_active')->default(true)->index();
            $table->timestamps();
            $table->index(['candidate_id', 'is_active']);
        });

    }

    public function down(): void
    {
        Schema::dropIfExists('proposals');
        Schema::dropIfExists('themes');
        Schema::dropIfExists('candidates');
        Schema::dropIfExists('general_themes');
        Schema::dropIfExists('parties');
    }
};

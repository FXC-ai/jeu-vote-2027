<?php

namespace App\Models;

use Database\Factories\ThemeFactory;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\HasMany;

class Theme extends Model
{
    /** @use HasFactory<ThemeFactory> */
    use HasFactory;

    protected function casts(): array
    {
        return ['is_active' => 'boolean'];
    }

    /** @return BelongsTo<GeneralTheme, $this> */
    public function generalTheme(): BelongsTo
    {
        return $this->belongsTo(GeneralTheme::class);
    }

    /** @return HasMany<Proposal, $this> */
    public function proposals(): HasMany
    {
        return $this->hasMany(Proposal::class);
    }

    /** @return HasMany<Proposal, $this> */
    public function activeProposals(): HasMany
    {
        return $this->proposals()
            ->where('proposals.is_active', true)
            ->whereHas('candidate', fn ($query) => $query->where('is_active', true));
    }
}

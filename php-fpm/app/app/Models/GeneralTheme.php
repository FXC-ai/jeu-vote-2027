<?php

namespace App\Models;

use Database\Factories\GeneralThemeFactory;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasMany;

class GeneralTheme extends Model
{
    /** @use HasFactory<GeneralThemeFactory> */
    use HasFactory;

    protected function casts(): array
    {
        return ['is_active' => 'boolean'];
    }

    /** @return HasMany<Theme, $this> */
    public function themes(): HasMany
    {
        return $this->hasMany(Theme::class);
    }

    /** @return HasMany<Theme, $this> */
    public function activeThemes(): HasMany
    {
        return $this->themes()->where('is_active', true);
    }
}

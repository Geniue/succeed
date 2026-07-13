<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class SiteSetting extends Model
{
    protected $fillable = [
        'brand_name',
        'legal_name',
        'legal_name_short',
        'flagship_brand',
        'flagship_url',
        'email',
        'phone',
        'location',
        'logo_path',
        'navigation',
        'footer',
    ];

    protected function casts(): array
    {
        return [
            'navigation' => 'array',
            'footer' => 'array',
        ];
    }
}
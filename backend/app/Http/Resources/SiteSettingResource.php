<?php

namespace App\Http\Resources;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;
use Illuminate\Support\Facades\Storage;

/**
 * @mixin \App\Models\SiteSetting
 */
class SiteSettingResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @return array<string, mixed>
     */
    public function toArray(Request $request): array
    {
        return [
            'brand_name' => $this->brand_name,
            'legal_name' => $this->legal_name,
            'legal_name_short' => $this->legal_name_short,

            'flagship' => [
                'brand' => $this->flagship_brand,
                'url' => $this->flagship_url,
            ],

            'contact' => [
                'email' => $this->email,
                'phone' => $this->phone,
                'location' => $this->location,
            ],

            'logo_url' => $this->logo_path
                ? Storage::disk('public')->url($this->logo_path)
                : null,

            'navigation' => $this->navigation ?? [
                'items' => [],
                'cta' => null,
            ],

            'footer' => $this->footer ?? [],
        ];
    }
}

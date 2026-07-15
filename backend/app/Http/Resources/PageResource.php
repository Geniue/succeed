<?php

namespace App\Http\Resources;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

/**
 * Full page payload — includes the content block, unlike PageSummaryResource
 * which is intentionally lightweight for listings.
 *
 * @mixin \App\Models\Page
 */
class PageResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @return array<string, mixed>
     */
    public function toArray(Request $request): array
    {
        return [
            'slug' => $this->slug,
            'name' => $this->name,
            'seo_title' => $this->seo_title,
            'seo_description' => $this->seo_description,
            'content' => $this->content,
        ];
    }
}

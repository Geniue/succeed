<?php

namespace App\Http\Controllers\Api\V1;

use App\Http\Controllers\Controller;
use App\Http\Resources\PageSummaryResource;
use App\Http\Resources\SiteSettingResource;
use App\Models\Page;
use App\Models\SiteSetting;
use Illuminate\Http\JsonResponse;

class SiteController extends Controller
{
    /**
     * GET /api/v1/site/bootstrap
     *
     * Everything a frontend needs on initial load: global brand/contact
     * details, header navigation, footer content, and a lightweight list
     * of published pages (for routing) — without shipping full page bodies.
     */
    public function bootstrap(): JsonResponse
    {
        $settings = SiteSetting::query()->firstOrFail();

        $pages = Page::query()
            ->where('is_published', true)
            ->orderBy('name')
            ->get();

        return response()->json([
            'data' => [
                'site' => new SiteSettingResource($settings),
                'pages' => PageSummaryResource::collection($pages),
            ],
        ]);
    }
}

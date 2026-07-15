<?php

namespace App\Http\Controllers\Api\V1;

use App\Http\Controllers\Controller;
use App\Http\Resources\PageResource;
use App\Models\Page;
use Illuminate\Http\JsonResponse;

class PageController extends Controller
{
    /**
     * GET /api/v1/pages/{slug}
     *
     * Full content for a single published page (Home, About, Terms,
     * Privacy, etc.) — the payload the frontend renders each page's
     * sections from.
     */
    public function show(string $slug): JsonResponse
    {
        $page = Page::query()
            ->where('slug', $slug)
            ->where('is_published', true)
            ->firstOrFail();

        return response()->json([
            'data' => new PageResource($page),
        ]);
    }
}

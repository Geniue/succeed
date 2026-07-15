<?php

namespace App\Http\Controllers\Api\V1;

use App\Http\Controllers\Controller;
use App\Http\Requests\StoreContactSubmissionRequest;
use App\Http\Resources\ContactSubmissionResource;
use App\Models\ContactSubmission;
use Illuminate\Http\JsonResponse;

class ContactSubmissionController extends Controller
{
    /**
     * POST /api/v1/contact-submissions
     *
     * Public endpoint for the website contact form. Validates the input,
     * silently drops anything that trips the honeypot, and otherwise
     * persists the submission for follow-up in Filament.
     */
    public function store(StoreContactSubmissionRequest $request): JsonResponse
    {
        if ($request->isSpam()) {
            // Respond as if it succeeded so bots gain no signal, but don't persist.
            return response()->json([
                'message' => 'Thanks for reaching out. We will get back to you shortly.',
            ], 201);
        }

        $submission = ContactSubmission::create([
            ...$request->validated(),
            'status' => ContactSubmission::STATUS_NEW,
        ]);

        return response()->json([
            'message' => 'Thanks for reaching out. We will get back to you shortly.',
            'data' => new ContactSubmissionResource($submission),
        ], 201);
    }
}

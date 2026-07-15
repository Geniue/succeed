<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class StoreContactSubmissionRequest extends FormRequest
{
    /**
     * This is a public, unauthenticated endpoint.
     */
    public function authorize(): bool
    {
        return true;
    }

    /**
     * @return array<string, mixed>
     */
    public function rules(): array
    {
        return [
            'name' => ['required', 'string', 'max:255'],
            'email' => ['required', 'email', 'max:255'],
            'phone' => ['nullable', 'string', 'max:30'],
            'message' => ['required', 'string', 'min:10', 'max:5000'],

            // Honeypot: a field real visitors never see or fill in.
            // Bots that fill every input will trip this and get quietly dropped.
            'website' => ['nullable', 'string', 'max:255'],
        ];
    }

    /**
     * Whether this submission tripped the honeypot and should be silently discarded.
     */
    public function isSpam(): bool
    {
        return filled($this->input('website'));
    }

    /**
     * Only the genuine contact fields — the honeypot is never persisted.
     *
     * @return array<string, mixed>
     */
    public function validated($key = null, $default = null): array
    {
        $data = parent::validated($key, $default);

        unset($data['website']);

        return $data;
    }

    /**
     * @return array<string, string>
     */
    public function messages(): array
    {
        return [
            'message.min' => 'Please provide a bit more detail in your message (at least 10 characters).',
        ];
    }
}

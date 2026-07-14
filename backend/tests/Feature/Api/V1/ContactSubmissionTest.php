<?php

namespace Tests\Feature\Api\V1;

use App\Models\ContactSubmission;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Tests\TestCase;

class ContactSubmissionTest extends TestCase
{
    use RefreshDatabase;

    public function test_it_creates_a_contact_submission_with_valid_data(): void
    {
        $payload = [
            'name' => 'Jane Doe',
            'email' => 'jane@example.com',
            'phone' => '+971 50 123 4567',
            'message' => 'Hi, I would like to learn more about your programs.',
        ];

        $response = $this->postJson('/api/v1/contact-submissions', $payload);

        $response->assertCreated()
            ->assertJsonPath('data.name', 'Jane Doe')
            ->assertJsonPath('data.email', 'jane@example.com')
            ->assertJsonPath('data.status', ContactSubmission::STATUS_NEW);

        $this->assertDatabaseHas('contact_submissions', [
            'name' => 'Jane Doe',
            'email' => 'jane@example.com',
            'status' => ContactSubmission::STATUS_NEW,
        ]);
    }

    public function test_it_allows_a_missing_optional_phone_number(): void
    {
        $response = $this->postJson('/api/v1/contact-submissions', [
            'name' => 'Jane Doe',
            'email' => 'jane@example.com',
            'message' => 'Hi, I would like to learn more about your programs.',
        ]);

        $response->assertCreated();

        $this->assertDatabaseHas('contact_submissions', [
            'email' => 'jane@example.com',
            'phone' => null,
        ]);
    }

    public function test_it_requires_name_email_and_message(): void
    {
        $response = $this->postJson('/api/v1/contact-submissions', []);

        $response->assertUnprocessable()
            ->assertJsonValidationErrors(['name', 'email', 'message']);
    }

    public function test_it_rejects_an_invalid_email(): void
    {
        $response = $this->postJson('/api/v1/contact-submissions', [
            'name' => 'Jane Doe',
            'email' => 'not-an-email',
            'message' => 'Hi, I would like to learn more about your programs.',
        ]);

        $response->assertUnprocessable()
            ->assertJsonValidationErrors(['email']);
    }

    public function test_it_silently_drops_submissions_that_trip_the_honeypot(): void
    {
        $response = $this->postJson('/api/v1/contact-submissions', [
            'name' => 'Bot',
            'email' => 'bot@example.com',
            'message' => 'This message was written by an automated script.',
            'website' => 'https://spam.example.com',
        ]);

        $response->assertCreated();

        $this->assertDatabaseCount('contact_submissions', 0);
    }

    public function test_it_is_rate_limited(): void
    {
        $payload = [
            'name' => 'Jane Doe',
            'email' => 'jane@example.com',
            'message' => 'Hi, I would like to learn more about your programs.',
        ];

        for ($i = 0; $i < 5; $i++) {
            $this->postJson('/api/v1/contact-submissions', $payload)->assertCreated();
        }

        $this->postJson('/api/v1/contact-submissions', $payload)
            ->assertStatus(429);
    }
}

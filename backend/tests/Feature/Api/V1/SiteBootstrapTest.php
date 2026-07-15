<?php

namespace Tests\Feature\Api\V1;

use App\Models\Page;
use App\Models\SiteSetting;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Tests\TestCase;

class SiteBootstrapTest extends TestCase
{
    use RefreshDatabase;

    public function test_it_returns_site_settings_and_published_pages(): void
    {
        SiteSetting::create([
            'brand_name' => 'Succeed',
            'legal_name' => 'Succeed Education Support Services L.L.C.',
            'legal_name_short' => 'Succeed Education Support Services LLC',
            'flagship_brand' => 'Universities.org',
            'flagship_url' => 'https://universities.org',
            'email' => 'info@succeedeu.com',
            'phone' => '+971 52 292 3333',
            'location' => 'Dubai, United Arab Emirates',
            'logo_path' => 'site/branding/logo.png',
            'navigation' => [
                'items' => [['label' => 'Home', 'url' => '/']],
                'cta' => ['label' => 'Get in Touch', 'url' => '/#contact'],
            ],
            'footer' => ['copyright_text' => 'All rights reserved.'],
        ]);

        Page::create([
            'slug' => 'home',
            'name' => 'Home',
            'content' => ['hero' => ['title' => 'Welcome']],
            'is_published' => true,
        ]);

        Page::create([
            'slug' => 'draft-page',
            'name' => 'Draft',
            'content' => [],
            'is_published' => false,
        ]);

        $response = $this->getJson('/api/v1/site/bootstrap');

        $response->assertOk()
            ->assertJsonPath('data.site.brand_name', 'Succeed')
            ->assertJsonPath('data.site.contact.email', 'info@succeedeu.com')
            ->assertJsonPath('data.site.navigation.items.0.label', 'Home')
            ->assertJsonCount(1, 'data.pages')
            ->assertJsonPath('data.pages.0.slug', 'home');

        $this->assertStringContainsString(
            'site/branding/logo.png',
            $response->json('data.site.logo_url')
        );
    }

    public function test_it_returns_404_when_site_settings_have_not_been_configured(): void
    {
        $response = $this->getJson('/api/v1/site/bootstrap');

        $response->assertNotFound();
    }
}

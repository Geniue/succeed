<?php

namespace Tests\Feature\Api\V1;

use App\Models\Page;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Tests\TestCase;

class PageShowTest extends TestCase
{
    use RefreshDatabase;

    public function test_it_returns_a_published_page_by_slug(): void
    {
        Page::create([
            'slug' => 'home',
            'name' => 'Home',
            'seo_title' => 'Succeed',
            'seo_description' => 'Description',
            'is_published' => true,
            'content' => ['hero' => ['title' => 'Welcome to Succeed']],
        ]);

        $response = $this->getJson('/api/v1/pages/home');

        $response->assertOk()
            ->assertJsonPath('data.slug', 'home')
            ->assertJsonPath('data.content.hero.title', 'Welcome to Succeed');
    }

    public function test_it_returns_404_for_an_unpublished_page(): void
    {
        Page::create([
            'slug' => 'draft-page',
            'name' => 'Draft',
            'is_published' => false,
            'content' => [],
        ]);

        $response = $this->getJson('/api/v1/pages/draft-page');

        $response->assertNotFound();
    }

    public function test_it_returns_404_for_an_unknown_slug(): void
    {
        $response = $this->getJson('/api/v1/pages/does-not-exist');

        $response->assertNotFound();
    }
}

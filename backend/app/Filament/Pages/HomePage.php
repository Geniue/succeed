<?php

namespace App\Filament\Pages;

use App\Models\Page as PageModel;
use Filament\Forms\Components\Repeater;
use Filament\Forms\Components\TextInput;
use Filament\Forms\Components\Textarea;
use Filament\Forms\Components\Toggle;
use Filament\Notifications\Notification;
use Filament\Pages\Page;
use Filament\Schemas\Components\Section;
use Filament\Schemas\Schema;

class HomePage extends Page
{
    protected static ?string $title = 'Home Page';

    protected static ?string $navigationLabel = 'Home Page';

    protected static ?int $navigationSort = 20;

    protected ?string $subheading = 'Manage all editable content shown on the public home page.';

    protected string $view = 'filament.pages.home-page';

    public ?array $data = [];

    public static function getNavigationGroup(): string
    {
        return 'Website Content';
    }

    public function mount(): void
    {
        $page = PageModel::query()
            ->where('slug', 'home')
            ->firstOrFail();

        $this->form->fill([
            'content' => $page->content,
            'seo_title' => $page->seo_title,
            'seo_description' => $page->seo_description,
            'is_published' => $page->is_published,
        ]);
    }

    public function form(Schema $schema): Schema
    {
        return $schema
            ->components([
                Section::make('Hero')
                    ->description('Main introduction shown at the top of the home page.')
                    ->schema([
                        TextInput::make('content.hero.eyebrow')
                            ->label('Eyebrow')
                            ->required()
                            ->maxLength(255)
                            ->columnSpanFull(),

                        TextInput::make('content.hero.title')
                            ->label('Main title')
                            ->required()
                            ->maxLength(255),

                        TextInput::make('content.hero.highlighted_text')
                            ->label('Highlighted title text')
                            ->required()
                            ->maxLength(255),

                        Textarea::make('content.hero.description')
                            ->label('Description')
                            ->rows(5)
                            ->required()
                            ->columnSpanFull(),

                        TextInput::make('content.hero.primary_cta.label')
                            ->label('Primary CTA label')
                            ->required()
                            ->maxLength(100),

                        TextInput::make('content.hero.primary_cta.url')
                            ->label('Primary CTA URL')
                            ->required()
                            ->maxLength(255),

                        TextInput::make('content.hero.secondary_cta.label')
                            ->label('Secondary CTA label')
                            ->required()
                            ->maxLength(100),

                        TextInput::make('content.hero.secondary_cta.url')
                            ->label('Secondary CTA URL')
                            ->required()
                            ->maxLength(255),

                        TextInput::make('content.hero.image')
                            ->label('Hero image URL')
                            ->url()
                            ->required()
                            ->maxLength(2048)
                            ->columnSpanFull(),

                        TextInput::make('content.hero.image_alt')
                            ->label('Hero image alt text')
                            ->required()
                            ->maxLength(255)
                            ->columnSpanFull(),

                        TextInput::make('content.hero.badge.value')
                            ->label('Badge value')
                            ->required()
                            ->maxLength(100),

                        TextInput::make('content.hero.badge.label')
                            ->label('Badge label')
                            ->required()
                            ->maxLength(255),
                    ])
                    ->columns(2),

                Section::make('Statistics')
                    ->description('Manage the trust statistics displayed below the hero section.')
                    ->schema([
                        Repeater::make('content.statistics.items')
                            ->label('Statistics')
                            ->schema([
                                TextInput::make('value')
                                    ->required()
                                    ->maxLength(100),

                                TextInput::make('label')
                                    ->required()
                                    ->maxLength(255),
                            ])
                            ->columns(2)
                            ->addActionLabel('Add statistic')
                            ->collapsible()
                            ->reorderable(),
                    ]),

                Section::make('About Teaser')
                    ->description('Short company introduction displayed on the home page.')
                    ->schema([
                        TextInput::make('content.about.eyebrow')
                            ->label('Eyebrow')
                            ->required()
                            ->maxLength(255),

                        TextInput::make('content.about.title')
                            ->label('Title')
                            ->required()
                            ->maxLength(255),

                        Textarea::make('content.about.description')
                            ->label('Description')
                            ->rows(5)
                            ->required()
                            ->columnSpanFull(),

                        TextInput::make('content.about.image')
                            ->label('Image URL')
                            ->url()
                            ->required()
                            ->maxLength(2048)
                            ->columnSpanFull(),

                        TextInput::make('content.about.image_alt')
                            ->label('Image alt text')
                            ->required()
                            ->maxLength(255)
                            ->columnSpanFull(),

                        TextInput::make('content.about.cta.label')
                            ->label('CTA label')
                            ->required()
                            ->maxLength(100),

                        TextInput::make('content.about.cta.url')
                            ->label('CTA URL')
                            ->required()
                            ->maxLength(255),
                    ])
                    ->columns(2),

                Section::make('Flagship Platform')
                    ->description('Manage the Universities.org showcase section.')
                    ->schema([
                        TextInput::make('content.flagship.eyebrow')
                            ->label('Eyebrow')
                            ->required()
                            ->maxLength(255),

                        TextInput::make('content.flagship.title')
                            ->label('Title')
                            ->required()
                            ->maxLength(255),

                        Textarea::make('content.flagship.description')
                            ->label('Description')
                            ->rows(5)
                            ->required()
                            ->columnSpanFull(),

                        TextInput::make('content.flagship.image')
                            ->label('Image URL')
                            ->url()
                            ->required()
                            ->maxLength(2048)
                            ->columnSpanFull(),

                        TextInput::make('content.flagship.image_alt')
                            ->label('Image alt text')
                            ->required()
                            ->maxLength(255)
                            ->columnSpanFull(),

                        TextInput::make('content.flagship.cta.label')
                            ->label('CTA label')
                            ->required()
                            ->maxLength(100),

                        TextInput::make('content.flagship.cta.url')
                            ->label('CTA URL')
                            ->required()
                            ->maxLength(255),
                    ])
                    ->columns(2),

                Section::make('Contact Section')
                    ->description('Manage the heading, labels, and supporting text around the contact form.')
                    ->schema([
                        TextInput::make('content.contact.eyebrow')
                            ->label('Eyebrow')
                            ->required()
                            ->maxLength(255),

                        TextInput::make('content.contact.title')
                            ->label('Title')
                            ->required()
                            ->maxLength(255),

                        TextInput::make('content.contact.phone_label')
                            ->label('Phone label')
                            ->required()
                            ->maxLength(100),

                        TextInput::make('content.contact.email_label')
                            ->label('Email label')
                            ->required()
                            ->maxLength(100),

                        TextInput::make('content.contact.location_label')
                            ->label('Location label')
                            ->required()
                            ->maxLength(100),

                        Textarea::make('content.contact.supporting_text')
                            ->label('Supporting text')
                            ->rows(4)
                            ->required()
                            ->columnSpanFull(),
                    ])
                    ->columns(2),

                Section::make('SEO & Publishing')
                    ->description('Manage search metadata and public visibility for the home page.')
                    ->schema([
                        TextInput::make('seo_title')
                            ->label('SEO title')
                            ->maxLength(255)
                            ->columnSpanFull(),

                        Textarea::make('seo_description')
                            ->label('SEO description')
                            ->rows(3)
                            ->maxLength(500)
                            ->columnSpanFull(),

                        Toggle::make('is_published')
                            ->label('Published')
                            ->default(true),
                    ]),
            ])
            ->statePath('data');
    }

    public function save(): void
    {
        $data = $this->form->getState();

        $page = PageModel::query()
            ->where('slug', 'home')
            ->firstOrFail();

        $page->update([
            'content' => $data['content'],
            'seo_title' => $data['seo_title'] ?? null,
            'seo_description' => $data['seo_description'] ?? null,
            'is_published' => $data['is_published'] ?? false,
        ]);

        $this->form->fill([
            'content' => $page->fresh()->content,
            'seo_title' => $page->seo_title,
            'seo_description' => $page->seo_description,
            'is_published' => $page->is_published,
        ]);

        Notification::make()
            ->title('Home page saved')
            ->success()
            ->send();
    }
}
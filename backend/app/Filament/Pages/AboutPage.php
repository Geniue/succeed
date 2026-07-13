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

class AboutPage extends Page
{
    protected static ?string $title = 'About Page';

    protected static ?string $navigationLabel = 'About Page';

    protected static ?int $navigationSort = 30;

    protected ?string $subheading = 'Manage all editable content shown on the public about page.';

    protected string $view = 'filament.pages.about-page';

    public ?array $data = [];

    public static function getNavigationGroup(): string
    {
        return 'Website Content';
    }

    public function mount(): void
    {
        $page = PageModel::query()
            ->where('slug', 'about')
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
                Section::make('Introduction')
                    ->description('Main introduction shown at the top of the about page.')
                    ->schema([
                        TextInput::make('content.hero.eyebrow')
                            ->label('Eyebrow')
                            ->required()
                            ->maxLength(255),

                        TextInput::make('content.hero.title')
                            ->label('Title')
                            ->required()
                            ->maxLength(255),

                        Textarea::make('content.hero.description')
                            ->label('Description')
                            ->rows(5)
                            ->required()
                            ->columnSpanFull(),

                        TextInput::make('content.hero.image')
                            ->label('Image URL')
                            ->url()
                            ->required()
                            ->maxLength(2048)
                            ->columnSpanFull(),

                        TextInput::make('content.hero.image_alt')
                            ->label('Image alt text')
                            ->required()
                            ->maxLength(255)
                            ->columnSpanFull(),
                    ])
                    ->columns(2),

                Section::make('Company Values')
                    ->description('Manage the values displayed in the middle of the about page.')
                    ->schema([
                        Repeater::make('content.values.items')
                            ->label('Values')
                            ->schema([
                                TextInput::make('title')
                                    ->required()
                                    ->maxLength(255),

                                Textarea::make('description')
                                    ->rows(4)
                                    ->required(),
                            ])
                            ->columns(2)
                            ->addActionLabel('Add value')
                            ->collapsible()
                            ->reorderable(),
                    ]),

                Section::make('Flagship Platform')
                    ->description('Manage the Universities.org section shown on the about page.')
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

                Section::make('SEO & Publishing')
                    ->description('Manage search metadata and public visibility for the about page.')
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
            ->where('slug', 'about')
            ->firstOrFail();

        $page->update([
            'content' => $data['content'],
            'seo_title' => $data['seo_title'] ?? null,
            'seo_description' => $data['seo_description'] ?? null,
            'is_published' => $data['is_published'] ?? false,
        ]);

        $page->refresh();

        $this->form->fill([
            'content' => $page->content,
            'seo_title' => $page->seo_title,
            'seo_description' => $page->seo_description,
            'is_published' => $page->is_published,
        ]);

        Notification::make()
            ->title('About page saved')
            ->success()
            ->send();
    }
}
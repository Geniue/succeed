<?php

namespace App\Filament\Pages;

use App\Models\Page as PageModel;
use Filament\Forms\Components\RichEditor;
use Filament\Forms\Components\TextInput;
use Filament\Forms\Components\Textarea;
use Filament\Forms\Components\Toggle;
use Filament\Notifications\Notification;
use Filament\Pages\Page;
use Filament\Schemas\Components\Section;
use Filament\Schemas\Schema;

class PrivacyPage extends Page
{
    protected static ?string $title = 'Privacy Policy';

    protected static ?string $navigationLabel = 'Privacy Policy';

    protected static ?int $navigationSort = 50;

    protected ?string $subheading = 'Manage the public privacy policy page.';

    protected string $view = 'filament.pages.privacy-page';

    public ?array $data = [];

    public static function getNavigationGroup(): string
    {
        return 'Website Content';
    }

    public function mount(): void
    {
        $page = PageModel::query()
            ->where('slug', 'privacy')
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
                Section::make('Page Content')
                    ->description('Manage the heading, update date, and complete privacy policy.')
                    ->schema([
                        TextInput::make('content.eyebrow')
                            ->label('Eyebrow')
                            ->required()
                            ->maxLength(100),

                        TextInput::make('content.title')
                            ->label('Title')
                            ->required()
                            ->maxLength(255),

                        TextInput::make('content.last_updated')
                            ->label('Last updated')
                            ->required()
                            ->maxLength(100)
                            ->columnSpanFull(),

                        RichEditor::make('content.body')
                            ->label('Privacy Policy content')
                            ->required()
                            ->toolbarButtons([
                                ['bold', 'italic', 'underline', 'link'],
                                ['h2', 'h3'],
                                ['bulletList', 'orderedList'],
                                ['blockquote'],
                                ['undo', 'redo'],
                            ])
                            ->columnSpanFull(),
                    ])
                    ->columns(2),

                Section::make('SEO & Publishing')
                    ->description('Manage search metadata and public visibility.')
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
            ->where('slug', 'privacy')
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
            ->title('Privacy Policy saved')
            ->success()
            ->send();
    }
}
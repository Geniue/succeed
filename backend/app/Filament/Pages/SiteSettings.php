<?php

namespace App\Filament\Pages;

use App\Models\SiteSetting;
use Filament\Forms\Components\FileUpload;
use Filament\Forms\Components\Repeater;
use Filament\Forms\Components\TextInput;
use Filament\Forms\Components\Textarea;
use Filament\Forms\Components\Toggle;
use Filament\Notifications\Notification;
use Filament\Pages\Page;
use Filament\Schemas\Components\Section;
use Filament\Schemas\Concerns\RestrictsFileUploadsToSchemaComponents;
use Filament\Schemas\Schema;

class SiteSettings extends Page
{
    use RestrictsFileUploadsToSchemaComponents;

    protected static ?string $title = 'Site Settings';

    protected static ?string $navigationLabel = 'Site Settings';

    protected static ?int $navigationSort = 10;

    protected ?string $subheading = 'Manage global company details, navigation, branding, and footer content.';

    protected string $view = 'filament.pages.site-settings';

    public ?array $data = [];

    public static function getNavigationGroup(): string
    {
        return 'Website Content';
    }

    public function mount(): void
    {
        $settings = SiteSetting::query()->firstOrFail();

        $this->form->fill($settings->toArray());
    }

    public function form(Schema $schema): Schema
    {
        return $schema
            ->components([
                Section::make('Brand & Company')
                    ->description('Global company information used across the public website.')
                    ->schema([
                        TextInput::make('brand_name')
                            ->label('Brand name')
                            ->required()
                            ->maxLength(255),

                        TextInput::make('legal_name')
                            ->label('Legal name')
                            ->required()
                            ->maxLength(255),

                        TextInput::make('legal_name_short')
                            ->label('Short legal name')
                            ->required()
                            ->maxLength(255),

                        TextInput::make('flagship_brand')
                            ->label('Flagship brand')
                            ->maxLength(255),

                        TextInput::make('flagship_url')
                            ->label('Flagship URL')
                            ->url()
                            ->maxLength(255),

                        FileUpload::make('logo_path')
                            ->label('Website logo')
                            ->disk('public')
                            ->directory('site/branding')
                            ->visibility('public')
                            ->image()
                            ->maxSize(4096)
                            ->columnSpanFull(),
                    ])
                    ->columns(2),

                Section::make('Contact Information')
                    ->description('Shared contact details used in the website contact section and footer.')
                    ->schema([
                        TextInput::make('email')
                            ->email()
                            ->required()
                            ->maxLength(255),

                        TextInput::make('phone')
                            ->tel()
                            ->required()
                            ->maxLength(255),

                        TextInput::make('location')
                            ->required()
                            ->maxLength(255)
                            ->columnSpanFull(),
                    ])
                    ->columns(2),

                Section::make('Header Navigation')
                    ->description('Manage the main website navigation and header call-to-action.')
                    ->schema([
                        Repeater::make('navigation.items')
                            ->label('Navigation links')
                            ->schema([
                                TextInput::make('label')
                                    ->required()
                                    ->maxLength(100),

                                TextInput::make('url')
                                    ->required()
                                    ->maxLength(255),
                            ])
                            ->columns(2)
                            ->addActionLabel('Add navigation link')
                            ->collapsible()
                            ->reorderable(),

                        TextInput::make('navigation.cta.label')
                            ->label('CTA label')
                            ->required()
                            ->maxLength(100),

                        TextInput::make('navigation.cta.url')
                            ->label('CTA URL')
                            ->required()
                            ->maxLength(255),
                    ]),

                Section::make('Footer')
                    ->description('Manage the footer description, links, legal links, and copyright text.')
                    ->schema([
                        Textarea::make('footer.description')
                            ->label('Footer description')
                            ->rows(4)
                            ->required()
                            ->columnSpanFull(),

                        TextInput::make('footer.company_heading')
                            ->label('Company links heading')
                            ->required()
                            ->maxLength(100),

                        TextInput::make('footer.contact_heading')
                            ->label('Contact heading')
                            ->required()
                            ->maxLength(100),

                        Repeater::make('footer.company_links')
                            ->label('Company links')
                            ->schema([
                                TextInput::make('label')
                                    ->required()
                                    ->maxLength(100),

                                TextInput::make('url')
                                    ->required()
                                    ->maxLength(255),

                                Toggle::make('external')
                                    ->label('Open externally')
                                    ->default(false),
                            ])
                            ->columns(2)
                            ->addActionLabel('Add footer link')
                            ->collapsible()
                            ->reorderable()
                            ->columnSpanFull(),

                        TextInput::make('footer.terms_label')
                            ->label('Terms label')
                            ->required()
                            ->maxLength(100),

                        TextInput::make('footer.terms_url')
                            ->label('Terms URL')
                            ->required()
                            ->maxLength(255),

                        TextInput::make('footer.privacy_label')
                            ->label('Privacy label')
                            ->required()
                            ->maxLength(100),

                        TextInput::make('footer.privacy_url')
                            ->label('Privacy URL')
                            ->required()
                            ->maxLength(255),

                        TextInput::make('footer.copyright_text')
                            ->label('Copyright text')
                            ->required()
                            ->maxLength(255)
                            ->columnSpanFull(),
                    ])
                    ->columns(2),
            ])
            ->statePath('data');
    }

    public function save(): void
    {
        $data = $this->form->getState();

        $settings = SiteSetting::query()->firstOrFail();

        $settings->update($data);

        $this->form->fill($settings->fresh()->toArray());

        Notification::make()
            ->title('Site settings saved')
            ->success()
            ->send();
    }
}
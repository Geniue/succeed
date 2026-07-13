<?php

namespace App\Filament\Resources\ContactSubmissions\Schemas;

use App\Models\ContactSubmission;
use Filament\Infolists\Components\TextEntry;
use Filament\Schemas\Components\Section;
use Filament\Schemas\Schema;

class ContactSubmissionInfolist
{
    public static function configure(Schema $schema): Schema
    {
        return $schema
            ->components([
                Section::make('Sender')
                    ->schema([
                        TextEntry::make('name')
                            ->label('Name'),

                        TextEntry::make('email')
                            ->label('Email')
                            ->copyable(),

                        TextEntry::make('phone')
                            ->label('Phone')
                            ->placeholder('—'),

                        TextEntry::make('status')
                            ->label('Status')
                            ->badge()
                            ->formatStateUsing(
                                fn (string $state): string => ContactSubmission::statuses()[$state] ?? ucfirst($state)
                            )
                            ->color(fn (string $state): string => match ($state) {
                                ContactSubmission::STATUS_NEW => 'danger',
                                ContactSubmission::STATUS_READ => 'info',
                                ContactSubmission::STATUS_REPLIED => 'success',
                                ContactSubmission::STATUS_ARCHIVED => 'gray',
                                default => 'gray',
                            }),

                        TextEntry::make('created_at')
                            ->label('Received')
                            ->dateTime('M j, Y H:i'),

                        TextEntry::make('read_at')
                            ->label('Read at')
                            ->dateTime('M j, Y H:i')
                            ->placeholder('Not read yet'),
                    ])
                    ->columns(2),

                Section::make('Message')
                    ->schema([
                        TextEntry::make('message')
                            ->label('')
                            ->columnSpanFull(),
                    ]),
            ]);
    }
}
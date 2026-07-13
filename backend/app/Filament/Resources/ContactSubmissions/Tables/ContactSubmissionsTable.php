<?php

namespace App\Filament\Resources\ContactSubmissions\Tables;

use App\Models\ContactSubmission;
use Filament\Actions\ViewAction;
use Filament\Tables\Columns\TextColumn;
use Filament\Tables\Filters\SelectFilter;
use Filament\Tables\Table;

class ContactSubmissionsTable
{
    public static function configure(Table $table): Table
    {
        return $table
            ->columns([
                TextColumn::make('name')
                    ->label('Name')
                    ->searchable()
                    ->sortable()
                    ->weight('medium'),

                TextColumn::make('email')
                    ->label('Email')
                    ->searchable()
                    ->copyable(),

                TextColumn::make('phone')
                    ->label('Phone')
                    ->searchable()
                    ->placeholder('—'),

                TextColumn::make('message')
                    ->label('Message')
                    ->limit(60)
                    ->wrap(),

                TextColumn::make('status')
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

                TextColumn::make('created_at')
                    ->label('Received')
                    ->dateTime('M j, Y H:i')
                    ->sortable(),
            ])
            ->filters([
                SelectFilter::make('status')
                    ->options(ContactSubmission::statuses()),
            ])
            ->recordActions([
                ViewAction::make(),
            ])
            ->defaultSort('created_at', 'desc')
            ->emptyStateHeading('No contact submissions yet');
    }
}
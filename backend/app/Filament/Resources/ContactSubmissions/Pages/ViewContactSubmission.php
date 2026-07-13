<?php

namespace App\Filament\Resources\ContactSubmissions\Pages;

use App\Filament\Resources\ContactSubmissions\ContactSubmissionResource;
use App\Models\ContactSubmission;
use Filament\Actions\Action;
use Filament\Forms\Components\Select;
use Filament\Notifications\Notification;
use Filament\Resources\Pages\ViewRecord;

class ViewContactSubmission extends ViewRecord
{
    protected static string $resource = ContactSubmissionResource::class;

    public function mount(int|string $record): void
    {
        parent::mount($record);

        if ($this->record->status === ContactSubmission::STATUS_NEW) {
            $this->record->update([
                'status' => ContactSubmission::STATUS_READ,
                'read_at' => now(),
            ]);
        }
    }

    protected function getHeaderActions(): array
    {
        return [
            Action::make('changeStatus')
                ->label('Change status')
                ->fillForm(fn (): array => [
                    'status' => $this->record->status,
                ])
                ->schema([
                    Select::make('status')
                        ->label('Status')
                        ->options(ContactSubmission::statuses())
                        ->required(),
                ])
                ->action(function (array $data): void {
                    $status = $data['status'];

                    $this->record->update([
                        'status' => $status,
                        'read_at' => $status === ContactSubmission::STATUS_NEW
                            ? null
                            : ($this->record->read_at ?? now()),
                    ]);

                    Notification::make()
                        ->title('Submission status updated')
                        ->success()
                        ->send();
                }),
        ];
    }
}
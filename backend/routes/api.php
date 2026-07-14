<?php

use App\Http\Controllers\Api\V1\ContactSubmissionController;
use App\Http\Controllers\Api\V1\SiteController;
use Illuminate\Support\Facades\Route;

Route::prefix('v1')->name('api.v1.')->group(function () {

    Route::get('/site/bootstrap', [SiteController::class, 'bootstrap'])
        ->name('site.bootstrap');

    Route::post('/contact-submissions', [ContactSubmissionController::class, 'store'])
        ->middleware('throttle:contact')
        ->name('contact-submissions.store');

});

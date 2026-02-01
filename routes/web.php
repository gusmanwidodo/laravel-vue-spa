<?php

use Illuminate\Support\Facades\Route;
use Inertia\Inertia;
use App\Http\Controllers\Dashboard\SpaController;

// Admin SPA - catch all admin routes
Route::get('/{any?}', SpaController::class)
    ->where('any', '.*')
    ->name('dashboard');

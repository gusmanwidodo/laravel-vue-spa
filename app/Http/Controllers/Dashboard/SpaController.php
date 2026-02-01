<?php

namespace App\Http\Controllers\Dashboard;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\View\View;

class SpaController extends Controller
{
    public function __invoke(): View
    {
        return view('dashboard');
    }
}

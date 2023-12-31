<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class ImageController extends Controller
{
    public function show($filename)
    {
        $path = storage_path("app/public/images/explores/{$filename}");

        if (!file_exists($path)) {
            abort(404);
        }

        return response()->file($path);
    }
}

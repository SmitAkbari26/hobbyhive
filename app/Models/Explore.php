<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Explore extends Model
{
    use HasFactory;
    protected $table = 'explore';

    protected $fillable = ['title', 'description', 'image', 'new', 'subcategories',];

    protected $casts = [
        'subcategories' => 'array',
    ];
}

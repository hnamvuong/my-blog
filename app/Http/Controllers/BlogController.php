<?php

namespace App\Http\Controllers;

use App\Post;
use Illuminate\Http\Request;

class BlogController extends Controller
{
    public function getAllBlog()
    {
        $posts = Post::with('user', 'category')->orderBy('id', 'desc')->get();

        return response()->json([
            'posts' => $posts
        ], 200);
    }
}

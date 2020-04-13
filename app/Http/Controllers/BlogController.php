<?php

namespace App\Http\Controllers;

use App\Category;
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

    public function getBlogById($id)
    {
        $blog = Post::with('user', 'category')->where('id', $id)->first();

        return response()->json([
            'blog' => $blog,
        ], 200);
    }

    public function getCategoryBlog()
    {
        $categories = Category::all();
        return response()->json([
            'categories' => $categories
        ], 200);
    }

    public function getBlogByCategoryId($id)
    {
        $blogByCategory = Post::with('user', 'category')->where('category_id', $id)->orderBy('id', 'desc')->get();

        return response()->json([
            'blogByCategory' => $blogByCategory
        ], 200);
    }
}

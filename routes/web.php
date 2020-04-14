<?php

use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {
    return view('public.index');
});

Auth::routes();

Route::get('/home', 'HomeController@index')->name('home');

Route::get('/post', 'PostController@index')->name('post');

//Route::get('/{anypath}', 'HomeController@index')->where('path', '.*');

Route::group(['middleware' => ['auth']], function () {
    //Category
    Route::post('/add-category', 'CategoryController@store');
    Route::get('/category', 'CategoryController@index');
    Route::delete('/category/{id}', 'CategoryController@destroy');
    Route::get('/category/edit/{id}', 'CategoryController@edit');
    Route::put('/category/{id}', 'CategoryController@update');
    Route::get('/category/deleteSelected/{list}', 'CategoryController@deleteSelected');
    //Post
    Route::post('/add-post', 'PostController@store');
    Route::get('/post', 'PostController@index');
    Route::delete('/post/{id}', 'PostController@destroy');
    Route::get('/post/edit/{id}', 'PostController@edit');
    Route::put('/post/{id}', 'PostController@update');
});
//Blog Post
Route::get('/blog-post', 'BlogController@getAllBlog');
Route::get('/blog-post/{id}', 'BlogController@getBlogById');
Route::get('/category-blog', 'BlogController@getCategoryBlog');
Route::get('/category-blog/{id}', 'BlogController@getBlogByCategoryId');
Route::get('/search', 'BlogController@searchPost');
Route::get('/latest-blog', 'BlogController@getLatestPost');

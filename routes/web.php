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
    return view('welcome');
});

Auth::routes();

Route::get('/home', 'HomeController@index')->name('home');

Route::get('/post', 'PostController@index')->name('post');

//Route::get('/{anypath}', 'HomeController@index')->where('path', '.*');

//Category
Route::post('/add-category', 'CategoryController@store');
Route::get('/category', 'CategoryController@index');
Route::delete('/category/{id}', 'CategoryController@destroy');
Route::get('/category/edit/{id}', 'CategoryController@edit');
Route::put('/category/{id}', 'CategoryController@update');

//Post
Route::post('/add-post', 'PostController@store');
Route::get('/post', 'PostController@index');
Route::delete('/post/{id}', 'PostController@destroy');
Route::get('/post/edit/{id}', 'PostController@edit');
Route::put('/post/{id}', 'PostController@update');

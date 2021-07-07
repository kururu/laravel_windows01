<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\SampleController;
use App\Http\Controllers\HelloController;
use App\Http\Middleware\HelloMiddleware;
use App\Http\Middleware\MyMiddleware;

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

//Route::get('/','SampleController@index');


Route::get('/', function () {
    return view('welcome');
});


Route::get('/hello', [HelloController::class, 'index']);
Route::post('/hello', [HelloController::class, 'send']);

Route::get('/hello/json', [HelloController::class, 'json']);
Route::get('/hello/json/{id}', [HelloController::class, 'json']);

//Route::get('/hello/{person}', [HelloController::class, 'index']);

//Route::get('hello', [HelloController::class, 'index'])->name('hello');
//Route::get('hello/{id}', [HelloController::class, 'index']);
//Route::get('hello/{id}/{name}', [HelloController::class, 'save']);
//Route::get('hello/other', [HelloController::class, 'other']);
//Route::get('hello/json', [HelloController::class, 'json']);
//Route::get('hello/json/{id}', [HelloController::class, 'json']);

//Route::get('hello/{id}', [HelloController::class, 'index'])->middleware('MyMW');
//Route::get('hello', [HelloController::class, 'index'])->middleware('MyMW');


Auth::routes();

Route::get('/home', [App\Http\Controllers\HomeController::class, 'index'])->name('home');

Auth::routes();

Route::get('/home', [App\Http\Controllers\HomeController::class, 'index'])->name('home');

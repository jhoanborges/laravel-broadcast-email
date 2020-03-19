<?php

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


Route::get('/', 'HomeController@index')->name('home');

Auth::routes();


Route::group(['middleware' => 'auth'], function () {
    Route::get('/admin', 'AdminController@index')->name('admin.index');

    //users
    Route::get('/admin/users', 'UsersController@index')->name('users.index');
    Route::post('/users.get', 'UsersController@get')->name('users.get');
    Route::post('/users.add', 'UsersController@store')->name('users.add');
    Route::post('/users.update', 'UsersController@update')->name('users.update');
    Route::post('/users.delete', 'UsersController@destroy')->name('users.delete');

    Route::get('/admin/ordenes', 'OrdersController@index')->name('orders.index');

});

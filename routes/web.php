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



Auth::routes();


Route::group(['middleware' => 'auth'], function () {
    Route::get('/', 'AdminController@index')->name('admin.index');
    Route::get('/admin', 'AdminController@index')->name('admin.index');

    //users
    Route::get('/admin/clients', 'ClientsController@index')->name('clients.index');
    Route::post('/clients.get', 'ClientsController@get')->name('clients.get');
    Route::post('/clients.add', 'ClientsController@store')->name('clients.add');
    Route::post('/clients.update', 'ClientsController@update')->name('clients.update');
    Route::post('/clients.delete', 'ClientsController@destroy')->name('clients.delete');

    Route::get('admin/clients/email', 'ClientsController@email')->name('clients.email');

});

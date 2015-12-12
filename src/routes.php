<?php
/**
 * Created by anonymous on 13/12/15 5:56.
 */

// OAuth, Login and Signup Routes.
Route::post('auth/twitter', 'AuthController@twitter');
Route::post('auth/facebook', 'AuthController@facebook');
Route::post('auth/foursquare', 'AuthController@foursquare');
Route::post('auth/instagram', 'AuthController@instagram');
Route::post('auth/github', 'AuthController@github');
Route::post('auth/google', 'AuthController@google');
Route::post('auth/linkedin', 'AuthController@linkedin');
Route::post('auth/login', 'AuthController@login');
Route::post('auth/signup', 'AuthController@signup');
Route::get('auth/unlink/{provider}', ['middleware' => 'auth', 'uses' => 'AuthController@unlink']);

// API Routes.
Route::get('api/me', ['middleware' => 'auth', 'uses' => 'UserController@getUser']);
Route::put('api/me', ['middleware' => 'auth', 'uses' => 'UserController@updateUser']);

// Initialize Angular.js App Route.
// Route::get('/', 'HomeController@index');
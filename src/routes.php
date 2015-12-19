<?php
/**
 * Created by anonymous on 05/12/15 21:45.
 */

$api = app('Dingo\Api\Routing\Router');

$api->version('v1', function ($api) {
    $api->post('authenticate', 'AppsLibX\JwtAuth\Controllers\AuthenticateController@authenticate');
    $api->post('auth/signup', ['as' => 'register.user', 'uses' => 'RegistrationController@register']);
});

// Protected with JWT
$api->version('v1', ['middleware' => 'api.auth'], function ($api) {
    $api->get('authenticate', 'AppsLibX\JwtAuth\Controllers\AuthenticateController@index');
    $api->get('authenticate/user', 'AppsLibX\JwtAuth\Controllers\AuthenticateController@getAuthenticatedUser');
});

// Route::post('/auth/signup', 'AppsLibX\JwtAuth\Controllers\AuthenticateController@signup');
// Route::post('register', ['as' => 'sentinel.register.user', 'uses' => 'RegistrationController@register']);

<?php
/**
 * Created by anonymous on 18/12/15 8:35.
 */

namespace AppsLibX\JwtAuth\Repositories\User;

use Cartalyst\Sentry\Sentry;
use Cartalyst\Sentry\Users\UserExistsException;
use Cartalyst\Sentry\Users\UserNotFoundException;
use Cartalyst\Sentry\Users\UserAlreadyActivatedException;
use Illuminate\Contracts\Auth\Authenticatable;
use Illuminate\Contracts\Auth;
use Illuminate\Config\Repository;
use Illuminate\Events\Dispatcher;
use AppsLibX\JwtAuth\Models\User;
use AppsLibX\JwtAuth\DataTransferObjects\BaseResponse;
use JwtAuth\DataTransferObjects\SuccessResponse;
use JwtAuth\DataTransferObjects\FailureResponse;
use JwtAuth\DataTransferObjects\ExceptionResponse;

class UserRepository implements UserRepositoryInterface, UserProvider
{
    public function __construct(Sentry $sentry, Repository $config, Dispatcher $dispatcher)
    {
        $this->sentry     = $sentry;
        $this->config     = $config;
        $this->dispatcher = $dispatcher;

        // Get the Throttle Provider
        $this->throttleProvider = $this->sentry->getThrottleProvider();

        // Enable the Throttling Feature
        $this->throttleProvider->enable();
    }

    public function store($data)
    {
        try {
            // Should we automatically activate this user?
            if (array_key_exists('activate', $data)) {
                $activateUser = (bool)$data['activate'];
            } else {
                $activateUser = !$this->config->get('jwtauth.require_activation', true);
            }

            //Prepare the user credentials
            $credentials = [
                'email' => e($data['email']),
                'password' => e($data['password'])
            ];

            // Are we allowed to use usernames?
            if ($this->config->get('jwtauth.allow_usernames', false)) {
                // Make sure a username was provided with the user data
                if (array_key_exists('username', $data)) {
                    $credentials['username'] = e($data['username']);
                }
            }

            // Attempt user registration
            $user = $this->sentry->register($credentials, $activateUser, $data);

            // If the developer has specified additional fields for this user, update them here.
            foreach ($this->config->get('jwtauth.additional_user_fields', []) as $key => $value) {
                if (array_key_exists($key, $data)) {
                    $user->$key = e($data[$key]);
                }
            }
            $user->save();

            // If no group memberships were specified, use the default groups from config
            if (array_key_exists('groups', $data)) {
                $groups = $data['groups'];
            } else {
                $groups = $this->config->get('jwtauth.default_user_groups', []);
            }

            // Assign groups to this user
            foreach ($groups as $name) {
                $group = $this->sentry->getGroupProvider()->findByName($name);
                $user->addGroup($group);
            }

            // User registration was successful.  Determine response message
            if ($activateUser) {
                $message = trans('JwtAuth::users.createdactive');
            } else {
                $message = trans('JwtAuth::users.created');
            }


            // Response Payload
            $payload = [
                'user' => $user,
                'activated' => $activateUser
            ];

            // Fire the 'user registered' event
            $this->dispatcher->fire('jwtauth.user.registered', $payload);

            // Return a response
            return new SuccessResponse($message, $payload);
        } catch (UserExistsException $e) {
            $message = trans('JwtAuth::users.exists');

            return new ExceptionResponse($message);
        }
    }

}
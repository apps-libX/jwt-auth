<?php
/**
 * Created by anonymous on 18/12/15 8:35.
 */

namespace AppsLibX\JwtAuth\Repositories\User;

/*use Cartalyst\Sentry\Sentry;
use Cartalyst\Sentry\Users\UserExistsException;
use Cartalyst\Sentry\Users\UserNotFoundException;
use Cartalyst\Sentry\Users\UserAlreadyActivatedException;*/
use Illuminate\Contracts\Auth\Authenticatable;
use Illuminate\Contracts\Auth\UserProvider;
use Illuminate\Config\Repository;
use Illuminate\Events\Dispatcher;
use AppsLibX\JwtAuth\Models\User;
use AppsLibX\JwtAuth\DataTransferObjects\BaseResponse;
//use JwtAuth\DataTransferObjects\SuccessResponse;
//use JwtAuth\DataTransferObjects\FailureResponse;
//use JwtAuth\DataTransferObjects\ExceptionResponse;

class UserRepository implements UserRepositoryInterface, UserProvider
{

}
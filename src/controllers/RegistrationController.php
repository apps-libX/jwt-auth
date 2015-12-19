<?php
/**
 * Created by anonymous on 17/12/15 16:34.
 */

namespace AppsLibX\JwtAuth\Controllers;

use Vinkla\Hashids\HashidsManager;
use AppsLibX\JwtAuth\FormRequests\RegisterRequest;

//use Sentinel\FormRequests\EmailRequest;
//use Sentinel\FormRequests\ResetPasswordRequest;
use AppsLibX\JwtAuth\Repositories\Group\GroupRepositoryInterface;
use AppsLibX\JwtAuth\Repositories\User\UserRepositoryInterface;
use Sentry;
use View;
use Input;
use Event;
use Redirect;
use Session;
use Config;
use Anwendungen\Application\Controller\Controller;


class RegistrationController extends Controller
{
    public function __construct(
        UserRepositoryInterface $userRepository,
        GroupRepositoryInterface $groupRepository,
        HashidsManager $hashids
    ) {
        $this->userRepository  = $userRepository;
        $this->groupRepository = $groupRepository;
        $this->hashids         = $hashids;
    }

    public function register(RegisterRequest $request)
    {
        // Gather input
        $data = $request->all();

        // Attempt Registration
        $result = $this->userRepository->store($data);

        // It worked!  Use config to determine where we should go.
        // return $this->redirectViaResponse('registration_complete', $result);

        if ($result) {
            $credentials = $request->only('email', 'password');
            try {
                // verify the credentials and create a token for the user
                if (!$token = JWTAuth::attempt($credentials)) {
                    return response()->json(['error' => 'invalid_credentials'], 401);
                }
            } catch (JWTException $e) {
                // something went wrong
                return response()->json(['error' => 'could_not_create_token'], 500);
            }

            // if no errors are encountered we can return a JWT
            return response()->json(compact('token', 'result'));
        }
    }

}
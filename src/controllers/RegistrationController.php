<?php
/**
 * Created by anonymous on 17/12/15 16:34.
 */

namespace AppsLibX\JwtAuth\Controllers;

//use JwtAuth\Repositories\Group\GroupRepositoryInterface;
//use JwtAuth\Repositories\User\UserRepositoryInterface;
use Vinkla\Hashids\HashidsManager;
//use Illuminate\Routing\Controller as BaseController;
use Sentinel\FormRequests\RegisterRequest;
use Sentinel\FormRequests\EmailRequest;
use Sentinel\FormRequests\ResetPasswordRequest;
use Sentinel\Repositories\Group\SentinelGroupRepositoryInterface;
use Sentinel\Repositories\User\SentinelUserRepositoryInterface;

// use Sentinel\Traits\SentinelRedirectionTrait;
// use Sentinel\Traits\SentinelViewfinderTrait;
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
        $data = Input::all();

        // Attempt Registration
        $result = $this->userRepository->store($data);

        // It worked!  Use config to determine where we should go.
        return $this->redirectViaResponse('registration_complete', $result);
    }

}
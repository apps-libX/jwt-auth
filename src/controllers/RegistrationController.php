<?php
/**
 * Created by anonymous on 17/12/15 16:34.
 */

namespace AppsLibX\JwtAuth\Controllers;

//use Vinkla\Hashids\HashidsManager;
use Anwendungen\Application\Controller\Controller;
use AppsLibX\Sentinel\FormRequests\RegisterRequest;
//use AppsLibX\Sentinel\FormRequests\EmailRequest;
//use AppsLibX\Sentinel\FormRequests\ResetPasswordRequest;
//use AppsLibX\Sentinel\Repositories\Group\SentinelGroupRepositoryInterface;
//use AppsLibX\Sentinel\Repositories\User\SentinelUserRepositoryInterface;
//use Sentry;
//use View;
//use Input;
//use Event;
//use Redirect;
//use Session;
//use Config;


class RegistrationController extends Controller
{
    public function __construct(
        SentinelUserRepositoryInterface $userRepository,
        SentinelGroupRepositoryInterface $groupRepository,
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
<?php
/**
 * Created by anonymous on 18/12/15 10:50.
 */

namespace AppsLibX\JwtAuth\DataTransferObjects;


class FailureResponse extends BaseResponse
{
    public function __construct($message, array $payload = null)
    {
        parent::__construct($message, $payload);

        $this->success = false;
    }
}
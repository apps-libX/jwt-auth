<?php
/**
 * Created by anonymous on 18/12/15 10:52.
 */

namespace AppsLibX\JwtAuth\DataTransferObjects;


class SuccessResponse extends BaseResponse
{
    public function __construct($message, array $payload = null)
    {
        parent::__construct($message, $payload);

        $this->success = true;
    }
}
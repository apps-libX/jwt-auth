<?php
/**
 * Created by anonymous on 18/12/15 10:47.
 */

namespace AppsLibX\JwtAuth\DataTransferObjects;


class ExceptionResponse extends BaseResponse
{
    public function __construct($message, array $payload = null)
    {
        parent::__construct($message, $payload);

        $this->success = false;
        $this->error = true;
    }
}
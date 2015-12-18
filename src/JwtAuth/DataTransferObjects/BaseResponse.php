<?php
/**
 * Created by anonymous on 18/12/15 9:55.
 */

namespace AppsLibX\JwtAuth\DataTransferObjects;

class BaseResponse
{
    protected $payload;
    protected $message;
    protected $success;
    protected $error = false;

    /**
     * @param       $message
     * @param array $payload
     */
    public function __construct($message, array $payload = null)
    {
        $this->message = $message;
        $this->payload = $payload;
    }

    /**
     * @return mixed
     */
    public function isSuccessful()
    {
        return $this->success;
    }

    /**
     * @return mixed
     */
    public function getMessage()
    {
        return $this->message;
    }

    /**
     * @return array
     */
    public function getPayload()
    {
        return $this->payload;
    }

    /**
     * @return boolean
     */
    public function isError()
    {
        return $this->error;
    }
}
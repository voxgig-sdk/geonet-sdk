<?php
declare(strict_types=1);

// Geonet SDK utility: result_body

class GeonetResultBody
{
    public static function call(GeonetContext $ctx): ?GeonetResult
    {
        $response = $ctx->response;
        $result = $ctx->result;
        if ($result && $response && $response->json_func && $response->body) {
            $result->body = ($response->json_func)();
        }
        return $result;
    }
}

<?php
declare(strict_types=1);

// Geonet SDK utility: prepare_body

class GeonetPrepareBody
{
    public static function call(GeonetContext $ctx): mixed
    {
        if ($ctx->op->input === 'data') {
            return ($ctx->utility->transform_request)($ctx);
        }
        return null;
    }
}

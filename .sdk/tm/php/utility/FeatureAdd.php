<?php
declare(strict_types=1);

// Geonet SDK utility: feature_add

class GeonetFeatureAdd
{
    public static function call(GeonetContext $ctx, mixed $f): void
    {
        $ctx->client->features[] = $f;
    }
}

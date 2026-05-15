<?php
declare(strict_types=1);

// Geonet SDK feature factory

require_once __DIR__ . '/feature/BaseFeature.php';
require_once __DIR__ . '/feature/TestFeature.php';


class GeonetFeatures
{
    public static function make_feature(string $name)
    {
        switch ($name) {
            case "base":
                return new GeonetBaseFeature();
            case "test":
                return new GeonetTestFeature();
            default:
                return new GeonetBaseFeature();
        }
    }
}

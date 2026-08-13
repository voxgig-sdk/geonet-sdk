<?php
declare(strict_types=1);

// Typed models for the Geonet SDK.
//
// GENERATED from the API model: main.kit.entity.<e>.fields[] and per-op
// params (op.<name>.points[].args.params[]). Field/param types come from the
// canonical type sentinels via @voxgig/sdkgen canonToType (source of truth:
// @voxgig/apidef VALID_CANON). Do not edit by hand.
//
// These are documentation-grade value objects (PHP 8 typed properties),
// registered on the composer classmap autoload. The SDK boundary exchanges
// assoc-arrays; these classes name the shapes for tooling and typed callers.

/** Dns entity data model. */
class Dns
{
    public array $answers;
    public mixed $from_loc;
}

/** Request payload for Dns#load. */
class DnsLoadMatch
{
    public string $id;
}

/** Geodn entity data model. */
class Geodn
{
    public array $answers;
    public mixed $from_loc;
}

/** Request payload for Geodn#load. */
class GeodnLoadMatch
{
    public string $id;
}

/** Geoping entity data model. */
class Geoping
{
    public float $avg_rtt;
    public mixed $from_loc;
    public string $ip;
    public bool $is_alive;
    public float $max_rtt;
    public float $min_rtt;
    public float $packet_loss;
    public int $packets_received;
    public int $packets_sent;
    public array $rtts;
}

/** Request payload for Geoping#load. */
class GeopingLoadMatch
{
    public string $id;
}

/** Ping entity data model. */
class Ping
{
    public float $avg_rtt;
    public mixed $from_loc;
    public string $ip;
    public bool $is_alive;
    public float $max_rtt;
    public float $min_rtt;
    public float $packet_loss;
    public int $packets_received;
    public int $packets_sent;
    public array $rtts;
}

/** Request payload for Ping#load. */
class PingLoadMatch
{
    public string $id;
}


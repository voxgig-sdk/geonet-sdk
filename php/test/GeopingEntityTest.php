<?php
declare(strict_types=1);

// Geoping entity test

require_once __DIR__ . '/../geonet_sdk.php';
require_once __DIR__ . '/Runner.php';

use PHPUnit\Framework\TestCase;
use Voxgig\Struct\Struct as Vs;

class GeopingEntityTest extends TestCase
{
    public function test_create_instance(): void
    {
        $testsdk = GeonetSDK::test(null, null);
        $ent = $testsdk->Geoping(null);
        $this->assertNotNull($ent);
    }

    public function test_basic_flow(): void
    {
        $setup = geoping_basic_setup(null);
        // Per-op sdk-test-control.json skip.
        $_live = !empty($setup["live"]);
        foreach (["load"] as $_op) {
            [$_shouldSkip, $_reason] = Runner::is_control_skipped("entityOp", "geoping." . $_op, $_live ? "live" : "unit");
            if ($_shouldSkip) {
                $this->markTestSkipped($_reason ?? "skipped via sdk-test-control.json");
                return;
            }
        }
        // The basic flow consumes synthetic IDs from the fixture. In live mode
        // without an *_ENTID env override, those IDs hit the live API and 4xx.
        if (!empty($setup["synthetic_only"])) {
            $this->markTestSkipped("live entity test uses synthetic IDs from fixture — set GEONET_TEST_GEOPING_ENTID JSON to run live");
            return;
        }
        $client = $setup["client"];

        // Bootstrap entity data from existing test data.
        $geoping_ref01_data_raw = Vs::items(Helpers::to_map(
            Vs::getpath($setup["data"], "existing.geoping")));
        $geoping_ref01_data = null;
        if (count($geoping_ref01_data_raw) > 0) {
            $geoping_ref01_data = Helpers::to_map($geoping_ref01_data_raw[0][1]);
        }

        // LOAD
        $geoping_ref01_ent = $client->Geoping(null);
        $geoping_ref01_match_dt0 = [
            "id" => $geoping_ref01_data["id"],
        ];
        $geoping_ref01_data_dt0_loaded = $geoping_ref01_ent->load($geoping_ref01_match_dt0, null);
        $geoping_ref01_data_dt0_load_result = Helpers::to_map(is_object($geoping_ref01_data_dt0_loaded) && method_exists($geoping_ref01_data_dt0_loaded, 'data_get') ? $geoping_ref01_data_dt0_loaded->data_get() : $geoping_ref01_data_dt0_loaded);
        $this->assertNotNull($geoping_ref01_data_dt0_load_result);
        $this->assertEquals($geoping_ref01_data_dt0_load_result["id"], $geoping_ref01_data["id"]);

    }
}

function geoping_basic_setup($extra)
{
    Runner::load_env_local();

    $entity_data_file = __DIR__ . '/../../.sdk/test/entity/geoping/GeopingTestData.json';
    $entity_data_source = file_get_contents($entity_data_file);
    $entity_data = json_decode($entity_data_source, true);

    $options = [];
    $options["entity"] = $entity_data["existing"];

    $client = GeonetSDK::test($options, $extra);

    // Generate idmap.
    $idmap = [];
    foreach (["geoping01", "geoping02", "geoping03"] as $k) {
        $idmap[$k] = strtoupper($k);
    }

    // Detect ENTID env override before envOverride consumes it. When live
    // mode is on without a real override, the basic test runs against synthetic
    // IDs from the fixture and 4xx's. Surface this so the test can skip.
    $entid_env_raw = getenv("GEONET_TEST_GEOPING_ENTID");
    $idmap_overridden = $entid_env_raw !== false && str_starts_with(trim($entid_env_raw), "{");

    $env = Runner::env_override([
        "GEONET_TEST_GEOPING_ENTID" => $idmap,
        "GEONET_TEST_LIVE" => "FALSE",
        "GEONET_TEST_EXPLAIN" => "FALSE",
    ]);

    $idmap_resolved = Helpers::to_map(
        $env["GEONET_TEST_GEOPING_ENTID"]);
    if ($idmap_resolved === null) {
        $idmap_resolved = Helpers::to_map($idmap);
    }

    if ($env["GEONET_TEST_LIVE"] === "TRUE") {
        $merged_opts = Vs::merge([
            [
            ],
            $extra ?? [],
        ]);
        $client = new GeonetSDK(Helpers::to_map($merged_opts));
    }

    $live = $env["GEONET_TEST_LIVE"] === "TRUE";
    return [
        "client" => $client,
        "data" => $entity_data,
        "idmap" => $idmap_resolved,
        "env" => $env,
        "explain" => $env["GEONET_TEST_EXPLAIN"] === "TRUE",
        "live" => $live,
        "synthetic_only" => $live && !$idmap_overridden,
        "now" => (int)(microtime(true) * 1000),
    ];
}

<?php
declare(strict_types=1);

// Geonet SDK utility registration

require_once __DIR__ . '/../core/UtilityType.php';
require_once __DIR__ . '/Clean.php';
require_once __DIR__ . '/Done.php';
require_once __DIR__ . '/MakeError.php';
require_once __DIR__ . '/FeatureAdd.php';
require_once __DIR__ . '/FeatureHook.php';
require_once __DIR__ . '/FeatureInit.php';
require_once __DIR__ . '/Fetcher.php';
require_once __DIR__ . '/MakeFetchDef.php';
require_once __DIR__ . '/MakeContext.php';
require_once __DIR__ . '/MakeOptions.php';
require_once __DIR__ . '/MakeRequest.php';
require_once __DIR__ . '/MakeResponse.php';
require_once __DIR__ . '/MakeResult.php';
require_once __DIR__ . '/MakePoint.php';
require_once __DIR__ . '/MakeSpec.php';
require_once __DIR__ . '/MakeUrl.php';
require_once __DIR__ . '/Param.php';
require_once __DIR__ . '/PrepareAuth.php';
require_once __DIR__ . '/PrepareBody.php';
require_once __DIR__ . '/PrepareHeaders.php';
require_once __DIR__ . '/PrepareMethod.php';
require_once __DIR__ . '/PrepareParams.php';
require_once __DIR__ . '/PreparePath.php';
require_once __DIR__ . '/PrepareQuery.php';
require_once __DIR__ . '/ResultBasic.php';
require_once __DIR__ . '/ResultBody.php';
require_once __DIR__ . '/ResultHeaders.php';
require_once __DIR__ . '/TransformRequest.php';
require_once __DIR__ . '/TransformResponse.php';

GeonetUtility::setRegistrar(function (GeonetUtility $u): void {
    $u->clean = [GeonetClean::class, 'call'];
    $u->done = [GeonetDone::class, 'call'];
    $u->make_error = [GeonetMakeError::class, 'call'];
    $u->feature_add = [GeonetFeatureAdd::class, 'call'];
    $u->feature_hook = [GeonetFeatureHook::class, 'call'];
    $u->feature_init = [GeonetFeatureInit::class, 'call'];
    $u->fetcher = [GeonetFetcher::class, 'call'];
    $u->make_fetch_def = [GeonetMakeFetchDef::class, 'call'];
    $u->make_context = [GeonetMakeContext::class, 'call'];
    $u->make_options = [GeonetMakeOptions::class, 'call'];
    $u->make_request = [GeonetMakeRequest::class, 'call'];
    $u->make_response = [GeonetMakeResponse::class, 'call'];
    $u->make_result = [GeonetMakeResult::class, 'call'];
    $u->make_point = [GeonetMakePoint::class, 'call'];
    $u->make_spec = [GeonetMakeSpec::class, 'call'];
    $u->make_url = [GeonetMakeUrl::class, 'call'];
    $u->param = [GeonetParam::class, 'call'];
    $u->prepare_auth = [GeonetPrepareAuth::class, 'call'];
    $u->prepare_body = [GeonetPrepareBody::class, 'call'];
    $u->prepare_headers = [GeonetPrepareHeaders::class, 'call'];
    $u->prepare_method = [GeonetPrepareMethod::class, 'call'];
    $u->prepare_params = [GeonetPrepareParams::class, 'call'];
    $u->prepare_path = [GeonetPreparePath::class, 'call'];
    $u->prepare_query = [GeonetPrepareQuery::class, 'call'];
    $u->result_basic = [GeonetResultBasic::class, 'call'];
    $u->result_body = [GeonetResultBody::class, 'call'];
    $u->result_headers = [GeonetResultHeaders::class, 'call'];
    $u->transform_request = [GeonetTransformRequest::class, 'call'];
    $u->transform_response = [GeonetTransformResponse::class, 'call'];
});

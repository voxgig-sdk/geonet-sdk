# Geonet SDK utility registration
require_relative '../core/utility_type'
require_relative 'clean'
require_relative 'done'
require_relative 'make_error'
require_relative 'feature_add'
require_relative 'feature_hook'
require_relative 'feature_init'
require_relative 'fetcher'
require_relative 'make_fetch_def'
require_relative 'make_context'
require_relative 'make_options'
require_relative 'make_request'
require_relative 'make_response'
require_relative 'make_result'
require_relative 'make_point'
require_relative 'make_spec'
require_relative 'make_url'
require_relative 'param'
require_relative 'prepare_auth'
require_relative 'prepare_body'
require_relative 'prepare_headers'
require_relative 'prepare_method'
require_relative 'prepare_params'
require_relative 'prepare_path'
require_relative 'prepare_query'
require_relative 'graphql'
require_relative 'result_basic'
require_relative 'result_body'
require_relative 'result_headers'
require_relative 'transform_request'
require_relative 'transform_response'

GeonetUtility.registrar = ->(u) {
  u.clean = GeonetUtilities::Clean
  u.done = GeonetUtilities::Done
  u.make_error = GeonetUtilities::MakeError
  u.feature_add = GeonetUtilities::FeatureAdd
  u.feature_hook = GeonetUtilities::FeatureHook
  u.feature_init = GeonetUtilities::FeatureInit
  u.fetcher = GeonetUtilities::Fetcher
  u.make_fetch_def = GeonetUtilities::MakeFetchDef
  u.make_context = GeonetUtilities::MakeContext
  u.make_options = GeonetUtilities::MakeOptions
  u.make_request = GeonetUtilities::MakeRequest
  u.make_response = GeonetUtilities::MakeResponse
  u.make_result = GeonetUtilities::MakeResult
  u.make_point = GeonetUtilities::MakePoint
  u.make_spec = GeonetUtilities::MakeSpec
  u.make_url = GeonetUtilities::MakeUrl
  u.param = GeonetUtilities::Param
  u.prepare_auth = GeonetUtilities::PrepareAuth
  u.prepare_body = GeonetUtilities::PrepareBody
  u.prepare_headers = GeonetUtilities::PrepareHeaders
  u.prepare_method = GeonetUtilities::PrepareMethod
  u.prepare_params = GeonetUtilities::PrepareParams
  u.prepare_path = GeonetUtilities::PreparePath
  u.prepare_query = GeonetUtilities::PrepareQuery
  u.graphql_body = GeonetUtilities::GraphqlBody
  u.graphql_errors = GeonetUtilities::GraphqlErrors
  u.result_basic = GeonetUtilities::ResultBasic
  u.result_body = GeonetUtilities::ResultBody
  u.result_headers = GeonetUtilities::ResultHeaders
  u.transform_request = GeonetUtilities::TransformRequest
  u.transform_response = GeonetUtilities::TransformResponse
}

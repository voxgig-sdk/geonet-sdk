# Geonet SDK feature factory

require_relative 'feature/base_feature'
require_relative 'feature/ratelimit_feature'
require_relative 'feature/retry_feature'
require_relative 'feature/test_feature'
require_relative 'feature/timeout_feature'


module GeonetFeatures
  def self.make_feature(name)
    case name
    when "base"
      GeonetBaseFeature.new
    when "ratelimit"
      GeonetRatelimitFeature.new
    when "retry"
      GeonetRetryFeature.new
    when "test"
      GeonetTestFeature.new
    when "timeout"
      GeonetTimeoutFeature.new
    else
      GeonetBaseFeature.new
    end
  end
end

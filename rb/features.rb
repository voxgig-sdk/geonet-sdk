# Geonet SDK feature factory

require_relative 'feature/base_feature'
require_relative 'feature/test_feature'


module GeonetFeatures
  def self.make_feature(name)
    case name
    when "base"
      GeonetBaseFeature.new
    when "test"
      GeonetTestFeature.new
    else
      GeonetBaseFeature.new
    end
  end
end

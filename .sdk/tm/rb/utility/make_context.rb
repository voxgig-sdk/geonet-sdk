# Geonet SDK utility: make_context
require_relative '../core/context'
module GeonetUtilities
  MakeContext = ->(ctxmap, basectx) {
    GeonetContext.new(ctxmap, basectx)
  }
end

# Geonet SDK utility: feature_add
module GeonetUtilities
  FeatureAdd = ->(ctx, f) {
    ctx.client.features << f
  }
end

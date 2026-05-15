# Geonet SDK feature factory

from feature.base_feature import GeonetBaseFeature
from feature.test_feature import GeonetTestFeature


def _make_feature(name):
    features = {
        "base": lambda: GeonetBaseFeature(),
        "test": lambda: GeonetTestFeature(),
    }
    factory = features.get(name)
    if factory is not None:
        return factory()
    return features["base"]()

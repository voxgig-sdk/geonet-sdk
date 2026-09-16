# Geonet SDK feature factory

from geonet_sdk.feature.base_feature import GeonetBaseFeature
from geonet_sdk.feature.ratelimit_feature import GeonetRatelimitFeature
from geonet_sdk.feature.retry_feature import GeonetRetryFeature
from geonet_sdk.feature.test_feature import GeonetTestFeature
from geonet_sdk.feature.timeout_feature import GeonetTimeoutFeature


_FEATURES = {
    "base": lambda: GeonetBaseFeature(),
    "ratelimit": lambda: GeonetRatelimitFeature(),
    "retry": lambda: GeonetRetryFeature(),
    "test": lambda: GeonetTestFeature(),
    "timeout": lambda: GeonetTimeoutFeature(),
}


def _make_feature(name):
    factory = _FEATURES.get(name)
    if factory is not None:
        return factory()
    return _FEATURES["base"]()


# True when this SDK was generated with the named feature class - the
# constructor's tolerance for extend-carried features reads this (an
# active name with no generated class must not become a BaseFeature
# stray when an extend instance carries it).
def _has_feature(name):
    return name in _FEATURES

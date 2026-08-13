# Geonet SDK utility: make_context

from geonet_sdk.core.context import GeonetContext


def make_context_util(ctxmap, basectx):
    return GeonetContext(ctxmap, basectx)

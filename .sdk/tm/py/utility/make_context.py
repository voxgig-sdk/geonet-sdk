# Geonet SDK utility: make_context

from core.context import GeonetContext


def make_context_util(ctxmap, basectx):
    return GeonetContext(ctxmap, basectx)

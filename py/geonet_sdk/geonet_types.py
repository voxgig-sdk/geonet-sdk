# Typed models for the Geonet SDK.
#
# GENERATED from the API model: main.kit.entity.<e>.fields[] and per-op
# params (op.<name>.points[].args.params[]). Field/param types come from the
# canonical type sentinels via @voxgig/sdkgen canonToType (source of truth:
# @voxgig/apidef VALID_CANON). Do not edit by hand.
#
# These are TypedDicts, not dataclasses: the SDK ops return/accept plain dicts
# at runtime, and a TypedDict IS a dict shape, so the types match the runtime.
# Optional (req:false) keys are modelled as TypedDict key-optionality
# (total=False), split into a required base + total=False subclass when a type
# has both required and optional keys.

from __future__ import annotations

from typing import TypedDict, Any


class DnsRequired(TypedDict):
    answers: list
    from_loc: Any


class Dns(DnsRequired, total=False):
    id: str


class DnsLoadMatchRequired(TypedDict):
    id: str


class DnsLoadMatch(DnsLoadMatchRequired, total=False):
    rtype: str


class GeodnRequired(TypedDict):
    answers: list
    from_loc: Any


class Geodn(GeodnRequired, total=False):
    id: str


class GeodnLoadMatchRequired(TypedDict):
    id: str


class GeodnLoadMatch(GeodnLoadMatchRequired, total=False):
    rtype: str


class GeopingRequired(TypedDict):
    avg_rtt: float
    from_loc: Any
    ip: str
    is_alive: bool
    max_rtt: float
    min_rtt: float
    packet_loss: float
    packets_received: int
    packets_sent: int
    rtts: list


class Geoping(GeopingRequired, total=False):
    id: str


class GeopingLoadMatch(TypedDict):
    id: str


class PingRequired(TypedDict):
    avg_rtt: float
    from_loc: Any
    ip: str
    is_alive: bool
    max_rtt: float
    min_rtt: float
    packet_loss: float
    packets_received: int
    packets_sent: int
    rtts: list


class Ping(PingRequired, total=False):
    id: str


class PingLoadMatch(TypedDict):
    id: str

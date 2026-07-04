# Typed models for the Geonet SDK.
#
# GENERATED from the API model: main.kit.entity.<e>.fields[] and per-op
# params (op.<name>.points[].args.params[]). Field/param types come from the
# canonical type sentinels via @voxgig/sdkgen canonToType (source of truth:
# @voxgig/apidef VALID_CANON). Do not edit by hand.

from __future__ import annotations

from dataclasses import dataclass
from typing import Optional, Any


@dataclass
class Dns:
    answer: list
    from_loc: Any


@dataclass
class DnsLoadMatch:
    id: str


@dataclass
class Geodn:
    answer: list
    from_loc: Any


@dataclass
class GeodnLoadMatch:
    id: str


@dataclass
class Geoping:
    avg_rtt: float
    from_loc: Any
    ip: str
    is_alive: bool
    max_rtt: float
    min_rtt: float
    packet_loss: float
    packets_received: int
    packets_sent: int
    rtt: list


@dataclass
class GeopingLoadMatch:
    id: str


@dataclass
class Ping:
    avg_rtt: float
    from_loc: Any
    ip: str
    is_alive: bool
    max_rtt: float
    min_rtt: float
    packet_loss: float
    packets_received: int
    packets_sent: int
    rtt: list


@dataclass
class PingLoadMatch:
    id: str


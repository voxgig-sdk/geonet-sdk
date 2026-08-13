// Typed models for the Geonet SDK.
//
// GENERATED from the API model: main.kit.entity.<e>.fields[] and per-op
// params (op.<name>.points[].args.params[]). Field/param types come from the
// canonical type sentinels via @voxgig/sdkgen canonToType (source of truth:
// @voxgig/apidef VALID_CANON). Do not edit by hand.

export interface Dns {
  answers: any[]
  from_loc: any
}

export interface DnsLoadMatch {
  id: string
}

export interface Geodn {
  answers: any[]
  from_loc: any
}

export interface GeodnLoadMatch {
  id: string
}

export interface Geoping {
  avg_rtt: number
  from_loc: any
  ip: string
  is_alive: boolean
  max_rtt: number
  min_rtt: number
  packet_loss: number
  packets_received: number
  packets_sent: number
  rtts: any[]
}

export interface GeopingLoadMatch {
  id: string
}

export interface Ping {
  avg_rtt: number
  from_loc: any
  ip: string
  is_alive: boolean
  max_rtt: number
  min_rtt: number
  packet_loss: number
  packets_received: number
  packets_sent: number
  rtts: any[]
}

export interface PingLoadMatch {
  id: string
}


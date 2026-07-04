# frozen_string_literal: true

# Typed models for the Geonet SDK.
#
# GENERATED from the API model: main.kit.entity.<e>.fields[] and per-op
# params (op.<name>.points[].args.params[]). Member types come from the
# canonical type sentinels via @voxgig/sdkgen canonToType (source of truth:
# @voxgig/apidef VALID_CANON). Ruby types are unenforced; these YARD
# annotations document the shapes. Do not edit by hand.

# Dns entity data model.
#
# @!attribute [rw] answer
#   @return [Array]
#
# @!attribute [rw] from_loc
#   @return [Object]
Dns = Struct.new(
  :answer,
  :from_loc,
  keyword_init: true
)

# Request payload for Dns#load.
#
# @!attribute [rw] id
#   @return [String]
DnsLoadMatch = Struct.new(
  :id,
  keyword_init: true
)

# Geodn entity data model.
#
# @!attribute [rw] answer
#   @return [Array]
#
# @!attribute [rw] from_loc
#   @return [Object]
Geodn = Struct.new(
  :answer,
  :from_loc,
  keyword_init: true
)

# Request payload for Geodn#load.
#
# @!attribute [rw] id
#   @return [String]
GeodnLoadMatch = Struct.new(
  :id,
  keyword_init: true
)

# Geoping entity data model.
#
# @!attribute [rw] avg_rtt
#   @return [Float]
#
# @!attribute [rw] from_loc
#   @return [Object]
#
# @!attribute [rw] ip
#   @return [String]
#
# @!attribute [rw] is_alive
#   @return [Boolean]
#
# @!attribute [rw] max_rtt
#   @return [Float]
#
# @!attribute [rw] min_rtt
#   @return [Float]
#
# @!attribute [rw] packet_loss
#   @return [Float]
#
# @!attribute [rw] packets_received
#   @return [Integer]
#
# @!attribute [rw] packets_sent
#   @return [Integer]
#
# @!attribute [rw] rtt
#   @return [Array]
Geoping = Struct.new(
  :avg_rtt,
  :from_loc,
  :ip,
  :is_alive,
  :max_rtt,
  :min_rtt,
  :packet_loss,
  :packets_received,
  :packets_sent,
  :rtt,
  keyword_init: true
)

# Request payload for Geoping#load.
#
# @!attribute [rw] id
#   @return [String]
GeopingLoadMatch = Struct.new(
  :id,
  keyword_init: true
)

# Ping entity data model.
#
# @!attribute [rw] avg_rtt
#   @return [Float]
#
# @!attribute [rw] from_loc
#   @return [Object]
#
# @!attribute [rw] ip
#   @return [String]
#
# @!attribute [rw] is_alive
#   @return [Boolean]
#
# @!attribute [rw] max_rtt
#   @return [Float]
#
# @!attribute [rw] min_rtt
#   @return [Float]
#
# @!attribute [rw] packet_loss
#   @return [Float]
#
# @!attribute [rw] packets_received
#   @return [Integer]
#
# @!attribute [rw] packets_sent
#   @return [Integer]
#
# @!attribute [rw] rtt
#   @return [Array]
Ping = Struct.new(
  :avg_rtt,
  :from_loc,
  :ip,
  :is_alive,
  :max_rtt,
  :min_rtt,
  :packet_loss,
  :packets_received,
  :packets_sent,
  :rtt,
  keyword_init: true
)

# Request payload for Ping#load.
#
# @!attribute [rw] id
#   @return [String]
PingLoadMatch = Struct.new(
  :id,
  keyword_init: true
)


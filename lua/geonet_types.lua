-- Typed models for the Geonet SDK (LuaLS annotations).
--
-- GENERATED from the API model: main.kit.entity.<e>.fields[] and per-op
-- params (op.<name>.points[].args.params[]). Field/param types come from the
-- canonical type sentinels via @voxgig/sdkgen canonToType (source of truth:
-- @voxgig/apidef VALID_CANON). Annotations only — no runtime effect. Do not
-- edit by hand.

---@class Dns
---@field answer table
---@field from_loc any

---@class DnsLoadMatch
---@field id string

---@class Geodn
---@field answer table
---@field from_loc any

---@class GeodnLoadMatch
---@field id string

---@class Geoping
---@field avg_rtt number
---@field from_loc any
---@field ip string
---@field is_alive boolean
---@field max_rtt number
---@field min_rtt number
---@field packet_loss number
---@field packets_received number
---@field packets_sent number
---@field rtt table

---@class GeopingLoadMatch
---@field id string

---@class Ping
---@field avg_rtt number
---@field from_loc any
---@field ip string
---@field is_alive boolean
---@field max_rtt number
---@field min_rtt number
---@field packet_loss number
---@field packets_received number
---@field packets_sent number
---@field rtt table

---@class PingLoadMatch
---@field id string

local M = {}

return M

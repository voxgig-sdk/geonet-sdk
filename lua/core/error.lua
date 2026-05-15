-- Geonet SDK error

local GeonetError = {}
GeonetError.__index = GeonetError


function GeonetError.new(code, msg, ctx)
  local self = setmetatable({}, GeonetError)
  self.is_sdk_error = true
  self.sdk = "Geonet"
  self.code = code or ""
  self.msg = msg or ""
  self.ctx = ctx
  self.result = nil
  self.spec = nil
  return self
end


function GeonetError:error()
  return self.msg
end


function GeonetError:__tostring()
  return self.msg
end


return GeonetError

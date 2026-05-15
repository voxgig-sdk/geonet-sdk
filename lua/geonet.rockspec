package = "voxgig-sdk-geonet"
version = "0.0-1"
source = {
  url = "git://github.com/voxgig-sdk/geonet-sdk.git"
}
description = {
  summary = "Geonet SDK for Lua",
  license = "MIT"
}
dependencies = {
  "lua >= 5.3",
  "dkjson >= 2.5",
  "dkjson >= 2.5",
}
build = {
  type = "builtin",
  modules = {
    ["geonet_sdk"] = "geonet_sdk.lua",
    ["config"] = "config.lua",
    ["features"] = "features.lua",
  }
}

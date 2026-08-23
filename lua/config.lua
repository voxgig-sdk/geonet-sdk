-- Geonet SDK configuration

-- Build a fresh, fully materialised config table. Every call rebuilds the
-- whole structure, so prefer require("config_shared") unless you need a
-- private copy you intend to mutate.
local function make_config()
  return {
    main = {
      name = "Geonet",
      slug = "geonet",
      version = "0.0.1",
      target = "lua",
    },
    feature = {
      ["test"] = {
        ["options"] = {
          ["active"] = false,
        },
      },
    },
    options = {
      base = "https://geonet.shodan.io",
      headers = {
        ["content-type"] = "application/json",
      },
      entity = {
        ["dns"] = {},
        ["geodn"] = {},
        ["geoping"] = {},
        ["ping"] = {},
      },
    },
    entity = {
      ["dns"] = {
        ["fields"] = {
          {
            ["name"] = "answers",
            ["req"] = true,
            ["type"] = "`$ARRAY`",
          },
          {
            ["name"] = "from_loc",
            ["req"] = true,
            ["short"] = "Location of the server that performed the DNS lookup",
            ["type"] = "`$ANY`",
          },
        },
        ["name"] = "dns",
        ["op"] = {
          ["load"] = {
            ["input"] = "data",
            ["name"] = "load",
            ["points"] = {
              {
                ["args"] = {
                  ["params"] = {
                    {
                      ["kind"] = "param",
                      ["name"] = "id",
                      ["orig"] = "hostname",
                      ["reqd"] = true,
                      ["type"] = "`$STRING`",
                    },
                  },
                  ["query"] = {
                    {
                      ["example"] = "A",
                      ["kind"] = "query",
                      ["name"] = "rtype",
                      ["orig"] = "rtype",
                      ["type"] = "`$STRING`",
                    },
                  },
                },
                ["kind"] = "http",
                ["method"] = "GET",
                ["orig"] = "/api/dns/{hostname}",
                ["parts"] = {
                  "api",
                  "dns",
                  "{id}",
                },
                ["rename"] = {
                  ["param"] = {
                    ["hostname"] = "id",
                  },
                },
                ["select"] = {
                  ["exist"] = {
                    "id",
                    "rtype",
                  },
                },
                ["transform"] = {
                  ["req"] = "`reqdata`",
                  ["res"] = "`body`",
                },
              },
            },
          },
        },
        ["relations"] = {
          ["ancestors"] = {},
        },
      },
      ["geodn"] = {
        ["fields"] = {
          {
            ["name"] = "answers",
            ["req"] = true,
            ["type"] = "`$ARRAY`",
          },
          {
            ["name"] = "from_loc",
            ["req"] = true,
            ["short"] = "Location of the server that performed the DNS lookup",
            ["type"] = "`$ANY`",
          },
        },
        ["name"] = "geodn",
        ["op"] = {
          ["load"] = {
            ["input"] = "data",
            ["name"] = "load",
            ["points"] = {
              {
                ["args"] = {
                  ["params"] = {
                    {
                      ["kind"] = "param",
                      ["name"] = "id",
                      ["orig"] = "hostname",
                      ["reqd"] = true,
                      ["type"] = "`$STRING`",
                    },
                  },
                  ["query"] = {
                    {
                      ["example"] = "A",
                      ["kind"] = "query",
                      ["name"] = "rtype",
                      ["orig"] = "rtype",
                      ["type"] = "`$STRING`",
                    },
                  },
                },
                ["kind"] = "http",
                ["method"] = "GET",
                ["orig"] = "/api/geodns/{hostname}",
                ["parts"] = {
                  "api",
                  "geodns",
                  "{id}",
                },
                ["rename"] = {
                  ["param"] = {
                    ["hostname"] = "id",
                  },
                },
                ["select"] = {
                  ["exist"] = {
                    "id",
                    "rtype",
                  },
                },
                ["transform"] = {
                  ["req"] = "`reqdata`",
                  ["res"] = "`body`",
                },
              },
            },
          },
        },
        ["relations"] = {
          ["ancestors"] = {},
        },
      },
      ["geoping"] = {
        ["fields"] = {
          {
            ["name"] = "avg_rtt",
            ["req"] = true,
            ["type"] = "`$NUMBER`",
          },
          {
            ["name"] = "from_loc",
            ["req"] = true,
            ["short"] = "Location of the server that performed the ping",
            ["type"] = "`$ANY`",
          },
          {
            ["name"] = "ip",
            ["req"] = true,
            ["short"] = "IP address that was pinged",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "is_alive",
            ["req"] = true,
            ["type"] = "`$BOOLEAN`",
          },
          {
            ["name"] = "max_rtt",
            ["req"] = true,
            ["type"] = "`$NUMBER`",
          },
          {
            ["name"] = "min_rtt",
            ["req"] = true,
            ["type"] = "`$NUMBER`",
          },
          {
            ["name"] = "packet_loss",
            ["req"] = true,
            ["type"] = "`$NUMBER`",
          },
          {
            ["name"] = "packets_received",
            ["req"] = true,
            ["type"] = "`$INTEGER`",
          },
          {
            ["name"] = "packets_sent",
            ["req"] = true,
            ["type"] = "`$INTEGER`",
          },
          {
            ["name"] = "rtts",
            ["req"] = true,
            ["type"] = "`$ARRAY`",
          },
        },
        ["name"] = "geoping",
        ["op"] = {
          ["load"] = {
            ["input"] = "data",
            ["name"] = "load",
            ["points"] = {
              {
                ["args"] = {
                  ["params"] = {
                    {
                      ["kind"] = "param",
                      ["name"] = "id",
                      ["orig"] = "ip",
                      ["reqd"] = true,
                      ["type"] = "`$STRING`",
                    },
                  },
                },
                ["kind"] = "http",
                ["method"] = "GET",
                ["orig"] = "/api/geoping/{ip}",
                ["parts"] = {
                  "api",
                  "geoping",
                  "{id}",
                },
                ["rename"] = {
                  ["param"] = {
                    ["ip"] = "id",
                  },
                },
                ["select"] = {
                  ["exist"] = {
                    "id",
                  },
                },
                ["transform"] = {
                  ["req"] = "`reqdata`",
                  ["res"] = "`body`",
                },
              },
            },
          },
        },
        ["relations"] = {
          ["ancestors"] = {},
        },
      },
      ["ping"] = {
        ["fields"] = {
          {
            ["name"] = "avg_rtt",
            ["req"] = true,
            ["type"] = "`$NUMBER`",
          },
          {
            ["name"] = "from_loc",
            ["req"] = true,
            ["short"] = "Location of the server that performed the ping",
            ["type"] = "`$ANY`",
          },
          {
            ["name"] = "ip",
            ["req"] = true,
            ["short"] = "IP address that was pinged",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "is_alive",
            ["req"] = true,
            ["type"] = "`$BOOLEAN`",
          },
          {
            ["name"] = "max_rtt",
            ["req"] = true,
            ["type"] = "`$NUMBER`",
          },
          {
            ["name"] = "min_rtt",
            ["req"] = true,
            ["type"] = "`$NUMBER`",
          },
          {
            ["name"] = "packet_loss",
            ["req"] = true,
            ["type"] = "`$NUMBER`",
          },
          {
            ["name"] = "packets_received",
            ["req"] = true,
            ["type"] = "`$INTEGER`",
          },
          {
            ["name"] = "packets_sent",
            ["req"] = true,
            ["type"] = "`$INTEGER`",
          },
          {
            ["name"] = "rtts",
            ["req"] = true,
            ["type"] = "`$ARRAY`",
          },
        },
        ["name"] = "ping",
        ["op"] = {
          ["load"] = {
            ["input"] = "data",
            ["name"] = "load",
            ["points"] = {
              {
                ["args"] = {
                  ["params"] = {
                    {
                      ["kind"] = "param",
                      ["name"] = "id",
                      ["orig"] = "ip",
                      ["reqd"] = true,
                      ["type"] = "`$STRING`",
                    },
                  },
                },
                ["kind"] = "http",
                ["method"] = "GET",
                ["orig"] = "/api/ping/{ip}",
                ["parts"] = {
                  "api",
                  "ping",
                  "{id}",
                },
                ["rename"] = {
                  ["param"] = {
                    ["ip"] = "id",
                  },
                },
                ["select"] = {
                  ["exist"] = {
                    "id",
                  },
                },
                ["transform"] = {
                  ["req"] = "`reqdata`",
                  ["res"] = "`body`",
                },
              },
            },
          },
        },
        ["relations"] = {
          ["ancestors"] = {},
        },
      },
    },
  }
end


local function make_feature(name)
  local features = require("features")
  local factory = features[name]
  if factory ~= nil then
    return factory()
  end
  return features.base()
end


-- Attach make_feature to the SDK class
local function setup_sdk(SDK)
  SDK._make_feature = make_feature
end


return make_config

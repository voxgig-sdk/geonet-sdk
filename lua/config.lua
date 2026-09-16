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
      ["ratelimit"] = {
        ["options"] = {
          ["active"] = false,
          ["burst"] = 5,
          ["rate"] = 5,
        },
        ["optspec"] = {
          ["now"] = "`$FUNCTION`",
          ["sleep"] = "`$FUNCTION`",
        },
        ["strict"] = false,
        ["transport"] = "wrap",
      },
      ["retry"] = {
        ["options"] = {
          ["active"] = false,
          ["factor"] = 2,
          ["maxDelay"] = 2000,
          ["minDelay"] = 50,
          ["retries"] = 2,
          ["statuses"] = {
            408,
            425,
            429,
            500,
            502,
            503,
            504,
          },
        },
        ["optspec"] = {
          ["jitter"] = "`$BOOLEAN`",
          ["sleep"] = "`$FUNCTION`",
        },
        ["strict"] = false,
        ["transport"] = "wrap",
      },
      ["test"] = {
        ["options"] = {
          ["active"] = false,
        },
        ["optspec"] = {
          ["entity"] = "`$MAP`",
          ["net"] = "`$MAP`",
        },
        ["strict"] = false,
        ["transport"] = "base",
      },
      ["timeout"] = {
        ["options"] = {
          ["active"] = false,
          ["ms"] = 30000,
        },
        ["optspec"] = {
          ["clearTimer"] = "`$FUNCTION`",
          ["setTimer"] = "`$FUNCTION`",
        },
        ["strict"] = false,
        ["transport"] = "wrap",
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
          {
            ["name"] = "id",
            ["type"] = "`$STRING`",
          },
        },
        ["id"] = {
          ["field"] = "id",
          ["name"] = "id",
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
                ["rename"] = {
                  ["param"] = {
                    ["hostname"] = "id",
                  },
                },
                ["segments"] = {
                  {
                    ["lit"] = "api",
                  },
                  {
                    ["lit"] = "dns",
                  },
                  {
                    ["var"] = "id",
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
                ["parts"] = {
                  "api",
                  "dns",
                  "{id}",
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
          {
            ["name"] = "id",
            ["type"] = "`$STRING`",
          },
        },
        ["id"] = {
          ["field"] = "id",
          ["name"] = "id",
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
                ["rename"] = {
                  ["param"] = {
                    ["hostname"] = "id",
                  },
                },
                ["segments"] = {
                  {
                    ["lit"] = "api",
                  },
                  {
                    ["lit"] = "geodns",
                  },
                  {
                    ["var"] = "id",
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
                ["parts"] = {
                  "api",
                  "geodns",
                  "{id}",
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
            ["name"] = "id",
            ["type"] = "`$STRING`",
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
        ["id"] = {
          ["field"] = "id",
          ["name"] = "id",
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
                ["rename"] = {
                  ["param"] = {
                    ["ip"] = "id",
                  },
                },
                ["segments"] = {
                  {
                    ["lit"] = "api",
                  },
                  {
                    ["lit"] = "geoping",
                  },
                  {
                    ["var"] = "id",
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
                ["parts"] = {
                  "api",
                  "geoping",
                  "{id}",
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
            ["name"] = "id",
            ["type"] = "`$STRING`",
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
        ["id"] = {
          ["field"] = "id",
          ["name"] = "id",
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
                ["rename"] = {
                  ["param"] = {
                    ["ip"] = "id",
                  },
                },
                ["segments"] = {
                  {
                    ["lit"] = "api",
                  },
                  {
                    ["lit"] = "ping",
                  },
                  {
                    ["var"] = "id",
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
                ["parts"] = {
                  "api",
                  "ping",
                  "{id}",
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

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
            ["title"] = "Answers",
            ["type"] = "`$ARRAY`",
            ["req"] = true,
          },
          {
            ["name"] = "from_loc",
            ["title"] = "From Loc",
            ["type"] = "`$ANY`",
            ["req"] = true,
            ["short"] = "Location of the server that performed the DNS lookup",
          },
          {
            ["name"] = "id",
            ["title"] = "Id",
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
                ["kind"] = "http",
                ["method"] = "GET",
                ["orig"] = "/api/dns/{hostname}",
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
                ["transform"] = {
                  ["req"] = "`reqdata`",
                  ["res"] = "`body`",
                },
                ["args"] = {
                  ["params"] = {
                    {
                      ["name"] = "id",
                      ["orig"] = "hostname",
                      ["type"] = "`$STRING`",
                      ["kind"] = "param",
                      ["reqd"] = true,
                    },
                  },
                  ["query"] = {
                    {
                      ["name"] = "rtype",
                      ["orig"] = "rtype",
                      ["type"] = "`$STRING`",
                      ["kind"] = "query",
                      ["example"] = "A",
                    },
                  },
                },
                ["select"] = {
                  ["exist"] = {
                    "id",
                    "rtype",
                  },
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
            ["title"] = "Answers",
            ["type"] = "`$ARRAY`",
            ["req"] = true,
          },
          {
            ["name"] = "from_loc",
            ["title"] = "From Loc",
            ["type"] = "`$ANY`",
            ["req"] = true,
            ["short"] = "Location of the server that performed the DNS lookup",
          },
          {
            ["name"] = "id",
            ["title"] = "Id",
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
                ["kind"] = "http",
                ["method"] = "GET",
                ["orig"] = "/api/geodns/{hostname}",
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
                ["transform"] = {
                  ["req"] = "`reqdata`",
                  ["res"] = "`body`",
                },
                ["args"] = {
                  ["params"] = {
                    {
                      ["name"] = "id",
                      ["orig"] = "hostname",
                      ["type"] = "`$STRING`",
                      ["kind"] = "param",
                      ["reqd"] = true,
                    },
                  },
                  ["query"] = {
                    {
                      ["name"] = "rtype",
                      ["orig"] = "rtype",
                      ["type"] = "`$STRING`",
                      ["kind"] = "query",
                      ["example"] = "A",
                    },
                  },
                },
                ["select"] = {
                  ["exist"] = {
                    "id",
                    "rtype",
                  },
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
            ["title"] = "Avg Rtt",
            ["type"] = "`$NUMBER`",
            ["req"] = true,
          },
          {
            ["name"] = "from_loc",
            ["title"] = "From Loc",
            ["type"] = "`$ANY`",
            ["req"] = true,
            ["short"] = "Location of the server that performed the ping",
          },
          {
            ["name"] = "id",
            ["title"] = "Id",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "ip",
            ["title"] = "Ip",
            ["type"] = "`$STRING`",
            ["req"] = true,
            ["short"] = "IP address that was pinged",
          },
          {
            ["name"] = "is_alive",
            ["title"] = "Is Alive",
            ["type"] = "`$BOOLEAN`",
            ["req"] = true,
          },
          {
            ["name"] = "max_rtt",
            ["title"] = "Max Rtt",
            ["type"] = "`$NUMBER`",
            ["req"] = true,
          },
          {
            ["name"] = "min_rtt",
            ["title"] = "Min Rtt",
            ["type"] = "`$NUMBER`",
            ["req"] = true,
          },
          {
            ["name"] = "packet_loss",
            ["title"] = "Packet Loss",
            ["type"] = "`$NUMBER`",
            ["req"] = true,
          },
          {
            ["name"] = "packets_received",
            ["title"] = "Packets Received",
            ["type"] = "`$INTEGER`",
            ["req"] = true,
          },
          {
            ["name"] = "packets_sent",
            ["title"] = "Packets Sent",
            ["type"] = "`$INTEGER`",
            ["req"] = true,
          },
          {
            ["name"] = "rtts",
            ["title"] = "Rtts",
            ["type"] = "`$ARRAY`",
            ["req"] = true,
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
                ["kind"] = "http",
                ["method"] = "GET",
                ["orig"] = "/api/geoping/{ip}",
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
                ["transform"] = {
                  ["req"] = "`reqdata`",
                  ["res"] = "`body`",
                },
                ["args"] = {
                  ["params"] = {
                    {
                      ["name"] = "id",
                      ["orig"] = "ip",
                      ["type"] = "`$STRING`",
                      ["kind"] = "param",
                      ["reqd"] = true,
                    },
                  },
                },
                ["select"] = {
                  ["exist"] = {
                    "id",
                  },
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
            ["title"] = "Avg Rtt",
            ["type"] = "`$NUMBER`",
            ["req"] = true,
          },
          {
            ["name"] = "from_loc",
            ["title"] = "From Loc",
            ["type"] = "`$ANY`",
            ["req"] = true,
            ["short"] = "Location of the server that performed the ping",
          },
          {
            ["name"] = "id",
            ["title"] = "Id",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "ip",
            ["title"] = "Ip",
            ["type"] = "`$STRING`",
            ["req"] = true,
            ["short"] = "IP address that was pinged",
          },
          {
            ["name"] = "is_alive",
            ["title"] = "Is Alive",
            ["type"] = "`$BOOLEAN`",
            ["req"] = true,
          },
          {
            ["name"] = "max_rtt",
            ["title"] = "Max Rtt",
            ["type"] = "`$NUMBER`",
            ["req"] = true,
          },
          {
            ["name"] = "min_rtt",
            ["title"] = "Min Rtt",
            ["type"] = "`$NUMBER`",
            ["req"] = true,
          },
          {
            ["name"] = "packet_loss",
            ["title"] = "Packet Loss",
            ["type"] = "`$NUMBER`",
            ["req"] = true,
          },
          {
            ["name"] = "packets_received",
            ["title"] = "Packets Received",
            ["type"] = "`$INTEGER`",
            ["req"] = true,
          },
          {
            ["name"] = "packets_sent",
            ["title"] = "Packets Sent",
            ["type"] = "`$INTEGER`",
            ["req"] = true,
          },
          {
            ["name"] = "rtts",
            ["title"] = "Rtts",
            ["type"] = "`$ARRAY`",
            ["req"] = true,
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
                ["kind"] = "http",
                ["method"] = "GET",
                ["orig"] = "/api/ping/{ip}",
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
                ["transform"] = {
                  ["req"] = "`reqdata`",
                  ["res"] = "`body`",
                },
                ["args"] = {
                  ["params"] = {
                    {
                      ["name"] = "id",
                      ["orig"] = "ip",
                      ["type"] = "`$STRING`",
                      ["kind"] = "param",
                      ["reqd"] = true,
                    },
                  },
                },
                ["select"] = {
                  ["exist"] = {
                    "id",
                  },
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

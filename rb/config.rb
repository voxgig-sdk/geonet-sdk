# Geonet SDK configuration

module GeonetConfig
  def self.make_config
    {
      "main" => {
        "name" => "Geonet",
      },
      "feature" => {
        "test" => {
          "options" => {
            "active" => false,
          },
        },
      },
      "options" => {
        "base" => "https://geonet.shodan.io",
        "headers" => {
          "content-type" => "application/json",
        },
        "entity" => {
          "dns" => {},
          "geodn" => {},
          "geoping" => {},
          "ping" => {},
        },
      },
      "entity" => {
        "dns" => {
          "fields" => [
            {
              "active" => true,
              "name" => "answers",
              "req" => true,
              "type" => "`$ARRAY`",
              "index$" => 0,
            },
            {
              "active" => true,
              "name" => "from_loc",
              "req" => true,
              "type" => "`$ANY`",
              "index$" => 1,
            },
          ],
          "name" => "dns",
          "op" => {
            "load" => {
              "input" => "data",
              "name" => "load",
              "points" => [
                {
                  "active" => true,
                  "args" => {
                    "params" => [
                      {
                        "active" => true,
                        "kind" => "param",
                        "name" => "id",
                        "orig" => "hostname",
                        "reqd" => true,
                        "type" => "`$STRING`",
                        "index$" => 0,
                      },
                    ],
                    "query" => [
                      {
                        "active" => true,
                        "example" => "A",
                        "kind" => "query",
                        "name" => "rtype",
                        "orig" => "rtype",
                        "reqd" => false,
                        "type" => "`$STRING`",
                      },
                    ],
                  },
                  "kind" => "http",
                  "method" => "GET",
                  "orig" => "/api/dns/{hostname}",
                  "parts" => [
                    "api",
                    "dns",
                    "{id}",
                  ],
                  "rename" => {
                    "param" => {
                      "hostname" => "id",
                    },
                  },
                  "select" => {
                    "exist" => [
                      "id",
                      "rtype",
                    ],
                  },
                  "transform" => {
                    "req" => "`reqdata`",
                    "res" => "`body`",
                  },
                  "index$" => 0,
                },
              ],
              "key$" => "load",
            },
          },
          "relations" => {
            "ancestors" => [],
          },
        },
        "geodn" => {
          "fields" => [
            {
              "active" => true,
              "name" => "answers",
              "req" => true,
              "type" => "`$ARRAY`",
              "index$" => 0,
            },
            {
              "active" => true,
              "name" => "from_loc",
              "req" => true,
              "type" => "`$ANY`",
              "index$" => 1,
            },
          ],
          "name" => "geodn",
          "op" => {
            "load" => {
              "input" => "data",
              "name" => "load",
              "points" => [
                {
                  "active" => true,
                  "args" => {
                    "params" => [
                      {
                        "active" => true,
                        "kind" => "param",
                        "name" => "id",
                        "orig" => "hostname",
                        "reqd" => true,
                        "type" => "`$STRING`",
                        "index$" => 0,
                      },
                    ],
                    "query" => [
                      {
                        "active" => true,
                        "example" => "A",
                        "kind" => "query",
                        "name" => "rtype",
                        "orig" => "rtype",
                        "reqd" => false,
                        "type" => "`$STRING`",
                      },
                    ],
                  },
                  "kind" => "http",
                  "method" => "GET",
                  "orig" => "/api/geodns/{hostname}",
                  "parts" => [
                    "api",
                    "geodns",
                    "{id}",
                  ],
                  "rename" => {
                    "param" => {
                      "hostname" => "id",
                    },
                  },
                  "select" => {
                    "exist" => [
                      "id",
                      "rtype",
                    ],
                  },
                  "transform" => {
                    "req" => "`reqdata`",
                    "res" => "`body`",
                  },
                  "index$" => 0,
                },
              ],
              "key$" => "load",
            },
          },
          "relations" => {
            "ancestors" => [],
          },
        },
        "geoping" => {
          "fields" => [
            {
              "active" => true,
              "name" => "avg_rtt",
              "req" => true,
              "type" => "`$NUMBER`",
              "index$" => 0,
            },
            {
              "active" => true,
              "name" => "from_loc",
              "req" => true,
              "type" => "`$ANY`",
              "index$" => 1,
            },
            {
              "active" => true,
              "name" => "ip",
              "req" => true,
              "type" => "`$STRING`",
              "index$" => 2,
            },
            {
              "active" => true,
              "name" => "is_alive",
              "req" => true,
              "type" => "`$BOOLEAN`",
              "index$" => 3,
            },
            {
              "active" => true,
              "name" => "max_rtt",
              "req" => true,
              "type" => "`$NUMBER`",
              "index$" => 4,
            },
            {
              "active" => true,
              "name" => "min_rtt",
              "req" => true,
              "type" => "`$NUMBER`",
              "index$" => 5,
            },
            {
              "active" => true,
              "name" => "packet_loss",
              "req" => true,
              "type" => "`$NUMBER`",
              "index$" => 6,
            },
            {
              "active" => true,
              "name" => "packets_received",
              "req" => true,
              "type" => "`$INTEGER`",
              "index$" => 7,
            },
            {
              "active" => true,
              "name" => "packets_sent",
              "req" => true,
              "type" => "`$INTEGER`",
              "index$" => 8,
            },
            {
              "active" => true,
              "name" => "rtts",
              "req" => true,
              "type" => "`$ARRAY`",
              "index$" => 9,
            },
          ],
          "name" => "geoping",
          "op" => {
            "load" => {
              "input" => "data",
              "name" => "load",
              "points" => [
                {
                  "active" => true,
                  "args" => {
                    "params" => [
                      {
                        "active" => true,
                        "kind" => "param",
                        "name" => "id",
                        "orig" => "ip",
                        "reqd" => true,
                        "type" => "`$STRING`",
                        "index$" => 0,
                      },
                    ],
                  },
                  "kind" => "http",
                  "method" => "GET",
                  "orig" => "/api/geoping/{ip}",
                  "parts" => [
                    "api",
                    "geoping",
                    "{id}",
                  ],
                  "rename" => {
                    "param" => {
                      "ip" => "id",
                    },
                  },
                  "select" => {
                    "exist" => [
                      "id",
                    ],
                  },
                  "transform" => {
                    "req" => "`reqdata`",
                    "res" => "`body`",
                  },
                  "index$" => 0,
                },
              ],
              "key$" => "load",
            },
          },
          "relations" => {
            "ancestors" => [],
          },
        },
        "ping" => {
          "fields" => [
            {
              "active" => true,
              "name" => "avg_rtt",
              "req" => true,
              "type" => "`$NUMBER`",
              "index$" => 0,
            },
            {
              "active" => true,
              "name" => "from_loc",
              "req" => true,
              "type" => "`$ANY`",
              "index$" => 1,
            },
            {
              "active" => true,
              "name" => "ip",
              "req" => true,
              "type" => "`$STRING`",
              "index$" => 2,
            },
            {
              "active" => true,
              "name" => "is_alive",
              "req" => true,
              "type" => "`$BOOLEAN`",
              "index$" => 3,
            },
            {
              "active" => true,
              "name" => "max_rtt",
              "req" => true,
              "type" => "`$NUMBER`",
              "index$" => 4,
            },
            {
              "active" => true,
              "name" => "min_rtt",
              "req" => true,
              "type" => "`$NUMBER`",
              "index$" => 5,
            },
            {
              "active" => true,
              "name" => "packet_loss",
              "req" => true,
              "type" => "`$NUMBER`",
              "index$" => 6,
            },
            {
              "active" => true,
              "name" => "packets_received",
              "req" => true,
              "type" => "`$INTEGER`",
              "index$" => 7,
            },
            {
              "active" => true,
              "name" => "packets_sent",
              "req" => true,
              "type" => "`$INTEGER`",
              "index$" => 8,
            },
            {
              "active" => true,
              "name" => "rtts",
              "req" => true,
              "type" => "`$ARRAY`",
              "index$" => 9,
            },
          ],
          "name" => "ping",
          "op" => {
            "load" => {
              "input" => "data",
              "name" => "load",
              "points" => [
                {
                  "active" => true,
                  "args" => {
                    "params" => [
                      {
                        "active" => true,
                        "kind" => "param",
                        "name" => "id",
                        "orig" => "ip",
                        "reqd" => true,
                        "type" => "`$STRING`",
                        "index$" => 0,
                      },
                    ],
                  },
                  "kind" => "http",
                  "method" => "GET",
                  "orig" => "/api/ping/{ip}",
                  "parts" => [
                    "api",
                    "ping",
                    "{id}",
                  ],
                  "rename" => {
                    "param" => {
                      "ip" => "id",
                    },
                  },
                  "select" => {
                    "exist" => [
                      "id",
                    ],
                  },
                  "transform" => {
                    "req" => "`reqdata`",
                    "res" => "`body`",
                  },
                  "index$" => 0,
                },
              ],
              "key$" => "load",
            },
          },
          "relations" => {
            "ancestors" => [],
          },
        },
      },
    }
  end


  def self.make_feature(name)
    require_relative 'features'
    GeonetFeatures.make_feature(name)
  end
end

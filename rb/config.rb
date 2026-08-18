# Geonet SDK configuration

module GeonetConfig
  # Return the process-wide config, built once on first use. The SDK reads
  # the config on every request and never writes to it, so one instance is
  # shared by every client rather than rebuilt per client.
  #
  # The returned hash is shared: treat it as read-only. Callers that need to
  # mutate should use make_config, which always returns a fresh copy.
  def self.shared_config
    @shared_config ||= make_config
  end


  # Build a fresh, fully materialised config hash. Every call rebuilds the
  # whole structure, so prefer shared_config unless you need a private copy
  # you intend to mutate.
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
              "name" => "answers",
              "req" => true,
              "type" => "`$ARRAY`",
            },
            {
              "name" => "from_loc",
              "req" => true,
              "type" => "`$ANY`",
            },
          ],
          "name" => "dns",
          "op" => {
            "load" => {
              "input" => "data",
              "name" => "load",
              "points" => [
                {
                  "args" => {
                    "params" => [
                      {
                        "kind" => "param",
                        "name" => "id",
                        "orig" => "hostname",
                        "reqd" => true,
                        "type" => "`$STRING`",
                      },
                    ],
                    "query" => [
                      {
                        "example" => "A",
                        "kind" => "query",
                        "name" => "rtype",
                        "orig" => "rtype",
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
                },
              ],
            },
          },
          "relations" => {
            "ancestors" => [],
          },
        },
        "geodn" => {
          "fields" => [
            {
              "name" => "answers",
              "req" => true,
              "type" => "`$ARRAY`",
            },
            {
              "name" => "from_loc",
              "req" => true,
              "type" => "`$ANY`",
            },
          ],
          "name" => "geodn",
          "op" => {
            "load" => {
              "input" => "data",
              "name" => "load",
              "points" => [
                {
                  "args" => {
                    "params" => [
                      {
                        "kind" => "param",
                        "name" => "id",
                        "orig" => "hostname",
                        "reqd" => true,
                        "type" => "`$STRING`",
                      },
                    ],
                    "query" => [
                      {
                        "example" => "A",
                        "kind" => "query",
                        "name" => "rtype",
                        "orig" => "rtype",
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
                },
              ],
            },
          },
          "relations" => {
            "ancestors" => [],
          },
        },
        "geoping" => {
          "fields" => [
            {
              "name" => "avg_rtt",
              "req" => true,
              "type" => "`$NUMBER`",
            },
            {
              "name" => "from_loc",
              "req" => true,
              "type" => "`$ANY`",
            },
            {
              "name" => "ip",
              "req" => true,
              "type" => "`$STRING`",
            },
            {
              "name" => "is_alive",
              "req" => true,
              "type" => "`$BOOLEAN`",
            },
            {
              "name" => "max_rtt",
              "req" => true,
              "type" => "`$NUMBER`",
            },
            {
              "name" => "min_rtt",
              "req" => true,
              "type" => "`$NUMBER`",
            },
            {
              "name" => "packet_loss",
              "req" => true,
              "type" => "`$NUMBER`",
            },
            {
              "name" => "packets_received",
              "req" => true,
              "type" => "`$INTEGER`",
            },
            {
              "name" => "packets_sent",
              "req" => true,
              "type" => "`$INTEGER`",
            },
            {
              "name" => "rtts",
              "req" => true,
              "type" => "`$ARRAY`",
            },
          ],
          "name" => "geoping",
          "op" => {
            "load" => {
              "input" => "data",
              "name" => "load",
              "points" => [
                {
                  "args" => {
                    "params" => [
                      {
                        "kind" => "param",
                        "name" => "id",
                        "orig" => "ip",
                        "reqd" => true,
                        "type" => "`$STRING`",
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
                },
              ],
            },
          },
          "relations" => {
            "ancestors" => [],
          },
        },
        "ping" => {
          "fields" => [
            {
              "name" => "avg_rtt",
              "req" => true,
              "type" => "`$NUMBER`",
            },
            {
              "name" => "from_loc",
              "req" => true,
              "type" => "`$ANY`",
            },
            {
              "name" => "ip",
              "req" => true,
              "type" => "`$STRING`",
            },
            {
              "name" => "is_alive",
              "req" => true,
              "type" => "`$BOOLEAN`",
            },
            {
              "name" => "max_rtt",
              "req" => true,
              "type" => "`$NUMBER`",
            },
            {
              "name" => "min_rtt",
              "req" => true,
              "type" => "`$NUMBER`",
            },
            {
              "name" => "packet_loss",
              "req" => true,
              "type" => "`$NUMBER`",
            },
            {
              "name" => "packets_received",
              "req" => true,
              "type" => "`$INTEGER`",
            },
            {
              "name" => "packets_sent",
              "req" => true,
              "type" => "`$INTEGER`",
            },
            {
              "name" => "rtts",
              "req" => true,
              "type" => "`$ARRAY`",
            },
          ],
          "name" => "ping",
          "op" => {
            "load" => {
              "input" => "data",
              "name" => "load",
              "points" => [
                {
                  "args" => {
                    "params" => [
                      {
                        "kind" => "param",
                        "name" => "id",
                        "orig" => "ip",
                        "reqd" => true,
                        "type" => "`$STRING`",
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
                },
              ],
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

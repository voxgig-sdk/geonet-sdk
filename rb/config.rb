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
        "slug" => "geonet",
        "version" => "0.0.1",
        "target" => "rb",
      },
      "feature" => {
        "test" => {
          "options" => {
            "active" => false,
          },
          "transport" => "base",
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
              "short" => "Location of the server that performed the DNS lookup",
              "type" => "`$ANY`",
            },
            {
              "name" => "id",
              "type" => "`$STRING`",
            },
          ],
          "id" => {
            "field" => "id",
            "name" => "id",
          },
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
                  "rename" => {
                    "param" => {
                      "hostname" => "id",
                    },
                  },
                  "segments" => [
                    {
                      "lit" => "api",
                    },
                    {
                      "lit" => "dns",
                    },
                    {
                      "var" => "id",
                    },
                  ],
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
                  "parts" => [
                    "api",
                    "dns",
                    "{id}",
                  ],
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
              "short" => "Location of the server that performed the DNS lookup",
              "type" => "`$ANY`",
            },
            {
              "name" => "id",
              "type" => "`$STRING`",
            },
          ],
          "id" => {
            "field" => "id",
            "name" => "id",
          },
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
                  "rename" => {
                    "param" => {
                      "hostname" => "id",
                    },
                  },
                  "segments" => [
                    {
                      "lit" => "api",
                    },
                    {
                      "lit" => "geodns",
                    },
                    {
                      "var" => "id",
                    },
                  ],
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
                  "parts" => [
                    "api",
                    "geodns",
                    "{id}",
                  ],
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
              "short" => "Location of the server that performed the ping",
              "type" => "`$ANY`",
            },
            {
              "name" => "id",
              "type" => "`$STRING`",
            },
            {
              "name" => "ip",
              "req" => true,
              "short" => "IP address that was pinged",
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
          "id" => {
            "field" => "id",
            "name" => "id",
          },
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
                  "rename" => {
                    "param" => {
                      "ip" => "id",
                    },
                  },
                  "segments" => [
                    {
                      "lit" => "api",
                    },
                    {
                      "lit" => "geoping",
                    },
                    {
                      "var" => "id",
                    },
                  ],
                  "select" => {
                    "exist" => [
                      "id",
                    ],
                  },
                  "transform" => {
                    "req" => "`reqdata`",
                    "res" => "`body`",
                  },
                  "parts" => [
                    "api",
                    "geoping",
                    "{id}",
                  ],
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
              "short" => "Location of the server that performed the ping",
              "type" => "`$ANY`",
            },
            {
              "name" => "id",
              "type" => "`$STRING`",
            },
            {
              "name" => "ip",
              "req" => true,
              "short" => "IP address that was pinged",
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
          "id" => {
            "field" => "id",
            "name" => "id",
          },
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
                  "rename" => {
                    "param" => {
                      "ip" => "id",
                    },
                  },
                  "segments" => [
                    {
                      "lit" => "api",
                    },
                    {
                      "lit" => "ping",
                    },
                    {
                      "var" => "id",
                    },
                  ],
                  "select" => {
                    "exist" => [
                      "id",
                    ],
                  },
                  "transform" => {
                    "req" => "`reqdata`",
                    "res" => "`body`",
                  },
                  "parts" => [
                    "api",
                    "ping",
                    "{id}",
                  ],
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

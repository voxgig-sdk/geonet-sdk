# Geonet SDK configuration


# The sekreto plugin DEFINITIONS the model selected per feature, imported
# above by name from the modules the catalogue's active `plugin.def`
# entries declare. Handed to each feature (secrets builds its Sekreto
# with them): a provider kind not listed here is unknown to that SDK.
FEATURE_PLUGINS = {
}


_shared_config = None


def shared_config():
    """Return the process-wide config, built once on first use.

    The SDK reads the config on every request and never writes to it, so one
    instance is shared by every client rather than rebuilt per client.

    The returned dict is shared: treat it as read-only. Callers that need to
    mutate should use make_config, which always returns a fresh copy.
    """
    global _shared_config
    if _shared_config is None:
        _shared_config = make_config()
    return _shared_config


def make_config():
    """Build a fresh, fully materialised config dict.

    Every call rebuilds the whole structure, so prefer shared_config unless
    you need a private copy you intend to mutate.
    """
    return {
        "main": {
            "name": "Geonet",
            "slug": "geonet",
            "version": "0.0.1",
            "target": "py",
        },
        "feature": {
            "ratelimit": {
        "options": {
          "active": False,
          "burst": 5,
          "rate": 5,
        },
        "optspec": {
          "now": "`$FUNCTION`",
          "sleep": "`$FUNCTION`",
        },
        "strict": False,
        "transport": "wrap",
      },
            "retry": {
        "options": {
          "active": False,
          "factor": 2,
          "maxDelay": 2000,
          "minDelay": 50,
          "retries": 2,
          "statuses": [
            408,
            425,
            429,
            500,
            502,
            503,
            504,
          ],
        },
        "optspec": {
          "jitter": "`$BOOLEAN`",
          "sleep": "`$FUNCTION`",
        },
        "strict": False,
        "transport": "wrap",
      },
            "test": {
        "options": {
          "active": False,
        },
        "optspec": {
          "entity": "`$MAP`",
          "net": "`$MAP`",
        },
        "strict": False,
        "transport": "base",
      },
            "timeout": {
        "options": {
          "active": False,
          "ms": 30000,
        },
        "optspec": {
          "clearTimer": "`$FUNCTION`",
          "setTimer": "`$FUNCTION`",
        },
        "strict": False,
        "transport": "wrap",
      },
        },
        "options": {
            "base": "https://geonet.shodan.io",
            "headers": {
        "content-type": "application/json",
      },
            "entity": {
                "dns": {},
                "geodn": {},
                "geoping": {},
                "ping": {},
            },
        },
        "entity": {
      "dns": {
        "fields": [
          {
            "name": "answers",
            "title": "Answers",
            "type": "`$ARRAY`",
            "req": True,
          },
          {
            "name": "from_loc",
            "title": "From Loc",
            "type": "`$ANY`",
            "req": True,
            "short": "Location of the server that performed the DNS lookup",
          },
          {
            "name": "id",
            "title": "Id",
            "type": "`$STRING`",
          },
        ],
        "id": {
          "field": "id",
          "name": "id",
        },
        "name": "dns",
        "op": {
          "load": {
            "input": "data",
            "name": "load",
            "points": [
              {
                "kind": "http",
                "method": "GET",
                "orig": "/api/dns/{hostname}",
                "segments": [
                  {
                    "lit": "api",
                  },
                  {
                    "lit": "dns",
                  },
                  {
                    "var": "id",
                  },
                ],
                "parts": [
                  "api",
                  "dns",
                  "{id}",
                ],
                "rename": {
                  "param": {
                    "hostname": "id",
                  },
                },
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body`",
                },
                "args": {
                  "params": [
                    {
                      "name": "id",
                      "orig": "hostname",
                      "type": "`$STRING`",
                      "kind": "param",
                      "reqd": True,
                    },
                  ],
                  "query": [
                    {
                      "name": "rtype",
                      "orig": "rtype",
                      "type": "`$STRING`",
                      "kind": "query",
                      "example": "A",
                    },
                  ],
                },
                "select": {
                  "exist": [
                    "id",
                    "rtype",
                  ],
                },
              },
            ],
          },
        },
        "relations": {
          "ancestors": [],
        },
      },
      "geodn": {
        "fields": [
          {
            "name": "answers",
            "title": "Answers",
            "type": "`$ARRAY`",
            "req": True,
          },
          {
            "name": "from_loc",
            "title": "From Loc",
            "type": "`$ANY`",
            "req": True,
            "short": "Location of the server that performed the DNS lookup",
          },
          {
            "name": "id",
            "title": "Id",
            "type": "`$STRING`",
          },
        ],
        "id": {
          "field": "id",
          "name": "id",
        },
        "name": "geodn",
        "op": {
          "load": {
            "input": "data",
            "name": "load",
            "points": [
              {
                "kind": "http",
                "method": "GET",
                "orig": "/api/geodns/{hostname}",
                "segments": [
                  {
                    "lit": "api",
                  },
                  {
                    "lit": "geodns",
                  },
                  {
                    "var": "id",
                  },
                ],
                "parts": [
                  "api",
                  "geodns",
                  "{id}",
                ],
                "rename": {
                  "param": {
                    "hostname": "id",
                  },
                },
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body`",
                },
                "args": {
                  "params": [
                    {
                      "name": "id",
                      "orig": "hostname",
                      "type": "`$STRING`",
                      "kind": "param",
                      "reqd": True,
                    },
                  ],
                  "query": [
                    {
                      "name": "rtype",
                      "orig": "rtype",
                      "type": "`$STRING`",
                      "kind": "query",
                      "example": "A",
                    },
                  ],
                },
                "select": {
                  "exist": [
                    "id",
                    "rtype",
                  ],
                },
              },
            ],
          },
        },
        "relations": {
          "ancestors": [],
        },
      },
      "geoping": {
        "fields": [
          {
            "name": "avg_rtt",
            "title": "Avg Rtt",
            "type": "`$NUMBER`",
            "req": True,
          },
          {
            "name": "from_loc",
            "title": "From Loc",
            "type": "`$ANY`",
            "req": True,
            "short": "Location of the server that performed the ping",
          },
          {
            "name": "id",
            "title": "Id",
            "type": "`$STRING`",
          },
          {
            "name": "ip",
            "title": "Ip",
            "type": "`$STRING`",
            "req": True,
            "short": "IP address that was pinged",
          },
          {
            "name": "is_alive",
            "title": "Is Alive",
            "type": "`$BOOLEAN`",
            "req": True,
          },
          {
            "name": "max_rtt",
            "title": "Max Rtt",
            "type": "`$NUMBER`",
            "req": True,
          },
          {
            "name": "min_rtt",
            "title": "Min Rtt",
            "type": "`$NUMBER`",
            "req": True,
          },
          {
            "name": "packet_loss",
            "title": "Packet Loss",
            "type": "`$NUMBER`",
            "req": True,
          },
          {
            "name": "packets_received",
            "title": "Packets Received",
            "type": "`$INTEGER`",
            "req": True,
          },
          {
            "name": "packets_sent",
            "title": "Packets Sent",
            "type": "`$INTEGER`",
            "req": True,
          },
          {
            "name": "rtts",
            "title": "Rtts",
            "type": "`$ARRAY`",
            "req": True,
          },
        ],
        "id": {
          "field": "id",
          "name": "id",
        },
        "name": "geoping",
        "op": {
          "load": {
            "input": "data",
            "name": "load",
            "points": [
              {
                "kind": "http",
                "method": "GET",
                "orig": "/api/geoping/{ip}",
                "segments": [
                  {
                    "lit": "api",
                  },
                  {
                    "lit": "geoping",
                  },
                  {
                    "var": "id",
                  },
                ],
                "parts": [
                  "api",
                  "geoping",
                  "{id}",
                ],
                "rename": {
                  "param": {
                    "ip": "id",
                  },
                },
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body`",
                },
                "args": {
                  "params": [
                    {
                      "name": "id",
                      "orig": "ip",
                      "type": "`$STRING`",
                      "kind": "param",
                      "reqd": True,
                    },
                  ],
                },
                "select": {
                  "exist": [
                    "id",
                  ],
                },
              },
            ],
          },
        },
        "relations": {
          "ancestors": [],
        },
      },
      "ping": {
        "fields": [
          {
            "name": "avg_rtt",
            "title": "Avg Rtt",
            "type": "`$NUMBER`",
            "req": True,
          },
          {
            "name": "from_loc",
            "title": "From Loc",
            "type": "`$ANY`",
            "req": True,
            "short": "Location of the server that performed the ping",
          },
          {
            "name": "id",
            "title": "Id",
            "type": "`$STRING`",
          },
          {
            "name": "ip",
            "title": "Ip",
            "type": "`$STRING`",
            "req": True,
            "short": "IP address that was pinged",
          },
          {
            "name": "is_alive",
            "title": "Is Alive",
            "type": "`$BOOLEAN`",
            "req": True,
          },
          {
            "name": "max_rtt",
            "title": "Max Rtt",
            "type": "`$NUMBER`",
            "req": True,
          },
          {
            "name": "min_rtt",
            "title": "Min Rtt",
            "type": "`$NUMBER`",
            "req": True,
          },
          {
            "name": "packet_loss",
            "title": "Packet Loss",
            "type": "`$NUMBER`",
            "req": True,
          },
          {
            "name": "packets_received",
            "title": "Packets Received",
            "type": "`$INTEGER`",
            "req": True,
          },
          {
            "name": "packets_sent",
            "title": "Packets Sent",
            "type": "`$INTEGER`",
            "req": True,
          },
          {
            "name": "rtts",
            "title": "Rtts",
            "type": "`$ARRAY`",
            "req": True,
          },
        ],
        "id": {
          "field": "id",
          "name": "id",
        },
        "name": "ping",
        "op": {
          "load": {
            "input": "data",
            "name": "load",
            "points": [
              {
                "kind": "http",
                "method": "GET",
                "orig": "/api/ping/{ip}",
                "segments": [
                  {
                    "lit": "api",
                  },
                  {
                    "lit": "ping",
                  },
                  {
                    "var": "id",
                  },
                ],
                "parts": [
                  "api",
                  "ping",
                  "{id}",
                ],
                "rename": {
                  "param": {
                    "ip": "id",
                  },
                },
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body`",
                },
                "args": {
                  "params": [
                    {
                      "name": "id",
                      "orig": "ip",
                      "type": "`$STRING`",
                      "kind": "param",
                      "reqd": True,
                    },
                  ],
                },
                "select": {
                  "exist": [
                    "id",
                  ],
                },
              },
            ],
          },
        },
        "relations": {
          "ancestors": [],
        },
      },
    },
    }

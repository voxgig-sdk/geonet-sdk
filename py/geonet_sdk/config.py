# Geonet SDK configuration


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
            "test": {
        "options": {
          "active": False,
        },
        "transport": "base",
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
            "req": True,
            "type": "`$ARRAY`",
          },
          {
            "name": "from_loc",
            "req": True,
            "short": "Location of the server that performed the DNS lookup",
            "type": "`$ANY`",
          },
          {
            "name": "id",
            "type": "`$STRING`",
          },
        ],
        "name": "dns",
        "op": {
          "load": {
            "input": "data",
            "name": "load",
            "points": [
              {
                "args": {
                  "params": [
                    {
                      "kind": "param",
                      "name": "id",
                      "orig": "hostname",
                      "reqd": True,
                      "type": "`$STRING`",
                    },
                  ],
                  "query": [
                    {
                      "example": "A",
                      "kind": "query",
                      "name": "rtype",
                      "orig": "rtype",
                      "type": "`$STRING`",
                    },
                  ],
                },
                "kind": "http",
                "method": "GET",
                "orig": "/api/dns/{hostname}",
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
                "select": {
                  "exist": [
                    "id",
                    "rtype",
                  ],
                },
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body`",
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
            "req": True,
            "type": "`$ARRAY`",
          },
          {
            "name": "from_loc",
            "req": True,
            "short": "Location of the server that performed the DNS lookup",
            "type": "`$ANY`",
          },
          {
            "name": "id",
            "type": "`$STRING`",
          },
        ],
        "name": "geodn",
        "op": {
          "load": {
            "input": "data",
            "name": "load",
            "points": [
              {
                "args": {
                  "params": [
                    {
                      "kind": "param",
                      "name": "id",
                      "orig": "hostname",
                      "reqd": True,
                      "type": "`$STRING`",
                    },
                  ],
                  "query": [
                    {
                      "example": "A",
                      "kind": "query",
                      "name": "rtype",
                      "orig": "rtype",
                      "type": "`$STRING`",
                    },
                  ],
                },
                "kind": "http",
                "method": "GET",
                "orig": "/api/geodns/{hostname}",
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
                "select": {
                  "exist": [
                    "id",
                    "rtype",
                  ],
                },
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body`",
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
            "req": True,
            "type": "`$NUMBER`",
          },
          {
            "name": "from_loc",
            "req": True,
            "short": "Location of the server that performed the ping",
            "type": "`$ANY`",
          },
          {
            "name": "id",
            "type": "`$STRING`",
          },
          {
            "name": "ip",
            "req": True,
            "short": "IP address that was pinged",
            "type": "`$STRING`",
          },
          {
            "name": "is_alive",
            "req": True,
            "type": "`$BOOLEAN`",
          },
          {
            "name": "max_rtt",
            "req": True,
            "type": "`$NUMBER`",
          },
          {
            "name": "min_rtt",
            "req": True,
            "type": "`$NUMBER`",
          },
          {
            "name": "packet_loss",
            "req": True,
            "type": "`$NUMBER`",
          },
          {
            "name": "packets_received",
            "req": True,
            "type": "`$INTEGER`",
          },
          {
            "name": "packets_sent",
            "req": True,
            "type": "`$INTEGER`",
          },
          {
            "name": "rtts",
            "req": True,
            "type": "`$ARRAY`",
          },
        ],
        "name": "geoping",
        "op": {
          "load": {
            "input": "data",
            "name": "load",
            "points": [
              {
                "args": {
                  "params": [
                    {
                      "kind": "param",
                      "name": "id",
                      "orig": "ip",
                      "reqd": True,
                      "type": "`$STRING`",
                    },
                  ],
                },
                "kind": "http",
                "method": "GET",
                "orig": "/api/geoping/{ip}",
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
                "select": {
                  "exist": [
                    "id",
                  ],
                },
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body`",
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
            "req": True,
            "type": "`$NUMBER`",
          },
          {
            "name": "from_loc",
            "req": True,
            "short": "Location of the server that performed the ping",
            "type": "`$ANY`",
          },
          {
            "name": "id",
            "type": "`$STRING`",
          },
          {
            "name": "ip",
            "req": True,
            "short": "IP address that was pinged",
            "type": "`$STRING`",
          },
          {
            "name": "is_alive",
            "req": True,
            "type": "`$BOOLEAN`",
          },
          {
            "name": "max_rtt",
            "req": True,
            "type": "`$NUMBER`",
          },
          {
            "name": "min_rtt",
            "req": True,
            "type": "`$NUMBER`",
          },
          {
            "name": "packet_loss",
            "req": True,
            "type": "`$NUMBER`",
          },
          {
            "name": "packets_received",
            "req": True,
            "type": "`$INTEGER`",
          },
          {
            "name": "packets_sent",
            "req": True,
            "type": "`$INTEGER`",
          },
          {
            "name": "rtts",
            "req": True,
            "type": "`$ARRAY`",
          },
        ],
        "name": "ping",
        "op": {
          "load": {
            "input": "data",
            "name": "load",
            "points": [
              {
                "args": {
                  "params": [
                    {
                      "kind": "param",
                      "name": "id",
                      "orig": "ip",
                      "reqd": True,
                      "type": "`$STRING`",
                    },
                  ],
                },
                "kind": "http",
                "method": "GET",
                "orig": "/api/ping/{ip}",
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
                "select": {
                  "exist": [
                    "id",
                  ],
                },
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body`",
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

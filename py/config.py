# Geonet SDK configuration


def make_config():
    return {
        "main": {
            "name": "Geonet",
        },
        "feature": {
            "test": {
        "options": {
          "active": False,
        },
      },
        },
        "options": {
            "base": "https://geonet.shodan.io",
            "auth": {
                "prefix": "Bearer",
            },
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
            "active": True,
            "name": "answer",
            "req": True,
            "type": "`$ARRAY`",
            "index$": 0,
          },
          {
            "active": True,
            "name": "from_loc",
            "req": True,
            "type": "`$ANY`",
            "index$": 1,
          },
        ],
        "name": "dns",
        "op": {
          "load": {
            "input": "data",
            "name": "load",
            "points": [
              {
                "active": True,
                "args": {
                  "params": [
                    {
                      "active": True,
                      "kind": "param",
                      "name": "id",
                      "orig": "hostname",
                      "reqd": True,
                      "type": "`$STRING`",
                    },
                  ],
                  "query": [
                    {
                      "active": True,
                      "example": "A",
                      "kind": "query",
                      "name": "rtype",
                      "orig": "rtype",
                      "reqd": False,
                      "type": "`$STRING`",
                    },
                  ],
                },
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
                "index$": 0,
              },
            ],
            "key$": "load",
          },
        },
        "relations": {
          "ancestors": [],
        },
      },
      "geodn": {
        "fields": [
          {
            "active": True,
            "name": "answer",
            "req": True,
            "type": "`$ARRAY`",
            "index$": 0,
          },
          {
            "active": True,
            "name": "from_loc",
            "req": True,
            "type": "`$ANY`",
            "index$": 1,
          },
        ],
        "name": "geodn",
        "op": {
          "load": {
            "input": "data",
            "name": "load",
            "points": [
              {
                "active": True,
                "args": {
                  "params": [
                    {
                      "active": True,
                      "kind": "param",
                      "name": "id",
                      "orig": "hostname",
                      "reqd": True,
                      "type": "`$STRING`",
                    },
                  ],
                  "query": [
                    {
                      "active": True,
                      "example": "A",
                      "kind": "query",
                      "name": "rtype",
                      "orig": "rtype",
                      "reqd": False,
                      "type": "`$STRING`",
                    },
                  ],
                },
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
                "index$": 0,
              },
            ],
            "key$": "load",
          },
        },
        "relations": {
          "ancestors": [],
        },
      },
      "geoping": {
        "fields": [
          {
            "active": True,
            "name": "avg_rtt",
            "req": True,
            "type": "`$NUMBER`",
            "index$": 0,
          },
          {
            "active": True,
            "name": "from_loc",
            "req": True,
            "type": "`$ANY`",
            "index$": 1,
          },
          {
            "active": True,
            "name": "ip",
            "req": True,
            "type": "`$STRING`",
            "index$": 2,
          },
          {
            "active": True,
            "name": "is_alive",
            "req": True,
            "type": "`$BOOLEAN`",
            "index$": 3,
          },
          {
            "active": True,
            "name": "max_rtt",
            "req": True,
            "type": "`$NUMBER`",
            "index$": 4,
          },
          {
            "active": True,
            "name": "min_rtt",
            "req": True,
            "type": "`$NUMBER`",
            "index$": 5,
          },
          {
            "active": True,
            "name": "packet_loss",
            "req": True,
            "type": "`$NUMBER`",
            "index$": 6,
          },
          {
            "active": True,
            "name": "packets_received",
            "req": True,
            "type": "`$INTEGER`",
            "index$": 7,
          },
          {
            "active": True,
            "name": "packets_sent",
            "req": True,
            "type": "`$INTEGER`",
            "index$": 8,
          },
          {
            "active": True,
            "name": "rtt",
            "req": True,
            "type": "`$ARRAY`",
            "index$": 9,
          },
        ],
        "name": "geoping",
        "op": {
          "load": {
            "input": "data",
            "name": "load",
            "points": [
              {
                "active": True,
                "args": {
                  "params": [
                    {
                      "active": True,
                      "kind": "param",
                      "name": "id",
                      "orig": "ip",
                      "reqd": True,
                      "type": "`$STRING`",
                    },
                  ],
                },
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
                "index$": 0,
              },
            ],
            "key$": "load",
          },
        },
        "relations": {
          "ancestors": [],
        },
      },
      "ping": {
        "fields": [
          {
            "active": True,
            "name": "avg_rtt",
            "req": True,
            "type": "`$NUMBER`",
            "index$": 0,
          },
          {
            "active": True,
            "name": "from_loc",
            "req": True,
            "type": "`$ANY`",
            "index$": 1,
          },
          {
            "active": True,
            "name": "ip",
            "req": True,
            "type": "`$STRING`",
            "index$": 2,
          },
          {
            "active": True,
            "name": "is_alive",
            "req": True,
            "type": "`$BOOLEAN`",
            "index$": 3,
          },
          {
            "active": True,
            "name": "max_rtt",
            "req": True,
            "type": "`$NUMBER`",
            "index$": 4,
          },
          {
            "active": True,
            "name": "min_rtt",
            "req": True,
            "type": "`$NUMBER`",
            "index$": 5,
          },
          {
            "active": True,
            "name": "packet_loss",
            "req": True,
            "type": "`$NUMBER`",
            "index$": 6,
          },
          {
            "active": True,
            "name": "packets_received",
            "req": True,
            "type": "`$INTEGER`",
            "index$": 7,
          },
          {
            "active": True,
            "name": "packets_sent",
            "req": True,
            "type": "`$INTEGER`",
            "index$": 8,
          },
          {
            "active": True,
            "name": "rtt",
            "req": True,
            "type": "`$ARRAY`",
            "index$": 9,
          },
        ],
        "name": "ping",
        "op": {
          "load": {
            "input": "data",
            "name": "load",
            "points": [
              {
                "active": True,
                "args": {
                  "params": [
                    {
                      "active": True,
                      "kind": "param",
                      "name": "id",
                      "orig": "ip",
                      "reqd": True,
                      "type": "`$STRING`",
                    },
                  ],
                },
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
                "index$": 0,
              },
            ],
            "key$": "load",
          },
        },
        "relations": {
          "ancestors": [],
        },
      },
    },
    }

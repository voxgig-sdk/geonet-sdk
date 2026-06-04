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
            "name": "answer",
            "req": True,
            "type": "`$ARRAY`",
            "active": True,
            "index$": 0,
          },
          {
            "name": "from_loc",
            "req": True,
            "type": "`$ANY`",
            "active": True,
            "index$": 1,
          },
        ],
        "name": "dns",
        "op": {
          "load": {
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
                      "active": True,
                    },
                  ],
                  "query": [
                    {
                      "example": "A",
                      "kind": "query",
                      "name": "rtype",
                      "orig": "rtype",
                      "reqd": False,
                      "type": "`$STRING`",
                      "active": True,
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
                "active": True,
                "index$": 0,
              },
            ],
            "input": "data",
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
            "name": "answer",
            "req": True,
            "type": "`$ARRAY`",
            "active": True,
            "index$": 0,
          },
          {
            "name": "from_loc",
            "req": True,
            "type": "`$ANY`",
            "active": True,
            "index$": 1,
          },
        ],
        "name": "geodn",
        "op": {
          "load": {
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
                      "active": True,
                    },
                  ],
                  "query": [
                    {
                      "example": "A",
                      "kind": "query",
                      "name": "rtype",
                      "orig": "rtype",
                      "reqd": False,
                      "type": "`$STRING`",
                      "active": True,
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
                "active": True,
                "index$": 0,
              },
            ],
            "input": "data",
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
            "name": "avg_rtt",
            "req": True,
            "type": "`$NUMBER`",
            "active": True,
            "index$": 0,
          },
          {
            "name": "from_loc",
            "req": True,
            "type": "`$ANY`",
            "active": True,
            "index$": 1,
          },
          {
            "name": "ip",
            "req": True,
            "type": "`$STRING`",
            "active": True,
            "index$": 2,
          },
          {
            "name": "is_alive",
            "req": True,
            "type": "`$BOOLEAN`",
            "active": True,
            "index$": 3,
          },
          {
            "name": "max_rtt",
            "req": True,
            "type": "`$NUMBER`",
            "active": True,
            "index$": 4,
          },
          {
            "name": "min_rtt",
            "req": True,
            "type": "`$NUMBER`",
            "active": True,
            "index$": 5,
          },
          {
            "name": "packet_loss",
            "req": True,
            "type": "`$NUMBER`",
            "active": True,
            "index$": 6,
          },
          {
            "name": "packets_received",
            "req": True,
            "type": "`$INTEGER`",
            "active": True,
            "index$": 7,
          },
          {
            "name": "packets_sent",
            "req": True,
            "type": "`$INTEGER`",
            "active": True,
            "index$": 8,
          },
          {
            "name": "rtt",
            "req": True,
            "type": "`$ARRAY`",
            "active": True,
            "index$": 9,
          },
        ],
        "name": "geoping",
        "op": {
          "load": {
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
                      "active": True,
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
                "active": True,
                "index$": 0,
              },
            ],
            "input": "data",
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
            "name": "avg_rtt",
            "req": True,
            "type": "`$NUMBER`",
            "active": True,
            "index$": 0,
          },
          {
            "name": "from_loc",
            "req": True,
            "type": "`$ANY`",
            "active": True,
            "index$": 1,
          },
          {
            "name": "ip",
            "req": True,
            "type": "`$STRING`",
            "active": True,
            "index$": 2,
          },
          {
            "name": "is_alive",
            "req": True,
            "type": "`$BOOLEAN`",
            "active": True,
            "index$": 3,
          },
          {
            "name": "max_rtt",
            "req": True,
            "type": "`$NUMBER`",
            "active": True,
            "index$": 4,
          },
          {
            "name": "min_rtt",
            "req": True,
            "type": "`$NUMBER`",
            "active": True,
            "index$": 5,
          },
          {
            "name": "packet_loss",
            "req": True,
            "type": "`$NUMBER`",
            "active": True,
            "index$": 6,
          },
          {
            "name": "packets_received",
            "req": True,
            "type": "`$INTEGER`",
            "active": True,
            "index$": 7,
          },
          {
            "name": "packets_sent",
            "req": True,
            "type": "`$INTEGER`",
            "active": True,
            "index$": 8,
          },
          {
            "name": "rtt",
            "req": True,
            "type": "`$ARRAY`",
            "active": True,
            "index$": 9,
          },
        ],
        "name": "ping",
        "op": {
          "load": {
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
                      "active": True,
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
                "active": True,
                "index$": 0,
              },
            ],
            "input": "data",
            "key$": "load",
          },
        },
        "relations": {
          "ancestors": [],
        },
      },
    },
    }

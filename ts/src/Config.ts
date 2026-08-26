
import { BaseFeature } from './feature/base/BaseFeature'
import { TestFeature } from './feature/test/TestFeature'



const FEATURE_CLASS: Record<string, typeof BaseFeature> = {
   test: TestFeature,

}


class Config {

  makeFeature(this: any, fn: string) {
    const fc = FEATURE_CLASS[fn]
    const fi = new fc()
    // TODO: errors etc
    return fi
  }

  // False for a feature added at runtime via options.extend (station's
  // adopt path) - the constructor uses this to skip makeFeature for names
  // no generated class backs.
  hasFeature(this: any, fn: string) {
    return null != FEATURE_CLASS[fn]
  }


  main = {
    name: 'Geonet',
        slug: "geonet",
    version: "0.0.1",
    target: "ts",

  }


  feature = {
     test:     {
      "options": {
        "active": false
      },
      "transport": "base"
    },

  }


  options = {
    base: "https://geonet.shodan.io",

    headers: {
      "content-type": "application/json"
    },

    entity: {
      
      dns: {
      },

      geodn: {
      },

      geoping: {
      },

      ping: {
      },

    }
  }


  entity = {
    "dns": {
      "fields": [
        {
          "name": "answers",
          "req": true,
          "type": "`$ARRAY`"
        },
        {
          "name": "from_loc",
          "req": true,
          "short": "Location of the server that performed the DNS lookup",
          "type": "`$ANY`"
        },
        {
          "name": "id",
          "type": "`$STRING`"
        }
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
                    "reqd": true,
                    "type": "`$STRING`"
                  }
                ],
                "query": [
                  {
                    "example": "A",
                    "kind": "query",
                    "name": "rtype",
                    "orig": "rtype",
                    "type": "`$STRING`"
                  }
                ]
              },
              "kind": "http",
              "method": "GET",
              "orig": "/api/dns/{hostname}",
              "parts": [
                "api",
                "dns",
                "{id}"
              ],
              "rename": {
                "param": {
                  "hostname": "id"
                }
              },
              "select": {
                "exist": [
                  "id",
                  "rtype"
                ]
              },
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              }
            }
          ]
        }
      },
      "relations": {
        "ancestors": []
      }
    },
    "geodn": {
      "fields": [
        {
          "name": "answers",
          "req": true,
          "type": "`$ARRAY`"
        },
        {
          "name": "from_loc",
          "req": true,
          "short": "Location of the server that performed the DNS lookup",
          "type": "`$ANY`"
        },
        {
          "name": "id",
          "type": "`$STRING`"
        }
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
                    "reqd": true,
                    "type": "`$STRING`"
                  }
                ],
                "query": [
                  {
                    "example": "A",
                    "kind": "query",
                    "name": "rtype",
                    "orig": "rtype",
                    "type": "`$STRING`"
                  }
                ]
              },
              "kind": "http",
              "method": "GET",
              "orig": "/api/geodns/{hostname}",
              "parts": [
                "api",
                "geodns",
                "{id}"
              ],
              "rename": {
                "param": {
                  "hostname": "id"
                }
              },
              "select": {
                "exist": [
                  "id",
                  "rtype"
                ]
              },
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              }
            }
          ]
        }
      },
      "relations": {
        "ancestors": []
      }
    },
    "geoping": {
      "fields": [
        {
          "name": "avg_rtt",
          "req": true,
          "type": "`$NUMBER`"
        },
        {
          "name": "from_loc",
          "req": true,
          "short": "Location of the server that performed the ping",
          "type": "`$ANY`"
        },
        {
          "name": "id",
          "type": "`$STRING`"
        },
        {
          "name": "ip",
          "req": true,
          "short": "IP address that was pinged",
          "type": "`$STRING`"
        },
        {
          "name": "is_alive",
          "req": true,
          "type": "`$BOOLEAN`"
        },
        {
          "name": "max_rtt",
          "req": true,
          "type": "`$NUMBER`"
        },
        {
          "name": "min_rtt",
          "req": true,
          "type": "`$NUMBER`"
        },
        {
          "name": "packet_loss",
          "req": true,
          "type": "`$NUMBER`"
        },
        {
          "name": "packets_received",
          "req": true,
          "type": "`$INTEGER`"
        },
        {
          "name": "packets_sent",
          "req": true,
          "type": "`$INTEGER`"
        },
        {
          "name": "rtts",
          "req": true,
          "type": "`$ARRAY`"
        }
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
                    "reqd": true,
                    "type": "`$STRING`"
                  }
                ]
              },
              "kind": "http",
              "method": "GET",
              "orig": "/api/geoping/{ip}",
              "parts": [
                "api",
                "geoping",
                "{id}"
              ],
              "rename": {
                "param": {
                  "ip": "id"
                }
              },
              "select": {
                "exist": [
                  "id"
                ]
              },
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              }
            }
          ]
        }
      },
      "relations": {
        "ancestors": []
      }
    },
    "ping": {
      "fields": [
        {
          "name": "avg_rtt",
          "req": true,
          "type": "`$NUMBER`"
        },
        {
          "name": "from_loc",
          "req": true,
          "short": "Location of the server that performed the ping",
          "type": "`$ANY`"
        },
        {
          "name": "id",
          "type": "`$STRING`"
        },
        {
          "name": "ip",
          "req": true,
          "short": "IP address that was pinged",
          "type": "`$STRING`"
        },
        {
          "name": "is_alive",
          "req": true,
          "type": "`$BOOLEAN`"
        },
        {
          "name": "max_rtt",
          "req": true,
          "type": "`$NUMBER`"
        },
        {
          "name": "min_rtt",
          "req": true,
          "type": "`$NUMBER`"
        },
        {
          "name": "packet_loss",
          "req": true,
          "type": "`$NUMBER`"
        },
        {
          "name": "packets_received",
          "req": true,
          "type": "`$INTEGER`"
        },
        {
          "name": "packets_sent",
          "req": true,
          "type": "`$INTEGER`"
        },
        {
          "name": "rtts",
          "req": true,
          "type": "`$ARRAY`"
        }
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
                    "reqd": true,
                    "type": "`$STRING`"
                  }
                ]
              },
              "kind": "http",
              "method": "GET",
              "orig": "/api/ping/{ip}",
              "parts": [
                "api",
                "ping",
                "{id}"
              ],
              "rename": {
                "param": {
                  "ip": "id"
                }
              },
              "select": {
                "exist": [
                  "id"
                ]
              },
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              }
            }
          ]
        }
      },
      "relations": {
        "ancestors": []
      }
    }
  }
}


const config = new Config()

export {
  config
}


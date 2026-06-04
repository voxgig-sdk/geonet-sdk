
import { BaseFeature } from './feature/base/BaseFeature'
import { TestFeature } from './feature/test/TestFeature'



const FEATURE_CLASS: Record<string, typeof BaseFeature> = {
   test: TestFeature

}


class Config {

  makeFeature(this: any, fn: string) {
    const fc = FEATURE_CLASS[fn]
    const fi = new fc()
    // TODO: errors etc
    return fi
  }


  main = {
    name: 'ProjectName',
  }


  feature = {
     test:     {
      "options": {
        "active": false
      }
    }

  }


  options = {
    base: 'https://geonet.shodan.io',

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
          "name": "answer",
          "req": true,
          "type": "`$ARRAY`",
          "active": true,
          "index$": 0
        },
        {
          "name": "from_loc",
          "req": true,
          "type": "`$ANY`",
          "active": true,
          "index$": 1
        }
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
                    "reqd": true,
                    "type": "`$STRING`",
                    "active": true
                  }
                ],
                "query": [
                  {
                    "example": "A",
                    "kind": "query",
                    "name": "rtype",
                    "orig": "rtype",
                    "reqd": false,
                    "type": "`$STRING`",
                    "active": true
                  }
                ]
              },
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
              },
              "active": true,
              "index$": 0
            }
          ],
          "input": "data",
          "key$": "load"
        }
      },
      "relations": {
        "ancestors": []
      }
    },
    "geodn": {
      "fields": [
        {
          "name": "answer",
          "req": true,
          "type": "`$ARRAY`",
          "active": true,
          "index$": 0
        },
        {
          "name": "from_loc",
          "req": true,
          "type": "`$ANY`",
          "active": true,
          "index$": 1
        }
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
                    "reqd": true,
                    "type": "`$STRING`",
                    "active": true
                  }
                ],
                "query": [
                  {
                    "example": "A",
                    "kind": "query",
                    "name": "rtype",
                    "orig": "rtype",
                    "reqd": false,
                    "type": "`$STRING`",
                    "active": true
                  }
                ]
              },
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
              },
              "active": true,
              "index$": 0
            }
          ],
          "input": "data",
          "key$": "load"
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
          "type": "`$NUMBER`",
          "active": true,
          "index$": 0
        },
        {
          "name": "from_loc",
          "req": true,
          "type": "`$ANY`",
          "active": true,
          "index$": 1
        },
        {
          "name": "ip",
          "req": true,
          "type": "`$STRING`",
          "active": true,
          "index$": 2
        },
        {
          "name": "is_alive",
          "req": true,
          "type": "`$BOOLEAN`",
          "active": true,
          "index$": 3
        },
        {
          "name": "max_rtt",
          "req": true,
          "type": "`$NUMBER`",
          "active": true,
          "index$": 4
        },
        {
          "name": "min_rtt",
          "req": true,
          "type": "`$NUMBER`",
          "active": true,
          "index$": 5
        },
        {
          "name": "packet_loss",
          "req": true,
          "type": "`$NUMBER`",
          "active": true,
          "index$": 6
        },
        {
          "name": "packets_received",
          "req": true,
          "type": "`$INTEGER`",
          "active": true,
          "index$": 7
        },
        {
          "name": "packets_sent",
          "req": true,
          "type": "`$INTEGER`",
          "active": true,
          "index$": 8
        },
        {
          "name": "rtt",
          "req": true,
          "type": "`$ARRAY`",
          "active": true,
          "index$": 9
        }
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
                    "reqd": true,
                    "type": "`$STRING`",
                    "active": true
                  }
                ]
              },
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
              },
              "active": true,
              "index$": 0
            }
          ],
          "input": "data",
          "key$": "load"
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
          "type": "`$NUMBER`",
          "active": true,
          "index$": 0
        },
        {
          "name": "from_loc",
          "req": true,
          "type": "`$ANY`",
          "active": true,
          "index$": 1
        },
        {
          "name": "ip",
          "req": true,
          "type": "`$STRING`",
          "active": true,
          "index$": 2
        },
        {
          "name": "is_alive",
          "req": true,
          "type": "`$BOOLEAN`",
          "active": true,
          "index$": 3
        },
        {
          "name": "max_rtt",
          "req": true,
          "type": "`$NUMBER`",
          "active": true,
          "index$": 4
        },
        {
          "name": "min_rtt",
          "req": true,
          "type": "`$NUMBER`",
          "active": true,
          "index$": 5
        },
        {
          "name": "packet_loss",
          "req": true,
          "type": "`$NUMBER`",
          "active": true,
          "index$": 6
        },
        {
          "name": "packets_received",
          "req": true,
          "type": "`$INTEGER`",
          "active": true,
          "index$": 7
        },
        {
          "name": "packets_sent",
          "req": true,
          "type": "`$INTEGER`",
          "active": true,
          "index$": 8
        },
        {
          "name": "rtt",
          "req": true,
          "type": "`$ARRAY`",
          "active": true,
          "index$": 9
        }
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
                    "reqd": true,
                    "type": "`$STRING`",
                    "active": true
                  }
                ]
              },
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
              },
              "active": true,
              "index$": 0
            }
          ],
          "input": "data",
          "key$": "load"
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


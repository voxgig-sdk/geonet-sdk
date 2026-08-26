package core

import (
	"sync"
)

// MakeConfig builds a fresh, fully materialised config map. Every call
// rebuilds the whole structure, so prefer SharedConfig unless you need a
// private copy you intend to mutate.
func MakeConfig() map[string]any {
	return map[string]any{
		"main": map[string]any{
			"name": "Geonet",
			"slug": "geonet",
			"version": "0.0.1",
			"target": "go",
		},
		"feature": map[string]any{
			"test": map[string]any{
				"options": map[string]any{
					"active": false,
				},
				"transport": "base",
			},
		},
		"options": map[string]any{
			"base": "https://geonet.shodan.io",
			"headers": map[string]any{
				"content-type": "application/json",
			},
			"entity": map[string]any{
				"dns": map[string]any{},
				"geodn": map[string]any{},
				"geoping": map[string]any{},
				"ping": map[string]any{},
			},
		},
		"entity": map[string]any{
			"dns": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "answers",
						"req": true,
						"type": "`$ARRAY`",
					},
					map[string]any{
						"name": "from_loc",
						"req": true,
						"short": "Location of the server that performed the DNS lookup",
						"type": "`$ANY`",
					},
					map[string]any{
						"name": "id",
						"type": "`$STRING`",
					},
				},
				"name": "dns",
				"op": map[string]any{
					"load": map[string]any{
						"input": "data",
						"name": "load",
						"points": []any{
							map[string]any{
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"kind": "param",
											"name": "id",
											"orig": "hostname",
											"reqd": true,
											"type": "`$STRING`",
										},
									},
									"query": []any{
										map[string]any{
											"example": "A",
											"kind": "query",
											"name": "rtype",
											"orig": "rtype",
											"type": "`$STRING`",
										},
									},
								},
								"kind": "http",
								"method": "GET",
								"orig": "/api/dns/{hostname}",
								"parts": []any{
									"api",
									"dns",
									"{id}",
								},
								"rename": map[string]any{
									"param": map[string]any{
										"hostname": "id",
									},
								},
								"select": map[string]any{
									"exist": []any{
										"id",
										"rtype",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{},
				},
			},
			"geodn": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "answers",
						"req": true,
						"type": "`$ARRAY`",
					},
					map[string]any{
						"name": "from_loc",
						"req": true,
						"short": "Location of the server that performed the DNS lookup",
						"type": "`$ANY`",
					},
					map[string]any{
						"name": "id",
						"type": "`$STRING`",
					},
				},
				"name": "geodn",
				"op": map[string]any{
					"load": map[string]any{
						"input": "data",
						"name": "load",
						"points": []any{
							map[string]any{
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"kind": "param",
											"name": "id",
											"orig": "hostname",
											"reqd": true,
											"type": "`$STRING`",
										},
									},
									"query": []any{
										map[string]any{
											"example": "A",
											"kind": "query",
											"name": "rtype",
											"orig": "rtype",
											"type": "`$STRING`",
										},
									},
								},
								"kind": "http",
								"method": "GET",
								"orig": "/api/geodns/{hostname}",
								"parts": []any{
									"api",
									"geodns",
									"{id}",
								},
								"rename": map[string]any{
									"param": map[string]any{
										"hostname": "id",
									},
								},
								"select": map[string]any{
									"exist": []any{
										"id",
										"rtype",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{},
				},
			},
			"geoping": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "avg_rtt",
						"req": true,
						"type": "`$NUMBER`",
					},
					map[string]any{
						"name": "from_loc",
						"req": true,
						"short": "Location of the server that performed the ping",
						"type": "`$ANY`",
					},
					map[string]any{
						"name": "id",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "ip",
						"req": true,
						"short": "IP address that was pinged",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "is_alive",
						"req": true,
						"type": "`$BOOLEAN`",
					},
					map[string]any{
						"name": "max_rtt",
						"req": true,
						"type": "`$NUMBER`",
					},
					map[string]any{
						"name": "min_rtt",
						"req": true,
						"type": "`$NUMBER`",
					},
					map[string]any{
						"name": "packet_loss",
						"req": true,
						"type": "`$NUMBER`",
					},
					map[string]any{
						"name": "packets_received",
						"req": true,
						"type": "`$INTEGER`",
					},
					map[string]any{
						"name": "packets_sent",
						"req": true,
						"type": "`$INTEGER`",
					},
					map[string]any{
						"name": "rtts",
						"req": true,
						"type": "`$ARRAY`",
					},
				},
				"name": "geoping",
				"op": map[string]any{
					"load": map[string]any{
						"input": "data",
						"name": "load",
						"points": []any{
							map[string]any{
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"kind": "param",
											"name": "id",
											"orig": "ip",
											"reqd": true,
											"type": "`$STRING`",
										},
									},
								},
								"kind": "http",
								"method": "GET",
								"orig": "/api/geoping/{ip}",
								"parts": []any{
									"api",
									"geoping",
									"{id}",
								},
								"rename": map[string]any{
									"param": map[string]any{
										"ip": "id",
									},
								},
								"select": map[string]any{
									"exist": []any{
										"id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{},
				},
			},
			"ping": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "avg_rtt",
						"req": true,
						"type": "`$NUMBER`",
					},
					map[string]any{
						"name": "from_loc",
						"req": true,
						"short": "Location of the server that performed the ping",
						"type": "`$ANY`",
					},
					map[string]any{
						"name": "id",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "ip",
						"req": true,
						"short": "IP address that was pinged",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "is_alive",
						"req": true,
						"type": "`$BOOLEAN`",
					},
					map[string]any{
						"name": "max_rtt",
						"req": true,
						"type": "`$NUMBER`",
					},
					map[string]any{
						"name": "min_rtt",
						"req": true,
						"type": "`$NUMBER`",
					},
					map[string]any{
						"name": "packet_loss",
						"req": true,
						"type": "`$NUMBER`",
					},
					map[string]any{
						"name": "packets_received",
						"req": true,
						"type": "`$INTEGER`",
					},
					map[string]any{
						"name": "packets_sent",
						"req": true,
						"type": "`$INTEGER`",
					},
					map[string]any{
						"name": "rtts",
						"req": true,
						"type": "`$ARRAY`",
					},
				},
				"name": "ping",
				"op": map[string]any{
					"load": map[string]any{
						"input": "data",
						"name": "load",
						"points": []any{
							map[string]any{
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"kind": "param",
											"name": "id",
											"orig": "ip",
											"reqd": true,
											"type": "`$STRING`",
										},
									},
								},
								"kind": "http",
								"method": "GET",
								"orig": "/api/ping/{ip}",
								"parts": []any{
									"api",
									"ping",
									"{id}",
								},
								"rename": map[string]any{
									"param": map[string]any{
										"ip": "id",
									},
								},
								"select": map[string]any{
									"exist": []any{
										"id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{},
				},
			},
		},
	}
}

var (
	sharedConfigOnce sync.Once
	sharedConfigVal  map[string]any
)

// SharedConfig returns the process-wide config, built once on first use.
// The SDK reads the config on every request and never writes to it, so one
// instance is shared by every client rather than rebuilt per client.
//
// The returned map is shared: treat it as read-only. Callers that need to
// mutate should use MakeConfig, which always returns a fresh copy.
func SharedConfig() map[string]any {
	sharedConfigOnce.Do(func() {
		sharedConfigVal = MakeConfig()
	})
	return sharedConfigVal
}

func makeFeature(name string) Feature {
	switch name {
	case "test":
		if NewTestFeatureFunc != nil {
			return NewTestFeatureFunc()
		}
	default:
		if NewBaseFeatureFunc != nil {
			return NewBaseFeatureFunc()
		}
	}
	return nil
}

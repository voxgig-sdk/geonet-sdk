package core

func MakeConfig() map[string]any {
	return map[string]any{
		"main": map[string]any{
			"name": "Geonet",
		},
		"feature": map[string]any{
			"test": map[string]any{
				"options": map[string]any{
					"active": false,
				},
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
						"active": true,
						"name": "answer",
						"req": true,
						"type": "`$ARRAY`",
						"index$": 0,
					},
					map[string]any{
						"active": true,
						"name": "from_loc",
						"req": true,
						"type": "`$ANY`",
						"index$": 1,
					},
				},
				"name": "dns",
				"op": map[string]any{
					"load": map[string]any{
						"input": "data",
						"name": "load",
						"points": []any{
							map[string]any{
								"active": true,
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"active": true,
											"kind": "param",
											"name": "id",
											"orig": "hostname",
											"reqd": true,
											"type": "`$STRING`",
											"index$": 0,
										},
									},
									"query": []any{
										map[string]any{
											"active": true,
											"example": "A",
											"kind": "query",
											"name": "rtype",
											"orig": "rtype",
											"reqd": false,
											"type": "`$STRING`",
										},
									},
								},
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
								"index$": 0,
							},
						},
						"key$": "load",
					},
				},
				"relations": map[string]any{
					"ancestors": []any{},
				},
			},
			"geodn": map[string]any{
				"fields": []any{
					map[string]any{
						"active": true,
						"name": "answer",
						"req": true,
						"type": "`$ARRAY`",
						"index$": 0,
					},
					map[string]any{
						"active": true,
						"name": "from_loc",
						"req": true,
						"type": "`$ANY`",
						"index$": 1,
					},
				},
				"name": "geodn",
				"op": map[string]any{
					"load": map[string]any{
						"input": "data",
						"name": "load",
						"points": []any{
							map[string]any{
								"active": true,
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"active": true,
											"kind": "param",
											"name": "id",
											"orig": "hostname",
											"reqd": true,
											"type": "`$STRING`",
											"index$": 0,
										},
									},
									"query": []any{
										map[string]any{
											"active": true,
											"example": "A",
											"kind": "query",
											"name": "rtype",
											"orig": "rtype",
											"reqd": false,
											"type": "`$STRING`",
										},
									},
								},
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
								"index$": 0,
							},
						},
						"key$": "load",
					},
				},
				"relations": map[string]any{
					"ancestors": []any{},
				},
			},
			"geoping": map[string]any{
				"fields": []any{
					map[string]any{
						"active": true,
						"name": "avg_rtt",
						"req": true,
						"type": "`$NUMBER`",
						"index$": 0,
					},
					map[string]any{
						"active": true,
						"name": "from_loc",
						"req": true,
						"type": "`$ANY`",
						"index$": 1,
					},
					map[string]any{
						"active": true,
						"name": "ip",
						"req": true,
						"type": "`$STRING`",
						"index$": 2,
					},
					map[string]any{
						"active": true,
						"name": "is_alive",
						"req": true,
						"type": "`$BOOLEAN`",
						"index$": 3,
					},
					map[string]any{
						"active": true,
						"name": "max_rtt",
						"req": true,
						"type": "`$NUMBER`",
						"index$": 4,
					},
					map[string]any{
						"active": true,
						"name": "min_rtt",
						"req": true,
						"type": "`$NUMBER`",
						"index$": 5,
					},
					map[string]any{
						"active": true,
						"name": "packet_loss",
						"req": true,
						"type": "`$NUMBER`",
						"index$": 6,
					},
					map[string]any{
						"active": true,
						"name": "packets_received",
						"req": true,
						"type": "`$INTEGER`",
						"index$": 7,
					},
					map[string]any{
						"active": true,
						"name": "packets_sent",
						"req": true,
						"type": "`$INTEGER`",
						"index$": 8,
					},
					map[string]any{
						"active": true,
						"name": "rtt",
						"req": true,
						"type": "`$ARRAY`",
						"index$": 9,
					},
				},
				"name": "geoping",
				"op": map[string]any{
					"load": map[string]any{
						"input": "data",
						"name": "load",
						"points": []any{
							map[string]any{
								"active": true,
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"active": true,
											"kind": "param",
											"name": "id",
											"orig": "ip",
											"reqd": true,
											"type": "`$STRING`",
											"index$": 0,
										},
									},
								},
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
								"index$": 0,
							},
						},
						"key$": "load",
					},
				},
				"relations": map[string]any{
					"ancestors": []any{},
				},
			},
			"ping": map[string]any{
				"fields": []any{
					map[string]any{
						"active": true,
						"name": "avg_rtt",
						"req": true,
						"type": "`$NUMBER`",
						"index$": 0,
					},
					map[string]any{
						"active": true,
						"name": "from_loc",
						"req": true,
						"type": "`$ANY`",
						"index$": 1,
					},
					map[string]any{
						"active": true,
						"name": "ip",
						"req": true,
						"type": "`$STRING`",
						"index$": 2,
					},
					map[string]any{
						"active": true,
						"name": "is_alive",
						"req": true,
						"type": "`$BOOLEAN`",
						"index$": 3,
					},
					map[string]any{
						"active": true,
						"name": "max_rtt",
						"req": true,
						"type": "`$NUMBER`",
						"index$": 4,
					},
					map[string]any{
						"active": true,
						"name": "min_rtt",
						"req": true,
						"type": "`$NUMBER`",
						"index$": 5,
					},
					map[string]any{
						"active": true,
						"name": "packet_loss",
						"req": true,
						"type": "`$NUMBER`",
						"index$": 6,
					},
					map[string]any{
						"active": true,
						"name": "packets_received",
						"req": true,
						"type": "`$INTEGER`",
						"index$": 7,
					},
					map[string]any{
						"active": true,
						"name": "packets_sent",
						"req": true,
						"type": "`$INTEGER`",
						"index$": 8,
					},
					map[string]any{
						"active": true,
						"name": "rtt",
						"req": true,
						"type": "`$ARRAY`",
						"index$": 9,
					},
				},
				"name": "ping",
				"op": map[string]any{
					"load": map[string]any{
						"input": "data",
						"name": "load",
						"points": []any{
							map[string]any{
								"active": true,
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"active": true,
											"kind": "param",
											"name": "id",
											"orig": "ip",
											"reqd": true,
											"type": "`$STRING`",
											"index$": 0,
										},
									},
								},
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
								"index$": 0,
							},
						},
						"key$": "load",
					},
				},
				"relations": map[string]any{
					"ancestors": []any{},
				},
			},
		},
	}
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

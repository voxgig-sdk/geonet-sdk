<?php
declare(strict_types=1);

// Geonet SDK configuration

class GeonetConfig
{
    /** @var array<string,mixed>|null */
    private static ?array $shared_config = null;

    /**
     * Return the process-wide config, built once on first use. The SDK reads
     * the config on every request and never writes to it, so one instance is
     * shared by every client rather than rebuilt per client.
     *
     * PHP arrays are copy-on-write, so callers that do mutate the result get
     * their own copy and cannot disturb the shared one.
     */
    public static function shared_config(): array
    {
        if (self::$shared_config === null) {
            self::$shared_config = self::make_config();
        }
        return self::$shared_config;
    }

    /**
     * Build a fresh, fully materialised config array. Every call rebuilds the
     * whole structure, so prefer shared_config unless you need a private copy.
     */
    public static function make_config(): array
    {
        return [
            "main" => [
                "name" => "Geonet",
                "slug" => "geonet",
                "version" => "0.0.1",
                "target" => "php",
            ],
            "feature" => [
                "test" => [
          'options' => [
            'active' => false,
          ],
        ],
            ],
            "options" => [
                "base" => "https://geonet.shodan.io",
                "headers" => [
          'content-type' => 'application/json',
        ],
                "entity" => [
                    "dns" => [],
                    "geodn" => [],
                    "geoping" => [],
                    "ping" => [],
                ],
            ],
            "entity" => [
        'dns' => [
          'fields' => [
            [
              'name' => 'answers',
              'req' => true,
              'type' => '`$ARRAY`',
            ],
            [
              'name' => 'from_loc',
              'req' => true,
              'short' => 'Location of the server that performed the DNS lookup',
              'type' => '`$ANY`',
            ],
          ],
          'name' => 'dns',
          'op' => [
            'load' => [
              'input' => 'data',
              'name' => 'load',
              'points' => [
                [
                  'args' => [
                    'params' => [
                      [
                        'kind' => 'param',
                        'name' => 'id',
                        'orig' => 'hostname',
                        'reqd' => true,
                        'type' => '`$STRING`',
                      ],
                    ],
                    'query' => [
                      [
                        'example' => 'A',
                        'kind' => 'query',
                        'name' => 'rtype',
                        'orig' => 'rtype',
                        'type' => '`$STRING`',
                      ],
                    ],
                  ],
                  'kind' => 'http',
                  'method' => 'GET',
                  'orig' => '/api/dns/{hostname}',
                  'parts' => [
                    'api',
                    'dns',
                    '{id}',
                  ],
                  'rename' => [
                    'param' => [
                      'hostname' => 'id',
                    ],
                  ],
                  'select' => [
                    'exist' => [
                      'id',
                      'rtype',
                    ],
                  ],
                  'transform' => [
                    'req' => '`reqdata`',
                    'res' => '`body`',
                  ],
                ],
              ],
            ],
          ],
          'relations' => [
            'ancestors' => [],
          ],
        ],
        'geodn' => [
          'fields' => [
            [
              'name' => 'answers',
              'req' => true,
              'type' => '`$ARRAY`',
            ],
            [
              'name' => 'from_loc',
              'req' => true,
              'short' => 'Location of the server that performed the DNS lookup',
              'type' => '`$ANY`',
            ],
          ],
          'name' => 'geodn',
          'op' => [
            'load' => [
              'input' => 'data',
              'name' => 'load',
              'points' => [
                [
                  'args' => [
                    'params' => [
                      [
                        'kind' => 'param',
                        'name' => 'id',
                        'orig' => 'hostname',
                        'reqd' => true,
                        'type' => '`$STRING`',
                      ],
                    ],
                    'query' => [
                      [
                        'example' => 'A',
                        'kind' => 'query',
                        'name' => 'rtype',
                        'orig' => 'rtype',
                        'type' => '`$STRING`',
                      ],
                    ],
                  ],
                  'kind' => 'http',
                  'method' => 'GET',
                  'orig' => '/api/geodns/{hostname}',
                  'parts' => [
                    'api',
                    'geodns',
                    '{id}',
                  ],
                  'rename' => [
                    'param' => [
                      'hostname' => 'id',
                    ],
                  ],
                  'select' => [
                    'exist' => [
                      'id',
                      'rtype',
                    ],
                  ],
                  'transform' => [
                    'req' => '`reqdata`',
                    'res' => '`body`',
                  ],
                ],
              ],
            ],
          ],
          'relations' => [
            'ancestors' => [],
          ],
        ],
        'geoping' => [
          'fields' => [
            [
              'name' => 'avg_rtt',
              'req' => true,
              'type' => '`$NUMBER`',
            ],
            [
              'name' => 'from_loc',
              'req' => true,
              'short' => 'Location of the server that performed the ping',
              'type' => '`$ANY`',
            ],
            [
              'name' => 'ip',
              'req' => true,
              'short' => 'IP address that was pinged',
              'type' => '`$STRING`',
            ],
            [
              'name' => 'is_alive',
              'req' => true,
              'type' => '`$BOOLEAN`',
            ],
            [
              'name' => 'max_rtt',
              'req' => true,
              'type' => '`$NUMBER`',
            ],
            [
              'name' => 'min_rtt',
              'req' => true,
              'type' => '`$NUMBER`',
            ],
            [
              'name' => 'packet_loss',
              'req' => true,
              'type' => '`$NUMBER`',
            ],
            [
              'name' => 'packets_received',
              'req' => true,
              'type' => '`$INTEGER`',
            ],
            [
              'name' => 'packets_sent',
              'req' => true,
              'type' => '`$INTEGER`',
            ],
            [
              'name' => 'rtts',
              'req' => true,
              'type' => '`$ARRAY`',
            ],
          ],
          'name' => 'geoping',
          'op' => [
            'load' => [
              'input' => 'data',
              'name' => 'load',
              'points' => [
                [
                  'args' => [
                    'params' => [
                      [
                        'kind' => 'param',
                        'name' => 'id',
                        'orig' => 'ip',
                        'reqd' => true,
                        'type' => '`$STRING`',
                      ],
                    ],
                  ],
                  'kind' => 'http',
                  'method' => 'GET',
                  'orig' => '/api/geoping/{ip}',
                  'parts' => [
                    'api',
                    'geoping',
                    '{id}',
                  ],
                  'rename' => [
                    'param' => [
                      'ip' => 'id',
                    ],
                  ],
                  'select' => [
                    'exist' => [
                      'id',
                    ],
                  ],
                  'transform' => [
                    'req' => '`reqdata`',
                    'res' => '`body`',
                  ],
                ],
              ],
            ],
          ],
          'relations' => [
            'ancestors' => [],
          ],
        ],
        'ping' => [
          'fields' => [
            [
              'name' => 'avg_rtt',
              'req' => true,
              'type' => '`$NUMBER`',
            ],
            [
              'name' => 'from_loc',
              'req' => true,
              'short' => 'Location of the server that performed the ping',
              'type' => '`$ANY`',
            ],
            [
              'name' => 'ip',
              'req' => true,
              'short' => 'IP address that was pinged',
              'type' => '`$STRING`',
            ],
            [
              'name' => 'is_alive',
              'req' => true,
              'type' => '`$BOOLEAN`',
            ],
            [
              'name' => 'max_rtt',
              'req' => true,
              'type' => '`$NUMBER`',
            ],
            [
              'name' => 'min_rtt',
              'req' => true,
              'type' => '`$NUMBER`',
            ],
            [
              'name' => 'packet_loss',
              'req' => true,
              'type' => '`$NUMBER`',
            ],
            [
              'name' => 'packets_received',
              'req' => true,
              'type' => '`$INTEGER`',
            ],
            [
              'name' => 'packets_sent',
              'req' => true,
              'type' => '`$INTEGER`',
            ],
            [
              'name' => 'rtts',
              'req' => true,
              'type' => '`$ARRAY`',
            ],
          ],
          'name' => 'ping',
          'op' => [
            'load' => [
              'input' => 'data',
              'name' => 'load',
              'points' => [
                [
                  'args' => [
                    'params' => [
                      [
                        'kind' => 'param',
                        'name' => 'id',
                        'orig' => 'ip',
                        'reqd' => true,
                        'type' => '`$STRING`',
                      ],
                    ],
                  ],
                  'kind' => 'http',
                  'method' => 'GET',
                  'orig' => '/api/ping/{ip}',
                  'parts' => [
                    'api',
                    'ping',
                    '{id}',
                  ],
                  'rename' => [
                    'param' => [
                      'ip' => 'id',
                    ],
                  ],
                  'select' => [
                    'exist' => [
                      'id',
                    ],
                  ],
                  'transform' => [
                    'req' => '`reqdata`',
                    'res' => '`body`',
                  ],
                ],
              ],
            ],
          ],
          'relations' => [
            'ancestors' => [],
          ],
        ],
      ],
        ];
    }


    public static function make_feature(string $name)
    {
        require_once __DIR__ . '/features.php';
        return GeonetFeatures::make_feature($name);
    }
}

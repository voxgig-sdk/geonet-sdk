# Geonet PHP SDK Reference

Complete API reference for the Geonet PHP SDK.


## GeonetSDK

### Constructor

```php
require_once __DIR__ . '/geonet_sdk.php';

$client = new GeonetSDK($options);
```

Create a new SDK client instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `$options` | `array` | SDK configuration options. |
| `$options["base"]` | `string` | Base URL for API requests. |
| `$options["prefix"]` | `string` | URL prefix appended after base. |
| `$options["suffix"]` | `string` | URL suffix appended after path. |
| `$options["headers"]` | `array` | Custom headers for all requests. |
| `$options["feature"]` | `array` | Feature configuration. |
| `$options["system"]` | `array` | System overrides (e.g. custom fetch). |


### Static Methods

#### `GeonetSDK::test($testopts = null, $sdkopts = null)`

Create a test client with mock features active. Both arguments may be `null`.

```php
$client = GeonetSDK::test();
```


### Instance Methods

#### `Dns($data = null)`

Create a new `DnsEntity` instance. Pass `null` for no initial data.

#### `Geodn($data = null)`

Create a new `GeodnEntity` instance. Pass `null` for no initial data.

#### `Geoping($data = null)`

Create a new `GeopingEntity` instance. Pass `null` for no initial data.

#### `Ping($data = null)`

Create a new `PingEntity` instance. Pass `null` for no initial data.

#### `options_map(): array`

Return a deep copy of the current SDK options.

#### `get_utility(): GeonetUtility`

Return a copy of the SDK utility object.

#### `direct(array $fetchargs = []): array`

Make a direct HTTP request to any API endpoint. This is the raw-HTTP escape
hatch: it does **not** throw. It returns a result array
`["ok" => bool, "status" => int, "headers" => array, "data" => mixed]`, or
`["ok" => false, "err" => \Exception]` on failure. Branch on `$result["ok"]`.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `$fetchargs["path"]` | `string` | URL path with optional `{param}` placeholders. |
| `$fetchargs["method"]` | `string` | HTTP method (default: `"GET"`). |
| `$fetchargs["params"]` | `array` | Path parameter values for `{param}` substitution. |
| `$fetchargs["query"]` | `array` | Query string parameters. |
| `$fetchargs["headers"]` | `array` | Request headers (merged with defaults). |
| `$fetchargs["body"]` | `mixed` | Request body (arrays are JSON-serialized). |
| `$fetchargs["ctrl"]` | `array` | Control options. |

**Returns:** `array` — the result dict (see above); never throws.

#### `prepare(array $fetchargs = []): mixed`

Prepare a fetch definition without sending the request. Returns the
`$fetchdef` array. Throws on error.


---

## DnsEntity

```php
$dns = $client->Dns();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `answer` | `array` | Yes |  |
| `from_loc` | `mixed` | Yes |  |

### Operations

#### `load(array $reqmatch, ?array $ctrl = null): mixed`

Load a single entity matching the given criteria. Throws on error.

```php
$result = $client->Dns()->load(["id" => "dns_id"]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): DnsEntity`

Create a new `DnsEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## GeodnEntity

```php
$geodn = $client->Geodn();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `answer` | `array` | Yes |  |
| `from_loc` | `mixed` | Yes |  |

### Operations

#### `load(array $reqmatch, ?array $ctrl = null): mixed`

Load a single entity matching the given criteria. Throws on error.

```php
$result = $client->Geodn()->load(["id" => "geodn_id"]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): GeodnEntity`

Create a new `GeodnEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## GeopingEntity

```php
$geoping = $client->Geoping();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `avg_rtt` | `float` | Yes |  |
| `from_loc` | `mixed` | Yes |  |
| `ip` | `string` | Yes |  |
| `is_alive` | `bool` | Yes |  |
| `max_rtt` | `float` | Yes |  |
| `min_rtt` | `float` | Yes |  |
| `packet_loss` | `float` | Yes |  |
| `packets_received` | `int` | Yes |  |
| `packets_sent` | `int` | Yes |  |
| `rtt` | `array` | Yes |  |

### Operations

#### `load(array $reqmatch, ?array $ctrl = null): mixed`

Load a single entity matching the given criteria. Throws on error.

```php
$result = $client->Geoping()->load(["id" => "geoping_id"]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): GeopingEntity`

Create a new `GeopingEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## PingEntity

```php
$ping = $client->Ping();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `avg_rtt` | `float` | Yes |  |
| `from_loc` | `mixed` | Yes |  |
| `ip` | `string` | Yes |  |
| `is_alive` | `bool` | Yes |  |
| `max_rtt` | `float` | Yes |  |
| `min_rtt` | `float` | Yes |  |
| `packet_loss` | `float` | Yes |  |
| `packets_received` | `int` | Yes |  |
| `packets_sent` | `int` | Yes |  |
| `rtt` | `array` | Yes |  |

### Operations

#### `load(array $reqmatch, ?array $ctrl = null): mixed`

Load a single entity matching the given criteria. Throws on error.

```php
$result = $client->Ping()->load(["id" => "ping_id"]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): PingEntity`

Create a new `PingEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## Features

| Feature | Version | Description |
| --- | --- | --- |
| `test` | 0.0.1 | In-memory mock transport for testing without a live server |


Features are activated via the `feature` option:

```php
$client = new GeonetSDK([
  "feature" => [
    "test" => ["active" => true],
  ],
]);
```


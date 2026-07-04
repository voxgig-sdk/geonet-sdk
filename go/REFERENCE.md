# Geonet Golang SDK Reference

Complete API reference for the Geonet Golang SDK.


## GeonetSDK

### Constructor

```go
func NewGeonetSDK(options map[string]any) *GeonetSDK
```

Create a new SDK client instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `options` | `map[string]any` | SDK configuration options. |
| `options["base"]` | `string` | Base URL for API requests. |
| `options["prefix"]` | `string` | URL prefix appended after base. |
| `options["suffix"]` | `string` | URL suffix appended after path. |
| `options["headers"]` | `map[string]any` | Custom headers for all requests. |
| `options["feature"]` | `map[string]any` | Feature configuration. |
| `options["system"]` | `map[string]any` | System overrides (e.g. custom fetch). |


### Static Methods

#### `Test() *GeonetSDK`

No-arg convenience constructor for the common no-options test case.

```go
client := sdk.Test()
```

#### `TestSDK(testopts, sdkopts map[string]any) *GeonetSDK`

Test client with options. Both arguments may be `nil`.

```go
client := sdk.TestSDK(testopts, sdkopts)
```


### Instance Methods

#### `Dns(data map[string]any) GeonetEntity`

Create a new `Dns` entity instance. Pass `nil` for no initial data.

#### `Geodn(data map[string]any) GeonetEntity`

Create a new `Geodn` entity instance. Pass `nil` for no initial data.

#### `Geoping(data map[string]any) GeonetEntity`

Create a new `Geoping` entity instance. Pass `nil` for no initial data.

#### `Ping(data map[string]any) GeonetEntity`

Create a new `Ping` entity instance. Pass `nil` for no initial data.

#### `OptionsMap() map[string]any`

Return a deep copy of the current SDK options.

#### `GetUtility() *Utility`

Return a copy of the SDK utility object.

#### `Direct(fetchargs map[string]any) (map[string]any, error)`

Make a direct HTTP request to any API endpoint.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `fetchargs["path"]` | `string` | URL path with optional `{param}` placeholders. |
| `fetchargs["method"]` | `string` | HTTP method (default: `"GET"`). |
| `fetchargs["params"]` | `map[string]any` | Path parameter values for `{param}` substitution. |
| `fetchargs["query"]` | `map[string]any` | Query string parameters. |
| `fetchargs["headers"]` | `map[string]any` | Request headers (merged with defaults). |
| `fetchargs["body"]` | `any` | Request body (maps are JSON-serialized). |
| `fetchargs["ctrl"]` | `map[string]any` | Control options (e.g. `map[string]any{"explain": true}`). |

**Returns:** `(map[string]any, error)`

#### `Prepare(fetchargs map[string]any) (map[string]any, error)`

Prepare a fetch definition without sending the request. Accepts the
same parameters as `Direct()`.

**Returns:** `(map[string]any, error)`


---

## DnsEntity

```go
dns := client.Dns(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `answer` | ``$ARRAY`` | Yes |  |
| `from_loc` | ``$ANY`` | Yes |  |

### Operations

#### `Load(reqmatch, ctrl map[string]any) (any, error)`

Load a single entity matching the given criteria.

```go
result, err := client.Dns(nil).Load(map[string]any{"id": "dns_id"}, nil)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `DnsEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## GeodnEntity

```go
geodn := client.Geodn(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `answer` | ``$ARRAY`` | Yes |  |
| `from_loc` | ``$ANY`` | Yes |  |

### Operations

#### `Load(reqmatch, ctrl map[string]any) (any, error)`

Load a single entity matching the given criteria.

```go
result, err := client.Geodn(nil).Load(map[string]any{"id": "geodn_id"}, nil)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `GeodnEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## GeopingEntity

```go
geoping := client.Geoping(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `avg_rtt` | ``$NUMBER`` | Yes |  |
| `from_loc` | ``$ANY`` | Yes |  |
| `ip` | ``$STRING`` | Yes |  |
| `is_alive` | ``$BOOLEAN`` | Yes |  |
| `max_rtt` | ``$NUMBER`` | Yes |  |
| `min_rtt` | ``$NUMBER`` | Yes |  |
| `packet_loss` | ``$NUMBER`` | Yes |  |
| `packets_received` | ``$INTEGER`` | Yes |  |
| `packets_sent` | ``$INTEGER`` | Yes |  |
| `rtt` | ``$ARRAY`` | Yes |  |

### Operations

#### `Load(reqmatch, ctrl map[string]any) (any, error)`

Load a single entity matching the given criteria.

```go
result, err := client.Geoping(nil).Load(map[string]any{"id": "geoping_id"}, nil)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `GeopingEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## PingEntity

```go
ping := client.Ping(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `avg_rtt` | ``$NUMBER`` | Yes |  |
| `from_loc` | ``$ANY`` | Yes |  |
| `ip` | ``$STRING`` | Yes |  |
| `is_alive` | ``$BOOLEAN`` | Yes |  |
| `max_rtt` | ``$NUMBER`` | Yes |  |
| `min_rtt` | ``$NUMBER`` | Yes |  |
| `packet_loss` | ``$NUMBER`` | Yes |  |
| `packets_received` | ``$INTEGER`` | Yes |  |
| `packets_sent` | ``$INTEGER`` | Yes |  |
| `rtt` | ``$ARRAY`` | Yes |  |

### Operations

#### `Load(reqmatch, ctrl map[string]any) (any, error)`

Load a single entity matching the given criteria.

```go
result, err := client.Ping(nil).Load(map[string]any{"id": "ping_id"}, nil)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `PingEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## Features

| Feature | Version | Description |
| --- | --- | --- |
| `test` | 0.0.1 | In-memory mock transport for testing without a live server |


Features are activated via the `feature` option:

```go
client := sdk.NewGeonetSDK(map[string]any{
    "feature": map[string]any{
        "test": map[string]any{"active": true},
    },
})
```


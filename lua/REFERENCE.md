# Geonet Lua SDK Reference

Complete API reference for the Geonet Lua SDK.


## GeonetSDK

### Constructor

```lua
local sdk = require("geonet_sdk")
local client = sdk.new(options)
```

Create a new SDK client instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `options` | `table` | SDK configuration options. |
| `options.base` | `string` | Base URL for API requests. |
| `options.prefix` | `string` | URL prefix appended after base. |
| `options.suffix` | `string` | URL suffix appended after path. |
| `options.headers` | `table` | Custom headers for all requests. |
| `options.feature` | `table` | Feature configuration. |
| `options.system` | `table` | System overrides (e.g. custom fetch). |


### Static Methods

#### `sdk.test(testopts?, sdkopts?)`

Create a test client with mock features active. Both arguments are optional.

```lua
local client = sdk.test()
```


### Instance Methods

#### `Dns(data)`

Create a new `Dns` entity instance. Pass `nil` for no initial data.

#### `Geodn(data)`

Create a new `Geodn` entity instance. Pass `nil` for no initial data.

#### `Geoping(data)`

Create a new `Geoping` entity instance. Pass `nil` for no initial data.

#### `Ping(data)`

Create a new `Ping` entity instance. Pass `nil` for no initial data.

#### `options_map() -> table`

Return a deep copy of the current SDK options.

#### `get_utility() -> Utility`

Return a copy of the SDK utility object.

#### `direct(fetchargs) -> table, err`

Make a direct HTTP request to any API endpoint.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `fetchargs.path` | `string` | URL path with optional `{param}` placeholders. |
| `fetchargs.method` | `string` | HTTP method (default: `"GET"`). |
| `fetchargs.params` | `table` | Path parameter values for `{param}` substitution. |
| `fetchargs.query` | `table` | Query string parameters. |
| `fetchargs.headers` | `table` | Request headers (merged with defaults). |
| `fetchargs.body` | `any` | Request body (tables are JSON-serialized). |
| `fetchargs.ctrl` | `table` | Control options (e.g. `{ explain = true }`). |

**Returns:** `table, err`

#### `prepare(fetchargs) -> table, err`

Prepare a fetch definition without sending the request. Accepts the
same parameters as `direct()`.

**Returns:** `table, err`


---

## DnsEntity

```lua
local dns = client:Dns(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `answers` | `table` | Yes |  |
| `from_loc` | `any` | Yes | Location of the server that performed the DNS lookup |
| `id` | `string` | No |  |

### Operations

#### `load(reqmatch, ctrl) -> any, err`

Load a single entity matching the given criteria.

```lua
local result, err = client:Dns():load({ id = "dns_id" })
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `DnsEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## GeodnEntity

```lua
local geodn = client:Geodn(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `answers` | `table` | Yes |  |
| `from_loc` | `any` | Yes | Location of the server that performed the DNS lookup |
| `id` | `string` | No |  |

### Operations

#### `load(reqmatch, ctrl) -> any, err`

Load a single entity matching the given criteria.

```lua
local result, err = client:Geodn():load({ id = "geodn_id" })
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `GeodnEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## GeopingEntity

```lua
local geoping = client:Geoping(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `avg_rtt` | `number` | Yes |  |
| `from_loc` | `any` | Yes | Location of the server that performed the ping |
| `id` | `string` | No |  |
| `ip` | `string` | Yes | IP address that was pinged |
| `is_alive` | `boolean` | Yes |  |
| `max_rtt` | `number` | Yes |  |
| `min_rtt` | `number` | Yes |  |
| `packet_loss` | `number` | Yes |  |
| `packets_received` | `number` | Yes |  |
| `packets_sent` | `number` | Yes |  |
| `rtts` | `table` | Yes |  |

### Operations

#### `load(reqmatch, ctrl) -> any, err`

Load a single entity matching the given criteria.

```lua
local result, err = client:Geoping():load({ id = "geoping_id" })
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `GeopingEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## PingEntity

```lua
local ping = client:Ping(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `avg_rtt` | `number` | Yes |  |
| `from_loc` | `any` | Yes | Location of the server that performed the ping |
| `id` | `string` | No |  |
| `ip` | `string` | Yes | IP address that was pinged |
| `is_alive` | `boolean` | Yes |  |
| `max_rtt` | `number` | Yes |  |
| `min_rtt` | `number` | Yes |  |
| `packet_loss` | `number` | Yes |  |
| `packets_received` | `number` | Yes |  |
| `packets_sent` | `number` | Yes |  |
| `rtts` | `table` | Yes |  |

### Operations

#### `load(reqmatch, ctrl) -> any, err`

Load a single entity matching the given criteria.

```lua
local result, err = client:Ping():load({ id = "ping_id" })
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `PingEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## Features

| Feature | Version | Description |
| --- | --- | --- |
| `test` | 0.0.1 | In-memory mock transport for testing without a live server |


Features are activated via the `feature` option:

```lua
local client = sdk.new({
  feature = {
    test = { active = true },
  },
})
```


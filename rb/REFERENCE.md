# Geonet Ruby SDK Reference

Complete API reference for the Geonet Ruby SDK.


## GeonetSDK

### Constructor

```ruby
require_relative 'geonet_sdk'

client = GeonetSDK.new(options)
```

Create a new SDK client instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `options` | `Hash` | SDK configuration options. |
| `options["base"]` | `String` | Base URL for API requests. |
| `options["prefix"]` | `String` | URL prefix appended after base. |
| `options["suffix"]` | `String` | URL suffix appended after path. |
| `options["headers"]` | `Hash` | Custom headers for all requests. |
| `options["feature"]` | `Hash` | Feature configuration. |
| `options["system"]` | `Hash` | System overrides (e.g. custom fetch). |


### Static Methods

#### `GeonetSDK.test(testopts = nil, sdkopts = nil)`

Create a test client with mock features active. Both arguments may be `nil`.

```ruby
client = GeonetSDK.test
```


### Instance Methods

#### `Dns(data = nil)`

Create a new `Dns` entity instance. Pass `nil` for no initial data.

#### `Geodn(data = nil)`

Create a new `Geodn` entity instance. Pass `nil` for no initial data.

#### `Geoping(data = nil)`

Create a new `Geoping` entity instance. Pass `nil` for no initial data.

#### `Ping(data = nil)`

Create a new `Ping` entity instance. Pass `nil` for no initial data.

#### `options_map -> Hash`

Return a deep copy of the current SDK options.

#### `get_utility -> Utility`

Return a copy of the SDK utility object.

#### `direct(fetchargs = {}) -> Hash`

Make a direct HTTP request to any API endpoint. Returns a result hash
(`{ "ok" => ..., "status" => ..., "data" => ..., "err" => ... }`); it
does not raise — inspect `result["ok"]`.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `fetchargs["path"]` | `String` | URL path with optional `{param}` placeholders. |
| `fetchargs["method"]` | `String` | HTTP method (default: `"GET"`). |
| `fetchargs["params"]` | `Hash` | Path parameter values for `{param}` substitution. |
| `fetchargs["query"]` | `Hash` | Query string parameters. |
| `fetchargs["headers"]` | `Hash` | Request headers (merged with defaults). |
| `fetchargs["body"]` | `any` | Request body (hashes are JSON-serialized). |
| `fetchargs["ctrl"]` | `Hash` | Control options (e.g. `{ "explain" => true }`). |

**Returns:** `Hash`

#### `prepare(fetchargs = {}) -> Hash`

Prepare a fetch definition without sending the request. Accepts the
same parameters as `direct()`. Raises on error.

**Returns:** `Hash` (the fetch definition; raises on error)


---

## DnsEntity

```ruby
dns = client.dns
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `answer` | ``$ARRAY`` | Yes |  |
| `from_loc` | ``$ANY`` | Yes |  |

### Operations

#### `load(reqmatch, ctrl = nil) -> result`

Load a single entity matching the given criteria. Raises on error.

```ruby
result = client.dns.load({ "id" => "dns_id" })
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `DnsEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## GeodnEntity

```ruby
geodn = client.geodn
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `answer` | ``$ARRAY`` | Yes |  |
| `from_loc` | ``$ANY`` | Yes |  |

### Operations

#### `load(reqmatch, ctrl = nil) -> result`

Load a single entity matching the given criteria. Raises on error.

```ruby
result = client.geodn.load({ "id" => "geodn_id" })
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `GeodnEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## GeopingEntity

```ruby
geoping = client.geoping
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

#### `load(reqmatch, ctrl = nil) -> result`

Load a single entity matching the given criteria. Raises on error.

```ruby
result = client.geoping.load({ "id" => "geoping_id" })
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `GeopingEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## PingEntity

```ruby
ping = client.ping
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

#### `load(reqmatch, ctrl = nil) -> result`

Load a single entity matching the given criteria. Raises on error.

```ruby
result = client.ping.load({ "id" => "ping_id" })
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `PingEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## Features

| Feature | Version | Description |
| --- | --- | --- |
| `test` | 0.0.1 | In-memory mock transport for testing without a live server |


Features are activated via the `feature` option:

```ruby
client = GeonetSDK.new({
  "feature" => {
    "test" => { "active" => true },
  },
})
```


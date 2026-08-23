# Geonet Python SDK Reference

Complete API reference for the Geonet Python SDK.


## GeonetSDK

### Constructor

```python
from geonet_sdk import GeonetSDK

client = GeonetSDK(options)
```

Create a new SDK client instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `options` | `dict` | SDK configuration options. |
| `options["base"]` | `str` | Base URL for API requests. |
| `options["prefix"]` | `str` | URL prefix appended after base. |
| `options["suffix"]` | `str` | URL suffix appended after path. |
| `options["headers"]` | `dict` | Custom headers for all requests. |
| `options["feature"]` | `dict` | Feature configuration. |
| `options["system"]` | `dict` | System overrides (e.g. custom fetch). |


### Static Methods

#### `GeonetSDK.test(testopts=None, sdkopts=None)`

Create a test client with mock features active. Both arguments may be `None`.

```python
client = GeonetSDK.test()
```


### Instance Methods

#### `Dns(data=None)`

Create a new `DnsEntity` instance. Pass `None` for no initial data.

#### `Geodn(data=None)`

Create a new `GeodnEntity` instance. Pass `None` for no initial data.

#### `Geoping(data=None)`

Create a new `GeopingEntity` instance. Pass `None` for no initial data.

#### `Ping(data=None)`

Create a new `PingEntity` instance. Pass `None` for no initial data.

#### `options_map() -> dict`

Return a deep copy of the current SDK options.

#### `get_utility() -> Utility`

Return a copy of the SDK utility object.

#### `direct(fetchargs=None) -> dict`

Make a direct HTTP request to any API endpoint. Returns a result `dict` with `ok`, `status`, `headers`, and `data` (or `err` on failure). This escape hatch never raises — branch on `result["ok"]`.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `fetchargs["path"]` | `str` | URL path with optional `{param}` placeholders. |
| `fetchargs["method"]` | `str` | HTTP method (default: `"GET"`). |
| `fetchargs["params"]` | `dict` | Path parameter values. |
| `fetchargs["query"]` | `dict` | Query string parameters. |
| `fetchargs["headers"]` | `dict` | Request headers (merged with defaults). |
| `fetchargs["body"]` | `any` | Request body (dicts are JSON-serialized). |

**Returns:** `result_dict`

#### `prepare(fetchargs=None) -> dict`

Prepare a fetch definition without sending. Returns the `fetchdef` and raises on error.


---

## DnsEntity

```python
dns = client.Dns()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `answers` | `list` | Yes |  |
| `from_loc` | `Any` | Yes | Location of the server that performed the DNS lookup |

### Operations

#### `load(reqmatch, ctrl=None) -> dict`

Load a single entity matching the given criteria. Returns the entity data and raises on error.

```python
result = client.Dns().load({"id": "dns_id"})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `DnsEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## GeodnEntity

```python
geodn = client.Geodn()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `answers` | `list` | Yes |  |
| `from_loc` | `Any` | Yes | Location of the server that performed the DNS lookup |

### Operations

#### `load(reqmatch, ctrl=None) -> dict`

Load a single entity matching the given criteria. Returns the entity data and raises on error.

```python
result = client.Geodn().load({"id": "geodn_id"})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `GeodnEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## GeopingEntity

```python
geoping = client.Geoping()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `avg_rtt` | `float` | Yes |  |
| `from_loc` | `Any` | Yes | Location of the server that performed the ping |
| `ip` | `str` | Yes | IP address that was pinged |
| `is_alive` | `bool` | Yes |  |
| `max_rtt` | `float` | Yes |  |
| `min_rtt` | `float` | Yes |  |
| `packet_loss` | `float` | Yes |  |
| `packets_received` | `int` | Yes |  |
| `packets_sent` | `int` | Yes |  |
| `rtts` | `list` | Yes |  |

### Operations

#### `load(reqmatch, ctrl=None) -> dict`

Load a single entity matching the given criteria. Returns the entity data and raises on error.

```python
result = client.Geoping().load({"id": "geoping_id"})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `GeopingEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## PingEntity

```python
ping = client.Ping()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `avg_rtt` | `float` | Yes |  |
| `from_loc` | `Any` | Yes | Location of the server that performed the ping |
| `ip` | `str` | Yes | IP address that was pinged |
| `is_alive` | `bool` | Yes |  |
| `max_rtt` | `float` | Yes |  |
| `min_rtt` | `float` | Yes |  |
| `packet_loss` | `float` | Yes |  |
| `packets_received` | `int` | Yes |  |
| `packets_sent` | `int` | Yes |  |
| `rtts` | `list` | Yes |  |

### Operations

#### `load(reqmatch, ctrl=None) -> dict`

Load a single entity matching the given criteria. Returns the entity data and raises on error.

```python
result = client.Ping().load({"id": "ping_id"})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `PingEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## Features

| Feature | Version | Description |
| --- | --- | --- |
| `test` | 0.0.1 | In-memory mock transport for testing without a live server |


Features are activated via the `feature` option:

```python
client = GeonetSDK({
    "feature": {
        "test": {"active": True},
    },
})
```


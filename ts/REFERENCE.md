# Geonet TypeScript SDK Reference

Complete API reference for the Geonet TypeScript SDK.


## GeonetSDK

### Constructor

```ts
new GeonetSDK(options?: object)
```

Create a new SDK client instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `options` | `object` | SDK configuration options. |
| `options.base` | `string` | Base URL for API requests. |
| `options.prefix` | `string` | URL prefix appended after base. |
| `options.suffix` | `string` | URL suffix appended after path. |
| `options.headers` | `object` | Custom headers for all requests. |
| `options.feature` | `object` | Feature configuration. |
| `options.system` | `object` | System overrides (e.g. custom fetch). |


### Static Methods

#### `GeonetSDK.test(testopts?, sdkopts?)`

Create a test client with mock features active.

```ts
const client = GeonetSDK.test()
```

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `testopts` | `object` | Test feature options. |
| `sdkopts` | `object` | Additional SDK options merged with test defaults. |

**Returns:** `GeonetSDK` instance in test mode.


### Instance Methods

#### `Dns(data?: object)`

Create a new `Dns` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `DnsEntity` instance.

#### `Geodn(data?: object)`

Create a new `Geodn` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `GeodnEntity` instance.

#### `Geoping(data?: object)`

Create a new `Geoping` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `GeopingEntity` instance.

#### `Ping(data?: object)`

Create a new `Ping` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `PingEntity` instance.

#### `options()`

Return a deep copy of the current SDK options.

**Returns:** `object`

#### `utility()`

Return a copy of the SDK utility object.

**Returns:** `object`

#### `direct(fetchargs?: object)`

Make a direct HTTP request to any API endpoint.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `fetchargs.path` | `string` | URL path with optional `{param}` placeholders. |
| `fetchargs.method` | `string` | HTTP method (default: `GET`). |
| `fetchargs.params` | `object` | Path parameter values for `{param}` substitution. |
| `fetchargs.query` | `object` | Query string parameters. |
| `fetchargs.headers` | `object` | Request headers (merged with defaults). |
| `fetchargs.body` | `any` | Request body (objects are JSON-serialized). |
| `fetchargs.ctrl` | `object` | Control options (e.g. `{ explain: true }`). |

**Returns:** `Promise<{ ok, status, headers, data } | Error>`

#### `prepare(fetchargs?: object)`

Prepare a fetch definition without sending the request. Accepts the
same parameters as `direct()`.

**Returns:** `Promise<{ url, method, headers, body } | Error>`

#### `tester(testopts?, sdkopts?)`

Alias for `GeonetSDK.test()`.

**Returns:** `GeonetSDK` instance in test mode.


---

## DnsEntity

```ts
const dns = client.Dns()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `answers` | `any[]` | Yes |  |
| `from_loc` | `any` | Yes | Location of the server that performed the DNS lookup |
| `id` | `string` | No |  |

### Operations

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria.

```ts
const result = await client.Dns().load({ id: 'dns_id' })
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `DnsEntity` instance with the same client and
options.

#### `client()`

Return the parent `GeonetSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## GeodnEntity

```ts
const geodn = client.Geodn()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `answers` | `any[]` | Yes |  |
| `from_loc` | `any` | Yes | Location of the server that performed the DNS lookup |
| `id` | `string` | No |  |

### Operations

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria.

```ts
const result = await client.Geodn().load({ id: 'geodn_id' })
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `GeodnEntity` instance with the same client and
options.

#### `client()`

Return the parent `GeonetSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## GeopingEntity

```ts
const geoping = client.Geoping()
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
| `rtts` | `any[]` | Yes |  |

### Operations

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria.

```ts
const result = await client.Geoping().load({ id: 'geoping_id' })
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `GeopingEntity` instance with the same client and
options.

#### `client()`

Return the parent `GeonetSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## PingEntity

```ts
const ping = client.Ping()
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
| `rtts` | `any[]` | Yes |  |

### Operations

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria.

```ts
const result = await client.Ping().load({ id: 'ping_id' })
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `PingEntity` instance with the same client and
options.

#### `client()`

Return the parent `GeonetSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## Features

| Feature | Version | Description |
| --- | --- | --- |
| `test` | 0.0.1 | In-memory mock transport for testing without a live server |


Features are activated via the `feature` option:

```ts
const client = new GeonetSDK({
  feature: {
    test: { active: true },
  }
})
```


### Configuring features

Each feature is inactive until switched on, and an SDK with no feature
configured does no feature work at all. Every option below keeps its default
unless you name it.

The array form of \`feature\` is significant: several features wrap the
transport, and the order you list them in is the order they nest.

#### `test`

In-memory mock transport for testing without a live server.

**Configuration**

| Option | Default |
|---|---|
| `active` | `false` |

Options above are those the model carries a default for. A feature may
also accept callback options — a `sink` to receive each record, for
instance — which have no default and are covered in the full feature
reference.

**Usage**

Set `feature.test.active` to true in the client options, and override any option above in the same entry. Every option keeps
its default unless you name it.

**Considerations**

- Attaches to pipeline hooks, not the transport, so activation order does
  not change what it observes.
- Installs the BASE transport that the wrapping features wrap, so it must be
  activated before them.
- Inactive by default: leaving it out costs nothing at runtime.


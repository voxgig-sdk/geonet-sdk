# Geonet TypeScript SDK



The TypeScript SDK for the Geonet API — a type-safe, entity-oriented client with full async/await support.

The API is exposed as capitalised, semantic **Entities** — e.g.
`client.Dns()` — each with a small set of operations (`load`)
instead of raw URL paths and query parameters. This keeps the surface
predictable and low-friction for both humans and AI agents.

> Other languages, the CLI, and MCP server live alongside this one — see
> the [top-level README](../README.md).


## Install
This package is not yet published to npm. Install it from the GitHub
release tag (`ts/vX.Y.Z`):

- Releases: [https://github.com/voxgig-sdk/geonet-sdk/releases](https://github.com/voxgig-sdk/geonet-sdk/releases)


## Tutorial: your first API call

This tutorial walks through creating a client, listing entities, and
loading a specific record.

### 1. Create a client

```ts
import { GeonetSDK } from '@voxgig-sdk/geonet'

const client = new GeonetSDK()
```

### 3. Load a dns

`load()` returns the entity directly and throws on failure:

```ts
try {
  const dns = await client.Dns().load({ id: 'example_id' })
  console.log(dns)
} catch (err) {
  console.error('load failed:', err)
}
```


## Error handling

Entity operations reject on failure, so wrap them in `try` / `catch`:

```ts
try {
  const geodn = await client.Geodn().load({ id: "example_id" })
  console.log(geodn)
} catch (err) {
  console.error('load failed:', err)
}
```

The low-level `direct()` method does **not** throw — it returns the
value or an `Error`, so check the result before using it:

```ts
const result = await client.direct({
  path: '/api/resource/{id}',
  method: 'GET',
  params: { id: 'example_id' },
})

if (result instanceof Error) {
  throw result
}
```


## How-to guides

### Make a direct HTTP request

For endpoints not covered by entity methods:

```ts
const result = await client.direct({
  path: '/api/resource/{id}',
  method: 'GET',
  params: { id: 'example' },
})

if (result instanceof Error) {
  throw result
}
if (result.ok) {
  console.log(result.status)  // 200
  console.log(result.data)    // response body
}
```

### Prepare a request without sending it

```ts
const fetchdef = await client.prepare({
  path: '/api/resource/{id}',
  method: 'DELETE',
  params: { id: 'example' },
})

// Inspect before sending
console.log(fetchdef.url)
console.log(fetchdef.method)
console.log(fetchdef.headers)
```

### Use test mode

Create a mock client for unit testing — no server required:

```ts
const client = GeonetSDK.test()

const geodn = await client.Geodn().load({ id: 'test01' })
// geodn is the entity, populated with mock response data
// — call geodn.data() for the record itself
console.log(geodn)
```

You can also use the instance method:

```ts
const client = new GeonetSDK()
const testClient = client.tester()
```

### Retain entity state across calls

Entity instances remember their last match and data:

```ts
const entity = client.Geodn()

// First call runs the operation and stores its result
await entity.load({ id: 'example' })

// Subsequent calls reuse the stored state
const data = entity.data()
console.log(data)
```

### Add custom middleware

Pass features via the `extend` option:

```ts
const logger = {
  hooks: {
    PreRequest: (ctx: any) => {
      console.log('Requesting:', ctx.spec.method, ctx.spec.path)
    },
    PreResponse: (ctx: any) => {
      console.log('Status:', ctx.out.request?.status)
    },
  },
}

const client = new GeonetSDK({
  extend: [logger],
})
```

### Run live tests

Create a `.env.local` file at the project root:

```
GEONET_TEST_LIVE=TRUE
```

Then run:

```bash
cd ts && npm test
```


## Reference

### GeonetSDK

#### Constructor

```ts
new GeonetSDK(options?: {
  base?: string
  prefix?: string
  suffix?: string
  feature?: Record<string, { active: boolean }>
  extend?: Feature[]
})
```

| Option | Type | Description |
| --- | --- | --- |
| `base` | `string` | Base URL of the API server. |
| `prefix` | `string` | URL path prefix prepended to all requests. |
| `suffix` | `string` | URL path suffix appended to all requests. |
| `feature` | `object` | Feature activation flags (e.g. `{ test: { active: true } }`). |
| `extend` | `Feature[]` | Additional feature instances to load. |

#### Methods

| Method | Returns | Description |
| --- | --- | --- |
| `options()` | `object` | Deep copy of current SDK options. |
| `utility()` | `Utility` | Deep copy of the SDK utility object. |
| `prepare(fetchargs?)` | `Promise<FetchDef>` | Build an HTTP request definition without sending it. |
| `direct(fetchargs?)` | `Promise<DirectResult>` | Build and send an HTTP request. |
| `Dns(data?)` | `DnsEntity` | Create a Dns entity instance. |
| `Geodn(data?)` | `GeodnEntity` | Create a Geodn entity instance. |
| `Geoping(data?)` | `GeopingEntity` | Create a Geoping entity instance. |
| `Ping(data?)` | `PingEntity` | Create a Ping entity instance. |
| `tester(testopts?, sdkopts?)` | `GeonetSDK` | Create a test-mode client instance. |

#### Static methods

| Method | Returns | Description |
| --- | --- | --- |
| `GeonetSDK.test(testopts?, sdkopts?)` | `GeonetSDK` | Create a test-mode client. |

### Entity interface

All entities share the same interface.

#### Methods

| Method | Signature | Description |
| --- | --- | --- |
| `load` | `load(reqmatch?, ctrl?): Promise<Entity>` | Load a single entity by match criteria. |
| `data` | `data(data?: Partial<Entity>): Entity` | Get or set entity data. |
| `match` | `match(match?: Partial<Entity>): Partial<Entity>` | Get or set entity match criteria. |
| `make` | `make(): Entity` | Create a new instance with the same options. |
| `client` | `client(): GeonetSDK` | Return the parent SDK client. |
| `entopts` | `entopts(): object` | Return a copy of the entity options. |

#### Return values

Entity operations resolve to the entity data directly — there is no
result envelope:

- `load` resolves to a single entity object.

On a failed request these methods **throw**, so wrap calls in
`try`/`catch` to handle errors. Only `direct()` returns the result
envelope described below.

### DirectResult shape

The `direct()` method returns:

```ts
{
  ok: boolean
  status: number
  headers: object
  data: any
}
```

On error, `ok` is `false` and an `err` property contains the error.

### FetchDef shape

The `prepare()` method returns:

```ts
{
  url: string
  method: string
  headers: Record<string, string>
  body?: any
}
```

### Entities

#### Dns

| Field | Description |
| --- | --- |
| `answers` |  |
| `from_loc` |  |

Operations: load.

API path: `/api/dns/{hostname}`

#### Geodn

| Field | Description |
| --- | --- |
| `answers` |  |
| `from_loc` |  |

Operations: load.

API path: `/api/geodns/{hostname}`

#### Geoping

| Field | Description |
| --- | --- |
| `avg_rtt` |  |
| `from_loc` |  |
| `ip` |  |
| `is_alive` |  |
| `max_rtt` |  |
| `min_rtt` |  |
| `packet_loss` |  |
| `packets_received` |  |
| `packets_sent` |  |
| `rtts` |  |

Operations: load.

API path: `/api/geoping/{ip}`

#### Ping

| Field | Description |
| --- | --- |
| `avg_rtt` |  |
| `from_loc` |  |
| `ip` |  |
| `is_alive` |  |
| `max_rtt` |  |
| `min_rtt` |  |
| `packet_loss` |  |
| `packets_received` |  |
| `packets_sent` |  |
| `rtts` |  |

Operations: load.

API path: `/api/ping/{ip}`



## Entities


### Dns

Create an instance: `const dns = client.Dns()`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `answers` | `any[]` |  |
| `from_loc` | `any` |  |

#### Example: Load

```ts
const dns = await client.Dns().load({ id: 'dns_id' })
```


### Geodn

Create an instance: `const geodn = client.Geodn()`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `answers` | `any[]` |  |
| `from_loc` | `any` |  |

#### Example: Load

```ts
const geodn = await client.Geodn().load({ id: 'geodn_id' })
```


### Geoping

Create an instance: `const geoping = client.Geoping()`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `avg_rtt` | `number` |  |
| `from_loc` | `any` |  |
| `ip` | `string` |  |
| `is_alive` | `boolean` |  |
| `max_rtt` | `number` |  |
| `min_rtt` | `number` |  |
| `packet_loss` | `number` |  |
| `packets_received` | `number` |  |
| `packets_sent` | `number` |  |
| `rtts` | `any[]` |  |

#### Example: Load

```ts
const geoping = await client.Geoping().load({ id: 'geoping_id' })
```


### Ping

Create an instance: `const ping = client.Ping()`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `avg_rtt` | `number` |  |
| `from_loc` | `any` |  |
| `ip` | `string` |  |
| `is_alive` | `boolean` |  |
| `max_rtt` | `number` |  |
| `min_rtt` | `number` |  |
| `packet_loss` | `number` |  |
| `packets_received` | `number` |  |
| `packets_sent` | `number` |  |
| `rtts` | `any[]` |  |

#### Example: Load

```ts
const ping = await client.Ping().load({ id: 'ping_id' })
```


## Advanced

> The sections above cover everyday use. The material below explains the
> SDK's internals — useful when extending it with custom features, but not
> needed for normal use.

### The operation pipeline

Every entity operation follows a six-stage pipeline. Each stage fires a
feature hook before executing:

```
PrePoint → PreSpec → PreRequest → PreResponse → PreResult → PreDone
```

- **PrePoint**: Resolves which API endpoint to call based on the
  operation name and entity configuration.
- **PreSpec**: Builds the HTTP spec — URL, method, headers, body —
  from the resolved point and the caller's parameters.
- **PreRequest**: Sends the HTTP request. Features can intercept here
  to replace the transport (as TestFeature does with mocks).
- **PreResponse**: Parses the raw HTTP response.
- **PreResult**: Extracts the business data from the parsed response.
- **PreDone**: Final stage before returning to the caller. Entity
  state (match, data) is updated here.

If any stage errors, the pipeline short-circuits and the error surfaces
to the caller — see [Error handling](#error-handling) for how that looks
in this language.

### Features and hooks

Features are the extension mechanism. A feature is an object with a
`hooks` map. Each hook key is a pipeline stage name, and the value is
a function that receives the context.

The SDK ships with built-in features:

- **TestFeature**: In-memory mock transport for testing without a live server

Features are initialized in order. Hooks fire in the order features
were added, so later features can override earlier ones.

### Module structure

```
geonet/
├── src/
│   ├── GeonetSDK.ts        # Main SDK class
│   ├── entity/             # Entity implementations
│   ├── feature/            # Built-in features (Base, Test, Log)
│   └── utility/            # Utility functions
├── test/                   # Test suites
└── dist/                   # Compiled output
```

Import the SDK from the package root:

```ts
import { GeonetSDK } from '@voxgig-sdk/geonet'
```

### Entity state

Entity instances are stateful. After a successful `load`, the entity
stores the returned data and match criteria internally. Subsequent
calls on the same instance can rely on this state.

```ts
const geodn = client.Geodn()
await geodn.load({ id: "example_id" })

// geodn.data() now returns the geodn data from the last `load`
// geodn.match() returns { id: "example_id" }
```

Call `make()` to create a fresh instance with the same configuration
but no stored state.

### Direct vs entity access

The entity interface handles URL construction, parameter placement,
and response parsing automatically. Use it for standard CRUD operations.

The `direct` method gives full control over the HTTP request. Use it
for non-standard endpoints, bulk operations, or any path not modelled
as an entity. The `prepare` method is useful for debugging — it
shows exactly what `direct` would send.


## Full Reference

See [REFERENCE.md](REFERENCE.md) for complete API reference
documentation including all method signatures, entity field schemas,
and detailed usage examples.

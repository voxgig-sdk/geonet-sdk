# Geonet Golang SDK



The Golang SDK for the Geonet API — an entity-oriented client using standard Go conventions. No generics required; data flows as `map[string]any`.

It exposes the API as capitalised, semantic **Entities** — e.g. `client.Dns(nil)` — each with the same small set of operations (`Load`) instead of raw URL paths and query strings. You call meaning, not endpoints, which keeps the cognitive load low.

> Also generated from this model: `go-cli`, `go-mcp`, `lua`, `php`, `py`, `rb`, `ts` — see
> the [top-level README](../README.md).


## Install
```bash
go get github.com/voxgig-sdk/geonet-sdk/go@latest
```

The Go module proxy resolves the version from the `go/vX.Y.Z` GitHub
release tag — see [Releases](https://github.com/voxgig-sdk/geonet-sdk/releases) for the available versions.

To vendor from a local checkout instead, clone this repo alongside your
project and add a `replace` directive pointing at the checked-out
`go/` directory:

```bash
go mod edit -replace github.com/voxgig-sdk/geonet-sdk/go=../geonet-sdk/go
```


## Tutorial: your first API call

This tutorial walks through creating a client, listing entities, and
loading a specific record.

### Quickstart

A complete program: create a client, then call the entity operations.
Each operation returns `(value, error)` — the value is the data itself
(there is no `{ok, data}` wrapper), so check `err` and use the value
directly.

```go
package main

import (
    "fmt"
    sdk "github.com/voxgig-sdk/geonet-sdk/go"
)

func main() {
    client := sdk.New()

    // Load a single dns — the value is the loaded record.
    dns, err := client.Dns(nil).Load(map[string]any{"id": "example_id"}, nil)
    if err != nil {
        panic(err)
    }
    fmt.Println(dns)
}
```


## Error handling

Every entity operation returns `(value, error)`. Check `err` before
using the value — there is no exception to catch:

```go
geodn, err := client.Geodn(nil).Load(map[string]any{"id": "example_id"}, nil)
if err != nil {
    // handle err
    return
}
_ = geodn
```

`Direct` follows the same `(value, error)` convention:

```go
result, err := client.Direct(map[string]any{
    "path":   "/api/resource/{id}",
    "method": "GET",
    "params": map[string]any{"id": "example_id"},
})
if err != nil {
    // handle err
}
_ = result
```


## How-to guides

### Make a direct HTTP request

For endpoints not covered by entity methods:

```go
result, err := client.Direct(map[string]any{
    "path":   "/api/resource/{id}",
    "method": "GET",
    "params": map[string]any{"id": "example"},
})
if err != nil {
    panic(err)
}

if result["ok"] == true {
    fmt.Println(result["status"]) // 200
    fmt.Println(result["data"])   // response body
}
```

### Prepare a request without sending it

```go
fetchdef, err := client.Prepare(map[string]any{
    "path":   "/api/resource/{id}",
    "method": "DELETE",
    "params": map[string]any{"id": "example"},
})
if err != nil {
    panic(err)
}

fmt.Println(fetchdef["url"])
fmt.Println(fetchdef["method"])
fmt.Println(fetchdef["headers"])
```

### Use test mode

Create a mock client for unit testing — no server required:

```go
client := sdk.Test()

geodn, err := client.Geodn(nil).Load(
    map[string]any{"id": "test01"}, nil,
)
if err != nil {
    panic(err)
}
fmt.Println(geodn) // the returned mock data
```

### Use a custom fetch function

Replace the HTTP transport with your own function:

```go
mockFetch := func(url string, init map[string]any) (map[string]any, error) {
    return map[string]any{
        "status":     200,
        "statusText": "OK",
        "headers":    map[string]any{},
        "json": (func() any)(func() any {
            return map[string]any{"id": "mock01"}
        }),
    }, nil
}

client := sdk.NewGeonetSDK(map[string]any{
    "base": "http://localhost:8080",
    "system": map[string]any{
        "fetch": (func(string, map[string]any) (map[string]any, error))(mockFetch),
    },
})
```

### Run live tests

Create a `.env.local` file at the project root:

```
GEONET_TEST_LIVE=TRUE
```

Then run:

```bash
cd go && go test ./test/...
```


## Reference

### NewGeonetSDK

```go
func NewGeonetSDK(options map[string]any) *GeonetSDK
```

Creates a new SDK client.

| Option | Type | Description |
| --- | --- | --- |
| `"base"` | `string` | Base URL of the API server. |
| `"prefix"` | `string` | URL path prefix prepended to all requests. |
| `"suffix"` | `string` | URL path suffix appended to all requests. |
| `"feature"` | `map[string]any` | Feature activation flags. |
| `"extend"` | `[]any` | Additional Feature instances to load. |
| `"system"` | `map[string]any` | System overrides (e.g. custom `"fetch"` function). |

### TestSDK

```go
func TestSDK(testopts map[string]any, sdkopts map[string]any) *GeonetSDK
```

Creates a test-mode client with mock transport. Both arguments may be `nil`.

### GeonetSDK methods

| Method | Signature | Description |
| --- | --- | --- |
| `OptionsMap` | `() map[string]any` | Deep copy of current SDK options. |
| `GetUtility` | `() *Utility` | Copy of the SDK utility object. |
| `Prepare` | `(fetchargs map[string]any) (map[string]any, error)` | Build an HTTP request definition without sending. |
| `Direct` | `(fetchargs map[string]any) (map[string]any, error)` | Build and send an HTTP request. |
| `Dns` | `(data map[string]any) GeonetEntity` | Create a Dns entity instance. |
| `Geodn` | `(data map[string]any) GeonetEntity` | Create a Geodn entity instance. |
| `Geoping` | `(data map[string]any) GeonetEntity` | Create a Geoping entity instance. |
| `Ping` | `(data map[string]any) GeonetEntity` | Create a Ping entity instance. |

### Entity interface (GeonetEntity)

All entities implement the `GeonetEntity` interface.

| Method | Signature | Description |
| --- | --- | --- |
| `Load` | `(reqmatch, ctrl map[string]any) (any, error)` | Load a single entity by match criteria. |
| `Data` | `(args ...any) any` | Get or set entity data. |
| `Match` | `(args ...any) any` | Get or set entity match criteria. |
| `Make` | `() Entity` | Create a new instance with the same options. |
| `GetName` | `() string` | Return the entity name. |

### Result shape

Entity operations return `(value, error)`. The `value` is the
operation's data **directly** — there is no wrapper:

| Operation | `value` |
| --- | --- |
| `Load` | the entity record (`map[string]any`) |

Check `err` first, then use the value directly (or the typed
`...Typed` variants, which return the entity's model struct and a typed
slice):

    dns, err := client.Dns(nil).Load(map[string]any{"id": "example_id"}, nil)
    if err != nil { /* handle */ }
    // dns is the returned record

Only `Direct()` returns a response envelope — a `map[string]any` with
`"ok"`, `"status"`, `"headers"`, and `"data"` keys.

### Entities

#### Dns

| Field | Description |
| --- | --- |
| `"answers"` |  |
| `"from_loc"` | Location of the server that performed the DNS lookup |

Operations: Load.

API path: `/api/dns/{hostname}`

#### Geodn

| Field | Description |
| --- | --- |
| `"answers"` |  |
| `"from_loc"` | Location of the server that performed the DNS lookup |

Operations: Load.

API path: `/api/geodns/{hostname}`

#### Geoping

| Field | Description |
| --- | --- |
| `"avg_rtt"` |  |
| `"from_loc"` | Location of the server that performed the ping |
| `"ip"` | IP address that was pinged |
| `"is_alive"` |  |
| `"max_rtt"` |  |
| `"min_rtt"` |  |
| `"packet_loss"` |  |
| `"packets_received"` |  |
| `"packets_sent"` |  |
| `"rtts"` |  |

Operations: Load.

API path: `/api/geoping/{ip}`

#### Ping

| Field | Description |
| --- | --- |
| `"avg_rtt"` |  |
| `"from_loc"` | Location of the server that performed the ping |
| `"ip"` | IP address that was pinged |
| `"is_alive"` |  |
| `"max_rtt"` |  |
| `"min_rtt"` |  |
| `"packet_loss"` |  |
| `"packets_received"` |  |
| `"packets_sent"` |  |
| `"rtts"` |  |

Operations: Load.

API path: `/api/ping/{ip}`



## Entities


### Dns

Create an instance: `dns := client.Dns(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `Load(match, ctrl)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `answers` | `[]any` |  |
| `from_loc` | `any` | Location of the server that performed the DNS lookup |

#### Example: Load

```go
dns, err := client.Dns(nil).Load(map[string]any{"id": "dns_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(dns) // the loaded record
```


### Geodn

Create an instance: `geodn := client.Geodn(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `Load(match, ctrl)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `answers` | `[]any` |  |
| `from_loc` | `any` | Location of the server that performed the DNS lookup |

#### Example: Load

```go
geodn, err := client.Geodn(nil).Load(map[string]any{"id": "geodn_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(geodn) // the loaded record
```


### Geoping

Create an instance: `geoping := client.Geoping(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `Load(match, ctrl)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `avg_rtt` | `float64` |  |
| `from_loc` | `any` | Location of the server that performed the ping |
| `ip` | `string` | IP address that was pinged |
| `is_alive` | `bool` |  |
| `max_rtt` | `float64` |  |
| `min_rtt` | `float64` |  |
| `packet_loss` | `float64` |  |
| `packets_received` | `int` |  |
| `packets_sent` | `int` |  |
| `rtts` | `[]any` |  |

#### Example: Load

```go
geoping, err := client.Geoping(nil).Load(map[string]any{"id": "geoping_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(geoping) // the loaded record
```


### Ping

Create an instance: `ping := client.Ping(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `Load(match, ctrl)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `avg_rtt` | `float64` |  |
| `from_loc` | `any` | Location of the server that performed the ping |
| `ip` | `string` | IP address that was pinged |
| `is_alive` | `bool` |  |
| `max_rtt` | `float64` |  |
| `min_rtt` | `float64` |  |
| `packet_loss` | `float64` |  |
| `packets_received` | `int` |  |
| `packets_sent` | `int` |  |
| `rtts` | `[]any` |  |

#### Example: Load

```go
ping, err := client.Ping(nil).Load(map[string]any{"id": "ping_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(ping) // the loaded record
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

Features are the extension mechanism. A feature implements the
`Feature` interface and provides hooks — functions keyed by pipeline
stage names.

The SDK ships with built-in features:

- **TestFeature**: In-memory mock transport for testing without a live server

Features are initialized in order. Hooks fire in the order features
were added, so later features can override earlier ones.

### Data as maps

The Go SDK uses `map[string]any` throughout rather than typed structs.
This mirrors the dynamic nature of the API and keeps the SDK
flexible — no code generation is needed when the API schema changes.

Use `core.ToMapAny()` to safely cast results and nested data.

### Package structure

```
github.com/voxgig-sdk/geonet-sdk/go/
├── geonet.go        # Root package — type aliases and constructors
├── core/               # SDK core — client, types, pipeline
├── entity/             # Entity implementations
├── feature/            # Built-in features (Base, Test, Log)
├── utility/            # Utility functions and struct library
└── test/               # Test suites
```

The root package (`github.com/voxgig-sdk/geonet-sdk/go`) re-exports everything needed
for normal use. Import sub-packages only when you need specific types
like `core.ToMapAny`.

### Entity state

Entity instances are stateful. After a successful `Load`, the entity
stores the returned data and match criteria internally.

```go
geodn := client.Geodn(nil)
geodn.Load(map[string]any{"id": "example_id"}, nil)

// geodn.Data() now returns the geodn data from the last load
// geodn.Match() returns the last match criteria
```

Call `Make()` to create a fresh instance with the same configuration
but no stored state.

### Direct vs entity access

The entity interface handles URL construction, parameter placement,
and response parsing automatically. Use it for standard CRUD operations.

`Direct()` gives full control over the HTTP request. Use it for
non-standard endpoints, bulk operations, or any path not modelled as
an entity. `Prepare()` builds the request without sending it — useful
for debugging or custom transport.


## Full Reference

See [REFERENCE.md](REFERENCE.md) for complete API reference
documentation including all method signatures, entity field schemas,
and detailed usage examples.

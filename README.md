# Geonet SDK

Run ping and DNS lookups against a target from servers distributed around the world

> TypeScript, Python, PHP, Golang, Ruby, Lua SDKs, a CLI, an interactive REPL, and an MCP server for AI agents — all generated from one OpenAPI spec by [@voxgig/sdkgen](https://github.com/voxgig/sdkgen).

## About Geonet

[GeoNet](https://geonet.shodan.io) is a small utility API from [Shodan](https://www.shodan.io/) that runs common network diagnostic tools from servers distributed across multiple geographic regions. It is useful for spotting regional outages, anycast routing differences, geofencing, and CDN behaviour that only show up from particular vantage points.

What you get from the API:

- `geoping` — latency measurements (min / avg / max, packet loss) to a target host from each probe location
- `geodns` — DNS record lookups for a domain resolved from each probe location, so you can see when answers vary by region

The service exposes two primary HTTP paths, `/api/geoping/{target}` and `/api/geodns/{domain}`, and is also wrapped by a small command-line client distributed as a `.deb` package. CORS is enabled on both endpoints. The landing page does not publish explicit rate limits or authentication details — consult your Shodan account for current key and quota information.

## Try it

**TypeScript**
```bash
npm install geonet
```

**Python**
```bash
pip install geonet-sdk
```

**PHP**
```bash
composer require voxgig/geonet-sdk
```

**Golang**
```bash
go get github.com/voxgig-sdk/geonet-sdk/go
```

**Ruby**
```bash
gem install geonet-sdk
```

**Lua**
```bash
luarocks install geonet-sdk
```

## 30-second quickstart

### TypeScript

```ts
import { GeonetSDK } from 'geonet'

const client = new GeonetSDK({})

```

See the [TypeScript README](ts/README.md) for the
full guide, or scroll down for the same example in other languages.

## What's in the box

| Surface | Use it for | Path |
| --- | --- | --- |
| **SDK** (TypeScript, Python, PHP, Golang, Ruby, Lua) | App integration | `ts/` `py/` `php/` `go/` `rb/` `lua/` |
| **CLI** | Scripts, CI, ops, one-off API calls | `go-cli/` |
| **MCP server** | AI agents (Claude, Cursor, Cline) | `go-mcp/` |

## Use it from an AI agent (MCP)

The generated MCP server exposes every operation in this SDK as an
[MCP](https://modelcontextprotocol.io) tool that Claude, Cursor or Cline
can call directly. Build and register it:

```bash
cd go-mcp && go build -o geonet-mcp .
```

Then add it to your agent's MCP config (Claude Desktop, Cursor, etc.):

```json
{
  "mcpServers": {
    "geonet": {
      "command": "/abs/path/to/geonet-mcp"
    }
  }
}
```

## Entities

The API exposes 4 entities:

| Entity | Description | API path |
| --- | --- | --- |
| **Dns** | DNS lookup operations performed from multiple global probe locations, exposed via `/api/geodns/{domain}` | `/api/dns/{hostname}` |
| **Geodn** | Geographically distributed DNS resolution results, returning per-location answers so regional differences are visible | `/api/geodns/{hostname}` |
| **Geoping** | Latency and packet-loss measurements from worldwide probes via `/api/geoping/{target}` | `/api/geoping/{ip}` |
| **Ping** | Single-host reachability and round-trip-time data underlying the geoping aggregation | `/api/ping/{ip}` |

Each entity supports the following operations where available: **load**,
**list**, **create**, **update**, and **remove**.

## Quickstart in other languages

### Python

```python
from geonet_sdk import GeonetSDK

client = GeonetSDK({})


# Load a specific dns
dns, err = client.Dns(None).load(
    {"id": "example_id"}, None
)
```

### PHP

```php
<?php
require_once 'geonet_sdk.php';

$client = new GeonetSDK([]);


// Load a specific dns
[$dns, $err] = $client->Dns(null)->load(
    ["id" => "example_id"], null
);
```

### Golang

```go
import sdk "github.com/voxgig-sdk/geonet-sdk/go"

client := sdk.NewGeonetSDK(map[string]any{})

```

### Ruby

```ruby
require_relative "Geonet_sdk"

client = GeonetSDK.new({})


# Load a specific dns
dns, err = client.Dns(nil).load(
  { "id" => "example_id" }, nil
)
```

### Lua

```lua
local sdk = require("geonet_sdk")

local client = sdk.new({})


-- Load a specific dns
local dns, err = client:Dns(nil):load(
  { id = "example_id" }, nil
)
```

## Unit testing in offline mode

Every SDK ships a test mode that swaps the HTTP transport for an
in-memory mock, so unit tests run offline.

### TypeScript

```ts
const client = GeonetSDK.test()
const result = await client.Dns().load({ id: 'test01' })
// result.ok === true, result.data contains mock data
```

### Python

```python
client = GeonetSDK.test(None, None)
result, err = client.Dns(None).load(
    {"id": "test01"}, None
)
```

### PHP

```php
$client = GeonetSDK::test(null, null);
[$result, $err] = $client->Dns(null)->load(
    ["id" => "test01"], null
);
```

### Golang

```go
client := sdk.TestSDK(nil, nil)
result, err := client.Dns(nil).Load(
    map[string]any{"id": "test01"}, nil,
)
```

### Ruby

```ruby
client = GeonetSDK.test(nil, nil)
result, err = client.Dns(nil).load(
  { "id" => "test01" }, nil
)
```

### Lua

```lua
local client = sdk.test(nil, nil)
local result, err = client:Dns(nil):load(
  { id = "test01" }, nil
)
```

## How it works

Every SDK call runs the same five-stage pipeline:

1. **Point** — resolve the API endpoint from the operation definition.
2. **Spec** — build the HTTP specification (URL, method, headers, body).
3. **Request** — send the HTTP request.
4. **Response** — receive and parse the response.
5. **Result** — extract the result data for the caller.

A feature hook fires at each stage (e.g. `PrePoint`, `PreSpec`,
`PreRequest`), so features can inspect or modify the pipeline without
forking the SDK.

### Features

| Feature | Purpose |
| --- | --- |
| **TestFeature** | In-memory mock transport for testing without a live server |

Pass custom features via the `extend` option at construction time.

### Direct and Prepare

For endpoints the entity model doesn't cover, use the low-level methods:

- **`direct(fetchargs)`** — build and send an HTTP request in one step.
- **`prepare(fetchargs)`** — build the request without sending it.

Both accept a map with `path`, `method`, `params`, `query`,
`headers`, and `body`. See the [How-to guides](#how-to-guides) below.

## How-to guides

### Make a direct API call

When the entity interface does not cover an endpoint, use `direct`:

**TypeScript:**
```ts
const result = await client.direct({
  path: '/api/resource/{id}',
  method: 'GET',
  params: { id: 'example' },
})
console.log(result.data)
```

**Python:**
```python
result, err = client.direct({
    "path": "/api/resource/{id}",
    "method": "GET",
    "params": {"id": "example"},
})
```

**PHP:**
```php
[$result, $err] = $client->direct([
    "path" => "/api/resource/{id}",
    "method" => "GET",
    "params" => ["id" => "example"],
]);
```

**Go:**
```go
result, err := client.Direct(map[string]any{
    "path":   "/api/resource/{id}",
    "method": "GET",
    "params": map[string]any{"id": "example"},
})
```

**Ruby:**
```ruby
result, err = client.direct({
  "path" => "/api/resource/{id}",
  "method" => "GET",
  "params" => { "id" => "example" },
})
```

**Lua:**
```lua
local result, err = client:direct({
  path = "/api/resource/{id}",
  method = "GET",
  params = { id = "example" },
})
```

## Per-language documentation

- [TypeScript](ts/README.md)
- [Python](py/README.md)
- [PHP](php/README.md)
- [Golang](go/README.md)
- [Ruby](rb/README.md)
- [Lua](lua/README.md)

## Using the Geonet

- Upstream: [https://geonet.shodan.io](https://geonet.shodan.io)

- Operated by [Shodan](https://www.shodan.io/) as part of its network utility offerings
- No licence terms are published on the service homepage; use is governed by Shodan's general terms of service
- Authentication requirements are not documented on the public landing page; check the Shodan account dashboard for current key/quota details

---

Generated from the Geonet OpenAPI spec by [@voxgig/sdkgen](https://github.com/voxgig/sdkgen).

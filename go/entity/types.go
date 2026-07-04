// Typed models for the Geonet SDK.
//
// GENERATED from the API model: main.kit.entity.<e>.fields[] and per-op
// params (op.<name>.points[].args.params[]). Field/param types come from the
// canonical type sentinels via @voxgig/sdkgen canonToType (source of truth:
// @voxgig/apidef VALID_CANON). Do not edit by hand.
package entity

import "encoding/json"

// Dns is the typed data model for the dns entity.
type Dns struct {
	Answer []any `json:"answer"`
	FromLoc any `json:"from_loc"`
}

// DnsLoadMatch is the typed request payload for Dns.LoadTyped.
type DnsLoadMatch struct {
	Id string `json:"id"`
}

// Geodn is the typed data model for the geodn entity.
type Geodn struct {
	Answer []any `json:"answer"`
	FromLoc any `json:"from_loc"`
}

// GeodnLoadMatch is the typed request payload for Geodn.LoadTyped.
type GeodnLoadMatch struct {
	Id string `json:"id"`
}

// Geoping is the typed data model for the geoping entity.
type Geoping struct {
	AvgRtt float64 `json:"avg_rtt"`
	FromLoc any `json:"from_loc"`
	Ip string `json:"ip"`
	IsAlive bool `json:"is_alive"`
	MaxRtt float64 `json:"max_rtt"`
	MinRtt float64 `json:"min_rtt"`
	PacketLoss float64 `json:"packet_loss"`
	PacketsReceived int `json:"packets_received"`
	PacketsSent int `json:"packets_sent"`
	Rtt []any `json:"rtt"`
}

// GeopingLoadMatch is the typed request payload for Geoping.LoadTyped.
type GeopingLoadMatch struct {
	Id string `json:"id"`
}

// Ping is the typed data model for the ping entity.
type Ping struct {
	AvgRtt float64 `json:"avg_rtt"`
	FromLoc any `json:"from_loc"`
	Ip string `json:"ip"`
	IsAlive bool `json:"is_alive"`
	MaxRtt float64 `json:"max_rtt"`
	MinRtt float64 `json:"min_rtt"`
	PacketLoss float64 `json:"packet_loss"`
	PacketsReceived int `json:"packets_received"`
	PacketsSent int `json:"packets_sent"`
	Rtt []any `json:"rtt"`
}

// PingLoadMatch is the typed request payload for Ping.LoadTyped.
type PingLoadMatch struct {
	Id string `json:"id"`
}

// asMap turns a typed request/data struct into the map[string]any the
// runtime op pipeline consumes, honouring the json tags above.
func asMap(v any) map[string]any {
	out := map[string]any{}
	b, err := json.Marshal(v)
	if err != nil {
		return out
	}
	_ = json.Unmarshal(b, &out)
	return out
}

// typedFrom decodes a runtime value (a map[string]any produced by the op
// pipeline) into a typed model T via a JSON round-trip. On any error it
// returns the zero value of T; the op's own (value, error) tuple carries the
// real error.
func typedFrom[T any](v any) T {
	var out T
	if v == nil {
		return out
	}
	b, err := json.Marshal(v)
	if err != nil {
		return out
	}
	_ = json.Unmarshal(b, &out)
	return out
}

// typedSliceFrom decodes a runtime list value ([]any of maps) into a typed
// slice []T via a JSON round-trip, for list ops.
func typedSliceFrom[T any](v any) []T {
	var out []T
	if v == nil {
		return out
	}
	b, err := json.Marshal(v)
	if err != nil {
		return out
	}
	_ = json.Unmarshal(b, &out)
	return out
}

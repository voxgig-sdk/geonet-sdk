// Typed models for the Geonet SDK.
//
// GENERATED from the API model: main.kit.entity.<e>.fields[] and per-op
// params (op.<name>.points[].args.params[]). Field/param types come from the
// canonical type sentinels via @voxgig/sdkgen canonToType (source of truth:
// @voxgig/apidef VALID_CANON). Do not edit by hand.
package entity

import (
	"encoding/json"

	"github.com/voxgig-sdk/geonet-sdk/go/core"
)

// Dns is the typed data model for the dns entity.
type Dns struct {
	Answers []any `json:"answers"`
	FromLoc any `json:"from_loc"`
	Id *string `json:"id,omitempty"`
}

// DnsLoadMatch is the typed request payload for Dns.LoadTyped.
type DnsLoadMatch struct {
	Id string `json:"id"`
	Rtype *string `json:"rtype,omitempty"`
}

// Geodn is the typed data model for the geodn entity.
type Geodn struct {
	Answers []any `json:"answers"`
	FromLoc any `json:"from_loc"`
	Id *string `json:"id,omitempty"`
}

// GeodnLoadMatch is the typed request payload for Geodn.LoadTyped.
type GeodnLoadMatch struct {
	Id string `json:"id"`
	Rtype *string `json:"rtype,omitempty"`
}

// Geoping is the typed data model for the geoping entity.
type Geoping struct {
	AvgRtt float64 `json:"avg_rtt"`
	FromLoc any `json:"from_loc"`
	Id *string `json:"id,omitempty"`
	Ip string `json:"ip"`
	IsAlive bool `json:"is_alive"`
	MaxRtt float64 `json:"max_rtt"`
	MinRtt float64 `json:"min_rtt"`
	PacketLoss float64 `json:"packet_loss"`
	PacketsReceived int `json:"packets_received"`
	PacketsSent int `json:"packets_sent"`
	Rtts []any `json:"rtts"`
}

// GeopingLoadMatch is the typed request payload for Geoping.LoadTyped.
type GeopingLoadMatch struct {
	Id string `json:"id"`
}

// Ping is the typed data model for the ping entity.
type Ping struct {
	AvgRtt float64 `json:"avg_rtt"`
	FromLoc any `json:"from_loc"`
	Id *string `json:"id,omitempty"`
	Ip string `json:"ip"`
	IsAlive bool `json:"is_alive"`
	MaxRtt float64 `json:"max_rtt"`
	MinRtt float64 `json:"min_rtt"`
	PacketLoss float64 `json:"packet_loss"`
	PacketsReceived int `json:"packets_received"`
	PacketsSent int `json:"packets_sent"`
	Rtts []any `json:"rtts"`
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

// entityData unwraps an entity to its data map.
//
// Operations resolve to the ENTITY, not the raw data (see AGENTS.md), and an
// entity's fields are UNEXPORTED — marshalling one directly yields `{}`, so
// every typed accessor would silently hand back a zero-valued struct. The
// typed boundary therefore takes the data hop first.
func entityData(v any) any {
	if ent, ok := v.(core.Entity); ok {
		return ent.Data()
	}
	return v
}

// typedFrom decodes a runtime value (an entity, or the map[string]any the op
// pipeline produced) into a typed model T via a JSON round-trip. On any error
// it returns the zero value of T; the op's own (value, error) tuple carries
// the real error.
func typedFrom[T any](v any) T {
	var out T
	v = entityData(v)
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

// typedSliceFrom decodes a runtime list value into a typed slice []T via a
// JSON round-trip, for list ops. `list` resolves to a slice of ENTITY
// instances, so each element takes the data hop.
func typedSliceFrom[T any](v any) []T {
	var out []T
	if v == nil {
		return out
	}
	if list, ok := v.([]any); ok {
		unwrapped := make([]any, 0, len(list))
		for _, item := range list {
			unwrapped = append(unwrapped, entityData(item))
		}
		v = unwrapped
	}
	b, err := json.Marshal(v)
	if err != nil {
		return out
	}
	_ = json.Unmarshal(b, &out)
	return out
}

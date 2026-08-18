package voxgiggeonetsdk

import (
	"github.com/voxgig-sdk/geonet-sdk/go/core"
	"github.com/voxgig-sdk/geonet-sdk/go/entity"
	"github.com/voxgig-sdk/geonet-sdk/go/feature"
	_ "github.com/voxgig-sdk/geonet-sdk/go/utility"
)

// Type aliases preserve external API.
type GeonetSDK = core.GeonetSDK
type Context = core.Context
type Utility = core.Utility
type Feature = core.Feature
type Entity = core.Entity
type GeonetEntity = core.GeonetEntity
type FetcherFunc = core.FetcherFunc
type Spec = core.Spec
type Result = core.Result
type Response = core.Response
type Operation = core.Operation
type Control = core.Control
type GeonetError = core.GeonetError

// BaseFeature from feature package.
type BaseFeature = feature.BaseFeature

func init() {
	core.NewBaseFeatureFunc = func() core.Feature {
		return feature.NewBaseFeature()
	}
	core.NewTestFeatureFunc = func() core.Feature {
		return feature.NewTestFeature()
	}
	core.NewDnsEntityFunc = func(client *core.GeonetSDK, entopts map[string]any) core.GeonetEntity {
		return entity.NewDnsEntity(client, entopts)
	}
	core.NewGeodnEntityFunc = func(client *core.GeonetSDK, entopts map[string]any) core.GeonetEntity {
		return entity.NewGeodnEntity(client, entopts)
	}
	core.NewGeopingEntityFunc = func(client *core.GeonetSDK, entopts map[string]any) core.GeonetEntity {
		return entity.NewGeopingEntity(client, entopts)
	}
	core.NewPingEntityFunc = func(client *core.GeonetSDK, entopts map[string]any) core.GeonetEntity {
		return entity.NewPingEntity(client, entopts)
	}
}

// Constructor re-exports.
var NewGeonetSDK = core.NewGeonetSDK
var TestSDK = core.TestSDK
var NewContext = core.NewContext
var NewSpec = core.NewSpec
var NewResult = core.NewResult
var NewResponse = core.NewResponse
var NewOperation = core.NewOperation
var MakeConfig = core.MakeConfig
var SharedConfig = core.SharedConfig

// No-arg convenience constructors. Go has no default-argument syntax,
// so these aliases let callers write `sdk.New()` / `sdk.Test()`
// instead of `sdk.NewGeonetSDK(nil)` / `sdk.TestSDK(nil, nil)`
// for the common no-options case.
func New() *GeonetSDK  { return NewGeonetSDK(nil) }
func Test() *GeonetSDK { return TestSDK(nil, nil) }
var NewBaseFeature = feature.NewBaseFeature
var NewTestFeature = feature.NewTestFeature

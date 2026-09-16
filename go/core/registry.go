package core

var UtilityRegistrar func(u *Utility)

var NewBaseFeatureFunc func() Feature

var NewRatelimitFeatureFunc func() Feature

var NewRetryFeatureFunc func() Feature

var NewTestFeatureFunc func() Feature

var NewTimeoutFeatureFunc func() Feature

var NewDnsEntityFunc func(client *GeonetSDK, entopts map[string]any) GeonetEntity

var NewGeodnEntityFunc func(client *GeonetSDK, entopts map[string]any) GeonetEntity

var NewGeopingEntityFunc func(client *GeonetSDK, entopts map[string]any) GeonetEntity

var NewPingEntityFunc func(client *GeonetSDK, entopts map[string]any) GeonetEntity


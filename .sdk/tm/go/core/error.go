package core

type GeonetError struct {
	IsGeonetError bool
	Sdk              string
	Code             string
	Msg              string
	Ctx              *Context
	Result           any
	Spec             any
}

func NewGeonetError(code string, msg string, ctx *Context) *GeonetError {
	return &GeonetError{
		IsGeonetError: true,
		Sdk:              "Geonet",
		Code:             code,
		Msg:              msg,
		Ctx:              ctx,
	}
}

func (e *GeonetError) Error() string {
	return e.Msg
}

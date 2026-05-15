
import { Context } from './Context'


class GeonetError extends Error {

  isGeonetError = true

  sdk = 'Geonet'

  code: string
  ctx: Context

  constructor(code: string, msg: string, ctx: Context) {
    super(msg)
    this.code = code
    this.ctx = ctx
  }

}

export {
  GeonetError
}


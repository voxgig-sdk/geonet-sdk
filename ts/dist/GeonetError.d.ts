import { Context } from './Context';
declare class GeonetError extends Error {
    isGeonetError: boolean;
    sdk: string;
    code: string;
    ctx: Context;
    status: number;
    get notFound(): boolean;
    constructor(code: string, msg: string, ctx: Context);
}
export { GeonetError };

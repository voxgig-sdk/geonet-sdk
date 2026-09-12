import { GeonetEntityBase } from '../GeonetEntityBase';
import type { GeonetSDK } from '../GeonetSDK';
import type { Control } from '../types';
import type { Geodn, GeodnLoadMatch } from '../GeonetTypes';
declare class GeodnEntity extends GeonetEntityBase<Geodn> {
    constructor(client: GeonetSDK, entopts: any);
    make(this: GeodnEntity): GeodnEntity;
    load(this: any, reqmatch?: GeodnLoadMatch, ctrl?: Control): Promise<GeodnEntity>;
}
export { GeodnEntity };

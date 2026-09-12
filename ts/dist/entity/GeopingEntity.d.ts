import { GeonetEntityBase } from '../GeonetEntityBase';
import type { GeonetSDK } from '../GeonetSDK';
import type { Control } from '../types';
import type { Geoping, GeopingLoadMatch } from '../GeonetTypes';
declare class GeopingEntity extends GeonetEntityBase<Geoping> {
    constructor(client: GeonetSDK, entopts: any);
    make(this: GeopingEntity): GeopingEntity;
    load(this: any, reqmatch?: GeopingLoadMatch, ctrl?: Control): Promise<GeopingEntity>;
}
export { GeopingEntity };

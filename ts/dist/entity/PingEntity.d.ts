import { GeonetEntityBase } from '../GeonetEntityBase';
import type { GeonetSDK } from '../GeonetSDK';
import type { Control } from '../types';
import type { Ping, PingLoadMatch } from '../GeonetTypes';
declare class PingEntity extends GeonetEntityBase<Ping> {
    constructor(client: GeonetSDK, entopts: any);
    make(this: PingEntity): PingEntity;
    load(this: any, reqmatch?: PingLoadMatch, ctrl?: Control): Promise<PingEntity>;
}
export { PingEntity };

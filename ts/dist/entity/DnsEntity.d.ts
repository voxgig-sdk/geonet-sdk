import { GeonetEntityBase } from '../GeonetEntityBase';
import type { GeonetSDK } from '../GeonetSDK';
import type { Control } from '../types';
import type { Dns, DnsLoadMatch } from '../GeonetTypes';
declare class DnsEntity extends GeonetEntityBase<Dns> {
    constructor(client: GeonetSDK, entopts: any);
    make(this: DnsEntity): DnsEntity;
    load(this: any, reqmatch?: DnsLoadMatch, ctrl?: Control): Promise<DnsEntity>;
}
export { DnsEntity };

import { DnsEntity } from './entity/DnsEntity';
import { GeodnEntity } from './entity/GeodnEntity';
import { GeopingEntity } from './entity/GeopingEntity';
import { PingEntity } from './entity/PingEntity';
export type * from './GeonetTypes';
import { inspect } from 'node:util';
import type { Context, Feature } from './types';
import { config } from './Config';
import { GeonetEntityBase } from './GeonetEntityBase';
import { Utility } from './utility/Utility';
import { BaseFeature } from './feature/base/BaseFeature';
declare const stdutil: Utility;
declare class GeonetSDK {
    _mode: string;
    _options: any;
    _utility: Utility;
    _features: Feature[];
    _rootctx: Context;
    constructor(options?: any);
    options(): any;
    utility(): any;
    prepare(fetchargs?: any): Promise<any>;
    direct(fetchargs?: any): Promise<Error | {
        ok: boolean;
        status: number;
        headers: any;
        data: any;
        err?: undefined;
    } | {
        ok: boolean;
        err: any;
        status?: undefined;
        headers?: undefined;
        data?: undefined;
    }>;
    _rawRequest(fetchargs?: any): Promise<Error | {
        ok: boolean;
        status: number;
        headers: any;
        data: any;
        err?: undefined;
    } | {
        ok: boolean;
        err: any;
        status?: undefined;
        headers?: undefined;
        data?: undefined;
    }>;
    graphql(query: string, variables?: any, ctrl?: any): Promise<any>;
    Dns(entopts?: Record<string, any>): DnsEntity;
    Geodn(entopts?: Record<string, any>): GeodnEntity;
    Geoping(entopts?: Record<string, any>): GeopingEntity;
    Ping(entopts?: Record<string, any>): PingEntity;
    static test(testoptsarg?: any, sdkoptsarg?: any): GeonetSDK;
    tester(testopts?: any, sdkopts?: any): GeonetSDK;
    toJSON(): {
        name: string;
    };
    toString(): string;
    [inspect.custom](): string;
}
declare const SDK: typeof GeonetSDK;
export { stdutil, config, BaseFeature, GeonetEntityBase, GeonetSDK, SDK, };

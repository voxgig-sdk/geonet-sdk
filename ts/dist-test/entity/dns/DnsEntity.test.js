"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const node_path_1 = __importDefault(require("node:path"));
const Fs = __importStar(require("node:fs"));
const node_test_1 = require("node:test");
const node_assert_1 = __importDefault(require("node:assert"));
const live_runner_1 = require("../../live-runner");
const live_entity_1 = require("../../live-entity");
const __1 = require("../../..");
const utility_1 = require("../../utility");
(0, utility_1.loadEnvLocal)(__dirname + '/../../../.env.local');
(0, node_test_1.describe)('DnsEntity', async () => {
    // Per-test live pacing. Delay is read from sdk-test-control.json's
    // `test.live.delayMs`; only sleeps when GEONET_TEST_LIVE=TRUE.
    (0, node_test_1.afterEach)((0, utility_1.liveDelay)('GEONET_TEST_LIVE'));
    (0, node_test_1.test)('instance', async () => {
        const testsdk = __1.GeonetSDK.test();
        const ent = testsdk.Dns();
        (0, node_assert_1.default)(null != ent);
    });
    (0, node_test_1.test)('basic', async (t) => {
        const live = 'TRUE' === process.env.GEONET_TEST_LIVE;
        for (const op of ['load']) {
            if (!live && (0, utility_1.maybeSkipControl)(t, 'entityOp', 'dns.' + op, live))
                return;
        }
        const setup = basicSetup();
        if (setup.live) {
            return (0, live_entity_1.runLiveEntity)(setup, { "active": true, "alias": { "field": {} }, "fields": { "answers": { "a": true, "h": "Answers", "n": "answers", "r": true, "t": "`$ARRAY`", "key$": "answers", "index$": 0 }, "from_loc": { "a": true, "h": "From Loc", "n": "from_loc", "r": true, "sh": "Location of the server that performed the DNS lookup", "t": "`$ANY`", "key$": "from_loc", "index$": 1 }, "id": { "a": true, "h": "Id", "n": "id", "r": false, "t": "`$STRING`", "key$": "id", "index$": 2 } }, "id": { "field": "id", "name": "id" }, "name": "dns", "op": { "load": { "input": "data", "name": "load", "points": [{ "a": true, "co": { "id": "GET /api/dns/{hostname}", "source": "openapi3", "version": 2 }, "g": { "params": [{ "a": true, "k": "param", "n": "id", "or": "hostname", "r": true, "t": "`$STRING`", "index$": 0 }], "query": [{ "a": true, "ex": "A", "k": "query", "n": "rtype", "or": "rtype", "r": false, "t": "`$STRING`", "index$": 0 }] }, "k": "http", "m": "GET", "o": "/api/dns/{hostname}", "q": { "exist": ["id", "rtype"] }, "r": { "param": { "hostname": "id" } }, "s": [{ "lit": "api" }, { "lit": "dns" }, { "var": "id" }], "t": { "req": "`reqdata`", "res": "`body`" }, "index$": 0 }], "key$": "load" } }, "relations": { "ancestors": [] }, "key$": "dns", "name__orig": "dns", "Name": "Dns", "name_": "dns", "name-": "dns", "NAME": "DNS", "index$": 0 }, { "active": true, "entity": "dns", "key$": "BasicDnsFlow", "kind": "basic", "name": "BasicDnsFlow", "param": {}, "step": [{ "a": true, "d": {}, "i": { "ref": "dns_ref01", "srcdatavar": "dns_ref01_data", "suffix": "_dt0" }, "m": { "id": "dns01" }, "o": "load", "s": [], "v": [{ "apply": "TextFieldMark", "def": { "mark": "Mark01-dns_ref01" } }], "index$": 0 }] }, 'Dns', { "GET /api/dns/{hostname}": { "protocol": "http", "operationId": "dns_query_api_dns__hostname__get", "responses": { "200": { "description": "Successful Response", "content": { "application/json": { "schema": { "properties": { "answers": { "items": { "properties": { "type": { "type": "string", "title": "Type" }, "value": { "type": "string", "title": "Value" } }, "type": "object", "required": ["type", "value"], "title": "DnsRecord", "x-ref": "#/components/schemas/DnsRecord" }, "type": "array", "title": "Answers", "key$": "answers" }, "from_loc": { "allOf": [{ "properties": { "city": { "type": "string", "title": "City" }, "country": { "type": "string", "title": "Country" }, "latlon": { "type": "string", "title": "Latlon" } }, "type": "object", "required": ["city", "country", "latlon"], "title": "Location", "x-ref": "#/components/schemas/Location" }], "description": "Location of the server that performed the DNS lookup", "key$": "from_loc" } }, "type": "object", "required": ["answers", "from_loc"], "title": "DnsResult", "x-ref": "#/components/schemas/DnsResult", "index$": 0 } } } }, "422": { "description": "Validation Error", "content": { "application/json": { "schema": { "properties": { "detail": { "items": { "properties": { "loc": { "items": { "anyOf": [{ "type": "string" }, { "type": "integer" }] }, "type": "array", "title": "Location" }, "msg": { "type": "string", "title": "Message" }, "type": { "type": "string", "title": "Error Type" } }, "type": "object", "required": ["loc", "msg", "type"], "title": "ValidationError", "x-ref": "#/components/schemas/ValidationError" }, "type": "array", "title": "Detail" } }, "type": "object", "title": "HTTPValidationError", "x-ref": "#/components/schemas/HTTPValidationError" } } } } }, "parameters": [{ "name": "hostname", "in": "path", "required": true, "schema": { "type": "string", "title": "Hostname" }, "index$": 0 }, { "name": "rtype", "in": "query", "required": false, "schema": { "type": "string", "default": "A", "title": "Rtype" }, "index$": 1 }], "securitySource": "unspecified" } });
        }
        const client = setup.client;
        const struct = setup.struct;
        const isempty = struct.isempty;
        const select = struct.select;
        let dns_ref01_data = Object.values(setup.data.existing.dns)[0];
        // LOAD
        const dns_ref01_ent = client.Dns();
        const dns_ref01_match_dt0 = {};
        dns_ref01_match_dt0.id = dns_ref01_data.id;
        const dns_ref01_data_dt0 = (await dns_ref01_ent.load(dns_ref01_match_dt0)).data();
        (0, node_assert_1.default)(dns_ref01_data_dt0.id === dns_ref01_data.id);
    });
});
function basicSetup(extra) {
    // TODO: fix test def options
    const options = {}; // null
    // TODO: needs test utility to resolve path
    const entityDataFile = node_path_1.default.resolve(__dirname, '../../../../.sdk/test/entity/dns/DnsTestData.json');
    // TODO: file ready util needed?
    const entityDataSource = Fs.readFileSync(entityDataFile).toString('utf8');
    // TODO: need a xlang JSON parse utility in voxgig/struct with better error msgs
    const entityData = JSON.parse(entityDataSource);
    options.entity = entityData.existing;
    let client = __1.GeonetSDK.test(options, extra);
    const struct = client.utility().struct;
    const merge = struct.merge;
    const transform = struct.transform;
    let idmap = transform(['dns01', 'dns02', 'dns03'], {
        '`$PACK`': ['', {
                '`$KEY`': '`$COPY`',
                '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
            }]
    });
    const env = (0, utility_1.envOverride)({
        'GEONET_TEST_DNS_ENTID': idmap,
        'GEONET_TEST_LIVE': 'FALSE',
        'GEONET_TEST_EXPLAIN': 'FALSE',
    });
    idmap = env['GEONET_TEST_DNS_ENTID'];
    const live = 'TRUE' === env.GEONET_TEST_LIVE;
    const transport = (0, live_runner_1.createLiveTransport)();
    if (live) {
        const rawIds = process.env['GEONET_TEST_DNS_ENTID'];
        idmap = rawIds && rawIds.trim() ? JSON.parse(rawIds) : {};
        if (!idmap || Array.isArray(idmap) || typeof idmap !== 'object') {
            throw new Error('Live ENTID must be a JSON object');
        }
        client = new __1.GeonetSDK(merge([
            // FIRST, so the generated fields below win: sdk-test-control.json's
            // test.client.options adds to the live client, it does not redirect it.
            (0, utility_1.liveClientOptions)(),
            {},
            // 'extra || {}', not a bare 'extra': struct.merge returns UNDEFINED when the
            // last entry is undefined, and basicSetup is normally called with no
            // argument at all - so a bare 'extra' silently discarded the apikey
            // and server values above and handed the SDK undefined. Harmless
            // while there was nothing in that object; not harmless now.
            extra || {},
            { system: { fetch: transport.fetch } }
        ]));
    }
    const setup = {
        idmap,
        env,
        options,
        client,
        struct,
        data: entityData,
        explain: 'TRUE' === env.GEONET_TEST_EXPLAIN,
        live,
        transport,
        now: Date.now(),
    };
    return setup;
}
//# sourceMappingURL=DnsEntity.test.js.map
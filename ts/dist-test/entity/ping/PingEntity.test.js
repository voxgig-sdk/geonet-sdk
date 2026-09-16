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
// AFTER the imports on purpose: TypeScript hoists `import` above any
// statement in the emitted CommonJS, so a loader placed above them would
// run only after every imported module had already been evaluated - and
// anything reading process.env at module scope would miss these values.
(0, utility_1.loadEnvLocal)(__dirname + '/../../../.env.local');
(0, node_test_1.describe)('PingEntity', async () => {
    // Per-test live pacing. Delay is read from sdk-test-control.json's
    // `test.live.delayMs`; only sleeps when GEONET_TEST_LIVE=TRUE.
    (0, node_test_1.afterEach)((0, utility_1.liveDelay)('GEONET_TEST_LIVE'));
    (0, node_test_1.test)('instance', async () => {
        const testsdk = __1.GeonetSDK.test();
        const ent = testsdk.Ping();
        (0, node_assert_1.default)(null != ent);
    });
    (0, node_test_1.test)('basic', async (t) => {
        const live = 'TRUE' === process.env.GEONET_TEST_LIVE;
        for (const op of ['load']) {
            if (!live && (0, utility_1.maybeSkipControl)(t, 'entityOp', 'ping.' + op, live))
                return;
        }
        const setup = basicSetup();
        if (setup.live) {
            return (0, live_entity_1.runLiveEntity)(setup, { "active": true, "alias": { "field": {} }, "fields": [{ "active": true, "name": "avg_rtt", "req": true, "type": "`$NUMBER`", "index$": 0 }, { "active": true, "name": "from_loc", "req": true, "short": "Location of the server that performed the ping", "type": "`$ANY`", "index$": 1 }, { "active": true, "name": "id", "req": false, "type": "`$STRING`", "index$": 2 }, { "active": true, "name": "ip", "req": true, "short": "IP address that was pinged", "type": "`$STRING`", "index$": 3 }, { "active": true, "name": "is_alive", "req": true, "type": "`$BOOLEAN`", "index$": 4 }, { "active": true, "name": "max_rtt", "req": true, "type": "`$NUMBER`", "index$": 5 }, { "active": true, "name": "min_rtt", "req": true, "type": "`$NUMBER`", "index$": 6 }, { "active": true, "name": "packet_loss", "req": true, "type": "`$NUMBER`", "index$": 7 }, { "active": true, "name": "packets_received", "req": true, "type": "`$INTEGER`", "index$": 8 }, { "active": true, "name": "packets_sent", "req": true, "type": "`$INTEGER`", "index$": 9 }, { "active": true, "name": "rtts", "req": true, "type": "`$ARRAY`", "index$": 10 }], "id": { "field": "id", "name": "id" }, "name": "ping", "op": { "load": { "input": "data", "name": "load", "points": [{ "active": true, "args": { "params": [{ "active": true, "kind": "param", "name": "id", "orig": "ip", "reqd": true, "type": "`$STRING`", "index$": 0 }] }, "contract": { "id": "GET /api/ping/{ip}", "json": "{\"operationId\":\"ping_api_ping__ip__get\",\"parameters\":[{\"in\":\"path\",\"name\":\"ip\",\"required\":true,\"schema\":{\"title\":\"Ip\",\"type\":\"string\"}}],\"protocol\":\"http\",\"responses\":{\"200\":{\"content\":{\"application/json\":{\"schema\":{\"properties\":{\"avg_rtt\":{\"title\":\"Avg Rtt\",\"type\":\"number\"},\"from_loc\":{\"allOf\":[{\"properties\":{\"city\":{\"title\":\"City\",\"type\":\"string\"},\"country\":{\"title\":\"Country\",\"type\":\"string\"},\"latlon\":{\"title\":\"Latlon\",\"type\":\"string\"}},\"required\":[\"city\",\"country\",\"latlon\"],\"title\":\"Location\",\"type\":\"object\"}],\"description\":\"Location of the server that performed the ping\"},\"ip\":{\"description\":\"IP address that was pinged\",\"title\":\"Ip\",\"type\":\"string\"},\"is_alive\":{\"title\":\"Is Alive\",\"type\":\"boolean\"},\"max_rtt\":{\"title\":\"Max Rtt\",\"type\":\"number\"},\"min_rtt\":{\"title\":\"Min Rtt\",\"type\":\"number\"},\"packet_loss\":{\"title\":\"Packet Loss\",\"type\":\"number\"},\"packets_received\":{\"title\":\"Packets Received\",\"type\":\"integer\"},\"packets_sent\":{\"title\":\"Packets Sent\",\"type\":\"integer\"},\"rtts\":{\"items\":{\"type\":\"number\"},\"title\":\"Rtts\",\"type\":\"array\"}},\"required\":[\"ip\",\"is_alive\",\"min_rtt\",\"avg_rtt\",\"max_rtt\",\"rtts\",\"packets_sent\",\"packets_received\",\"packet_loss\",\"from_loc\"],\"title\":\"PingResult\",\"type\":\"object\"}}},\"description\":\"Successful Response\"},\"422\":{\"content\":{\"application/json\":{\"schema\":{\"properties\":{\"detail\":{\"items\":{\"properties\":{\"loc\":{\"items\":{\"anyOf\":[{\"type\":\"string\"},{\"type\":\"integer\"}]},\"title\":\"Location\",\"type\":\"array\"},\"msg\":{\"title\":\"Message\",\"type\":\"string\"},\"type\":{\"title\":\"Error Type\",\"type\":\"string\"}},\"required\":[\"loc\",\"msg\",\"type\"],\"title\":\"ValidationError\",\"type\":\"object\"},\"title\":\"Detail\",\"type\":\"array\"}},\"title\":\"HTTPValidationError\",\"type\":\"object\"}}},\"description\":\"Validation Error\"}},\"securitySource\":\"unspecified\"}", "source": "openapi3", "version": 1 }, "kind": "http", "method": "GET", "orig": "/api/ping/{ip}", "rename": { "param": { "ip": "id" } }, "segments": [{ "lit": "api" }, { "lit": "ping" }, { "var": "id" }], "select": { "exist": ["id"] }, "transform": { "req": "`reqdata`", "res": "`body`" }, "index$": 0 }], "key$": "load" } }, "relations": { "ancestors": [] }, "key$": "ping", "name__orig": "ping", "Name": "Ping", "name_": "ping", "name-": "ping", "NAME": "PING", "index$": 3 }, { "active": true, "entity": "ping", "key$": "BasicPingFlow", "kind": "basic", "name": "BasicPingFlow", "param": {}, "step": [{ "active": true, "data": {}, "input": { "ref": "ping_ref01", "srcdatavar": "ping_ref01_data", "suffix": "_dt0" }, "match": { "id": "ping01" }, "op": "load", "spec": [], "valid": [{ "apply": "TextFieldMark", "def": { "mark": "Mark01-ping_ref01" } }], "index$": 0 }] }, 'Ping');
        }
        const client = setup.client;
        const struct = setup.struct;
        const isempty = struct.isempty;
        const select = struct.select;
        let ping_ref01_data = Object.values(setup.data.existing.ping)[0];
        // LOAD
        const ping_ref01_ent = client.Ping();
        const ping_ref01_match_dt0 = {};
        ping_ref01_match_dt0.id = ping_ref01_data.id;
        const ping_ref01_data_dt0 = (await ping_ref01_ent.load(ping_ref01_match_dt0)).data();
        (0, node_assert_1.default)(ping_ref01_data_dt0.id === ping_ref01_data.id);
    });
});
function basicSetup(extra) {
    // TODO: fix test def options
    const options = {}; // null
    // TODO: needs test utility to resolve path
    const entityDataFile = node_path_1.default.resolve(__dirname, '../../../../.sdk/test/entity/ping/PingTestData.json');
    // TODO: file ready util needed?
    const entityDataSource = Fs.readFileSync(entityDataFile).toString('utf8');
    // TODO: need a xlang JSON parse utility in voxgig/struct with better error msgs
    const entityData = JSON.parse(entityDataSource);
    options.entity = entityData.existing;
    let client = __1.GeonetSDK.test(options, extra);
    const struct = client.utility().struct;
    const merge = struct.merge;
    const transform = struct.transform;
    let idmap = transform(['ping01', 'ping02', 'ping03'], {
        '`$PACK`': ['', {
                '`$KEY`': '`$COPY`',
                '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
            }]
    });
    const env = (0, utility_1.envOverride)({
        'GEONET_TEST_PING_ENTID': idmap,
        'GEONET_TEST_LIVE': 'FALSE',
        'GEONET_TEST_EXPLAIN': 'FALSE',
    });
    idmap = env['GEONET_TEST_PING_ENTID'];
    const live = 'TRUE' === env.GEONET_TEST_LIVE;
    const transport = (0, live_runner_1.createLiveTransport)();
    if (live) {
        const rawIds = process.env['GEONET_TEST_PING_ENTID'];
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
//# sourceMappingURL=PingEntity.test.js.map
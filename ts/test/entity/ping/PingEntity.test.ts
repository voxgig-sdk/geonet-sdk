

import Path from 'node:path'
import * as Fs from 'node:fs'

import { test, describe, afterEach } from 'node:test'
import assert from 'node:assert'
import { createLiveTransport } from '../../live-runner'
import { runLiveEntity } from '../../live-entity'


import { GeonetSDK, BaseFeature, stdutil } from '../../..'

import {
  envOverride,
  liveClientOptions,
  liveDelay,
  loadEnvLocal,
  makeCtrl,
  makeMatch,
  makeReqdata,
  makeStepData,
  makeValid,
  maybeSkipControl,
} from '../../utility'


loadEnvLocal(__dirname + '/../../../.env.local')


describe('PingEntity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when GEONET_TEST_LIVE=TRUE.
  afterEach(liveDelay('GEONET_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = GeonetSDK.test()
    const ent = testsdk.Ping()
    assert(null != ent)
  })


  test('basic', async (t) => {

    const live = 'TRUE' === process.env.GEONET_TEST_LIVE
    for (const op of ['load']) {
      if (!live && maybeSkipControl(t, 'entityOp', 'ping.' + op, live)) return
    }

    
    const setup = basicSetup()
    if (setup.live) {
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":{"avg_rtt":{"a":true,"h":"Avg Rtt","n":"avg_rtt","r":true,"t":"`$NUMBER`","key$":"avg_rtt","index$":0},"from_loc":{"a":true,"h":"From Loc","n":"from_loc","r":true,"sh":"Location of the server that performed the ping","t":"`$ANY`","key$":"from_loc","index$":1},"id":{"a":true,"h":"Id","n":"id","r":false,"t":"`$STRING`","key$":"id","index$":2},"ip":{"a":true,"h":"Ip","n":"ip","r":true,"sh":"IP address that was pinged","t":"`$STRING`","key$":"ip","index$":3},"is_alive":{"a":true,"h":"Is Alive","n":"is_alive","r":true,"t":"`$BOOLEAN`","key$":"is_alive","index$":4},"max_rtt":{"a":true,"h":"Max Rtt","n":"max_rtt","r":true,"t":"`$NUMBER`","key$":"max_rtt","index$":5},"min_rtt":{"a":true,"h":"Min Rtt","n":"min_rtt","r":true,"t":"`$NUMBER`","key$":"min_rtt","index$":6},"packet_loss":{"a":true,"h":"Packet Loss","n":"packet_loss","r":true,"t":"`$NUMBER`","key$":"packet_loss","index$":7},"packets_received":{"a":true,"h":"Packets Received","n":"packets_received","r":true,"t":"`$INTEGER`","key$":"packets_received","index$":8},"packets_sent":{"a":true,"h":"Packets Sent","n":"packets_sent","r":true,"t":"`$INTEGER`","key$":"packets_sent","index$":9},"rtts":{"a":true,"h":"Rtts","n":"rtts","r":true,"t":"`$ARRAY`","key$":"rtts","index$":10}},"id":{"field":"id","name":"id"},"name":"ping","op":{"load":{"input":"data","name":"load","points":[{"a":true,"co":{"id":"GET /api/ping/{ip}","source":"openapi3","version":2},"g":{"params":[{"a":true,"k":"param","n":"id","or":"ip","r":true,"t":"`$STRING`","index$":0}]},"k":"http","m":"GET","o":"/api/ping/{ip}","q":{"exist":["id"]},"r":{"param":{"ip":"id"}},"s":[{"lit":"api"},{"lit":"ping"},{"var":"id"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"load"}},"relations":{"ancestors":[]},"key$":"ping","name__orig":"ping","Name":"Ping","name_":"ping","name-":"ping","NAME":"PING","index$":3}, {"active":true,"entity":"ping","key$":"BasicPingFlow","kind":"basic","name":"BasicPingFlow","param":{},"step":[{"a":true,"d":{},"i":{"ref":"ping_ref01","srcdatavar":"ping_ref01_data","suffix":"_dt0"},"m":{"id":"ping01"},"o":"load","s":[],"v":[{"apply":"TextFieldMark","def":{"mark":"Mark01-ping_ref01"}}],"index$":0}]}, 'Ping', {"GET /api/ping/{ip}":{"protocol":"http","operationId":"ping_api_ping__ip__get","responses":{"200":{"description":"Successful Response","content":{"application/json":{"schema":{"properties":{"ip":{"type":"string","title":"Ip","description":"IP address that was pinged","key$":"ip"},"is_alive":{"type":"boolean","title":"Is Alive","key$":"is_alive"},"min_rtt":{"type":"number","title":"Min Rtt","key$":"min_rtt"},"avg_rtt":{"type":"number","title":"Avg Rtt","key$":"avg_rtt"},"max_rtt":{"type":"number","title":"Max Rtt","key$":"max_rtt"},"rtts":{"items":{"type":"number"},"type":"array","title":"Rtts","key$":"rtts"},"packets_sent":{"type":"integer","title":"Packets Sent","key$":"packets_sent"},"packets_received":{"type":"integer","title":"Packets Received","key$":"packets_received"},"packet_loss":{"type":"number","title":"Packet Loss","key$":"packet_loss"},"from_loc":{"allOf":[{"properties":{"city":{"type":"string","title":"City"},"country":{"type":"string","title":"Country"},"latlon":{"type":"string","title":"Latlon"}},"type":"object","required":["city","country","latlon"],"title":"Location","x-ref":"#/components/schemas/Location"}],"description":"Location of the server that performed the ping","key$":"from_loc"}},"type":"object","required":["ip","is_alive","min_rtt","avg_rtt","max_rtt","rtts","packets_sent","packets_received","packet_loss","from_loc"],"title":"PingResult","x-ref":"#/components/schemas/PingResult","index$":0}}}},"422":{"description":"Validation Error","content":{"application/json":{"schema":{"properties":{"detail":{"items":{"properties":{"loc":{"items":{"anyOf":[{"type":"string"},{"type":"integer"}]},"type":"array","title":"Location"},"msg":{"type":"string","title":"Message"},"type":{"type":"string","title":"Error Type"}},"type":"object","required":["loc","msg","type"],"title":"ValidationError","x-ref":"#/components/schemas/ValidationError"},"type":"array","title":"Detail"}},"type":"object","title":"HTTPValidationError","x-ref":"#/components/schemas/HTTPValidationError"}}}}},"parameters":[{"name":"ip","in":"path","required":true,"schema":{"type":"string","title":"Ip"},"index$":0}],"securitySource":"unspecified"}})
    }
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select

    let ping_ref01_data = Object.values(setup.data.existing.ping)[0] as any

    // LOAD
    const ping_ref01_ent = client.Ping()
    const ping_ref01_match_dt0: any = {}
    ping_ref01_match_dt0.id = ping_ref01_data.id
    const ping_ref01_data_dt0 = (await ping_ref01_ent.load(ping_ref01_match_dt0)).data()
    assert(ping_ref01_data_dt0.id === ping_ref01_data.id)


  })
})



function basicSetup(extra?: any) {
  // TODO: fix test def options
  const options: any = {} // null

  // TODO: needs test utility to resolve path
  const entityDataFile =
    Path.resolve(__dirname, 
      '../../../../.sdk/test/entity/ping/PingTestData.json')

  // TODO: file ready util needed?
  const entityDataSource = Fs.readFileSync(entityDataFile).toString('utf8')

  // TODO: need a xlang JSON parse utility in voxgig/struct with better error msgs
  const entityData = JSON.parse(entityDataSource)

  options.entity = entityData.existing

  let client = GeonetSDK.test(options, extra)
  const struct = client.utility().struct
  const merge = struct.merge
  const transform = struct.transform

  let idmap = transform(
    ['ping01','ping02','ping03'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'GEONET_TEST_PING_ENTID': idmap,
    'GEONET_TEST_LIVE': 'FALSE',
    'GEONET_TEST_EXPLAIN': 'FALSE',
  })

  idmap = env['GEONET_TEST_PING_ENTID']

  const live = 'TRUE' === env.GEONET_TEST_LIVE

  const transport = createLiveTransport()
  if (live) {
    const rawIds = process.env['GEONET_TEST_PING_ENTID']
    idmap = rawIds && rawIds.trim() ? JSON.parse(rawIds) : {}
    if (!idmap || Array.isArray(idmap) || typeof idmap !== 'object') {
      throw new Error('Live ENTID must be a JSON object')
    }
    client = new GeonetSDK(merge([
      // FIRST, so the generated fields below win: sdk-test-control.json's
      // test.client.options adds to the live client, it does not redirect it.
      liveClientOptions(),
      {
      },
      // 'extra || {}', not a bare 'extra': struct.merge returns UNDEFINED when the
      // last entry is undefined, and basicSetup is normally called with no
      // argument at all - so a bare 'extra' silently discarded the apikey
      // and server values above and handed the SDK undefined. Harmless
      // while there was nothing in that object; not harmless now.
      extra || {},
      { system: { fetch: transport.fetch } }
    ]))
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
  }

  return setup
}
  

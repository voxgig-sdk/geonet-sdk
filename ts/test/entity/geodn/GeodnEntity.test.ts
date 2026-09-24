

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


describe('GeodnEntity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when GEONET_TEST_LIVE=TRUE.
  afterEach(liveDelay('GEONET_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = GeonetSDK.test()
    const ent = testsdk.Geodn()
    assert(null != ent)
  })


  test('basic', async (t) => {

    const live = 'TRUE' === process.env.GEONET_TEST_LIVE
    for (const op of ['load']) {
      if (!live && maybeSkipControl(t, 'entityOp', 'geodn.' + op, live)) return
    }

    
    const setup = basicSetup()
    if (setup.live) {
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":{"answers":{"a":true,"h":"Answers","n":"answers","r":true,"t":"`$ARRAY`","key$":"answers","index$":0},"from_loc":{"a":true,"h":"From Loc","n":"from_loc","r":true,"sh":"Location of the server that performed the DNS lookup","t":"`$ANY`","key$":"from_loc","index$":1},"id":{"a":true,"h":"Id","n":"id","r":false,"t":"`$STRING`","key$":"id","index$":2}},"id":{"field":"id","name":"id"},"name":"geodn","op":{"load":{"input":"data","name":"load","points":[{"a":true,"co":{"id":"GET /api/geodns/{hostname}","source":"openapi3","version":2},"g":{"params":[{"a":true,"k":"param","n":"id","or":"hostname","r":true,"t":"`$STRING`","index$":0}],"query":[{"a":true,"ex":"A","k":"query","n":"rtype","or":"rtype","r":false,"t":"`$STRING`","index$":0}]},"k":"http","m":"GET","o":"/api/geodns/{hostname}","q":{"exist":["id","rtype"]},"r":{"param":{"hostname":"id"}},"s":[{"lit":"api"},{"lit":"geodns"},{"var":"id"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"load"}},"relations":{"ancestors":[]},"key$":"geodn","name__orig":"geodn","Name":"Geodn","name_":"geodn","name-":"geodn","NAME":"GEODN","index$":1}, {"active":true,"entity":"geodn","key$":"BasicGeodnFlow","kind":"basic","name":"BasicGeodnFlow","param":{},"step":[{"a":true,"d":{},"i":{"ref":"geodn_ref01","srcdatavar":"geodn_ref01_data","suffix":"_dt0"},"m":{"id":"geodn01"},"o":"load","s":[],"v":[{"apply":"TextFieldMark","def":{"mark":"Mark01-geodn_ref01"}}],"index$":0}]}, 'Geodn', {"GET /api/geodns/{hostname}":{"protocol":"http","operationId":"geo_dns_query_api_geodns__hostname__get","responses":{"200":{"description":"Successful Response","content":{"application/json":{"schema":{"type":"array","items":{"properties":{"answers":{"items":{"properties":{"type":{"type":"string","title":"Type"},"value":{"type":"string","title":"Value"}},"type":"object","required":["type","value"],"title":"DnsRecord","x-ref":"#/components/schemas/DnsRecord"},"type":"array","title":"Answers","key$":"answers"},"from_loc":{"allOf":[{"properties":{"city":{"type":"string","title":"City"},"country":{"type":"string","title":"Country"},"latlon":{"type":"string","title":"Latlon"}},"type":"object","required":["city","country","latlon"],"title":"Location","x-ref":"#/components/schemas/Location"}],"description":"Location of the server that performed the DNS lookup","key$":"from_loc"}},"type":"object","required":["answers","from_loc"],"title":"DnsResult","x-ref":"#/components/schemas/DnsResult","key$":"items"},"title":"Response Geo Dns Query Api Geodns  Hostname  Get"}}}},"422":{"description":"Validation Error","content":{"application/json":{"schema":{"properties":{"detail":{"items":{"properties":{"loc":{"items":{"anyOf":[{"type":"string"},{"type":"integer"}]},"type":"array","title":"Location"},"msg":{"type":"string","title":"Message"},"type":{"type":"string","title":"Error Type"}},"type":"object","required":["loc","msg","type"],"title":"ValidationError","x-ref":"#/components/schemas/ValidationError"},"type":"array","title":"Detail"}},"type":"object","title":"HTTPValidationError","x-ref":"#/components/schemas/HTTPValidationError"}}}}},"parameters":[{"name":"hostname","in":"path","required":true,"schema":{"type":"string","title":"Hostname"},"index$":0},{"name":"rtype","in":"query","required":false,"schema":{"type":"string","default":"A","title":"Rtype"},"index$":1}],"securitySource":"unspecified"}})
    }
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select

    let geodn_ref01_data = Object.values(setup.data.existing.geodn)[0] as any

    // LOAD
    const geodn_ref01_ent = client.Geodn()
    const geodn_ref01_match_dt0: any = {}
    geodn_ref01_match_dt0.id = geodn_ref01_data.id
    const geodn_ref01_data_dt0 = (await geodn_ref01_ent.load(geodn_ref01_match_dt0)).data()
    assert(geodn_ref01_data_dt0.id === geodn_ref01_data.id)


  })
})



function basicSetup(extra?: any) {
  // TODO: fix test def options
  const options: any = {} // null

  // TODO: needs test utility to resolve path
  const entityDataFile =
    Path.resolve(__dirname, 
      '../../../../.sdk/test/entity/geodn/GeodnTestData.json')

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
    ['geodn01','geodn02','geodn03'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'GEONET_TEST_GEODN_ENTID': idmap,
    'GEONET_TEST_LIVE': 'FALSE',
    'GEONET_TEST_EXPLAIN': 'FALSE',
  })

  idmap = env['GEONET_TEST_GEODN_ENTID']

  const live = 'TRUE' === env.GEONET_TEST_LIVE

  const transport = createLiveTransport()
  if (live) {
    const rawIds = process.env['GEONET_TEST_GEODN_ENTID']
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
  

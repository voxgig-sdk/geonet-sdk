

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


// AFTER the imports on purpose: TypeScript hoists `import` above any
// statement in the emitted CommonJS, so a loader placed above them would
// run only after every imported module had already been evaluated - and
// anything reading process.env at module scope would miss these values.
loadEnvLocal(__dirname + '/../../../.env.local')


describe('GeopingEntity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when GEONET_TEST_LIVE=TRUE.
  afterEach(liveDelay('GEONET_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = GeonetSDK.test()
    const ent = testsdk.Geoping()
    assert(null != ent)
  })


  test('basic', async (t) => {

    const live = 'TRUE' === process.env.GEONET_TEST_LIVE
    for (const op of ['load']) {
      if (!live && maybeSkipControl(t, 'entityOp', 'geoping.' + op, live)) return
    }

    
    const setup = basicSetup()
    if (setup.live) {
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":[{"active":true,"name":"avg_rtt","req":true,"type":"`$NUMBER`","index$":0},{"active":true,"name":"from_loc","req":true,"short":"Location of the server that performed the ping","type":"`$ANY`","index$":1},{"active":true,"name":"id","req":false,"type":"`$STRING`","index$":2},{"active":true,"name":"ip","req":true,"short":"IP address that was pinged","type":"`$STRING`","index$":3},{"active":true,"name":"is_alive","req":true,"type":"`$BOOLEAN`","index$":4},{"active":true,"name":"max_rtt","req":true,"type":"`$NUMBER`","index$":5},{"active":true,"name":"min_rtt","req":true,"type":"`$NUMBER`","index$":6},{"active":true,"name":"packet_loss","req":true,"type":"`$NUMBER`","index$":7},{"active":true,"name":"packets_received","req":true,"type":"`$INTEGER`","index$":8},{"active":true,"name":"packets_sent","req":true,"type":"`$INTEGER`","index$":9},{"active":true,"name":"rtts","req":true,"type":"`$ARRAY`","index$":10}],"id":{"field":"id","name":"id"},"name":"geoping","op":{"load":{"input":"data","name":"load","points":[{"active":true,"args":{"params":[{"active":true,"kind":"param","name":"id","orig":"ip","reqd":true,"type":"`$STRING`","index$":0}]},"contract":{"id":"GET /api/geoping/{ip}","json":"{\"operationId\":\"geoping_api_geoping__ip__get\",\"parameters\":[{\"in\":\"path\",\"name\":\"ip\",\"required\":true,\"schema\":{\"title\":\"Ip\",\"type\":\"string\"}}],\"protocol\":\"http\",\"responses\":{\"200\":{\"content\":{\"application/json\":{\"schema\":{\"items\":{\"properties\":{\"avg_rtt\":{\"title\":\"Avg Rtt\",\"type\":\"number\"},\"from_loc\":{\"allOf\":[{\"properties\":{\"city\":{\"title\":\"City\",\"type\":\"string\"},\"country\":{\"title\":\"Country\",\"type\":\"string\"},\"latlon\":{\"title\":\"Latlon\",\"type\":\"string\"}},\"required\":[\"city\",\"country\",\"latlon\"],\"title\":\"Location\",\"type\":\"object\"}],\"description\":\"Location of the server that performed the ping\"},\"ip\":{\"description\":\"IP address that was pinged\",\"title\":\"Ip\",\"type\":\"string\"},\"is_alive\":{\"title\":\"Is Alive\",\"type\":\"boolean\"},\"max_rtt\":{\"title\":\"Max Rtt\",\"type\":\"number\"},\"min_rtt\":{\"title\":\"Min Rtt\",\"type\":\"number\"},\"packet_loss\":{\"title\":\"Packet Loss\",\"type\":\"number\"},\"packets_received\":{\"title\":\"Packets Received\",\"type\":\"integer\"},\"packets_sent\":{\"title\":\"Packets Sent\",\"type\":\"integer\"},\"rtts\":{\"items\":{\"type\":\"number\"},\"title\":\"Rtts\",\"type\":\"array\"}},\"required\":[\"ip\",\"is_alive\",\"min_rtt\",\"avg_rtt\",\"max_rtt\",\"rtts\",\"packets_sent\",\"packets_received\",\"packet_loss\",\"from_loc\"],\"title\":\"PingResult\",\"type\":\"object\"},\"title\":\"Response Geoping Api Geoping  Ip  Get\",\"type\":\"array\"}}},\"description\":\"Successful Response\"},\"422\":{\"content\":{\"application/json\":{\"schema\":{\"properties\":{\"detail\":{\"items\":{\"properties\":{\"loc\":{\"items\":{\"anyOf\":[{\"type\":\"string\"},{\"type\":\"integer\"}]},\"title\":\"Location\",\"type\":\"array\"},\"msg\":{\"title\":\"Message\",\"type\":\"string\"},\"type\":{\"title\":\"Error Type\",\"type\":\"string\"}},\"required\":[\"loc\",\"msg\",\"type\"],\"title\":\"ValidationError\",\"type\":\"object\"},\"title\":\"Detail\",\"type\":\"array\"}},\"title\":\"HTTPValidationError\",\"type\":\"object\"}}},\"description\":\"Validation Error\"}},\"securitySource\":\"unspecified\"}","source":"openapi3","version":1},"kind":"http","method":"GET","orig":"/api/geoping/{ip}","rename":{"param":{"ip":"id"}},"segments":[{"lit":"api"},{"lit":"geoping"},{"var":"id"}],"select":{"exist":["id"]},"transform":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"load"}},"relations":{"ancestors":[]},"key$":"geoping","name__orig":"geoping","Name":"Geoping","name_":"geoping","name-":"geoping","NAME":"GEOPING","index$":2}, {"active":true,"entity":"geoping","key$":"BasicGeopingFlow","kind":"basic","name":"BasicGeopingFlow","param":{},"step":[{"active":true,"data":{},"input":{"ref":"geoping_ref01","srcdatavar":"geoping_ref01_data","suffix":"_dt0"},"match":{"id":"geoping01"},"op":"load","spec":[],"valid":[{"apply":"TextFieldMark","def":{"mark":"Mark01-geoping_ref01"}}],"index$":0}]}, 'Geoping')
    }
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select

    let geoping_ref01_data = Object.values(setup.data.existing.geoping)[0] as any

    // LOAD
    const geoping_ref01_ent = client.Geoping()
    const geoping_ref01_match_dt0: any = {}
    geoping_ref01_match_dt0.id = geoping_ref01_data.id
    const geoping_ref01_data_dt0 = (await geoping_ref01_ent.load(geoping_ref01_match_dt0)).data()
    assert(geoping_ref01_data_dt0.id === geoping_ref01_data.id)


  })
})



function basicSetup(extra?: any) {
  // TODO: fix test def options
  const options: any = {} // null

  // TODO: needs test utility to resolve path
  const entityDataFile =
    Path.resolve(__dirname, 
      '../../../../.sdk/test/entity/geoping/GeopingTestData.json')

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
    ['geoping01','geoping02','geoping03'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'GEONET_TEST_GEOPING_ENTID': idmap,
    'GEONET_TEST_LIVE': 'FALSE',
    'GEONET_TEST_EXPLAIN': 'FALSE',
  })

  idmap = env['GEONET_TEST_GEOPING_ENTID']

  const live = 'TRUE' === env.GEONET_TEST_LIVE

  const transport = createLiveTransport()
  if (live) {
    const rawIds = process.env['GEONET_TEST_GEOPING_ENTID']
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
  



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


describe('DnsEntity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when GEONET_TEST_LIVE=TRUE.
  afterEach(liveDelay('GEONET_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = GeonetSDK.test()
    const ent = testsdk.Dns()
    assert(null != ent)
  })


  test('basic', async (t) => {

    const live = 'TRUE' === process.env.GEONET_TEST_LIVE
    for (const op of ['load']) {
      if (!live && maybeSkipControl(t, 'entityOp', 'dns.' + op, live)) return
    }

    
    const setup = basicSetup()
    if (setup.live) {
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":[{"active":true,"name":"answers","req":true,"type":"`$ARRAY`","index$":0},{"active":true,"name":"from_loc","req":true,"short":"Location of the server that performed the DNS lookup","type":"`$ANY`","index$":1},{"active":true,"name":"id","req":false,"type":"`$STRING`","index$":2}],"id":{"field":"id","name":"id"},"name":"dns","op":{"load":{"input":"data","name":"load","points":[{"active":true,"args":{"params":[{"active":true,"kind":"param","name":"id","orig":"hostname","reqd":true,"type":"`$STRING`","index$":0}],"query":[{"active":true,"example":"A","kind":"query","name":"rtype","orig":"rtype","reqd":false,"type":"`$STRING`","index$":0}]},"contract":{"id":"GET /api/dns/{hostname}","json":"{\"operationId\":\"dns_query_api_dns__hostname__get\",\"parameters\":[{\"in\":\"path\",\"name\":\"hostname\",\"required\":true,\"schema\":{\"title\":\"Hostname\",\"type\":\"string\"}},{\"in\":\"query\",\"name\":\"rtype\",\"required\":false,\"schema\":{\"default\":\"A\",\"title\":\"Rtype\",\"type\":\"string\"}}],\"protocol\":\"http\",\"responses\":{\"200\":{\"content\":{\"application/json\":{\"schema\":{\"properties\":{\"answers\":{\"items\":{\"properties\":{\"type\":{\"title\":\"Type\",\"type\":\"string\"},\"value\":{\"title\":\"Value\",\"type\":\"string\"}},\"required\":[\"type\",\"value\"],\"title\":\"DnsRecord\",\"type\":\"object\"},\"title\":\"Answers\",\"type\":\"array\"},\"from_loc\":{\"allOf\":[{\"properties\":{\"city\":{\"title\":\"City\",\"type\":\"string\"},\"country\":{\"title\":\"Country\",\"type\":\"string\"},\"latlon\":{\"title\":\"Latlon\",\"type\":\"string\"}},\"required\":[\"city\",\"country\",\"latlon\"],\"title\":\"Location\",\"type\":\"object\"}],\"description\":\"Location of the server that performed the DNS lookup\"}},\"required\":[\"answers\",\"from_loc\"],\"title\":\"DnsResult\",\"type\":\"object\"}}},\"description\":\"Successful Response\"},\"422\":{\"content\":{\"application/json\":{\"schema\":{\"properties\":{\"detail\":{\"items\":{\"properties\":{\"loc\":{\"items\":{\"anyOf\":[{\"type\":\"string\"},{\"type\":\"integer\"}]},\"title\":\"Location\",\"type\":\"array\"},\"msg\":{\"title\":\"Message\",\"type\":\"string\"},\"type\":{\"title\":\"Error Type\",\"type\":\"string\"}},\"required\":[\"loc\",\"msg\",\"type\"],\"title\":\"ValidationError\",\"type\":\"object\"},\"title\":\"Detail\",\"type\":\"array\"}},\"title\":\"HTTPValidationError\",\"type\":\"object\"}}},\"description\":\"Validation Error\"}},\"securitySource\":\"unspecified\"}","source":"openapi3","version":1},"kind":"http","method":"GET","orig":"/api/dns/{hostname}","rename":{"param":{"hostname":"id"}},"segments":[{"lit":"api"},{"lit":"dns"},{"var":"id"}],"select":{"exist":["id","rtype"]},"transform":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"load"}},"relations":{"ancestors":[]},"key$":"dns","name__orig":"dns","Name":"Dns","name_":"dns","name-":"dns","NAME":"DNS","index$":0}, {"active":true,"entity":"dns","key$":"BasicDnsFlow","kind":"basic","name":"BasicDnsFlow","param":{},"step":[{"active":true,"data":{},"input":{"ref":"dns_ref01","srcdatavar":"dns_ref01_data","suffix":"_dt0"},"match":{"id":"dns01"},"op":"load","spec":[],"valid":[{"apply":"TextFieldMark","def":{"mark":"Mark01-dns_ref01"}}],"index$":0}]}, 'Dns')
    }
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select

    let dns_ref01_data = Object.values(setup.data.existing.dns)[0] as any

    // LOAD
    const dns_ref01_ent = client.Dns()
    const dns_ref01_match_dt0: any = {}
    dns_ref01_match_dt0.id = dns_ref01_data.id
    const dns_ref01_data_dt0 = (await dns_ref01_ent.load(dns_ref01_match_dt0)).data()
    assert(dns_ref01_data_dt0.id === dns_ref01_data.id)


  })
})



function basicSetup(extra?: any) {
  // TODO: fix test def options
  const options: any = {} // null

  // TODO: needs test utility to resolve path
  const entityDataFile =
    Path.resolve(__dirname, 
      '../../../../.sdk/test/entity/dns/DnsTestData.json')

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
    ['dns01','dns02','dns03'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'GEONET_TEST_DNS_ENTID': idmap,
    'GEONET_TEST_LIVE': 'FALSE',
    'GEONET_TEST_EXPLAIN': 'FALSE',
  })

  idmap = env['GEONET_TEST_DNS_ENTID']

  const live = 'TRUE' === env.GEONET_TEST_LIVE

  const transport = createLiveTransport()
  if (live) {
    const rawIds = process.env['GEONET_TEST_DNS_ENTID']
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
  

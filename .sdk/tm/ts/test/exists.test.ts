
import { test, describe } from 'node:test'
import { equal } from 'node:assert'


import { GeonetSDK } from '..'


describe('exists', async () => {

  test('test-mode', () => {
    const testsdk = GeonetSDK.test()
    equal(testsdk instanceof GeonetSDK, true,
      'GeonetSDK.test() must return a client synchronously')
  })

})

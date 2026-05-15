
import { test, describe } from 'node:test'
import { equal } from 'node:assert'


import { GeonetSDK } from '..'


describe('exists', async () => {

  test('test-mode', async () => {
    const testsdk = await GeonetSDK.test()
    equal(null !== testsdk, true)
  })

})

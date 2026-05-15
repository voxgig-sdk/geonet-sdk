# ProjectName SDK exists test

import pytest
from geonet_sdk import GeonetSDK


class TestExists:

    def test_should_create_test_sdk(self):
        testsdk = GeonetSDK.test(None, None)
        assert testsdk is not None

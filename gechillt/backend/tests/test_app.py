import falcon
from falcon import testing
import pytest
import json

from backend.app import api


@pytest.fixture
def client():
    return testing.TestClient(api)


# pytest will inject the object returned by the "client" function
# as an additional parameter.
def test_list_images(client):
    doc = {
        'images': [
            {
                'href': '/images/1eaf6ef1-7f2d-4ecc-a8d5-6e8adba7cc0e.png'
            }
        ]
    }

    response = client.simulate_get('/images')
    # Decode byte array
    result_json = response.content.decode('utf8')

    # turn jsonString to jsonObj
    result_doc = json.loads(result_json)

    assert result_doc == doc
    assert response.status == falcon.HTTP_OK

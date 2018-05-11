import falcon
from falcon import testing
import pytest

from backend.images import ImagesResource


@pytest.fixture
def client():
    return testing
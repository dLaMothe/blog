import falcon
from falcon import testing
import pytest

from backend.resources import comments


@pytest.fixture
def client():
    return testing

import falcon
from falcon import testing
import pytest


@pytest.fixture
def client():
    return testing

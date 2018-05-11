import falcon
from falcon import testing
import pytest

from backend.comments import CommentsResource


@pytest.fixture
def client():
    return testing
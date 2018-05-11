import falcon
from falcon import testing
import pytest

from backend.posts import PostsResource


@pytest.fixture
def client():
    return testing
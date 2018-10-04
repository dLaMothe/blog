import copy
import json
import unittest

import testing.postgresql

from falcon.testing.client import TestClient
from backend.app import BlogApp
from backend.config import AppConfig


class AppTestCase(unittest.TestCase):
    def setUp(self):
        self.postgresql = testing.postgresql.Postgresql()
        app = BlogApp

        cfg = AppConfig()
        cfg.db.connection = self.postgresql.url()

        self.app = TestApp(cfg, app)


class TestApp(object):
    def __init__(self, cfg, api_class):
        self.cfg = cfg
        self.app = api_class(cfg)
        self.client = TestClient(self.app)

    @property
    def db(self):
        return self.app.db

    @property
    def session(self):
        return self.db.session

    def get_headers(self, headers):
        all_headers = {}

        if headers:
            all_headers.update(copy.deepcopy(headers))

        return all_headers

    def get(self, path, params=None, headers=None):
        return self.client.simulate_get(
            path,
            params=params,
            headers=self.get_headers(headers)
        )

    def post(self, path, body=None, params=None, headers=None):
        return self.client.simulate_post(
            path,
            body=body,
            params=params,
            headers=self.get_headers(headers)
        )

    def put(self, path, body=None, params=None, headers=None):
        return self.client.simulate_put(
            path,
            body=body,
            params=params,
            headers=self.get_headers(headers)
        )

    def delete(self, path, params=None, headers=None):
        return self.client.simulate_delete(
            path,
            params=params,
            headers=self.get_headers(headers)
        )

    def post_json(self, path, body, params=None, headers=None):
        return self.post(path, json.dumps(body), params, headers)

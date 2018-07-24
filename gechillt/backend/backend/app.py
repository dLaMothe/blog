import os

import falcon

from backend.config import AppConfig

from backend.resources import posts
from backend.middleware.context import ContextMiddleware
from backend.db.manager import DBManager


class BlogApp(falcon.API):
    def __init__(self, cfg):
        super(BlogApp, self).__init__(
            middleware=[ContextMiddleware()]
        )

        self.cfg = cfg

        mgr = DBManager(self.cfg.db.connection)
        mgr.setup()

        self.add_route('/posts', posts.Collection(mgr))
        self.add_route('/posts/{name}', posts.Item(mgr))


cfg = AppConfig()
API = BlogApp(cfg)

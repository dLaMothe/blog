import os

import falcon

from backend.resources import posts
from backend.db.manager import DBManager


def create_app():
    api = falcon.API()

    mgr = DBManager()
    mgr.setup()

    api.add_route('/posts', posts.Collection(mgr))
    api.add_route('/posts/{name}', posts.Item(mgr))
    # api.add_route('/posts', posts)
    #api.add_route('/comments', comments)
    return api


API = create_app()

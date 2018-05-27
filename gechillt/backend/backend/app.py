import os

import falcon

from backend.resources import images


def create_app(image_store):
    api = falcon.API()

    api.add_route('/images', images.Collection(image_store))
    api.add_route('/images/{name}', images.Item(image_store))
    #api.add_route('/posts', posts)
    #api.add_route('/comments', comments)
    return api


def get_app():
    image_store = images.ImageStore()
    return create_app(image_store)


app = get_app()

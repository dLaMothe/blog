import os

import falcon


from .images import Collection, Item, ImageStore
from .comments import CommentsResource
from .posts import PostsResource


def create_app(image_store):
    posts = PostsResource()
    comments = CommentsResource()
    api = falcon.API()

    api.add_route('/images', Collection(image_store))
    api.add_route('/images/{name}', Item(image_store))
    api.add_route('/posts', posts)
    api.add_route('/comments', comments)
    return api


def get_app():
    storage_path = os.environ.get('BACKEND_STORAGE_PATH', '.')
    image_store = ImageStore(storage_path)
    return create_app(image_store)

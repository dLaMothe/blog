import falcon

from .comments import CommentsResource
from .images import ImagesResource
from .posts import PostsResource

api = application = falcon.API()

images = ImagesResource()
posts = PostsResource()
comments = CommentsResource()

api.add_route('/images', images)
api.add_route('/posts', posts)
api.add_route('/comments', comments)

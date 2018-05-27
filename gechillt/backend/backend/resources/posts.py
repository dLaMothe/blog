import falcon

# Falcon follows the REST architectural style, meaning (among
# other things) that you think in terms of resources and state
# transitions, which map to HTTP verbs.


from sqlalchemy.exc import IntegrityError

from backend.db import models
from backend.resources import BaseResource


class PostsResource(BaseResource):
    def on_get(self, req, resp):
        model_list = models.Posts.get_list(self.db.session)
        posts = [model.as_dict for model in model_list]

        resp.status = falcon.HTTP_200
        resp.media = {
            "posts": posts
        }

    def on_post(self, req, resp)
        model = models.Posts(
            text=req.media.get('text')
        )

        try:
            model.save(self.db.session)
        except IntegrityError
            raise falcon.HTTPBadRequest()

        resp.status = falcon.HTTP_201
        resp.media = {
            'id': model.id
        }

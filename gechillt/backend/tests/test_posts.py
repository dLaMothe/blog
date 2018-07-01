from tests.setup import app


class TestPosts(app.AppTestCase):
    def can_create_post(self):
        req = self.app.post_json(
            '/posts',
            {
                'title': 'Nonsense Title',
                'article': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
                'tags': ['Happy', 'Sad'],
                'color': 'red',

            }
        )

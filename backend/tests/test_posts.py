from tests.setup import app

json_post = {
    'title': 'Nonsense Title',
    'article': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    'tags': ['Happy', 'Sad'],
    'color': 'red',
}


class TestPosts(app.AppTestCase):
    def test_create_post(self):
        req = self.app.post_json(
            '/posts',
            json_post
        )
        self.assertEquals(req.status_code, 201)
        self.assertEquals(req.json.get('id'), 1)

    def test_list_post(self):
        post_req = self.app.post_json(
            '/posts',
            json_post
        )
        self.assertEquals(post_req.status_code, 201)

        get_req = self.app.get('/posts')
        self.assertEquals(get_req.status_code, 200)

        post_list = get_req.json.get('posts')
        self.assertEquals(len(post_list), 1)

from sqlalchemy import Column, Integer, String, ARRAY, Text
from sqlalchemy.ext.declarative import declarative_base

ModelBase = declarative_base()


class Posts(ModelBase):
    __tablename__ = 'posts'

    id = Column(Integer, primary_key=True)
    title = Column(Text)
    article = Column(Text)
    color = String(String(64))
    tags = ARRAY(String)

    def __init__(self, title, article, tags, color):
        self.title = title
        self.article = article
        self.tags = tags
        self.color = color

    @property
    def as_dict(self):
        return {
            'title': self.title,
            'article': self.article,
            'color': self.color,
            'tags': self.tags
        }

    def save(self, session):
        with session.begin():
            session.add(self)

    @classmethod
    def get(cls, id, session):
        with session.begin():
            query = session.query(cls)
            post = query.get(id)

        return post

    @classmethod
    def get_list(cls, session):

        with session.begin():
            query = session.query(cls)
            posts = query.all()

        return posts

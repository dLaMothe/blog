import sqlalchemy as sa
from sqlalchemy.ext.declarative import declarative_base

ModelBase = declarative_base()


class Posts(ModelBase):
    __tablename__ = 'posts'

    id = sa.Column(sa.Integer, primary_key=True)
    text = sa.Column(sa.String(128))

    def __init__(self, text):
        self.text = text

    @property
    def as_dict(self):
        return {
            'text': self.text
        }

    def save(self, session):
        with session.begin():
            session.add(self)

    @classmethod
    def get_list(cls, session):
        models = []

        with session.begin():
            query = session.query(cls)
            models = query.all()

        return models

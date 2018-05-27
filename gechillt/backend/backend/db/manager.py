import sqlalchemy
from sqlalchemy import orm
from sqlalchemy.orm import scoping

# Needed by the setup method as we want to make sure
# all models are loaded before we call create_all(...)
from backend.db import models

CONNECTION_STRING = 'postgresql://postgres:postgres@localhost/gechillt'


class DBManager(object):
    def __init__(self):
        self.connection = CONNECTION_STRING

        self.engine = sqlalchemy.create_engine(self.connection)
        self.DBSession = scoping.scoped_session(
            orm.sessionmaker(
                bind=self.engine,
                autocommit=True
            )
        )

    @property
    def session(self):
        return self.DBSession()

    def setup(self):
        # Normally we would add whatever db setup code we needed here.
        # This will for fine for the ORM
        try:
            models.ModelBase.metadata.create_all(self.engine)
        except Exception as e:
            print('Could not initialize DB: {}'.format(e))

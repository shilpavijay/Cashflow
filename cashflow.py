from cashflow import *
import sqlalchemy as sa
from sqlalchemy import Column, Integer, String, ForeignKey
from sqlalchemy.ext.declarative import declarative_base
import os
from models import *



# db.create_all()
# newuser = User('vijay','y','vijay@y.com','a')
# db.session.add(newuser)
# db.session.commit()

users = User.query.all()
print users[0].firstname
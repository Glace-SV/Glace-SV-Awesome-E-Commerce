  
import enum

from flask_sqlalchemy import SQLAlchemy
from sqlalchemy.dialects.postgresql import VARCHAR, ARRAY
from sqlalchemy.ext.hybrid import hybrid_property
# from werkzeug.security import generate_password_hash

db = SQLAlchemy()


class BasicMode():

    @classmethod
    def get_all(cls):
        return cls.query.all()
        
    @classmethod
    def get_one(cls,model_id):
        return cls.query.filter_by(id = model_id).one_or_none()
    
    @classmethod
    def get_by_category(cls,model_category):
        return cls.query.filter_by(category = model_category).first()

    @classmethod
    def delete(cls,self): 
        db.session.query(cls).filter(cls.id==self.id).delete(synchronize_session=False)
        db.session.commit()

class User(db.Model, BasicMode):
    __tablename__ = 'user'
    id = db.Column(db.Integer, primary_key=True)
    email = db.Column(db.String(120), unique=True, nullable=False)
    name = db.Column(db.String(120), unique=True, nullable=False)
    password = db.Column(db.String(80))
    adress = db.Column(db.String(250),unique=False, nullable=False)
    city = db.Column(db.String(80))
    phone = db.Column(db.Integer)
    is_active = db.Column(db.Boolean(), unique=False, nullable=False)


    def __repr__(self):
        return '<user %r>' % self.name

    @staticmethod
    def login_credentials(email,password):
        return User.query.filter_by(email=email).filter_by(password=password).first()
    
    
    def user_have_token(self,token):
        return User.query.filter_by(token=self.token).first()
   
    def assign_token(self,token):
        self.token = token
        db.session.add(self)
        db.session.commit()
    
    def check_password(self, password_param):
        return safe_str_cmp(self.password.encode('utf-8'), password_param.encode('utf-8'))

    def serialize(self):
        return {
            "id": self.id,
            "name": self.name,
            "email": self.email,
            
            # do not serialize the password, its a security breach
        }


#  class

class Products(db.Model, BasicMode):
    __tablename__ = 'products'
    id = db.Column(db.Integer,unique = True, primary_key= True)
    url_image = db.Column(db.String) #Preguntar si es string.
    name = db.Column(db.String(80), unique = True)
    description = db.Column(db.String(250), nullable=False)
    category = db.Column(db.String(250), unique=False, nullable=False)
    price = db.Column(db.String(20), nullable=False)
    size = db.Column(db.String(250), nullable=False)

    def db_post(self): 
        print(self)       
        db.session.add(self)
        db.session.commit()

    def serialize(self):
        return {
            "id": self.id,
            "name": self.name,
            "url_image": self.url_image,
            "description": self.description,
            "category": self.category,
            "price": self.price,
            "size": self.size
            # do not serialize the password, its a security breach
        }
    @classmethod
    def get_by_id(cls,model_id):
        return cls.query.filter_by(id = model_id).first()

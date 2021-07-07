  
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
        return cls.query.filter_by(id = model_id).first()
    @classmethod
    def delete(cls,self):
        return cls.query.delete()

class User(db.Model, BasicMode):
    __tablename__ = 'user'
    id = db.Column(db.Integer, primary_key=True)
    email = db.Column(db.String(120), unique=True, nullable=False)
    name = db.Column(db.String(120), unique=True, nullable=False)
    password = db.Column(db.String(80), unique=False, nullable=False)
    adress = db.Column(db.String(250), unique=False, nullable=False)
    city = db.Column(db.String(80), unique=False, nullable=False)
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
            "user_id": self.id,
            "user_email": self.email,
            # do not serialize the password, its a security breach
        }


#  class

class Glazed(db.Model, BasicMode):
    __tablename__ = 'glazed'
    id_glazed = db.Column(db.Integer,unique = True, primary_key= True)
    url_image = db.Column(db.String) #Preguntar si es string.
    name = db.Column(db.String(80), unique = True)
    description = db.Column(db.String(250), nullable=False)
    price = db.Column(db.String(20), nullable=False)
    size = db.Column(db.String(250), nullable=False)

    def db_post(self):        
        db.session.add(self)
        db.session.commit()

    @classmethod
    def set_with_glace(json):
        obj = {
        name: json["name"]
        description: json["description"]
        price: json["price"]
        size: json["size"]
        }
        return obj
        

    def serialize(self):
        return {
            "id_glazed": self.id_glazed,
            "name": self.name,
            "url_image": self.url_image,
            "description": self.description,
            "price": self.price,
            "size": self.size
            # do not serialize the password, its a security breach
        }

class Treats(db.Model, BasicMode):
    __tablename__ = 'treats'
    id = db.Column(db.Integer,unique = True, primary_key= True)
    url_image = db.Column(db.String) #Preguntar si es string.
    name = db.Column(db.String(80), unique = True)
    description = db.Column(db.String(250), nullable=False)
    price = db.Column(db.String(20), nullable=False)
    size = db.Column(db.String(250), nullable=False)

    def db_post(self):        
        db.session.add(self)
        db.session.commit()

    def set_with_treat(self,json):
        self.name = json["name"]
        self.description = json["description"]
        self.price = json["price"]
        self.size = json["size"]
        return self

    def serialize(self):
        return {
            "id": self.id,
            "name": self.name,
            "url_image": self.url_image,
            "description": self.description,
            "price": self.price,
            "size": self.size
            # do not serialize the password, its a security breach
        }
class TestClass(db.Model, BasicMode):
    __tablename__ = 'testclass'
    id = db.Column(db.Integer,unique = True, primary_key = True)
    name = db.Column(db.VARCHAR(250))
    
    
    
   

class Cakes(db.Model, BasicMode):
    __tablename__ = 'cakes'
    id_cakes = db.Column(db.Integer,unique = True, primary_key= True)
    url_image = db.Column(db.String) #Preguntar si es string.
    name = db.Column(db.String(80), unique = True)
    description = db.Column(db.String(250), nullable=False)
    price = db.Column(db.String(20), nullable=False)
    size = db.Column(db.String(250), nullable=False)

    def db_post(self):        
        db.session.add(self)
        db.session.commit()

    def set_with_Cake(self,json):
        self.name = json["name"]
        self.description = json["description"]
        self.price = json["price"]
        self.size = json["size"]
        return self

    def serialize(self):
        return {
            "id_cakes": self.id_cakes,
            "name": self.name,
            "url_image": self.url_image,
            "description": self.description,
            "price": self.price,
            "size": self.size
            # do not serialize the password, its a security breach
        }

class Gifts(db.Model, BasicMode):
    __tablename__ = 'gifts'
    id_gifts = db.Column(db.Integer,unique = True, primary_key= True)
    url_image = db.Column(db.String)
    name = db.Column(db.String(80), unique = True)
    description = db.Column(db.String(250), nullable=False)
    price = db.Column(db.String(20), nullable=False)
    size = db.Column(db.String(20), nullable=False)

    def db_post(self):        
        db.session.add(self)
        db.session.commit()

    def set_with_gifts(self,json):
        self.name = json["name"]
        self.description = json["description"]
        self.price = json["price"]
        self.size= json["size"]
        return self

    def serialize(self):
        return {
            "id_gifts": self.id_gifts,
            "name": self.name,
            "url_image": self.url_image,
            "description": self.description,
            "price": self.price,
            "size": self.size
            # do not serialize the password, its a security breach
        }
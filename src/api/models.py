from flask_sqlalchemy import SQLAlchemy

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
    id = db.Column(db.Integer, primary_key=True)
    email = db.Column(db.String(120), unique=True, nullable=False)
    name = db.Column(db.String(120), unique=True, nullable=False)
    password = db.Column(db.String(80), unique=False, nullable=False)
    is_active = db.Column(db.Boolean(), unique=False, nullable=False)


    def __repr__(self):
        return '<User %r>' % self.username

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
            "email": self.email,
            # do not serialize the password, its a security breach
        }


#  class

class Glazed(db.Model, BasicMode):
    __table__ = "glazed"
    id_glazed = db.Column(db.Integer,unique = True, primary_key= True)
    image = db.Column(db.String) #Preguntar si es string.
    name = db.Column(db.String(80), unique = True)
    description = db.Column(db.String(250), nullable=False)
    price = db.Column(db.String(20), nullable=False)
    size = db.Column(db.String(250), nullable=False)

    def db_post(self):        
        db.session.add(self)
        db.session.commit()

    def set_with_glaze(self,json):
        self.name = json["name"]
        self.description = json["description"]
        self.price = json["price"]
        self.size = json["size"]
        return self

    def serialize(self):
        return {
            "id_glace": self.id_glace,
            "description": self.description,
            "price": self.price,
            "size": self.size
            # do not serialize the password, its a security breach
        }

class Treats(db.Model, BasicMode):
    __table__ = "treats"
    id_treat = db.Column(db.Integer,unique = True, primary_key= True)
    image = db.Column(db.String) #Preguntar si es string.
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
            "id_treat": self.id_treat,
            "image": self.image,
            "description": self.description,
            "price": self.price,
            "size": self.size
            # do not serialize the password, its a security breach
        }

class Cakes(db.Model, BasicMode):
    __table__ = "cakes"
    id_cakes = db.Column(db.Integer,unique = True, primary_key= True)
    image = db.Column(db.String) #Preguntar si es string.
    name = db.Column(db.String(80), unique = True)
    description = db.Column(db.String(250), nullable=False)
    price = db.Column(db.String(20), nullable=False)
    size = db.Column(db.String(250), nullable=False)

    def db_post(self):        
        db.session.add(self)
        db.session.commit()

    def set_with_cakes(self,json):
        self.name = json["name"]
        self.description = json["description"]
        self.price = json["price"]
        self.size = json["size"]
        return self

    def serialize(self):
        return {
            "id_cakes": self.id_cakes,
            "image": self.image,
            "description": self.description,
            "price": self.price,
            "size": self.size
            # do not serialize the password, its a security breach
        }

class Gifts(db.Model, BasicMode):
    __table__ = "gifts"
    id_gifts = db.Column(db.Integer,unique = True, primary_key= True)
    image = db.Column(db.String)
    name = db.Column(db.String(80), unique = True)
    description = db.Column(db.String(250), nullable=False)
    price = db.Column(db.Integer(20), nullable=False)
    size = db.Column(db.String(250), nullable=False)

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
            "id_spread": self.id_spread,
            "image": self.image,
            "description": self.description,
            "price": self.price,
            "size": self.size
            # do not serialize the password, its a security breach
        }


    

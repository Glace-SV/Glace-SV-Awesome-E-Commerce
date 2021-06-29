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


#  Fathers class

class Glace(db.Model, BasicMode):
    __table__ = "Glazed"
    id_glace = db.Column(db.Integer,unique = True, primary_key= True)
    image = db.Column(db.integer)
    name = db.Column(db.String(80), unique = True)
    description = db.Column(db.String(250), nullable=False)
    price = db.Column(db.Integer(20), nullable=False)
    info_price = db.Column(db.String(250), nullable=False)

    def db_post(self):        
        db.session.add(self)
        db.session.commit()

    def set_with_glace(self,json):
        self.name = json["name"]
        self.description = json["description"]
        self.price = json["price"]
        self.info.price = json["info.price"]
        return self

    def serialize(self):
        return {
            "id_glace": self.id_glace,
            "description": self.description,
            "price": self.price,
            "info_price": self.info_price
            # do not serialize the password, its a security breach
        }

class TreatYou(db.Model, BasicMode):
    __table__ = "TreatYou"
    id_treat = db.Column(db.Integer,unique = True, primary_key= True)
    image = db.Column(db.integer)
    name = db.Column(db.String(80), unique = True)
    description = db.Column(db.String(250), nullable=False)
    price = db.Column(db.Integer(20), nullable=False)
    info_price = db.Column(db.String(250), nullable=False)

    def db_post(self):        
        db.session.add(self)
        db.session.commit()

    def set_with_Treat(self,json):
        self.name = json["name"]
        self.description = json["description"]
        self.price = json["price"]
        self.info.price = json["info.price"]
        return self

    def serialize(self):
        return {
            "id_treat": self.id_treat,
            "image": self.image,
            "description": self.description,
            "price": self.price,
            "info_price": self.info_price
            # do not serialize the password, its a security breach
        }

class Cakes(db.Model, BasicMode):
    __table__ = "Cakes"
    id_cakes = db.Column(db.Integer,unique = True, primary_key= True)
    image = db.Column(db.integer)
    name = db.Column(db.String(80), unique = True)
    description = db.Column(db.String(250), nullable=False)
    price = db.Column(db.Integer(20), nullable=False)
    info_price = db.Column(db.String(250), nullable=False)

    def db_post(self):        
        db.session.add(self)
        db.session.commit()

    def set_with_Treat(self,json):
        self.name = json["name"]
        self.description = json["description"]
        self.price = json["price"]
        self.info.price = json["info.price"]
        return self

    def serialize(self):
        return {
            "id_cakes": self.id_cakes,
            "image": self.image,
            "description": self.description,
            "price": self.price,
            "info_price": self.info_price
            # do not serialize the password, its a security breach
        }

class SpreadLove(db.Model, BasicMode):
    __table__ = "SpreadLove"
    id_spread = db.Column(db.Integer,unique = True, primary_key= True)
    image = db.Column(db.integer)
    name = db.Column(db.String(80), unique = True)
    description = db.Column(db.String(250), nullable=False)
    price = db.Column(db.Integer(20), nullable=False)
    info_price = db.Column(db.String(250), nullable=False)

    def db_post(self):        
        db.session.add(self)
        db.session.commit()

    def set_with_spread(self,json):
        self.name = json["name"]
        self.description = json["description"]
        self.price = json["price"]
        self.info.price = json["info.price"]
        return self

    def serialize(self):
        return {
            "id_spread": self.id_spread,
            "image": self.image,
            "description": self.description,
            "price": self.price,
            "info_price": self.info_price
            # do not serialize the password, its a security breach
        }
class Events(db.Model, BasicMode):
    __table__ = "Events"
    id_events = db.Column(db.Integer,unique = True, primary_key= True)
    image = db.Column(db.integer)
    name = db.Column(db.String(80), unique = True)
    description = db.Column(db.String(250), nullable=False)
    price = db.Column(db.Integer(20), nullable=False)
    info_price = db.Column(db.String(250), nullable=False)

    def db_post(self):        
        db.session.add(self)
        db.session.commit()

    def set_with_event(self,json):
        self.name = json["name"]
        self.description = json["description"]
        self.price = json["price"]
        self.info.price = json["info.price"]
        return self

    def serialize(self):
        return {
            "id_events": self.id_events,
            "image": self.image,
            "description": self.description,
            "price": self.price,
            "info_price": self.info_price
            # do not serialize the password, its a security breach
        }

    # Children per category
# class Variety_Glacez(db.Model, BasicMode):

#     id_variety = db.Column(db.Integer,unique = True, primary_key= True)
#     name = db.Column(db.String(80), unique = True)
#     description = db.Column(db.String(250), nullable=False)
#     price = db.Column(db.Integer(20), nullable=False)
#     info_price = db.Column(db.String(250), nullable=False)
#     glace_id = db.Column(db.Integer, db.ForeignKey("Glace.id_glace"))

#     def serialize(self):
#         return {
#             "id_events": self.id_events,
#             "description": self.description,
#             "price": self.price,
#             "info_price": self.info_price
#             # do not serialize the password, its a security breach
#         }

# class Variety_Cakes(db.Model, BasicMode):

#     id_varietyCake = db.Column(db.Integer,unique = True, primary_key= True)
#     name = db.Column(db.String(80), unique = True)
#     description = db.Column(db.String(250), nullable=False)
#     price = db.Column(db.Integer(20), nullable=False)
#     info_price = db.Column(db.String(250), nullable=False)
#     cakes_id = db.Column(db.Integer, db.ForeignKey("Cakes.id_cakes"))
#     def serialize(self):
#         return {
#             "id_varietycake": self.id_varietyCake,
#             "description": self.description,
#             "price": self.price,
#             "info_price": self.info_price
#             # do not serialize the password, its a security breach
#         }

# class Variety_Spread(db.Model, BasicMode):

#     id_varietyspread = db.Column(db.Integer,unique = True, primary_key= True)
#     name = db.Column(db.String(80), unique = True)
#     description = db.Column(db.String(250), nullable=False)
#     price = db.Column(db.Integer(20), nullable=False)
#     info_price = db.Column(db.String(250), nullable=False)
#     spread_id = db.Column(db.Integer, db.ForeignKey("SpreadLove.id_spread"))

#     def serialize(self):
#         return {
#             "id_events": self.id_events,
#             "description": self.description,
#             "price": self.price,
#             "info_price": self.info_price
#             # do not serialize the password, its a security breach
#         }

# class Pack_Events(db.Model, BasicMode):

#     id_packEvents = db.Column(db.Integer,unique = True, primary_key= True)
#     name = db.Column(db.String(80), unique = True)
#     description = db.Column(db.String(250), nullable=False)
#     price = db.Column(db.Integer(20), nullable=False)
#     info_price = db.Column(db.String(250), nullable=False)
#     events_id = db.Column(db.Integer, db.ForeignKey("Events.id_events"))

#     def serialize(self):
#         return {
#             "id_packEvents": self.id_packEvents,
#             "description": self.description,
#             "price": self.price,
#             "info_price": self.info_price
#             # do not serialize the password, its a security breach
#         }

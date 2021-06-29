"""
This module takes care of starting the API Server, Loading the DB and Adding the endpoints
"""
from flask import Flask, request, jsonify, url_for, Blueprint
from api.models import db, User, BasicMode, Glazed, Cakes, Treats, Gifts
from api.utils import generate_sitemap, APIException
from flask_jwt_extended import create_access_token
from flask_jwt_extended import get_jwt_identity
from flask_jwt_extended import jwt_required
from flask_jwt_extended import JWTManager
from flask_sqlalchemy import SQLAlchemy

app = Flask(__name__)
app.url_map.strict_slashes = False
app.config['SQLALCHEMY_DATABASE_URI'] = os.environ.get('DB_CONNECTION_STRING')
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
app.config["JWT_SECRET_KEY"] = "153218879fwfs1saf1a8eafffs_ffasa+fap`+çsçç+7dçfafewr"  
MIGRATE = Migrate(app, db)
db.init_app(app)
CORS(app)
setup_admin(app)
jwt = JWTManager(app)
db = SQLAlchemy(app)

@app.route("/acceso",methods=['GET'])
def all_users():
    people = User.get_all()
    people_dic = []
    for person in people :
        people_dic.append(person.serialize())
    return jsonify(people_dic),200


@app.route("/acceso", methods=['POST'])
def handle_login():

    json=request.get_json()

    if json is None: 
        raise APIException("You shoulld be return a json")

    if "email" not in json:
        raise APIException("That's not an email in json")

    if "password" not in json:
        raise APIException("That's not a password in json")
    
    print(json["email"],json["password"])
   
    email = json["email"]
    password = json["password"]

    user = User.query.filter_by(email=email).one_or_none()

    if user is None:
         raise APIException("User not found")

    if not user.check_password(password):
      return jsonify("Your credentials are wrong, please try again"), 401

    access_token = create_access_token(identity=user.serialize())
    return jsonify(accessToken=access_token)

@app.errorhandler(APIException)
def handle_invalid_usage(error):
    return jsonify(error.to_dict()), error.status_code


@app.route('/')
def sitemap():
    return generate_sitemap(app)

@app.route('/glazed',methods=['GET']) 
def all_glazed():
        glazed = Glazed.get_all()
        glazed_Dic = []
        for item in glazed :
            glazed_Dic.append(item.serialize())
        return jsonify(glazed_Dic) 

@app.route('/glazed',methods=['POST'])
def adding_glazed():
        json = request.get_json()
        print (json)
        glazed = Glazed.set_with_glace(Glazed(),json)
        Glazed.db_post(glazed)
        return jsonify(glazed.serialize())

@app.route("/glazed/<int:glazed_id>", methods=['GET'])
def one_glazed(glazed_id):
        glazed = Glazed.get_one(glazed_id)
        glazed_serialized = glazed.serialized()
        return jsonify(glazed_serialized)

@app.route("/glazed/<int:glazed_id>", methods=["DELETE"])
def glazed_delete(glazed_id):
        glazed = Glazed.query.get(glazed_id)
        Glazed.delete(glazed)
        return jsonify(glazed.serialize())

@app.route('/cakes',methods=['GET']) 
def all_cakes():
    cakes = Cakes.get_all()
    cakes_Dic = []
    for item in Cakes :
        cakes_Dic.append(item.serialize())
    return jsonify(cakes_Dic) 

@app.route('/cakes',methods=['POST'])
def adding_cakes():
    json = request.get_json()
    print (json)
    cakes = Cakes.set_with_cakes(Cakes(),json)
    Cakes.db_post(cakes)
    return jsonify(cakes.serialize())

@app.route("/cakes/<int:cakes_id>", methods=['GET'])
def one_cakes(cakes_id):
    cakes = Cakes.get_one(glazed_id)
    cakes_serialized = cakes.serialized()
    return jsonify(cakes_serialized)

@app.route("/cakes/<int:cakes_id>", methods=["DELETE"])
def cakes_delete(cakes_id):
    cakes = Cakes.query.get(cakes_id)
    cakes.delete(cakes)
    return jsonify(cakes.serialize())

@app.route('/treats',methods=['GET']) 
def all_treats():
    treats = Treats.get_all()
    treats_Dic = []
    for item in treats :
        treats_Dic.append(item.serialize())
    return jsonify(treats_Dic) 

@app.route('/treats',methods=['POST'])
def adding_treats():
    json = request.get_json()
    print (json)
    treats = Treats.set_with_treats(Treats(),json)
    Treats.db_post(treats)
    return jsonify(treats.serialize())

@app.route("/treats/<int:treats_id>", methods=['GET'])
def one_treats(treats_id):
    treats = Treats.get_one(treats_id)
    treats_serialized = treats.serialized()
    return jsonify(treats_serialized)

@app.route("/treats/<int:treats_id>", methods=["DELETE"])
def treats_delete(treats_id):
    treats = Treats.query.get(treats_id)
    Treats.delete(treats)
    return jsonify(treats.serialize())

@app.route('/gifts',methods=['GET']) 
def all_gifts():
    gifts = Gifts.get_all()
    gifts_Dic = []
    for item in gifts :
        gifts_Dic.append(item.serialize())
    return jsonify(gifts_Dic) 

@app.route('/gifts',methods=['POST'])
def adding_gifts():
    json = request.get_json()
    print (json)
    gifts = Gifts.set_with_gifts(Gifts(),json)
    Gifts.db_post(gifts)
    return jsonify(gifts.serialize())

@app.route("/gifts/<int:gifts_id>", methods=['GET'])
def one_gifts(gifts_id):
    gifts = Gifts.get_one(gifts_id)
    gifts_serialized = gifts.serialized()
    return jsonify(gifts_serialized)

@app.route("/gifts/<int:gifts_id>", methods=["DELETE"])
def gifts_delete(gifts_id):
    gifts = Gifts.query.get(gifts_id)
    gifts.delete(gifts)
    return jsonify(gifts.serialize())
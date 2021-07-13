  
from datetime import timedelta

from flask import Flask, request, jsonify, url_for, Blueprint
from flask_jwt_extended import create_access_token, jwt_required, get_jwt_identity, JWTManager
from sqlalchemy import exc
from werkzeug.security import check_password_hash

from api.models import db, User, Products
from api.utils import generate_sitemap, APIException

# ACCESS_EXPIRES = timedelta(hours=1)
# api.config["JWT_SECRET_KEY"] = "super-secret"  # Change this!
# api.config["JWT_ACCESS_TOKEN_EXPIRES"] = ACCESS_EXPIRES
# jwt = JWTManager()

api = Blueprint('api', __name__)

@api.route("/login",methods=['GET'])
def all_users():
    user = User.get_all()
    user_dic = []
    for user in user :
        user_dic.append(user.serialize())
    return jsonify(user_dic),200

@api.route("/login", methods=['POST'])
def handling_login():

    json=request.get_json()
    res = []

    for element in json:
            user = User(name = element.get("name"), last_name = element.get("last_name"), username = element.get("username"), email = element.get("email"), password= element.get("pasword"), adress= element.get("adress"), city= element.get("city"), phone=element.get("phone"))
            res.append(user.serialize())
               
    return jsonify(res)

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
    
# def login():
#     username = request.json.get("username", None)
#     password = request.json.get("password", None)
#     if username != "username" or password != "password":
#         return jsonify({"msg": "Bad username or password"}), 401
#     access_token = create_access_token(identity="user")
#     return jsonify(access_token=access_token)

@api.route("/profile", methods=["GET"])
def handle_profile():
    json = request.get_json()
    token = json["token"]
    user = user.get_with_token(token)
    return jsonify(user.serlialize())

# @api.route('/login/<user_email>', methods=["GET"])
# def get_user_by_email(user_email):
#         user = User.query.get(user_email)
#         print(user_email)
#         user_serialized = user.serialize()
#         return jsonify(user_serialized)



@api.route('/logout', methods=["DELETE"])
def logout():
    jti = get_jwt()["jti"]
    now = datetime.now(timezone.utc)
    db.session.add(TokenBlocklist(jti=jti, created_at=now))
    db.session.commit()
    return jsonify(msg="JWT revoked")


    

@api.route('/products',methods=['GET']) 
def all_products():
        products = Products.get_all()
        products_Dic = []
        for item in products :
            products_Dic.append(item.serialize())
        return jsonify(products_Dic) 

@api.route('/products' ,methods=['POST'])
def adding_product():
        json = request.get_json()
        res = []
        try:
            for element in json:
                products = Products(name = element.get("name"), description = element.get("description"), price= element.get("price"), size= element.get("size"), url_image= element.get("url_image"), category=element.get("category"))
                products.db_post()
                res.append(products.serialize())
        except Exception as inst:
            print(inst)
        
        return jsonify(res)

@api.route('/products/<int:product_id>', methods=['GET'])
def one_product(product_id):
        product = Products.get_by_id(product_id)
        product_serialized = product.serialize()
        return jsonify(product_serialized)

@api.route('/products/<products_category>', methods=['GET'])
def cat_product(products_category):
        product = Products.get_by_category(products_category)
        product_serialized = product.serialize()
        return jsonify(product_serialized)

@api.route('/products/<int:product_id>', methods=["DELETE"])
def product_delete(product_id):
        product = Products.query.get(product_id)
        print(product.id)
        Products.delete(product)
        return jsonify(product.serialize())
   
@api.errorhandler(APIException)
def handle_invalid_usage(error):
    return jsonify(error.to_dict()), error.status_code


@api.route('/')
def sitemap():
    return generate_sitemap(app)
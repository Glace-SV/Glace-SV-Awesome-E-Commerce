import requests
import base64

from datetime import timedelta

from flask import Flask, request, jsonify, url_for, Blueprint
from flask_jwt_extended import create_access_token, jwt_required, get_jwt_identity, JWTManager
from sqlalchemy import exc
from werkzeug.security import check_password_hash, generate_password_hash
from api.models import db, User, Products
from api.utils import generate_sitemap, APIException

api = Blueprint('api', __name__)

@api.route("/login",methods=['GET'])
def all_users():
    user = User.get_all()
    user_dic = []
    for user in user :
        user_dic.append(user.serialize())
    return jsonify(user_dic),200

@api.route("/register", methods=['POST'])
def new_register():

    json=request.get_json()
    
    if json is None: 
        raise APIException("Fail to loging")

    if "email" not in json:
        raise APIException("Fail to loging")

    if "password" not in json:
        raise APIException("Fail to loging")

    pas_encrypted = generate_password_hash(json.get("password"), method='plain', salt_length=1)

    new_user = User (email = json.get("email"), password= pas_encrypted,username= json.get("username"), name= json.get("name"), last_name= json.get("last_name"), adress= json.get("adress"), city= json.get("city"), phone= json.get("phone"), is_active= json.get("is_active"))
    try:
        new_user.db_post()
        return jsonify(new_user.to_dict()), 201

    except exc.IntegrityError:
        
        return {'error': 'Something went wrong'}, 409

    token_user = localStorage.setItem('token')
    
  
@api.route("/login", methods=['POST'])
def handlin_login():
    email = request.json.get('email', None)
    password = request.json.get('password', None)
    if not (email and password):
        return {'error': 'Missing info'}, 400   

    user = User.get_by_email(email)

    if user and check_password_hash(user.password, password) is True:
        token = create_access_token(identity=user.id, expires_delta=timedelta(minutes=100))
        return {'token': token}, 200
    else:
        return {'error': 'Some parameter is wrong'}, 400

    get_token_user=localStorage.getItem('token')


@api.route('/logout', methods=["DELETE"])
def logout():
    delete_token_user=localStorage.removeItem('token')
    return jsonify(msg="Logout successful")


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
def get_all_by_category(products_category):
        products = Products.get_all_by_category(products_category)
        products_Dic = []
        for item in products :
            products_Dic.append(item.serialize())
        return jsonify(products_Dic) 

@api.route('/products/<int:product_id>', methods=["DELETE"])
def product_delete(product_id):
        product = Products.query.get(product_id)
        print(product.id)
        Products.delete(product)
        return jsonify(product.serialize())

@api.route('/eventforms' ,methods=['POST'])
def adding_form():
        body = request.get_json(force=True)
        name = body['name']
        email = body['email']
        phone = body['phone']
        event = body['event']
        pax = body['pax']
        date = body['date']
        
        for data in body:
            body_Dic.append(data.serialize())
            
        return jsonify(res)

       
    
   
@api.route('/payment', methods=['POST'])
def auth_paypal():

    client_id = ""
    client_secret = ""
    credentials = "%s:%s" % (client_id, client_secret)
    encode_credential = base64.b64encode(credentials.encode('utf-8')).decode('utf-8').replace("\n", "")
    
    headers = {
        "Authorization": ("Basic QWMzdXlpR1FjVmRadzJETWVPQVotcldKeDZYdW1QNVRrTXV0Q1RDeFhkQlhjOHV0S2RjdzBwaEZXdTAzNGp3LUZ0anpMN0llUU1xdUpfcGE6RUxQblc0Ykd2M2I4d2JmUDQ2U04zR2hPOVNDMDJTY1N1cHp2bVcxNEdfR0o0THRZWVBWaG1zNE8tbVlPU3dHdnFtSGJ4TUR2ekJTUzNOTFM %s" % encode_credential),
        'Accept': 'application/json'
        }

    param = {
        'grant_type': 'client_credentials',
    }

    url = 'https://api-m.sandbox.paypal.com/v1/oauth2/token'

    r = requests.post(url, headers=headers, data=param)

    print(r.text, "@@@@@@@@")
    return "##"

@api.errorhandler(APIException)
def handle_invalid_usage(error):
    return jsonify(error.to_dict()), error.status_code


@api.route('/')
def sitemap():
    return generate_sitemap(app)
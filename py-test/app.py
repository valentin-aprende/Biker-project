from flask import Flask, request
from flask_cors import CORS
from flasgger import Swagger
from products import (
    get_products,
    get_product_by_id,
    create_product,
    delete_product,
    update_product
)

app = Flask(__name__)
CORS(app)

swagger = Swagger(app)

@app.route("/")
def home():

    return {
        "success": True,
        "message": "Danger API funcionando"
    }

@app.route("/products")
def products():

    return get_products()

@app.route("/products/<int:product_id>")
def product_by_id(product_id):

    return get_product_by_id(product_id)

@app.route("/products", methods=["POST"])
def create_new_product():

    data = request.get_json()

    return create_product(
        data.get("nombre"),
        data.get("descripcion"),
        data.get("imagen")
    )

@app.route(
    "/products/<int:product_id>",
    methods=["DELETE"]
)
def remove_product(product_id):

    return delete_product(product_id)

@app.route(
    "/products/<int:product_id>",
    methods=["PUT"]
)

@app.errorhandler(404)
def not_found(error):

    return {
        "success": False,
        "message": "Endpoint no encontrado"
    }, 404

def edit_product(product_id):

    data = request.get_json()

    return update_product(
        product_id,
        data.get("nombre"),
        data.get("descripcion")
    )




if __name__ == "__main__":

    app.run(
        debug=True
    )
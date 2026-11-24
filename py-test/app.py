from flask import Flask, request
from flask_cors import CORS
from flasgger import Swagger

from products import (
    get_products,
    get_product_by_id,
    create_product,
    update_product,
    delete_product
)

app = Flask(__name__)

CORS(app)

swagger = Swagger(app)


@app.route("/")
def home():
    """
    Endpoint principal
    ---
    tags:
      - Sistema

    responses:
      200:
        description: API funcionando correctamente
    """
    return {
        "success": True,
        "message": "Danger API funcionando"
    }


@app.route("/products")
def products():
    """
    Obtener todos los productos
    ---
    tags:
      - Productos

    responses:
      200:
        description: Lista de productos
    """
    return get_products()


@app.route("/products/<int:product_id>")
def product_by_id(product_id):
    """
    Obtener producto por ID
    ---
    tags:
      - Productos

    parameters:
      - name: product_id
        in: path
        type: integer
        required: true
        description: ID del producto

    responses:
      200:
        description: Producto encontrado

      404:
        description: Producto no encontrado
    """
    return get_product_by_id(product_id)


@app.route("/products", methods=["POST"])
def create_new_product():
    """
    Crear producto
    ---
    tags:
      - Productos

    parameters:
      - in: body
        name: producto
        required: true

        schema:
          type: object

          properties:

            nombre:
              type: string
              example: Casco Veneno

            descripcion:
              type: string
              example: Casco personalizado

            imagen:
              type: string
              example: /assets/images/veneno.jpg

    responses:
      200:
        description: Producto creado correctamente
    """

    data = request.get_json()

    return create_product(
        data.get("nombre"),
        data.get("descripcion"),
        data.get("imagen")
    )


@app.route(
    "/products/<int:product_id>",
    methods=["PUT"]
)
def edit_product(product_id):
    """
    Actualizar producto
    ---
    tags:
      - Productos

    parameters:
      - name: product_id
        in: path
        required: true
        type: integer

      - in: body
        name: producto
        required: true

        schema:
          type: object

          properties:

            nombre:
              type: string

            descripcion:
              type: string

    responses:
      200:
        description: Producto actualizado correctamente
    """

    data = request.get_json()

    return update_product(
        product_id,
        data.get("nombre"),
        data.get("descripcion")
    )


@app.route(
    "/products/<int:product_id>",
    methods=["DELETE"]
)
def remove_product(product_id):
    """
    Eliminar producto
    ---
    tags:
      - Productos

    parameters:
      - name: product_id
        in: path
        required: true
        type: integer

    responses:
      200:
        description: Producto eliminado correctamente
    """
    return delete_product(product_id)


@app.errorhandler(404)
def not_found(error):

    return {
        "success": False,
        "message": "Endpoint no encontrado"
    }, 404


if __name__ == "__main__":

    app.run(
        debug=True
    )
from data_base import get_connection

def get_products():
    connection = None
    cursor = None

    try: 
        connection = get_connection()

        cursor = connection.cursor(dictionary=True)

        cursor.execute(
            "SELECT * FROM products"
        )

        products = cursor.fetchall()

        return {
            "success": True,
            "data": products
        }
    
    except Exception as error:

        return {
            "success": False,
            "message": str(error)
            }

    finally:

        if cursor:
            cursor.close()

        if connection:
            connection.close()

def create_product(
    nombre,
    descripcion,
    imagen
):
    connection = None
    cursor = None

    try:
    
        if not nombre:
            return {
            "success": False,
            "message": "Nombre obligatorio"
}

        if not descripcion:
            return {
                "success": False,
                "message": "Descripción obligatoria"
            }

        if not imagen:
            return {
                "success": False,
                "message": "Imagen obligatoria"
            }

        
        
        connection = get_connection()
        
        cursor = connection.cursor()

        query = """
        INSERT INTO products (
            nombre,
            descripcion,
            imagen
        )
        VALUES (%s, %s, %s)
        """

        values = (
            nombre,
            descripcion,
            imagen
        )

        cursor.execute(
            query,
            values
        )

        connection.commit()

        return{
            "success": True,
            "message": "Producto creado"
        }
    
    except Exception as error:


        return {
            "success": False,
            "message": str(error)
        }

    finally:

        if cursor:
            cursor.close()

        if connection:
            connection.close()



def update_product(
    product_id,
    new_name,
    descripcion
):
    connection = None
    cursor = None

    try:
        connection = get_connection()
        
        cursor = connection.cursor()

        query = """
        UPDATE products
        SET nombre = %s,
            descripcion = %s
        WHERE id = %s
        """

        values = (
            new_name,
            descripcion,
            product_id
        )

        cursor.execute(
            query,
            values
        )

        connection.commit()

        return {
            "success": True,
            "message": "Producto actualizado"
        }
    
    except Exception as error:

        return {
            "success": False,
            "message": str(error)
            }
    
    finally:

        if cursor:
            cursor.close()
        if connection:
            connection.close()

def delete_product(
    product_id
):
    connection = None
    cursor = None

    try:
        connection = get_connection()
        
        cursor = connection.cursor()

        query = """
        DELETE FROM products
        WHERE id = %s
        """

        cursor.execute(
            query,
            (product_id,)
        )

        connection.commit()

        return {
            "success": True,
            "message": "Producto eliminado"
        }
    except Exception as error:

        return {
            "success": False,
            "message": str(error)
        }
    finally:

        if cursor:
            cursor.close()
        if connection:
            connection.close()




def get_product_by_id(product_id):
    connection = None
    cursor = None

    try:


        connection = get_connection()

        cursor = connection.cursor(dictionary=True)

        query = """
        SELECT * FROM products
        WHERE id = %s
        """

        cursor.execute(
            query,
            (product_id,)
            
        )

        product = cursor.fetchone()

        if product is None:

            return {
                "success": False,
                "message": "Producto no encontrado"
            }

        return {
            "success": True,
            "data": product
        }
    
    except Exception as error:

        return {
            "success": False,
            "message": str(error)
        }

    finally:

        if cursor:
            cursor.close()

        if connection:
            connection.close()

if __name__ == "__main__":

    result = get_products()

    if result["success"]:

        for product in result["data"]:
            print(product["nombre"])
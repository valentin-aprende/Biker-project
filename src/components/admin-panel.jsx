import { useContext, useState } from "react";
import axios from "axios";
import { ProductContext } from "../context/product-context.jsx";

function AdminPanel() {

    const {
        products,
        deleteProduct,
        getProducts
    } = useContext(ProductContext);

    const [newProduct, setNewProduct] = useState({
        nombre: "",
        descripcion: "",
        imagen: ""
    });

    const handleAddProduct = async () => {

        if (
            !newProduct.nombre ||
            !newProduct.descripcion ||
            !newProduct.imagen
        ) {
            console.error(
                "El formulario no puede estar vacío"
            );
            alert(
                "El formulario no puede estar vacío"
            );
            return;
        }

        try {

            const response = await axios.post(
                "http://localhost:5000/products",
                newProduct
            );
            await getProducts();

            console.log(
                "Producto creado:",
                response.data
            );

            setNewProduct({
                nombre: "",
                descripcion: "",
                imagen: ""
            });

        } catch (error) {

            console.error(
                "Error al crear producto:",
                error
            );

        }

    };

    const handleChange = (e) => {

        setNewProduct({
            ...newProduct,
            [e.target.name]: e.target.value
        });

    };

    return (
        <>
            <h1>Bienvenido</h1>

            <p>
                Total de productos: {products.length}
            </p>

            {products.map(product => (

                <div key={product._id}>

                    <p>{product.nombre}</p>

                    <button
                        onClick={() =>
                            deleteProduct(product._id)
                        }
                    >
                        Eliminar
                    </button>

                </div>

            ))}

            <form>

                <label>Nombre:</label>
                <input
                    type="text"
                    name="nombre"
                    value={newProduct.nombre}
                    onChange={handleChange}
                />

                <label>Descripción:</label>
                <input
                    type="text"
                    name="descripcion"
                    value={newProduct.descripcion}
                    onChange={handleChange}
                />

                <label>Imagen:</label>
                <input
                    type="text"
                    name="imagen"
                    value={newProduct.imagen}
                    onChange={handleChange}
                />

                <button
                    type="button"
                    onClick={handleAddProduct}
                >
                    Agregar producto
                </button>

            </form>

        </>
    );
}

export default AdminPanel;
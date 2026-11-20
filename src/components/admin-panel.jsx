import { useContext, useState } from "react";
import axios from "axios";
import { ProductContext } from "../context/product-context.jsx";

function AdminPanel() {
    const {
        products,
        deleteProduct,
        getProducts,
        updateProduct,
        loading
    } = useContext(ProductContext);

    const [newProduct, setNewProduct] = useState({
        nombre: "",
        descripcion: "",
        imagen: ""
    });

    const [editingId, setEditingId] = useState(null);

    const [editingName, setEditingName] =
        useState("");

    const [
        editingDescription,
        setEditingDescription
    ] = useState("");

    const [message, setMessage] =
        useState("");

    const [messageType, setMessageType] =
        useState("");

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

            setMessage(
                "Producto creado correctamente"
            );

            setMessageType(
                "success"
            );

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

            setMessageType(
                "error"
            );
        }
    };

    const handleChange = (e) => {
        setNewProduct({
            ...newProduct,
            [e.target.name]: e.target.value
        });
    };

    const handleEditClick = (product) => {
        setEditingId(product.id);

        setEditingName(
            product.nombre
        );

        setEditingDescription(
            product.descripcion
        );
    };

    const handleSaveEdit = async (
        productId
    ) => {
        await updateProduct(
            productId,
            editingName,
            editingDescription
        );

        setEditingId(null);

        setEditingName("");

        setEditingDescription("");
    };

    if (loading) {
        return (
            <h2>
                Cargando productos...
            </h2>
        );
    }

    return (
        <>
            <h1>Bienvenido</h1>

            {message && (

                <div
                    style={{
                        padding: "10px",
                        marginBottom: "10px",
                        backgroundColor:
                            messageType === "success"
                                ? "#d4edda"
                                : "#f8d7da",
                        color:
                            messageType === "success"
                                ? "#155724"
                                : "#721c24"
                    }}
                >
                    {message}
                </div>

            )}

            <p>
                Total de productos:
                {" "}
                {products.length}
            </p>

            {products.map(product => (
                <div key={product.id}>

                    {editingId === product.id ? (
                        <>
                            <input
                                type="text"
                                value={editingName}
                                onChange={(e) =>
                                    setEditingName(
                                        e.target.value
                                    )
                                }
                            />

                            <textarea
                                value={
                                    editingDescription
                                }
                                onChange={(e) =>
                                    setEditingDescription(
                                        e.target.value
                                    )
                                }
                            />
                        </>
                    ) : (
                        <>
                            <p>
                                <strong>
                                    {product.nombre}
                                </strong>
                            </p>

                            <p>
                                {product.descripcion}
                            </p>
                        </>
                    )}

                    <button
                        onClick={() =>
                            deleteProduct(product.id)
                        }
                    >
                        Eliminar
                    </button>


                    {editingId === product.id ? (
                        <>
                            <button
                                onClick={() =>
                                    handleSaveEdit(
                                        product.id
                                    )
                                }
                            >
                                Guardar
                            </button>

                            <button
                                onClick={() => {
                                    setEditingId(
                                        null
                                    );

                                    setEditingName(
                                        ""
                                    );

                                    setEditingDescription(
                                        ""
                                    );
                                }}
                            >
                                Cancelar
                            </button>
                        </>
                    ) : (
                        <button
                            onClick={() =>
                                handleEditClick(
                                    product
                                )
                            }
                        >
                            Editar
                        </button>
                    )}
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
                    value={
                        newProduct.descripcion
                    }
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
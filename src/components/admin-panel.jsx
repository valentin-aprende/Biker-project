import { useContext, useState } from "react";
import axios from "axios";
import styled from "styled-components";
import { ProductContext } from "../context/product-context.jsx";

const Container = styled.div`
    max-width: 1200px;
    margin: 0 auto;
    padding: 2rem;
`;

const Header = styled.div`
    background: linear-gradient(
        135deg,
        #1f2937,
        #111827
    );

    color: white;
    padding: 2rem;
    border-radius: 12px;
    margin-bottom: 2rem;

    box-shadow:
        0 4px 12px rgba(
            0,
            0,
            0,
            0.2
        );
`;

const Title = styled.h1`
    margin: 0;
    color: white;
    font-size: 2.5rem;
    font-weight: 700;
    line-height: 1.2;
`;

const Subtitle = styled.p`
    margin-top: 0.75rem;
    margin-bottom: 0;
    color: #d1d5db;
    font-size: 1rem;
`;

const Message = styled.div`
    padding: 1rem;
    margin-bottom: 1rem;
    border-radius: 8px;
    background: ${({ type }) =>
        type === "success"
            ? "#d4edda"
            : "#f8d7da"};

    color: ${({ type }) =>
        type === "success"
            ? "#155724"
            : "#721c24"};
`;

const SectionTitle = styled.h2`
    margin-top: 2rem;
`;

const FormCard = styled.div`
    background: white;
    padding: 1.5rem;
    border-radius: 12px;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
    margin-bottom: 2rem;
`;

const ProductGrid = styled.div`
    display: grid;
    grid-template-columns:
        repeat(auto-fit, minmax(320px, 1fr));
    gap: 1rem;
`;

const ProductCard = styled.div`
    background: white;
    border-radius: 12px;
    padding: 1rem;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
`;

const StyledInput = styled.input`
    width: 100%;
    padding: 0.75rem;
    margin-bottom: 1rem;
    border: 1px solid #ccc;
    border-radius: 8px;
    box-sizing: border-box;
`;

const StyledTextarea = styled.textarea`
    width: 100%;
    min-height: 100px;
    padding: 0.75rem;
    margin-bottom: 1rem;
    border: 1px solid #ccc;
    border-radius: 8px;
    box-sizing: border-box;
`;

const ButtonGroup = styled.div`
    display: flex;
    gap: 0.5rem;
    margin-top: 1rem;
    flex-wrap: wrap;
`;

const PrimaryButton = styled.button`
    padding: 0.75rem 1rem;
    border: none;
    border-radius: 8px;
    background: #0077ff;
    color: white;
    cursor: pointer;

    &:hover {
        background: #005fcc;
    }
`;

const SecondaryButton = styled.button`
    padding: 0.75rem 1rem;
    border: none;
    border-radius: 8px;
    background: #6c757d;
    color: white;
    cursor: pointer;

    &:hover {
        background: #555d64;
    }
`;

const DangerButton = styled.button`
    padding: 0.75rem 1rem;
    border: none;
    border-radius: 8px;
    background: #dc3545;
    color: white;
    cursor: pointer;

    &:hover {
        background: #b02a37;
    }
`;

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

            setMessage(
                "Todos los campos son obligatorios"
            );

            setMessageType("error");

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

            setMessageType("success");

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

            console.error(error);

            setMessage(
                "Error al crear producto"
            );

            setMessageType("error");
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

        setMessage(
            "Producto actualizado correctamente"
        );

        setMessageType("success");

        setEditingId(null);

        setEditingName("");

        setEditingDescription("");
    };

    if (loading) {

        return (
            <Container>
                <h2>Cargando productos...</h2>
            </Container>
        );
    }

    return (
        <Container>

            <Header>
                <Title>
                    Panel de Administración
                </Title>

                <Subtitle>
                    Total de productos:
                    {" "}
                    {products.length}
                </Subtitle>
            </Header>

            {message && (
                <Message type={messageType}>
                    {message}
                </Message>
            )}

            <SectionTitle>
                Crear nuevo producto
            </SectionTitle>

            <FormCard>

                <StyledInput
                    type="text"
                    name="nombre"
                    placeholder="Nombre"
                    value={newProduct.nombre}
                    onChange={handleChange}
                />

                <StyledInput
                    type="text"
                    name="descripcion"
                    placeholder="Descripción"
                    value={newProduct.descripcion}
                    onChange={handleChange}
                />

                <StyledInput
                    type="text"
                    name="imagen"
                    placeholder="Ruta de imagen"
                    value={newProduct.imagen}
                    onChange={handleChange}
                />

                <PrimaryButton
                    type="button"
                    onClick={handleAddProduct}
                >
                    Agregar producto
                </PrimaryButton>

            </FormCard>

            <SectionTitle>
                Productos existentes
            </SectionTitle>

            <ProductGrid>

                {products.map(product => (

                    <ProductCard
                        key={product.id}
                    >

                        {editingId === product.id ? (

                            <>
                                <StyledInput
                                    value={editingName}
                                    onChange={(e) =>
                                        setEditingName(
                                            e.target.value
                                        )
                                    }
                                />

                                <StyledTextarea
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
                                <h3>
                                    {product.nombre}
                                </h3>

                                <p>
                                    {product.descripcion}
                                </p>
                            </>

                        )}

                        <ButtonGroup>

                            {editingId === product.id ? (

                                <>
                                    <PrimaryButton
                                        onClick={() =>
                                            handleSaveEdit(
                                                product.id
                                            )
                                        }
                                    >
                                        Guardar
                                    </PrimaryButton>

                                    <SecondaryButton
                                        onClick={() => {

                                            setEditingId(null);

                                            setEditingName("");

                                            setEditingDescription("");
                                        }}
                                    >
                                        Cancelar
                                    </SecondaryButton>
                                </>

                            ) : (

                                <PrimaryButton
                                    onClick={() =>
                                        handleEditClick(
                                            product
                                        )
                                    }
                                >
                                    Editar
                                </PrimaryButton>

                            )}

                            <DangerButton
                                onClick={() =>
                                    deleteProduct(
                                        product.id
                                    )
                                }
                            >
                                Eliminar
                            </DangerButton>

                        </ButtonGroup>

                    </ProductCard>

                ))}

            </ProductGrid>

        </Container>
    );
}

export default AdminPanel;
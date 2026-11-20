import { createContext, useState, useEffect } from "react";
import axios from "axios";

export const ProductContext = createContext();

export function ProductProvider({ children }) {

    const [products, setProducts] = useState([]);

    const [loading, setLoading] = useState(false);

    const getProducts = async () => {

        try {

            setLoading(true);

            const response = await axios.get(
                "http://localhost:5000/products"
            );

            setProducts(
                response.data.data
            );

        } catch (error) {

            console.error(
                "Try is not trying hard:",
                error
            );

        } finally {

            setLoading(false);
        }
    };

    useEffect(() => {

        getProducts();

    }, []);

    const deleteProduct = async (id) => {

        const confirmed = window.confirm(
            "¿Seguro que deseas eliminar este producto?"
        );

        if (!confirmed) {
            return;
        }

        try {

            await axios.delete(
                `http://localhost:5000/products/${id}`
            );

            await getProducts();

        } catch (error) {

            console.error(
                "Error al eliminar producto:",
                error
            );
        }
    };

    const updateProduct = async (
        id,
        nombre,
        descripcion
    ) => {

        try {

            const response =
                await axios.put(
                    `http://localhost:5000/products/${id}`,
                    {
                        nombre,
                        descripcion
                    }
                );

            await getProducts();

            return response.data;

        } catch (error) {

            console.error(
                "Error al actualizar producto:",
                error
            );
        }
    };

    return (
        <ProductContext.Provider
            value={{
                products,
                getProducts,
                deleteProduct,
                updateProduct,
                loading
            }}
        >
            {children}
        </ProductContext.Provider>
    );
}
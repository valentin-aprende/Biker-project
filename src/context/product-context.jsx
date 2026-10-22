import { createContext, useState, useEffect } from "react";
import axios from "axios";

export const ProductContext = createContext();

export function ProductProvider({ children }) {
    const [products, setProducts] = useState([]);


    const getProducts = async () => {
        try {
            const response = await axios.get("http://localhost:5000/products"


            );
            setProducts(response.data);
        } catch (error) {
            console.error(
                'Try is not trying hard:', error
            );

        }
    }
    useEffect(() => {
        getProducts();
    }, []);



    const deleteProduct = async (id) => {

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

    console.log(
        "Context",
        products,
        Array.isArray(products)
    );

    return (
        <ProductContext.Provider
            value={{
                products,
                getProducts,
                deleteProduct,
            }}
        >
            {children}
        </ProductContext.Provider>
    );
};
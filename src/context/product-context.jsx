import { createContext, useState, useEffect } from "react";
import axios from "axios";

export const ProductContext = createContext();

export function ProductProvider({ children }) {
    const [products, setProducts] = useState([]);

    useEffect (() => {
        const getProducts = async () => {
            try {
                const response = await axios.get("/assets/products.json"

                );
                setProducts(response.data);
            } catch(error) {
                console.error(
                    'Try is not trying hard:' , error
                );
                
            }
        }
        getProducts();
    }, []); 

    return (
        <ProductContext.Provider
        value={{
            products,
            setProducts,
        }}
        >
          {children}    
        </ProductContext.Provider>
    );
};
import React, { useState, useEffect } from 'react';
import styled from  'styled-components';
import axios from 'axios';
import ProductCard from './product-card.jsx';

const Section= styled.section`
    display: flex;
    flex-direction: row;
    gap: 20px;
    flex-wrap: wrap;
    padding: 20px;
    justify-content: center;
`;  

const Sectiontitle = styled.h2`
    font-size: 1.5rem;
    color: #black;
    text-align: center;
    flex-wrap: wrap;
    margin-bottom: 20px;
`;  


function ProductList() {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        const getProducts = async () => {
            try {
                const response = await axios.get('/assets/products.json');
                setProducts(response.data);

            } catch (error) {
                console.error('Catch isnt catching', error);
            }
        };

        getProducts();
    }, []);


    return (
        <>

            <Sectiontitle id="productos">Nuestros Productos</Sectiontitle>
            <Section>
                {products.map((product) => (
                    <ProductCard
                        key={product.id}
                        id={product.id}
                        image={product.imagen}
                        title={product.nombre}
                        description={product.descripcion}
                        price={product.precio}
                    />
                ))}

            </Section>
        </>
    )
}

  


export default ProductList;
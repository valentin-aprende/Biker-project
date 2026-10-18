import styled from 'styled-components';
import { Link } from "react-router-dom";

const CardLink = styled(Link)`
  text-decoration: none;
  color: inherit;
`;


const ProductCardContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 300px;
    border-radius: 5px;
    background-color: #d70202;
    `;

const CardImage = styled.img`
    width: 100%;
    height: 300px;
    object-fit: cover;
    `;

const ProductTitle = styled.h3`
    font-size: 0.95rem;
    color: white;
    `;

const ProductDescription = styled.p`
    font-size: 0.7rem;
    color: white;
    `;  

const ProductPrice = styled.p`
    font-size: 0.8rem;
    color: white;   
    margin-top: 5px;
    `;

const AddToCartButton = styled.button`
    background-color: #d70202;
    color: white;    
    `;

    function ProductCard({ id, image, title, description, price }) {
        return (
            <>
                <CardLink to={`/producto/${id}`}>  
                    <ProductCardContainer>
                        <CardImage src={image} alt={title} />
                        <ProductTitle>{title}</ProductTitle>
                        <ProductDescription>{description}</ProductDescription>
                        <ProductPrice>${price}</ProductPrice>
                                   
                    </ProductCardContainer>
                </CardLink>    
            </>
        );
    }

    export default ProductCard;
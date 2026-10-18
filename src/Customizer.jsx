import { useContext } from 'react';
import { useState, useEffect } from 'react';
import { ProductContext } from './context/product-context.jsx'
import styled from 'styled-components';
import { useParams } from 'react-router-dom';
import axios from 'axios';


const Main = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    `;
const ImageSection = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
    img {
    width: 300px;
    height: 300px;
    object-fit: cover;
    }
    `;

const ImageTitle =   styled.h2`
    display: flex;
    align-items: center;
    justify-content: start;
    font-weigth: bold;
    color: black;
`;

const FormContainer= styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: start;
    color: black;
`;

const Form= styled.form`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    color: white;
    label {
    color: black;
    padding: 5px;}

    option {
    margin: 5px;}
`;

const Button= styled.button`
    margin: 10px;
`;    


function Customizer(){

  const { id } = useParams();

  const { products } = useContext(ProductContext);

  const product = products.find(
    p => p.id === (id)
  ); 
  const [formData, setFormData] = useState({
    nombre: '',
    medida: '',
    color: '',
  });

  

 const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

const handleSubmit = (e) => {
    e.preventDefault();

    const mensaje = `
Hola, me interesa personalizar el siguiente producto:
Producto: ${product.nombre}
Nombre o apodo: ${formData.nombre}
Medida: ${formData.medida}
Color de fondo: ${formData.color}
`;

const telefono = '5213331797643'; 

    const url = `https://wa.me/${telefono}?text=${encodeURIComponent(
      mensaje
    )}`;

    window.open(url, '_blank');
  };

if (!product) {
  return <h2>Cargando producto...</h2>;
}

    return(
        <>
        <Main>
            <ImageSection>
                <ImageTitle>Personalizando {product.nombre}</ImageTitle>
                <img src={product.imagen} alt={product.nombre}/>
            </ImageSection>    
            <FormContainer>
                <h2>Opciones de personalización</h2>
                <Form onSubmit={handleSubmit}>
                    <label htmlFor="nombre">Tu nombre/apodo:</label>
                    <input 
                    id="nombre" 
                    name="nombre"
                    value={formData.nombre}
                    onChange={handleChange}/>

                    <label htmlFor="medida">Medida:</label>
                    <select 
                    id="medida"
                    name="medida"
                    value={formData.medida}
                    onChange={handleChange}
                    required
                    >
                        <option value="">Medidas disponibles</option>
                        <option value="XL">XL</option>
                        <option value="L">L</option>
                        <option value="M">M</option>
                        <option value="CH">CH</option>
                    </select>    
                        
                    <label htmlFor="color">Color de fondo:</label>    
                    <select 
                    id="color" 
                    name="color"
                    value={formData.color}
                    onChange={handleChange}
                    required
                    >
                        <option value="">Colores disponibles</option>
                        <option value="rojo">Rojo</option>
                        <option value="negro">Negro</option>
                        <option value="blanco">Blanco</option>
                    </select>

                    <Button>Solicitar información</Button>
                </Form>
            </FormContainer>
        </Main>
        </>

    )
}

export default Customizer;
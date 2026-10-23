import styled from "styled-components";
import Image from '../assets/sample.jfif'

const Sectiontitle = styled.h2`
    font-size: 1.5rem;
    color: #black;
    text-align: center;
    flex-wrap: wrap;
    margin-bottom: 20px;
`;  

const ServicesSection = styled.section`
    display: flex;
    flex-direction: row;
    gap: 20px;
    flex-wrap: wrap;
    padding: 20px;
    justify-content: center;
`;  

const ServicesCard = styled.div`
display: flex;
    flex-direction: column;
    align-items: center;
    width: 450px;
    border-radius: 5px;
    background-color: #d70202;
    `;

const CardImage = styled.img`
    width: 100%;
    height: 300px;
    object-fit: cover;
    `;

const ServicesTitle = styled.h3`
    font-size: 0.95rem;
    color: white;
    `;    
    
const ServiceDescription = styled.p`    
    font-size: 0.7rem;
    color: white;
    `;

const GoToServiceButton = styled.a`
    background-color: #d70202;
    color: white;
    margin-top: 5px;
    display: inline-block;
    padding: 10px 20px;
    text-decoration: none;
    border-radius: 5px;
    border: 1px solid white;
    margin-bottom: 5px;
    cursor: pointer;
    &:hover{
    color: black;
    border-color: black;
    }  
    `;
    
    function Services() {
        return (
            <>
            <Sectiontitle id="servicios">Servicios</Sectiontitle>
            <ServicesSection>
                <ServicesCard>
                    <CardImage src={Image} alt="Pintura" />
                    <ServicesTitle>Pintura</ServicesTitle>
                    <ServiceDescription>Servicio de pintura profesional a un costo accesible para motos de baja cilindrada.</ServiceDescription>
                    <GoToServiceButton href="https://wa.me/p/29378398208420071/5213338223494" target="blank" rel="noreferrer noopener">Consultar con experto</GoToServiceButton>
                </ServicesCard>
                <ServicesCard>
                    <CardImage src={Image} alt="Plásticos y laminado" />
                    <ServicesTitle>Plásticos y laminado</ServicesTitle>
                    <ServiceDescription>Servicio de reparación y reemplazo de piezas de plástico y laminado para motos. Nos especializamos en bajas cilindradas.</ServiceDescription>
                    <GoToServiceButton href="https://wa.me/p/39467142052931945/5213338223494" target="_blank" rel="noreferrer noopener">Consultar con experto</GoToServiceButton>
                </ServicesCard>
                <ServicesCard>
                    <CardImage src={Image} alt="Mecánica General" />
                    <ServicesTitle>Mecánica General</ServicesTitle>
                    <ServiceDescription>Mecánica profesional para motos de alta y baja cilindrada. Respaldada por certificaiones profesionales y años de experiencia en el mercado.</ServiceDescription>
                    <GoToServiceButton href="https://wa.me/p/39184709261177002/5213338223494" target="_blank" rel="noreferrer noopener" alt="mecánica general">Consultar con experto</GoToServiceButton>
                </ServicesCard>
            </ServicesSection>
            </>
        );
    }

export default Services;    
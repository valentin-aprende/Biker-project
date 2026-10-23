import styled from 'styled-components';

const FooterContainer = styled.footer`
    display: flex;  
    flex-wrap: wrap;
    flex-direction: row;
    align-items: center;
    justify-content: space-around;
    background-color: #000000;
    maring-top: 5px;
    marging-bottom: 5px;
    width: 100%;
    height: 300px;
    margin-top: 20px;
    
`;

const MapContainer = styled.div`
    display: flex;
    max-width: 300px;
    height: 200px; 
    justify-content: center;
    align-items: center;
    `;

const FooterText = styled.div`
    display: flex;
    text-align: center;
    align-items: center;
    justify-content: center;
    font-size: 0.8rem;
    color: white;
`;

const FooterContact = styled.div`
    display: flex;
    text-align: center;
    align-items: center;
    justify-content: flex-start;
    font-size: 0.8rem;
    color: white;
    list-style-type: none;
     ul {
        list-style-type: none; 
        padding: 0;
    }
    
    a {
        color: white; 
    }

`;  


function Footer() {
    return (
        <FooterContainer>
            <MapContainer>
                <iframe 
                    title="Ubicación de Dangerous 27"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d11973.704454272514!2d-103.36227649232153!3d20.573896155755786!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x842f53d64eb05d23%3A0x54f2fadffad21bc9!2sDANGEROUS%2027!5e0!3m2!1ses-419!2smx!4v1791945467529!5m2!1ses-419!2smx" 
                    width="100%" 
                    height="100%" 
                    style={{ border: 0 }} 
                    allowFullScreen="" 
                    loading="lazy" 
                    referrerPolicy="strict-origin-when-cross-origin"
                ></iframe>
            </MapContainer>
            <FooterText>
                <p>© 2026 Dangerous 27.<br></br> Todos los derechos reservados.</p>
            </FooterText>
            <FooterContact>
                <ul>
                    <li><a href="tel:333-179-7643">Teléfono: 333-179-7643</a></li>
                    <li><a href="mailto:info@dangerous27.com">Email: info@dangerous27.com</a></li>
                    <li>Lunes a viernes: 9:00 AM - 5:00 PM </li>
                </ul>
            </FooterContact>
        </FooterContainer>
    );
}

export default Footer;
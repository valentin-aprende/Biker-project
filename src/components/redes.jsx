import styled from "styled-components";
import YT from '../assets/YT.jpg'
import FB from '../assets/FB.png'
import Tiktok from '../assets/Tiktok.png'

const Sectiontitle = styled.h2`
    font-size: 1.5rem;
    color: #black;
    text-align: center;
    flex-wrap: wrap;
    margin-bottom: 20px;
    `;  

const RedesSection = styled.section`
    display: flex;
    flex-direction: row;
    gap: 20px;
    flex-wrap: wrap;
    top-margin: 20px;
    bottom-margin: 20px;
    align-items: center;
    justify-content: center;
    `;

const RedesLink = styled.a`
    text-decoration: none;
    color: white;
    &:hover{
    color: black
    }
`;    

const RedesCard = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    background-color: #d70202;
    width: 300px;
    border-radius: 5px;
    background-color: #black;
    text-decoration: none;
    height: 70px;`;
    
    
const RedesIcon = styled.img` 
    width: 50px;
    height: 50px;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 20px;
    margin-bottom: 10px;
    margin-right: 50px;
    margin-left: 5px;
    `;


function Redes() {
    return (
        <>
        <Sectiontitle id="redes">Nuestras Redes Sociales</Sectiontitle>
        <RedesSection>
            <RedesLink href="https://www.youtube.com/@BikerRiderDangerous28-w7r" target="_blank" rel="noreferrer noopener"><RedesCard>
                <RedesIcon src={YT} alt="YouTube" />
                <h3>YouTube</h3>
            </RedesCard>
            </RedesLink>
            <RedesLink href="https://www.facebook.com/dangeros27/" target="_blank" rel="noreferrer noopener"><RedesCard>
                <RedesIcon src={FB} alt="Facebook" />
                <h3>Facebook</h3>
            </RedesCard>
            </RedesLink>
        
            <RedesLink href="https://www.tiktok.com/@biker.rider2?_r=1&_t=ZS-9Adpo4igGST" target="_blank" rel="noreferrer noopener" alt="Tiktok">
                <RedesCard>
                <RedesIcon src={Tiktok} />
                <h3>Tiktok</h3>
            </RedesCard>
            </RedesLink>            
        </RedesSection>
        </>)};
        
        
export default Redes;
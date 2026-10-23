import styled from "styled-components";
import logo from '../assets/Designer.png';


const Nav = styled.nav`
  display: flex;
  justify-content: space-around;
  align-items: center;
  background-color: #d70202;
  padding: 10px;
  `
const Logo= styled.a`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  
  

  img {
    height: 40px; 
    width: auto;
  }
`;



const Menu = styled.ul`
  display: flex;
  color: white;
  gap: 40px;
  font-weight: bold;
  list-style-type: none;
  color: white;
  
    
    a {
    text-decoration: none; 
    color: inherit; 
     &:hover{
    color: black
    }      
}
`

function Navbar() {
    return (
        <Nav>
            
            <Logo href="/">
                    <img src={logo} alt="Logo" /> 
                  
                </Logo>
            <Menu>
                <li><a href="/#servicios">Servicios</a></li>
                <li><a href="/#productos"> Cascos personalizados</a></li>
                {/*<li><a href="#clases">Clases</a></li>*/}
                <li><a href="/#redes">Redes</a></li>
            </Menu>
        </Nav>
    )
}

export default Navbar;
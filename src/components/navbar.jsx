import styled from "styled-components";
import logo from '../assets/Designer.png';


const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #d70202;
  padding: 10px;
  `
const Logo= styled.a`
  display: flex;
  align-items: center;
  margin-right: auto;
  

  img {
    height: 40px; 
    width: auto;
  }
`;



const Menu = styled.ul`
  display: flex;
  justify-content: space-around;
  color: white;
  gap: 20px;
  font-weight: bold;
  list-style-type: none;
    
    a {
    text-decoration: none; 
    color: white;       
}
`

function Navbar() {
    return (
        <Nav>
            
            <Menu>
                <li> 
                <Logo href="/">
                    <img src={logo} alt="Logo" /> 
                  
                </Logo>
                </li>
                <li><a href="/#servicios">Servicios</a></li>
                <li><a href="/#productos"> Cascos personalizados</a></li>
                {/*<li><a href="#clases">Clases</a></li>*/}
                <li><a href="/#redes">Redes</a></li>
            </Menu>
        </Nav>
    )
}

export default Navbar;
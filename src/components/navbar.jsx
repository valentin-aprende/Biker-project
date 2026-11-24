import styled from "styled-components";
import logo from "../assets/Designer.png";
import { Link } from "react-router-dom";
import WeatherMiniWidget from "./WeatherWidget.jsx";

const Nav = styled.nav`
    width: 100%;
    box-sizing: border-box;

    display: flex;
    align-items: center;

    background-color: #d70202;

    padding: 10px 20px;
`;

const Logo = styled(Link)`
    flex-shrink: 0;

    display: flex;
    align-items: center;

    img {
        height: 40px;
        width: auto;
    }
`;

const Menu = styled.ul`
    display: flex;
    align-items: center;

    gap: 20px;

    margin: 0 20px;

    padding: 0;

    list-style: none;

    a {
        text-decoration: none;
        color: white;
        font-weight: bold;
        white-space: nowrap;
    }
`;

const Spacer = styled.div`
    flex: 1;
`;

function Navbar() {

    return (
        <Nav>

            <Logo to="/">
                <img
                    src={logo}
                    alt="Logo"
                />
            </Logo>

            <Menu>

                <li>
                    <a href="/#servicios">
                        Servicios
                    </a>
                </li>

                <li>
                    <a href="/#productos">
                        Cascos personalizados
                    </a>
                </li>

                <li>
                    <a href="/#redes">
                        Redes
                    </a>
                </li>

            </Menu>

            <Spacer />

            <WeatherMiniWidget />

        </Nav>
    );
}

export default Navbar;

import styled from "styled-components";
import heroImage from '../assets/principal.jfif'


const Heroimg = styled.div`
  display: flex;
  flex-wrap: wrap;
  height: 100vh;
  width: 100%;
  img {
    height: 100%;
    width: 100%;
    object-fit: cover;
    object-position: center;
  }
}`

function Hero() {
    return (
        <Heroimg> <img src={heroImage} alt="Hero" />
        </Heroimg>
    )
}

export default Hero;
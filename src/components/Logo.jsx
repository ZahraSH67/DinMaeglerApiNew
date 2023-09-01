import styled from "styled-components";
import Img from "../assets/logo.png"

const StyledLogo = styled.img`
    width: 296px;
    height: 49px;

`;

const Logo = () => {
    return(
        <StyledLogo src={Img} />
    )
   
};
export default Logo;
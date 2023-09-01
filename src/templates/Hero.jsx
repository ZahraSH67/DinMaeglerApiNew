import styled from "styled-components";
import SearchBox from "../components/SearchBox";
import Img from "../assets/hero.jpg"


const StyledHero = styled.section`
    background-image: url(${Img});
    background-repeat: none;
    background-position: center;
    // opacity: 0.75;
    // background: rgba(127,113,120,0.5);
    width: 100%;
    height: 850px;
    display: flex;
    justify-content: center;
    align-items: center;
`

const Hero = () =>{
    return(
        <StyledHero>
            <SearchBox />
        </StyledHero>
    )
}
export default Hero;
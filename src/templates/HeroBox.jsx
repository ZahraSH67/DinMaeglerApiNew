import styled from "styled-components";

import SearchBox from "../components/SearchBox";


const StyledSection = styled.section`
    display: flex; 
    flex-direction: column;
    justify-content: center;
    align-items: center;
`
const StyledHeader= styled.h2`
    color: white;
    font-size: 30px;
    font-weight: bold;
`
const StyledDiv = styled.div`
    width: 920px;
    height: 202px;
    background-color: white;
    padding-left: 20px;
`
const StyledH6 = styled.h6`
    font-size: 15px;
`


const HeroBox = () => {
    return(
        <StyledSection>
            <StyledHeader>Søg efter din drømmebolig</StyledHeader>
           
            <StyledDiv>
                <StyledH6>Søg blandt 158 boliger til salg i 74 butikker </StyledH6>
                <p>Hvad skal din næste bolig indeholde</p>
                <SearchBox />
            </StyledDiv>

        </StyledSection>
    )
}
export default HeroBox;
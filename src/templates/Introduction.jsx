import IntroductionFirstPart from "../components/IntroductionFirstPart";
import IntroPicture from "../components/IntroPicture";
import IntroductionSecondPart from "../components/IntroductionSecondPart";
import styled from "styled-components";


const StyledSection = styled.section`
    // border: 20px solid green;
    display:flex;
    flex-direction:column;
    justify-content:center;
    align-items: flex-start;
`
const StyledFirstDiv = styled.div`
    display: flex;
    flex-direction: row;
`


const Introduction = () =>{
    return(
        <StyledSection className="StyledSection">
            <StyledFirstDiv>
                <IntroPicture className="IntroPicture" />
                <IntroductionFirstPart className="IntroductionFirstPart"/>
            </StyledFirstDiv>
         
            <IntroductionSecondPart className="IntroductionSecondPart" />
        </StyledSection>   
    )
}
export default Introduction
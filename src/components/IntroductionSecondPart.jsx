import styled from "styled-components";
import {TbHomeHand} from "react-icons/tb";
import {FaHandHolding} from "react-icons/fa";
import {HiLocationMarker} from "react-icons/hi";


const StyledTbHomeHand = styled(TbHomeHand)`
    width: 36px;
    height: 36px;
`
const StyledHiLocationMarker = styled(HiLocationMarker)`
    width: 36px;
    height: 36px;
`
const StyledFaHandHolding = styled(FaHandHolding)`
    width: 36px;
    height: 36px;
    
`

const StyledBigDiv = styled.div`
   
    display: flex;
    flex-direction: row;
  
    align-items: center;
    // gap: 60px;
`
const StyledSection = styled.section`
    width: 350px;
    height: 138px;
    // border: 1px solid green;
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: space-between;
`
const StyledLittleDiv = styled.div`
// border: 1px solid red;
    width: 90%;
    padding: 0 0 0 10px;
`


const IntroductionSecondPart = () =>{
    return(
        <StyledBigDiv>

            <StyledSection>
                <StyledTbHomeHand />
                <StyledLittleDiv>
                    <h5 className="title">Bestil et salgstjek</h5>
                    <p className="text">Med et Din Mægler Salgstjek <br/> bliver du 
                        opdateret på værdien<br/> af din bolig.</p>
                </StyledLittleDiv>
            </StyledSection>

            <StyledSection>
                <StyledHiLocationMarker />
                <StyledLittleDiv>
                    <h5 className="title">74 butikker</h5>
                    <p className="text">Hos Din Mægler er din bolig <br/>til 
                        salg i alle vores 74 butikker, som<br/> er 
                        fordelt rundt om i Danmark.</p>
                </StyledLittleDiv>
            </StyledSection>

            <StyledSection>
                <StyledFaHandHolding />
                <StyledLittleDiv>
                    <h5 className="title">Tilmeld køberkartotek</h5>
                    <p className="text">Når du er tilmeldt vores<br/> køberkartotek, 
                        bliver du kontaktet<br/> inden en ny bolig 
                        bliver annonceret.</p>
                </StyledLittleDiv>
               
            </StyledSection>
        </StyledBigDiv>
    )
}

export default IntroductionSecondPart;

import styled from "styled-components";
import {FiPhone} from "react-icons/fi";
import {SiTelegram} from "react-icons/si";
import {GoLocation} from "react-icons/go";

const StyledBigDiv = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
    // border: 1px solid red;
    border: 1px solid #D3DEE8;
    width: 445px;
    height: 710px;
`
const StyledLittleDiv = styled.div`
    border-bottom: 1px solid #D3DEE8;
    
`
const StyledFiPhone = styled(FiPhone)``
const StyledSiTelegram = styled(SiTelegram)``
const StyledGoLocation = styled(GoLocation)``


const ContactBox = () => {
    return(
        <StyledBigDiv>
            <StyledLittleDiv>
                <StyledFiPhone />
                <p>Ring til os</p>
                <p>++45 7070 4000</p>
            </StyledLittleDiv>
            <StyledLittleDiv>
                <StyledSiTelegram />
                <p>send en mail</p>
                <p>4000@dinmaegler.dk</p>
            </StyledLittleDiv>
            <StyledLittleDiv>
                <StyledGoLocation />
                <p>Besøg butikken</p>
                <p>Stændertorvet 78,<br/>
                    4000 Roskilde</p>
            </StyledLittleDiv>
        </StyledBigDiv>
    )
}
export default ContactBox;
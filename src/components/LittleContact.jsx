import { BiLogoTelegram } from "react-icons/bi";
import {BiPhone} from "react-icons/bi";
import styled from "styled-components";

const StyledLittleContact = styled.div`
    // border: 1px solid red;
    width: 385px;
    display: flex;
    align-items: center;
    justify-content: center;
`
const StyledDiv1 = styled.div`
    width: 218px;
    height: 30px;
    display: flex;
    align-items: center;

`
const StyledDiv2 = styled.div`
    width: 151px;
    height: 30px;
    display: flex;
    align-items: center;
`
const StyledBiLogoTelegram = styled(BiLogoTelegram)`
// background-color: white;
color: white;
// font-color: white;
`
const StyledBiPhone = styled(BiPhone)`
    color: white;
`

const LittleContact = () => {
    return(
        <StyledLittleContact >

            <StyledDiv1>
                <StyledBiLogoTelegram />
                <a href="mailto:4000@dinmaegler.com" className="icon">4000@dinmaegler.com</a>
            </StyledDiv1>

            <StyledDiv2>
                <StyledBiPhone />
                <a href="tel:+45 7070 4000" className="icon">+45 7070 4000</a>
            </StyledDiv2>

        </StyledLittleContact>
    )
}

export default LittleContact;
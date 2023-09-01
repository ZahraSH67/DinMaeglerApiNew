import styled from "styled-components";
import CircleButton from "./CircleButton";
import {FiPhoneCall} from "react-icons/fi";
import {PiTelegramLogoLight} from "react-icons/pi";
import {GoLocation} from "react-icons/go";


const StyledMainWrap = styled.div`
    display: flex;
    flex-direction: column;
    // justify-content: 
    align-items: flex-start;

`
const StyledBigWrap = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
    // border: 1px solid red;
`

const StyledLittleWrap = styled.div`
    margin-left: 10px;
`


const Address = (props) => {
    return(
        <StyledMainWrap>
              <StyledBigWrap>
                <CircleButton picture={<FiPhoneCall color="FFFFFF"/>} />
                <StyledLittleWrap>
                    <p>Ring til os</p>
                    <p>+45 7070 4000</p>
                </StyledLittleWrap>
            </StyledBigWrap>

            <StyledBigWrap>
                <CircleButton picture={<PiTelegramLogoLight color="FFFFFF"/>}/>
                <StyledLittleWrap>
                    <p>Send en mail</p>
                    <p>4000@dinmaegler.com</p>
                </StyledLittleWrap>
            </StyledBigWrap>


            <StyledBigWrap>
            <CircleButton picture={<GoLocation color="FFFFFF"/>} />  
                <StyledLittleWrap>
                    <p>Butik</p>
                    <p>Stændertorvet 78, 4000 Roskilde</p>
                </StyledLittleWrap>
            </StyledBigWrap>
            
        </StyledMainWrap>
      
    )
}
export default Address;

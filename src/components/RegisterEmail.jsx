import styled from "styled-components";
import Img from "../assets/giant-building.png"
import {AiOutlineArrowRight} from "react-icons/ai"


const StyledDiv = styled.div`
    width: 100%;
    height: 284px;
    position: relative;
    overflow: hidden;

    z-index: 1;
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    align-items: center;

`
const StyledBigDiv = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-image: url(${Img});
    background-size: cover;
    opacity: 0.6; 
    z-index: -1;
`
const StyledLittleDiv = styled.div`
    // position: relative;
    // z-index: 1;
    // display: flex;
    // flex-direction: row;
    // justify-content: space-evenly;
    // align-items: center;
`

const StyledAiOutlineArrowRight = styled(AiOutlineArrowRight)`
    color: #162A41;
    width: 29px;
    height: 20px;
    background-color: white;
`



const RegisterEmail = () =>{
    return(
        <StyledDiv>
            <StyledBigDiv className="background-image"></StyledBigDiv>
            {/* <StyledLittleDiv> */}
                <h4 className="email-title">Tilmeld dig vores nyhedsbrev og <br/>
                hold dig opdateret på boligmarkedet</h4>
                <div className="email-box">
                    
                    <input type="email" name="email" id="email" placeholder="Indtast din email adresse"/>
                    <button className="emailButton"><StyledAiOutlineArrowRight /></button>
                    
                </div>
            {/* </StyledLittleDiv> */}
            
          
           
        </StyledDiv>
    )
    
}

export default RegisterEmail;
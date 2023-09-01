import styled from "styled-components";
import LittleContact from "../components/LittleContact";
import Login from "../components/Login";

const StyledDiv = styled.div`
    display: flex;
    flex-direction: row;
    justify-content:space-around;
    align-items: center;
    background-color: #162A41;
    // width: 1920px;
    // height: 76px;
`


const FirstHeader = () =>{
    return(
        <StyledDiv>
            <LittleContact />
            <Login />
        </StyledDiv>
    )
}

export default FirstHeader;
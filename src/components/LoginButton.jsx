import styled from "styled-components";
import {AiOutlineUser} from "react-icons/ai";
import { Link } from 'react-router-dom';

const StyledIcon = styled(AiOutlineUser)`
    color: white;
`
const StyledButton = styled.button`
    color: white;
    background-color: #162A41;
    border: none;
`

const StyledDiv = styled.div``


const LoginButton = () =>{
    return(
        <Link to="/loginview"> 
             <StyledDiv>
            <StyledIcon />
            <StyledButton>Log ind</StyledButton>
            </StyledDiv>

        </Link>
       
    )
}
export default LoginButton
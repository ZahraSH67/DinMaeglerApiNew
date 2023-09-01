import styled from "styled-components";
import {AiOutlineUser} from "react-icons/ai";

const StyledIcon = styled(AiOutlineUser)`
    color: white;
`
const StyledButton = styled.button`
    color: white;
    background-color: #162A41;
    border: none;
`

const StyledDiv = styled.div``


const Login = () =>{
    return(
        <StyledDiv>
            <StyledIcon />
            <StyledButton>Log ind</StyledButton>
        </StyledDiv>
    )
}
export default Login
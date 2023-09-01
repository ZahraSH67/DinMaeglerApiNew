import styled from "styled-components";

const StyledButton = styled.button`
width: 194px;
height: 62px;
background-color: #162A41;
color: white;
`

const MoreButton = (props) =>{
    return(
        <StyledButton>{props.title}</StyledButton>
    )
}
export default MoreButton;
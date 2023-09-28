import styled from "styled-components";



const StyledButton = styled.button`
    border: none;
    background-color: white;
    cursor: pointer;

`

const NavigationElement = (props) =>{
    return(
        <StyledButton>{props.title}</StyledButton>
    )
    
    
}
export default NavigationElement;
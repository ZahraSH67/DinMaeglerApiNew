import styled from "styled-components";



const StyledButton = styled.button`
`

const NavigationElement = (props) =>{
    return(
        <StyledButton>{props.title}</StyledButton>
    )
    
    
}
export default NavigationElement;
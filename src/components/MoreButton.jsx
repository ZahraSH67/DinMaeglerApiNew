import styled from "styled-components";

const StyledButton = styled.button`
width: 194px;
height: 62px;
background-color: #162A41;
color: white;
width: ${(props) => props.width}px;
height: ${(props) => props.height}px;
background-color: ${(props) => props.color};
`

const MoreButton = (props) =>{
    // const { title, width, height } = props;
    return(
        <StyledButton width={props.width} height={props.height} color={props.color}>{props.title}</StyledButton>
    )
}
export default MoreButton;
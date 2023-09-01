import styled from "styled-components";



const StyledIcon = styled.button`

    width: 40px;
    height: 40px;
    color: #5533EA;
    border: 1px solid white;
    border-radius: 50%;
    padding: 4px 6px;
    font-size: 20px;
    background-color: #162A41;
    // box-shadow:  5px 5px 10px #a6a3a3,
    //          -5px -5px 10px #ffffff;


    color: ${(props) => props.color};
    // width: ${(props) => props.width}px;
    // height: ${(props) => props.height}px;
    // border-radius: ${(props) => props.radius};


   
   
`
const CircleButton = (props) => {
    return ( 
        <StyledIcon>{props.picture}</StyledIcon>
     );
}
 
export default CircleButton;
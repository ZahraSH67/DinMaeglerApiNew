import styled from "styled-components";
import Img from "../assets/cover.png"

const StyledDiv = styled.div`
    width: 100%;
    height: 219.43px;
    background-image: url(${Img});
    background-repeat: no-repeat;
    background-position: center;
    display: flex;
    justify-content: center;
    align-items: center;
    color: white;
    font-size: 30px;
`

const TitleOfPage = (props) =>{
    return(
        <StyledDiv>
            <h1>{props.title}</h1>
        </StyledDiv>
    )

}
export default TitleOfPage;
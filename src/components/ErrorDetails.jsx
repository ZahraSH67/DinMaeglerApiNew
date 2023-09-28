import styled from "styled-components";
import MoreButton from "./MoreButton"
const StyledBigDiv = styled.div``
const StyledMiddleDiv = styled.div`
    width: 409px;
    height: 200px;
`
const StyledLittleDiv = styled.div`
    width: 432;
    height: 90px;
    background-color: #162A41;
`


const ErrorDetails = () => {
    return(
        <StyledBigDiv>

        <StyledMiddleDiv>
            Hov!
            <StyledLittleDiv />
        </StyledMiddleDiv>
        <h5>Du er havnet på en side som ikke findes! </h5>
        <p>Det er vi kede af! Vi har sendt en besked af sted til vores <br/>internetbureau, og bedt dem se på fejlen.</p>
        <Link to="/home">
            <MoreButton title="Tilbage til forsiden"/>
        </Link>
        </StyledBigDiv>
    )
}
export default ErrorDetails;

import Logo from "../components/Logo";
import Navigation from "../components/Navigation";
import styled from "styled-components";


const StyledNavigationBar = styled.div`
    display: flex;
    flex-direction: row;
    justify-content:space-around;
     align-items: center;
    //  border: 1px solid green;

`


const SecondHeader = () => {
    return(
        <>
        <StyledNavigationBar>
            <Logo />
            <Navigation />
        </StyledNavigationBar>
           
        </>
    )
}

export default SecondHeader;
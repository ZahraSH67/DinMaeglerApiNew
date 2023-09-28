import FirstHeader from "../templates/FirstHeader";
import SecondHeader from "../templates/SecondHeader";
import ErrorBoundary from "../components/ErrorBoundary";
import LoginDetails from "../components/LoginDetails";
import TitleOfPage from "../components/TitleOfPage";
import Footer from "../templates/Footer";
import UnderFooter from "../components/UnderFooter";
import styled from "styled-components";
const StyledDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`

const LogInView = () => {
  return (
    <ErrorBoundary>
      <FirstHeader />
      <SecondHeader />
      <TitleOfPage title="Account Login" />
      <StyledDiv>
  
     
      <LoginDetails />
    
      </StyledDiv>
      <Footer />
      <UnderFooter />
    
    </ErrorBoundary>
  );
};

export default LogInView;

import Lottie from "lottie-react";
import errorLottie from "../assets/lottiefiles/error.json";
import styled from "styled-components";
// import Paragraf from "../components/Paragraf";
import { Link } from "react-router-dom";
// import Heading from "../components/Heading";
// import Button from "../components/Button";

const StyledLottie = styled(Lottie)`
  width: 50vw;
  height: 50vw;
`;

const StyledSection = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 2rem;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 5rem;
`;

const ErrorView = () => {
  return (
    <StyledSection>
     
      {/* <Paragraf
        text="Take the dog for a walk, or..."
        size="12"
        color="828282"
        center={true}
        lineheight="18"
        fam="'Montserrat', sans-serif;"
      /> */}
      <StyledLottie animationData={errorLottie} />
      <Link to="/buildingforsale">
        {/* <Button text="Go back to home" /> */}
      </Link>
    </StyledSection>
  );
};

export default ErrorView;
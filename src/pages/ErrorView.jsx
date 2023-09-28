import Lottie from "lottie-react";
import errorLottie from "../assets/lottiefiles/error.json";
import styled from "styled-components";
// import Paragraf from "../components/Paragraf";
import { Link } from "react-router-dom";
import ErrorDetails from "../components/ErrorDetails";
// import Heading from "../components/Heading";
// import Button from "../components/Button";
import FirstHeader from "../templates/FirstHeader";
import SecondHeader from "../templates/SecondHeader";
import ErrorBoundary from "../components/ErrorBoundary";

// const StyledLottie = styled(Lottie)`
//   width: 50vw;
//   height: 50vw;
// `;

// const StyledSection = styled.section`
//   display: flex;
//   flex-direction: column;
//   align-items: center;
//   padding: 2rem;
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   margin-top: 5rem;
// `;

const ErrorView = () => {
  return (
    <ErrorBoundary>
      <FirstHeader />
      <SecondHeader />
      <ErrorDetails />
    </ErrorBoundary>
  );
};

export default ErrorView;
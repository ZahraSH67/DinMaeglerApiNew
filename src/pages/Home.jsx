import FirstHeader from "../templates/FirstHeader";
import SecondHeader from "../templates/SecondHeader";
import Hero from "../templates/Hero";
import Introduction from "../templates/Introduction";
import ErrorBoundary from "../components/ErrorBoundary";
import SelectBuildings from "../templates/SelectBuildings";
import RegisterEmail from "../components/RegisterEmail";
import Agent from "../templates/Agent";

const Home = () => {
  return (
    <>
      <ErrorBoundary>
        <FirstHeader />
        <SecondHeader />
        <Hero />
        <Introduction />
        <SelectBuildings />
        <RegisterEmail />
        <Agent />
      </ErrorBoundary>
    </>
  );
};
export default Home;

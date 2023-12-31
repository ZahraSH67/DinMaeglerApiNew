import FirstHeader from "../templates/FirstHeader";
import SecondHeader from "../templates/SecondHeader";
import Hero from "../templates/Hero";
import Introduction from "../templates/Introduction";
import ErrorBoundary from "../components/ErrorBoundary";
import SelectBuildings from "../templates/SelectBuildings";
import RegisterEmail from "../components/RegisterEmail";
import Agent from "../templates/Agent";
import AppStore from "../components/AppStore";
import Footer from "../templates/Footer";
import UnderFooter from "../components/UnderFooter";
import BuildingList from "../templates/BuildingList";
// import SearchingFunction from "../templates/SearchingFunction";
const Home = () => {
  return (
    <>
      <ErrorBoundary>
        <FirstHeader />
        <SecondHeader />
        <Hero />
        <Introduction />
       {/* <BuildingList/> */}
       <SelectBuildings />
        <RegisterEmail />
        <Agent />
        <AppStore />
        <Footer />
        <UnderFooter />
      </ErrorBoundary>
    </>
  );
};
export default Home;

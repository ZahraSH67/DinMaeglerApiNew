import BuildingDeatils from "../components/BuildingDetails";
import FirstHeader from "../templates/FirstHeader";
import SecondHeader from "../templates/SecondHeader";
import ErrorBoundary from "../components/ErrorBoundary";
import Footer from "../templates/Footer";
import UnderFooter from "../components/UnderFooter";
// import ResponsibleAgent from "../templates/ResponsibleAgent";
// import { Link } from 'react-router-dom';
// import BuildingDetails from "../components/BuildingDetails";
// import AgentDetails from "../components/AgentDetails";
// import Test from "../components/Test";


const BuildingDetailsView = () => {
  return(
    <ErrorBoundary>
      <FirstHeader />
      <SecondHeader />
      <BuildingDeatils />
      {/* <Test /> */}
      {/* <AgentDetails /> */}
      <Footer />
      <UnderFooter />
      
    </ErrorBoundary>
  )
}
export default BuildingDetailsView





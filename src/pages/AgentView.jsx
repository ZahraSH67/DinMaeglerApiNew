import FirstHeader from "../templates/FirstHeader";
import SecondHeader from "../templates/SecondHeader";
import TitleOfPage from "../components/TitleOfPage";
import AgentList from "../components/AgentList";
import ErrorBoundary from "../components/ErrorBoundary";
import Footer from "../templates/Footer";
import UnderFooter from "../components/UnderFooter";


const AgentView = () => {
    return(
        <ErrorBoundary>
            <FirstHeader />
            <SecondHeader />
            <TitleOfPage title="Medarbejdere i Roskilde" />
            <AgentList />
            <Footer />
            <UnderFooter />
        </ErrorBoundary>
    )
}
export default AgentView;
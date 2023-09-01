import FirstHeader from "../templates/FirstHeader";
import SecondHeader from "../templates/SecondHeader";
import Hero from "../templates/Hero";
import Introduction from "../templates/Introduction";
import ErrorBoundary from "../components/ErrorBoundary";
import SelectBuildings from "../components/SelectBuildings";

const Home = () => {
    return(
        <>
            <ErrorBoundary>
                <FirstHeader />
                <SecondHeader />
                <Hero />
                <Introduction />
                <SelectBuildings />
            </ErrorBoundary>
            
        </>
    )
}
export default Home;
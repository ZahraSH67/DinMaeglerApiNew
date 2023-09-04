import FirstHeader from "../templates/FirstHeader";
import SecondHeader from "../templates/SecondHeader";
import TitleOfPage from "../components/TitleOfPage";
import ErrorBoundary from "../components/ErrorBoundary";
import FavouriteBuildings from "../components/FavoriteOfBuildings";
import Footer from "../templates/Footer";
import UnderFooter from "../components/UnderFooter";




const BuildingForSale = () =>{
    return(
    
            <ErrorBoundary>
                <FirstHeader />
                <SecondHeader />
                <TitleOfPage title="Boliger til salg"></TitleOfPage>
                <FavouriteBuildings />
                <Footer />
                <UnderFooter />
            </ErrorBoundary>
    )
}
export default BuildingForSale;
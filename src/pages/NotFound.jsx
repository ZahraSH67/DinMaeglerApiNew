import FirstHeader from "../templates/FirstHeader";
import SecondHeader from "../templates/SecondHeader";
import ErrorBoundary from "../components/ErrorBoundary";

const NotFound = () =>{
    return(
        <ErrorBoundary>
            <FirstHeader />
            <SecondHeader />
        </ErrorBoundary>
    )
}

export default NotFound
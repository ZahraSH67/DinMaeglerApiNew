import FirstHeader from "../templates/FirstHeader";
import SecondHeader from "../templates/SecondHeader";
import TitleOfPage from "../components/TitleOfPage";
import ContactForm from "../components/ContactForm";
import Footer from "../templates/Footer";
import UnderFooter from "../components/UnderFooter";
import ErrorBoundary from "../components/ErrorBoundary";


const ContactUs = () => {
    return(
        <ErrorBoundary>
            <FirstHeader />
            <SecondHeader />
            <TitleOfPage title="Kontakt OS" />
            {/* <AgentDetails /> */}
            <ContactForm />
            
            <Footer />
            <UnderFooter />
        </ErrorBoundary>
    )
}
export default ContactUs;
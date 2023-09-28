import FirstHeader from "../templates/FirstHeader";
import SecondHeader from "../templates/SecondHeader";
import RegistrationDetails from "../components/RegisterationDetails";
import ErrorBoundary from "../components/ErrorBoundary";
import Footer from "../templates/Footer";
import UnderFooter from "../components/UnderFooter";
import TitleOfPage from "../components/TitleOfPage";
import styled from "styled-components";
const StyledDiv = styled.div`
display: flex;
flex-direction: column;
align-items: center;
`

const RegistrationPage = () => {
    return(
        <ErrorBoundary>
            <FirstHeader />
            <SecondHeader />
            <TitleOfPage title="Account Register"/>
            <StyledDiv>
                <RegistrationDetails />
            </StyledDiv>
           
            <Footer />
            <UnderFooter />
        </ErrorBoundary>
    )
}
export default RegistrationPage;


// App.js
// import React, { useState } from 'react';
// // import { Switch } from 'react-router-dom';
// import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
// import Home from "./Home";
// import LogInView from "./LogInView";
// // import RegistrationDetails from '../components/RegisterationDetails';

// function RegistrationPage() {
//   const [user, setUser] = useState(null);

//   const handleLogin = (userInfo) => {
//     setUser(userInfo);
//   };

//   const handleLogout = () => {
//     setUser(null);
//   };

//   const handleRegister = (userInfo) => {
//     setUser(userInfo);
//   };

//   return (
//     <Router>
//       <Switch>
//         <Route path="/" exact>
//           {user ? (
//             <Home user={user} onLogout={handleLogout} />
//           ) : (
//             <LogInView onLogin={handleLogin} />
//           )}
//         </Route>
//         <Route path="/loginview" component={() => <LogInView onLogin={handleLogin} />} />
//         <Route
//           path="/registerationpage"
//           component={() => <RegistrationPage onRegister={handleRegister} />}
//         />
//       </Switch>
//     </Router>
//   );
// }

// export default RegistrationPage;

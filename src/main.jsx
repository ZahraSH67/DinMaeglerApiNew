// import React from 'react'
// import ReactDOM from 'react-dom/client'
// import App from './App.jsx'
// // import './index.css'

// ReactDOM.createRoot(document.getElementById('root')).render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
// )


import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";

import {
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
  Route,
} from "react-router-dom";

import Home from "./pages/Home.jsx";
import ErrorView from "./pages/ErrorView.jsx";
import BuildingsForSale from "./pages/BuildingsForSale.jsx";
import AgentView from "./pages/AgentView.jsx";
import ContactUs from "./pages/ContactUs.jsx";
import AgentPage from "./pages/AgentPage.jsx";
import BuildingDetailsView from "./pages/BuildingDetailsView.jsx";
import LogInView from "./pages/LogInView.jsx";
import NotFound from "./pages/NotFound.jsx";
import SearchResultsPage from "./pages/SearchResultsPage.jsx";
import RegistrationPage from "./pages/RegistrationPage.jsx";





const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />} errorElement={<ErrorView />}>
      <Route index element={<Home />} />
      <Route path="/buildingsforsale/" element={<BuildingsForSale />} />
      <Route path="/agentview/" element={<AgentView />} />
      <Route path="/agents/:agentId" element={<AgentPage />} />
      <Route path="/contactus/" element={<ContactUs />} />
      <Route path="/buildingdetailsview/:buildingId" element={<BuildingDetailsView />} />
      <Route path="/loginview" element={<LogInView />} />
      <Route path="/notfound" element={<NotFound />} />
      <Route path="/searchresultspage" element={<SearchResultsPage />} />
      <Route path="/registrationpage" element={<RegistrationPage />} />
    </Route>
  )
  
);


ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

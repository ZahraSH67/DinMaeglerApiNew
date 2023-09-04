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
// import ListView from "./pages/ListView.jsx";
import ErrorView from "./pages/ErrorView.jsx";
// import DetailView from "./pages/DetailView.jsx";
import BuildingForSale from "./pages/BuildingsForSale.jsx";
import AgentView from "./pages/AgentView.jsx";
// import BuildingDetailsView, { BuildingDetailsViewLoader } from "./pages/BuildingDetailsView.jsx";



// import Lottie from "lottie-react";

// const router = createBrowserRouter(
//   createRoutesFromElements(
//     <Route path="/" element={<App />} errorElement={<ErrorView />}>
//       <Route index element={<Home />} />
//       <Route path="/buildingforsale/" element={<BuildingForSale />} >
//       {/* <Route index element={<Houses />} loader={housesLoader} /> */}
//         <Route path="/buildingdetailsview/:id" element={<BuildingDetailsView />} />
//       </Route>
//     </Route>
//   )
// );
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />} errorElement={<ErrorView />}>
      <Route index element={<Home />} />
      <Route path="/buildingforsale/" element={<BuildingForSale />} />
      <Route path="/agentview/" element={<AgentView />} />
      
      {/* <Route path="/buildingdetailsview:id" element={< BuildingDetailsView/>} loader={BuildingDetailsViewLoader} /> */}
  
    </Route>
  )
);


ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

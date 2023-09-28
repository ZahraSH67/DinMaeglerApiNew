
// import { useParams } from 'react-router-dom';
// import React, { useEffect } from 'react';

// function AgentPage() {
//   const { agentId } = useParams();

//   // Now you can use agentId to fetch agent data
//   // For example, fetch agent data based on agentId
//   // Replace the following code with your actual API request logic

//   const fetchAgentData = async () => {
//     try {
//       const response = await fetch(`https://dinmaegler.onrender.com/agents/${agentId}`);
//       if (!response.ok) {
//         throw new Error('Agent not found');
//       }
//       const agentData = await response.json();
//       // Now you have the agent data, you can use it as needed
//       console.log('Agent Data:', agentData);
//     } catch (error) {
//       console.error('Error fetching agent data:', error);
//     }
//   };

//   useEffect(() => {
//     // Fetch agent data when the component mounts
//     fetchAgentData();
//   }, [agentId]);

//   return (
//     <div>
//       {/* AgentPage content */}
//       <h2>Agent Details for Agent ID: {agentId}</h2>
//       {/* Render agent details here */}
//     </div>
//   );
// }

// export default AgentPage;


import FirstHeader from "../templates/FirstHeader";
import SecondHeader from "../templates/SecondHeader";
import TitleOfPage from "../components/TitleOfPage";
import AgentDetails from "../components/AgentDetails";
import AgentContactForm from "../components/AgentContactForm";
import ErrorBoundary from "../components/ErrorBoundary";
import Footer from "../templates/Footer";
import UnderFooter from "../components/UnderFooter";

const AgentPage = () => {
  return(
      <ErrorBoundary>
          <FirstHeader />
          <SecondHeader />
          <TitleOfPage title="Kontakt en medarbejder" />
          <AgentDetails />
          <AgentContactForm />
          <Footer />
          <UnderFooter />

      </ErrorBoundary>
  )
}
export default AgentPage;

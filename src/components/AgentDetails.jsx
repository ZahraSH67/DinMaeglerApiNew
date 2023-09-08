// AgentDetails.jsx
// import React from 'react';

// const AgentDetails = ({ agent }) => {
//   return (
//     <div className="agent-details">
//       <h2>{agent.name}</h2>
//       <p>Email: {agent.email}</p>
//       {/* Additional agent details here */}
//     </div>
//   );
// };

// export default AgentDetails;







// import { useParams } from 'react-router-dom';
// // import React, { useEffect } from 'react';
// // import React, { useState } from 'react';
// import React, { useState, useEffect } from 'react';


// function AgentDetails() {
//   const { agentId } = useParams();
//   const [agentData, setAgentData] = useState(null);

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
//     <div className="agent-details-container">
//       <div className="agent-image-container">
//         <img src={agentData.image} alt={`Agent ${agentData.name}`} />
//         <div className="contact-box">
//           <a href={`https://www.instagram.com/${agentData.instagram}`}>Instagram</a>
//           <a href={`https://www.linkedin.com/in/${agentData.linkedin}`}>LinkedIn</a>
//           <a href={`skype:${agentData.skype}?call`}>Skype</a>
//         </div>
//       </div>
//       <div className="agent-info-container">
//         <h2>{agentData.name}</h2>
//         <p>{agentData.jobDescription}</p>
//         <p>Phone: {agentData.phone}</p>
//         <p>Email: {agentData.email}</p>
//         <div className="additional-info">
//           <h3>More Information</h3>
//           <p>{agentData.additionalInfo}</p>
//         </div>
//       </div>
//     </div>
//   );





//   // return (
//   //   <div>
//   //     {/* AgentPage content */}
//   //     {/* <h2>Agent Details for Agent ID: {agentId}</h2> */}
//   //     {/* <img src="" alt="" /> */}
//   //     {/* Render agent details here */}
//   //   </div>
//   // );
// }

// export default AgentDetails;







import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

function AgentDetails() {
  const { agentId } = useParams();
  const [agentData, setAgentData] = useState(null);

  const fetchAgentData = async () => {
    try {
      const response = await fetch(`https://dinmaegler.onrender.com/agents/${agentId}`);
      if (!response.ok) {
        throw new Error('Agent not found');
      }
      const agentData = await response.json();
      setAgentData(agentData); // Set the agent data once it's loaded
    } catch (error) {
      console.error('Error fetching agent data:', error);
    }
  };

  useEffect(() => {
    fetchAgentData();
  }, [agentId]);

  if (agentData === null) {
    // Data is still loading, you can render a loading spinner or message here
    return <div>Loading...</div>;
  }

  // Agent data has loaded, render the agent details
  return (
    <div className="agent-details-container">
      <div className="agent-image-container">
        <img src={agentData.image.url} alt={`Agent ${agentData.name}`} />
        <div className="contact-box">
          <a href={`https://www.instagram.com/${agentData.instagram}`}>Instagram</a>
          <a href={`https://www.linkedin.com/in/${agentData.linkedin}`}>LinkedIn</a>
          <a href={`skype:${agentData.skype}?call`}>Skype</a>
        </div>
      </div>
      <div className="agent-info-container">
        <h2>{agentData.name}</h2>
        <p>{agentData.jobDescription}</p>
        <p>Phone: {agentData.phone}</p>
        <p>Email: {agentData.email}</p>
        <div className="additional-info">
          <h3>om {agentData.name}</h3>
          <p>{agentData.description}</p>
        </div>
      </div>
    </div>
  );
}

export default AgentDetails;

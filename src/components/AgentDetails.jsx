
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import {FaInstagram} from "react-icons/fa";
import {FaLinkedinIn} from "react-icons/fa";
import {SlSocialSkype} from "react-icons/sl";
import {BsFillTelephoneFill} from "react-icons/bs";
import {SiMinutemailer} from "react-icons/si"
import styled from 'styled-components';
const StyledFaInstagram = styled(FaInstagram)`
  color: white;
`
const StyledFaLinkedinIn = styled(FaLinkedinIn)`
  color: white;
`
const StyledSlSocialSkype = styled(SlSocialSkype)`
color: white;
`
const StyledBsFillTelephoneFill = styled(BsFillTelephoneFill)``
const StyledSiMinutemailer = styled(SiMinutemailer)``

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
    <div>
        <div className="agent-details-container">
      <div className="agent-image-container">
        <img src={agentData.image.url} alt={`Agent ${agentData.name}`} />
        <div className="contact-box">
          <a href={`https://www.instagram.com/${agentData.instagram}`}><StyledFaInstagram /></a>
          <a href={`https://www.linkedin.com/in/${agentData.linkedin}`}><StyledFaLinkedinIn /></a>
          <a href={`skype:${agentData.skype}?call`}><StyledSlSocialSkype /></a>
        </div>
      </div>
      <div className="agent-info-container">
        <h2>{agentData.name}</h2>
        <p>{agentData.title}</p>
        <p><StyledBsFillTelephoneFill /> {agentData.phone}</p>
        <p><StyledSiMinutemailer/> {agentData.email}</p>
      </div>
    </div>
    <div className="additional-info">
      <h3>om {agentData.name}</h3>
      <p>{agentData.description}</p>
    </div>
  


</div>
    
  );
}

export default AgentDetails;












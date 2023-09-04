import React, { useState, useEffect } from 'react';
import {HiMail} from "react-icons/hi";
import {BiLogoLinkedin} from "react-icons/bi";

const AgentList = () => {
  const [agents, setAgents] = useState([]);

  useEffect(() => {
    // Fetch agent data from the API
    const fetchAgents = async () => {
      try {
        const response = await fetch('https://dinmaegler.onrender.com/agents');
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const agentData = await response.json();
        setAgents(agentData);
      } catch (error) {
        console.error('Error fetching agent data:', error);
      }
    };

    fetchAgents();
  }, []);

  return (
    <div className='agentPart'>
      {/* <h2>Mød vores engagerede medarbejdere</h2> */}
      <div className='agentWrap'>
        {agents.map((agent) => (
          <div key={agent.id} className='agentCard'>
             <img src={agent.image.url} alt="" />
            <h3>{agent.name}</h3>
            <p>{agent.title}</p>
                <div className='socialMedia'>
                    <HiMail src={agent.emil}/>
                    <BiLogoLinkedin />
                </div> 
          </div>
        ))}
      </div>
    </div>
  );
};

export default AgentList;

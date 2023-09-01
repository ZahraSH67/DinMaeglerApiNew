import React, { useState, useEffect } from 'react';
import {HiMail} from "react-icons/hi";
import {BiLogoLinkedin} from "react-icons/bi";
import MoreButton from '../components/MoreButton';

const Agent = () => {
  const [homes, setHomes] = useState([]);

  const fetchHomes = async () => {
    try {
      const res = await fetch('https://dinmaegler.onrender.com/homes');
      const homesData = await res.json();
      console.log(homesData)
      setHomes(homesData);
    } catch (error) {
      console.error('Error fetching homes:', error);
    }
  };

  useEffect(() => {
    fetchHomes();
  }, []);

  return (
    <div className='agentPart'>
        <h4 >Mød vores engagerede medarbejdere</h4>
        <p>Din Mægler er garant for altid veluddannet assistance i dit boligsalg.</p>
        <p>Kontakt en af vores medarbejdere.</p>
        <div className='agentWrap'>
        {homes.map((home) =>(
            <div key={home.id} className='agentCard'>
                <img src={home.agent.image.url} alt="" />
                <p>{home.agent.name}</p>
                <p>{home.agent.title}</p>
                <div className='socialMedia'>
                    <HiMail src={home.agent.emil}/>
                    <BiLogoLinkedin />
                </div> 
            </div>
        ))}
        </div>
        <MoreButton title="  Se alle mæglere" />
    </div>
  );
};

export default Agent;


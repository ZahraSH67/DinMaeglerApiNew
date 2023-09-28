import React, { useState } from 'react';
import ContactBox from './ContactBox';
import styled from 'styled-components';
import MoreButton from './MoreButton';
import IMG from "../assets/map.png"
const StyledBigDiv = styled.div`
  display: flex;
  flex-direction: row;
  gap: 80px;
`
const StyledMiddleDiv = styled.div`
// display: flex; 
// flex-direction: column;
// justify-content: space-between;
// align-items: center;
width: 635px;
height: 710px; 
border: 1px solid #D3DEE8;
`
const StyledLittleDiv = styled.div`
  display: flex;
`

const StyledImage = styled.img`
  margin-top: 80px;
`
const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    topic: '',
    message: '',
    subscribe: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    const newValue = type === 'checkbox' ? checked : value;

    setFormData({
      ...formData,
      [name]: newValue,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Here, you can implement the logic to send the message
    // You can use formData to access the entered data
    // For example, you can send it to an API or display it in an alert

    alert('Message sent!');
  };

  return (
    <div className="contact-form">
      <h2>Vi sidder klar til at besvare dine spørgsmål</h2>
      <p className='contactEx'>Der kan opstå tvivl om mange ting nå man gerne vil, eller er i gang med at sælge sin bolig. <br/>Vores medarbejdere sider klar alle ugens dage til at svare på dine spørgsmål.</p>
      <StyledBigDiv>

        <StyledMiddleDiv>
        <form onSubmit={handleSubmit}>

<StyledLittleDiv>
<div className="form-group">
    <label htmlFor="name">Navn</label>
    <input
      type="text"
      id="name"
      name="name"
      placeholder='Indtast dit navn'
      value={formData.name}
      onChange={handleChange}
      required
    />
  </div>
  <div className="form-group">
    <label htmlFor="email">Email</label>
    <input
      type="email"
      id="email"
      name="email"
      placeholder='Indtast din email'
      value={formData.email}
      onChange={handleChange}
      required
    />
  </div>
</StyledLittleDiv>
  
  <div className="form-group">
    <label htmlFor="topic">Emne</label>
    <input
      type="text"
      id="topic"
      name="topic"
      placeholder='Indtast emne'
      value={formData.topic}
      onChange={handleChange}
      required
    />
  </div>
  <div className="form-group">
    <label htmlFor="message">Besked</label>
    <textarea
      id="message"
      name="message"
      placeholder='Indtast din besked... '
      value={formData.message}
      onChange={handleChange}
      required
    ></textarea>
  </div>
  <div className="form-group">
    <label>
      <input
        type="checkbox"
        name="subscribe"
        checked={formData.subscribe}
        onChange={handleChange}
      />
      Ja tak, jeg vil gerne modtage Din Mæglers nyhedsbrev.
    </label>
  </div>
  <div className="form-group">
    <MoreButton title="Send besked" />
    {/* <button type="submit"></button> */}
  </div>
</form>


        </StyledMiddleDiv>
      
      <ContactBox />
      </StyledBigDiv>
      <StyledImage src={IMG} alt="" />
    </div>
  );
};

export default ContactForm;

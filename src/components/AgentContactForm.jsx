import React, { useState } from 'react';
import MoreButton from './MoreButton';

function AgentContactForm() {
  // Define state variables to store form input values
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [topic, setTopic] = useState('');
  const [message, setMessage] = useState('');

  // Function to handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    // You can send the form data to your server or perform any desired action here
    // For example, you can use the 'name', 'email', 'topic', and 'message' variables to send the data
    console.log('Form submitted with data:', { name, email, topic, message });

    // Reset the form fields after submission
    setName('');
    setEmail('');
    setTopic('');
    setMessage('');
  };

  return (
    <div className="contact-form">
      <h2>Contact Agent</h2>
      <form onSubmit={handleSubmit} className='contactAgent'>



        <div className='nameEmail'>

        <div className="form-group">
          <label htmlFor="name">Navn</label>
          <input
            type="text"
            id="name"
            name="name"
            placeholder='Indtast navn'
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input 
            type="email"
            id="email"
            name="email"
            placeholder='Indtast email'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        </div>
      


        <div className="form-group">
          <label htmlFor="topic">Emne</label>
          <input
            type="text"
            id="topic"
            name="topic"
            placeholder='Hvad drejer din henvendelse sig om?'
            value={topic}
            onChange={(e) => setTopic(e.target.value)}
            required
          />
        </div>


        <div className="form-group">
          <label htmlFor="message">Besked</label>
          <textarea
            id="message"
            name="message"
            placeholder='Skriv din besked her...'
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            required
          ></textarea>
        </div>


        {/* <button type="submit">Send Message</button> */}
        <MoreButton title="Send besked" width="104" height="30"/>
      </form>
    </div>
  );
}

export default AgentContactForm;


import React, { useState } from 'react';
import styled from 'styled-components';
const StyledDiv = styled.div`
  width: 920px;
  height: 774px;
  border: 1px solid #D3DEE8;
  display: flex; 
  flex-direction: column;

  align-items: center;
  margin: 40px 0;

`

function RegistrationDetails() {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleFullNameChange = (e) => {
    setFullName(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleConfirmPasswordChange = (e) => {
    setConfirmPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Basic password validation: check if passwords match
    if (password !== confirmPassword) {
      alert("Passwords don't match.");
      return;
    }

    // Perform user registration logic here
    const userData = {
      fullName,
      email,
      password,
    };
    console.log('User data:', userData);

    // Reset form fields
    setFullName('');
    setEmail('');
    setPassword('');
    setConfirmPassword('');
  };

  return (
    <StyledDiv>
      <h2>Opret bruger hos Din Mægler</h2>
      <form onSubmit={handleSubmit} className='register-form'>
        <div className='register-input'>
          <label htmlFor="fullName">Fulde navn</label>
          <input className='register-size'
            type="text"
            id="fullName"
            placeholder='Fulde navn'
            value={fullName}
            onChange={handleFullNameChange}
            required
          />
        </div>
        <div className='register-input'>
          <label htmlFor="email">Email Adresse</label>
          <input className='register-size'
            type="email"
            id="email"
            placeholder='Email adresse'
            value={email}
            onChange={handleEmailChange}
            required
          />
        </div>
        <div className='register-input'>
          <label htmlFor="password">Password</label>
          <input className='register-size'
            type="password"
            id="password"
            placeholder='Password'
            value={password}
            onChange={handlePasswordChange}
            required
          />
        </div>
        <div className='register-input'>
          <label htmlFor="confirmPassword">Bekræft password</label>
          <input className='register-size'
            type="password"
            id="confirmPassword"
            placeholder='Bekræft password'
            value={confirmPassword}
            onChange={handleConfirmPasswordChange}
            required
          />
        </div>
        <div>
          <button type="submit" className='register-button'>Opret bruger</button>
        </div>
      </form>
    </StyledDiv>
  );
}

export default RegistrationDetails;












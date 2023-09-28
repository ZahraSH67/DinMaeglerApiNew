// LoginPage.js
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import MoreButton from './MoreButton';
import styled from 'styled-components';
const StyledButtons = styled.div`
  display: flex;
  gap: 10px;

`

function LoginDetails() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [user, setUser] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Perform authentication logic here, and if successful, set the user state
    const userInfo = { name: 'John Doe' }; // Replace with actual user data
    setUser(userInfo);
  };

  return (
    <div className='loginWrap'>
      {user ? (
        <div>
          <h2>Welcome, {user.name}!</h2>
          {/* Redirect to home page after login */}
          <Link to="/">Back to Home</Link>
        </div>
      ) : (
        <div className='loginFirstPart'>
          <h2>Log ind på din konto</h2>
          <form onSubmit={handleSubmit} className='loginForm'>
            <label htmlFor="">Email</label>
            <input
              type="email"
              placeholder="Email"
              id='loginName'
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <label htmlFor="">Password</label>
            <input
              type="password"
              placeholder="Password"
              id='loginEmail'
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <button type="submit" className='loginButton'>Log ind</button>
          </form>


          <div className='loginSecondPart'>
            <p>Log ind med </p>
            <StyledButtons className='login-media'>
              <MoreButton title="Google"  color="red" width="170" height="60"/>
              <MoreButton title="Facebook" color="blue" width="170" height="60" />
              <MoreButton title="Twitter" color="black" width="170" height="60" />
            </StyledButtons>
            <p>Har du ikke en konto? Opret bruger. </p>
          </div>
        </div>
        
      )}
    </div>
  );
}

export default LoginDetails;

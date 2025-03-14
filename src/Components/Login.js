// Code Generated by Sidekick is for learning and experimentation purposes only.
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Login.css'; // Import your CSS file


const Login = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const correctUsername = 'admin';  // replace with your specific username
  const correctPassword = 'password';  // replace with your specific password

  const handleLogin = (e) => {
    e.preventDefault();
    if (username === correctUsername && password === correctPassword) {
      navigate('/home');
    } else {
      alert('Invalid credentials!');
    }
  };

  return (

    <div className="container">
      {/* Left Half */}
      <div className='company-name'>
        Deloitte
        <span className='dot'>.</span>
      </div>
      <div className="left-half">
        <h1>Deloitte Data Migration Accelerator</h1>
      </div>

      {/* Right Half */}
      <div className="right-half">
        <div className="login-container">
          <h3 className='login-heading'>Enter login details</h3>
          <form onSubmit={handleLogin}>
            <input
              type="text"
              placeholder="Username*"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="input-field"
              required
            />
            <input
              type="password"
              placeholder="Password*"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="input-field"
              required
            />
            <button type="submit" className="button">
              Login
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;

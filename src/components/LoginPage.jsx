import React, { useState } from 'react';
import '../LoginPage.css';
import { useNavigate } from 'react-router-dom';
// import useGoogleAnalytics from "../hooks/useGoogleAnalytics";

const LoginPage = ({ onLogin }) => {
  // useGoogleAnalytics();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = () => {
    if (username && password) {
      onLogin();
      navigate('/product');
    } else {
      alert('Please enter username and password.');
    }
  };

  return (
    <div className="container">
      <h1>Login</h1>
      <input type="text" placeholder="Username" onChange={e => setUsername(e.target.value)} />
      <input type="password" placeholder="Password" onChange={e => setPassword(e.target.value)} />
      <button onClick={handleLogin}>Login</button>
    </div>
  );
};

export default LoginPage;
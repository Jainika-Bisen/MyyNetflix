import React, { useState } from 'react';
import '../LoginPage.css';
import { useNavigate } from 'react-router-dom';
import useGoogleAnalytics from "../hooks/useGoogleAnalytics";
import mixpanel from 'mixpanel-browser';

mixpanel.init('43f9c0eccb3559f9470220274efd875f');

  // ✅ Track when user visits the Login Page
  useEffect(() => {
    mixpanel.track('Page View: Login');
  }, []);

const LoginPage = ({ onLogin }) => {
  useGoogleAnalytics();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = () => {
    if (username && password) {
      // ✅ Track login success
      mixpanel.track('Login Success', {
        username: username, // Optional — only if it's not sensitive
      });

      onLogin();
      navigate('/product');
    } else {
      alert('Please enter username and password.');
    }
    if (!username || !password) {
      mixpanel.track('Login Failed', {
    reason: 'Missing credentials',
  });
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
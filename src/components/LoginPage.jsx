import React, { useState, useEffect } from 'react';
import '../LoginPage.css';
import { useNavigate } from 'react-router-dom';
import useGoogleAnalytics from "../hooks/useGoogleAnalytics";
import mixpanel from 'mixpanel-browser';

mixpanel.init('43f9c0eccb3559f9470220274efd875f');

const LoginPage = ({ onLogin }) => {
  useGoogleAnalytics();
   // ✅ Track when user visits the Login Page
  useEffect(() => {
    mixpanel.track('Page View: Login');
  }, []);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  // if (window.thriveStack) {
  // window.thriveStack.track([{
  //   event_name: "Login Page View",
  //   user_id: "18f716ac-37a4-464f-adb7-3cc30032308c",
  //   properties: {
  //     page: "Login Page"
  //   },
  //   timestamp: new Date().toISOString(),
  //   context: {
  //     group_id: "ac8db7ba-5139-4911-ba6e-523fd9c4704b"
  //   }
  // }]);
}

  const handleLogin = () => {
    if (username && password) {
      // ✅ Track login success
      console.log('Hi')
      mixpanel.track('Login Success', {
        username: username, // Optional — only if it's not sensitive
      });

      // window.thriveStack.setUser("{User_Id}", "{User_Email}");
      // window.thriveStack.setGroup("{Group_Id}", "{Group_Domain}", "{Group_Name}");

      onLogin();
      // window.thriveStack.track([{
      //   event_name: "Login Success",
      //   user_id: "18f716ac-37a4-464f-adb7-3cc30032308c",
      //   properties: { username },
      //   timestamp: new Date().toISOString(),
      //   context: { group_id: "ac8db7ba-5139-4911-ba6e-523fd9c4704b" }
      // }]);
      // window.thriveStack.track([{
      // "event_name": "Login Success",
      // "properties": {
      //     "completion_status": "completed",
      //     "user_role": "admin"
      // },
      // "user_id": "18f716ac-37a4-464f-adb7-3cc30032308c",
      // "timestamp": "2025-07-22T05:54:17.093Z",
      // "context": {
      //     "group_id": "ac8db7ba-5139-4911-ba6e-523fd9c4704b"
      // }
    // }]);
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
      <input type="text" placeholder="Email" onChange={e => setUsername(e.target.value)} />
      <input type="password" placeholder="Password" onChange={e => setPassword(e.target.value)} />
      <button onClick={handleLogin}>Login</button>
    </div>
  );
};

export default LoginPage;
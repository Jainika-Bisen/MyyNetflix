import React, { useState } from 'react';
import { Routes, Route, Navigate} from 'react-router-dom';
import MarketingPage from './components/MarketingPage';
import LoginPage from './components/LoginPage';
import ProductPage from './components/ProductPage';
// import useGoogleAnalytics from "./hooks/useGoogleAnalytics";


const App = () => {
    // useGoogleAnalytics();
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  return (
    <Routes>
      <Route path="/" element={<MarketingPage />} />
      <Route path="/login" element={<LoginPage onLogin={() => setIsAuthenticated(true)} />} />
      <Route
        path="/product"
        element={isAuthenticated ? <ProductPage onLogout={() => setIsAuthenticated(false)} /> : <Navigate to="/login" />}
      />
      <Route path="*" element={<h1>404 - Page Not Found</h1>} />
    </Routes>
  );
};

export default App;

import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const useGoogleAnalytics = () => {
  const location = useLocation();

  useEffect(() => {
    if (window.gtag) {
      window.gtag('config', 'G-GD9MEDJXGC', {
        page_path: location.pathname,
      });
    }
  }, [location]);
};

export default useGoogleAnalytics;

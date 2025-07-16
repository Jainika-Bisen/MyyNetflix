// GA not initialized - not working
// import { useEffect } from 'react';
// import { useLocation } from 'react-router-dom';
// // import ReactGA from 'react-ga4';

// const useGoogleAnalytics = () => {
//   const location = useLocation();

//   useEffect(() => {
//     if (window.gtag) {
//       window.gtag('config', 'G-GD9MEDJXGC', {
//         page_path: location.pathname,
//       });
//     }
//   }, [location]);
// };

// export default useGoogleAnalytics;

// GA initialized - working
// import { useEffect } from 'react';
// import { useLocation } from 'react-router-dom';
// import ReactGA from 'react-ga4';

// const useGoogleAnalytics = () => {
//   const location = useLocation();

//   // Initialize GA only once
//   useEffect(() => {
//     ReactGA.initialize('G-GD9MEDJXGC');
//   }, []);

//   // Track page views on route change
//   useEffect(() => {
//     ReactGA.send({ hitType: 'pageview', page: location.pathname });
//   }, [location]);
// };

// export default useGoogleAnalytics;

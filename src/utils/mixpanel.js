import mixpanel from 'mixpanel-browser';

mixpanel.init('43f9c0eccb3559f9470220274efd875f', {
  debug: true, // Set to false in production
  track_pageview: true,
  persistence: 'localStorage', // or 'cookie'
});

export default mixpanel;

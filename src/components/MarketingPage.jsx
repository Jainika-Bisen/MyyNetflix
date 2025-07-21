// import React, { useEffect, useRef } from "react";
// import '../App.css'; // Ensure this path is correct for your project structure
// // import useGoogleAnalytics from "../hooks/useGoogleAnalytics";

// export default function MovieStreamPage() {
//   // useGoogleAnalytics();
//   const handleGetStartedClick = () => {
//     if (window.gtag) {
//     window.gtag("event", "click", {
//       event_category: "engagement",
//       event_label: "Get Started Button",
//       value: 1,
//     });
//   }
//   window.location.href = "/login";
//   };

//   const trendingMovies = [
//     { title: "The Cosmic Journeys", img: "https://m.media-amazon.com/images/M/MV5BNjA5NDk0Nzk1OF5BMl5BanBnXkFtZTgwMjk1NjE0MzE@._V1_FMjpg_UX1000_.jpg" },
//     { title: "Mystery of the Old House", img: "https://picsum.photos/id/1040/300/440" },
//     { title: "City of Shadows", img: "https://picsum.photos/id/1042/300/440" },
//     { title: "Whispers in the Wind", img: "https://picsum.photos/id/1047/300/440" },
//   ];

//   // Create refs for each section to observe
//   const heroRef = useRef(null);
//   const productOverviewRef = useRef(null);
//   const moreReasonsRef = useRef(null);
//   const trendingMoviesRef = useRef(null);
//   const pricingRef = useRef(null);
//   const aboutRef = useRef(null);
//   const faqRef = useRef(null);

//   useEffect(() => {
//     const sections = [
//       { id: 'hero', ref: heroRef },
//       { id: 'product-overview', ref: productOverviewRef },
//       { id: 'more-reasons', ref: moreReasonsRef },
//       { id: 'trending-movies', ref: trendingMoviesRef },
//       { id: 'pricing', ref: pricingRef },
//       { id: 'about', ref: aboutRef },
//       { id: 'faq', ref: faqRef },
//     ];

//     const observerOptions = {
//       root: null, // Use the viewport as the root
//       rootMargin: '0px',
//       threshold: 0.5, // Trigger when 50% of the section is visible
//     };

//     const observer = new IntersectionObserver((entries) => {
//       entries.forEach(entry => {
//         if (entry.isIntersecting) {
//           // Update the URL hash to the ID of the intersecting section
//           // This creates the "scroll spy" effect
//           window.location.hash = entry.target.id;
//         }
//       });
//     }, observerOptions);

//     // Observe each section
//     sections.forEach(section => {
//       if (section.ref.current) {
//         observer.observe(section.ref.current);
//       }
//     });

//     // Clean up the observer when the component unmounts
//     return () => {
//       sections.forEach(section => {
//         if (section.ref.current) {
//           observer.unobserve(section.ref.current);
//         }
//       });
//     };
//   }, []); // Empty dependency array means this effect runs once on mount

//   return (
//     <div className="page-container">
//       {/* Hero Section */}
//       <section id="hero" ref={heroRef} className="hero-section">
//         <h1>Introducing CineStream 🎬</h1>
//         <p>
//           Your ultimate destination for endless entertainment. Stream movies and shows anytime, anywhere!
//         </p>
//         <button onClick={handleGetStartedClick}>Get Started</button>
//       </section>

//       {/* Product Overview */}
//       <section id="product-overview" ref={productOverviewRef} className="product-overview-section">
//         <img
//           src="https://picsum.photos/id/1015/800/600" // Accessible image for product demo
//           alt="CineStream Interface"
//           className="product-image"
//         />
//         <div>
//           <h2>Why CineStream?</h2>
//           <ul className="product-features-list">
//             <li className="feature-item">Vast library of movies and TV shows</li>
//             <li className="feature-item">Stunning 4K Ultra HD streaming</li>
//             <li className="feature-item">Ad-free viewing experience</li>
//             <li className="feature-item">Personalized recommendations</li>
//           </ul>
//         </div>
//       </section>

//       {/* More Reasons to Join */}
//       <section id="more-reasons" ref={moreReasonsRef} className="more-reasons-section">
//         <h2>More Reasons to Love CineStream ❤️</h2>
//         <div className="reasons-grid">
//           <div className="reason-card">
//             <h3>Enjoy on your TV 📺</h3>
//             <p>Watch on smart TVs, PlayStation, Xbox, Chromecast, Apple TV, Blu-ray players, and more.</p>
//           </div>
//           <div className="reason-card">
//             <h3>Download your shows to watch offline 📥</h3>
//             <p>Save your favorites easily and always have something to watch.</p>
//           </div>
//           <div className="reason-card">
//             <h3>Watch everywhere 🌍</h3>
//             <p>Stream unlimited movies and TV shows on your phone, tablet, laptop, and TV.</p>
//           </div>
//         </div>
//       </section>

//       {/* Trending Movies */}
//       <section id="trending-movies" ref={trendingMoviesRef} className="trending-movies-section">
//         <h2>Now Trending 🔥</h2>
//         <div className="movie-grid">
//           {trendingMovies.map((movie, i) => (
//             <div key={i} className="movie-card">
//               <img src={movie.img} alt={movie.title} className="movie-poster" />
//               <p>{movie.title}</p>
//             </div>
//           ))}
//         </div>
//       </section>

//       {/* Pricing */}
//       <section id="pricing" ref={pricingRef} className="pricing-section">
//         <h2>Simple, Transparent Pricing</h2>
//         <div className="pricing-grid">
//           <div className="pricing-card">
//             <h3>Standard</h3>
//             <p>$12.99/month</p>
//             <ul>
//               <li>HD available</li>
//               <li>Stream on 2 devices at once</li>
//             </ul>
//             <button>Choose Plan</button>
//           </div>
//           <div className="pricing-card premium">
//             <h3>Premium</h3>
//             <p>$19.99/month</p>
//             <ul>
//               <li>4K Ultra HD available</li>
//               <li>Stream on 4 devices at once</li>
//               <li>Download content</li>
//             </ul>
//             <button>Choose Plan</button>
//           </div>
//         </div>
//       </section>

//       {/* About */}
//       <section id="about" ref={aboutRef} className="about-section">
//         <h2>About CineStream</h2>
//         <p>
//           At CineStream, we are passionate about bringing the world's best cinematic experiences to your screen. Our mission is to provide
//           unlimited entertainment with unparalleled quality and convenience. Join millions of happy viewers today!
//         </p>
//       </section>

//       {/* FAQ */}
//       <section id="faq" ref={faqRef} className="faq-section">
//         <h2>Frequently Asked Questions</h2>
//         <div className="faq-content">
//           <div className="faq-item">
//             <strong>Is there a free trial?</strong>
//             <p>Yes! We offer a 30-day free trial for all new users to explore CineStream.</p>
//           </div>
//           <div className="faq-item">
//             <strong>Can I cancel anytime?</strong>
//             <p>Absolutely. You can cancel or switch plans at any time directly from your account settings.</p>
//           </div>
//           <div className="faq-item">
//             <strong>What devices are supported?</strong>
//             <p>CineStream is available on smart TVs, game consoles, streaming media players, mobile devices, and web browsers.</p>
//           </div>
//         </div>
//       </section>
//     </div>
//   );
// }

// For amplitude and GA

// import React, { useEffect, useRef } from "react";
// import * as amplitude from '@amplitude/analytics-browser'; // ✅ Import Amplitude
// import useGoogleAnalytics from "../hooks/useGoogleAnalytics";
// import '../App.css';

// export default function MovieStreamPage() {
//   useGoogleAnalytics();
//   const handleGetStartedClick = () => {
//     // ✅ Amplitude tracking for button click
//     amplitude.track('Click: Get Started Button', {
//       location: 'Hero Section',
//     });

//     window.location.href = "/login";
//   };

//   const trendingMovies = [
//     { title: "The Cosmic Journeys", img: "..." },
//     { title: "Mystery of the Old House", img: "..." },
//     { title: "City of Shadows", img: "..." },
//     { title: "Whispers in the Wind", img: "..." },
//   ];

//   const heroRef = useRef(null);
//   const productOverviewRef = useRef(null);
//   const moreReasonsRef = useRef(null);
//   const trendingMoviesRef = useRef(null);
//   const pricingRef = useRef(null);
//   const aboutRef = useRef(null);
//   const faqRef = useRef(null);

//   useEffect(() => {
//     const sections = [
//       { id: 'hero', ref: heroRef },
//       { id: 'product-overview', ref: productOverviewRef },
//       { id: 'more-reasons', ref: moreReasonsRef },
//       { id: 'trending-movies', ref: trendingMoviesRef },
//       { id: 'pricing', ref: pricingRef },
//       { id: 'about', ref: aboutRef },
//       { id: 'faq', ref: faqRef },
//     ];

//     const observerOptions = {
//       root: null,
//       rootMargin: '0px',
//       threshold: 0.5,
//     };

//     const observer = new IntersectionObserver((entries) => {
//       entries.forEach(entry => {
//         if (entry.isIntersecting) {
//           // ✅ Track section view with Amplitude
//           amplitude.track('View: Section', {
//             section_id: entry.target.id,
//           });

//           window.location.hash = entry.target.id;
//         }
//       });
//     }, observerOptions);

//     sections.forEach(section => {
//       if (section.ref.current) {
//         observer.observe(section.ref.current);
//       }
//     });

//     return () => {
//       sections.forEach(section => {
//         if (section.ref.current) {
//           observer.unobserve(section.ref.current);
//         }
//       });
//     };
//   }, []);

//   return (
//     <div className="page-container">
//       {/* Hero Section */}
//       <section id="hero" ref={heroRef} className="hero-section">
//         <h1>Introducing CineStream 🎬</h1>
//         <p>
//           Your ultimate destination for endless entertainment. Stream movies and shows anytime, anywhere!
//         </p>
//         <button onClick={handleGetStartedClick}>Get Started</button>
//       </section>

//       {/* Product Overview */}
//       <section id="product-overview" ref={productOverviewRef} className="product-overview-section">
//         <img
//           src="https://picsum.photos/id/1015/800/600" // Accessible image for product demo
//           alt="CineStream Interface"
//           className="product-image"
//         />
//         <div>
//           <h2>Why CineStream?</h2>
//           <ul className="product-features-list">
//             <li className="feature-item">Vast library of movies and TV shows</li>
//             <li className="feature-item">Stunning 4K Ultra HD streaming</li>
//             <li className="feature-item">Ad-free viewing experience</li>
//             <li className="feature-item">Personalized recommendations</li>
//           </ul>
//         </div>
//       </section>

//       {/* More Reasons to Join */}
//       <section id="more-reasons" ref={moreReasonsRef} className="more-reasons-section">
//         <h2>More Reasons to Love CineStream ❤️</h2>
//         <div className="reasons-grid">
//           <div className="reason-card">
//             <h3>Enjoy on your TV 📺</h3>
//             <p>Watch on smart TVs, PlayStation, Xbox, Chromecast, Apple TV, Blu-ray players, and more.</p>
//           </div>
//           <div className="reason-card">
//             <h3>Download your shows to watch offline 📥</h3>
//             <p>Save your favorites easily and always have something to watch.</p>
//           </div>
//           <div className="reason-card">
//             <h3>Watch everywhere 🌍</h3>
//             <p>Stream unlimited movies and TV shows on your phone, tablet, laptop, and TV.</p>
//           </div>
//         </div>
//       </section>

//       {/* Trending Movies */}
//       <section id="trending-movies" ref={trendingMoviesRef} className="trending-movies-section">
//         <h2>Now Trending 🔥</h2>
//         <div className="movie-grid">
//           {trendingMovies.map((movie, i) => (
//             <div key={i} className="movie-card">
//               <img src={movie.img} alt={movie.title} className="movie-poster" />
//               <p>{movie.title}</p>
//             </div>
//           ))}
//         </div>
//       </section>

//       {/* Pricing */}
//       <section id="pricing" ref={pricingRef} className="pricing-section">
//         <h2>Simple, Transparent Pricing</h2>
//         <div className="pricing-grid">
//           <div className="pricing-card">
//             <h3>Standard</h3>
//             <p>$12.99/month</p>
//             <ul>
//               <li>HD available</li>
//               <li>Stream on 2 devices at once</li>
//             </ul>
//             <button>Choose Plan</button>
//           </div>
//           <div className="pricing-card premium">
//             <h3>Premium</h3>
//             <p>$19.99/month</p>
//             <ul>
//               <li>4K Ultra HD available</li>
//               <li>Stream on 4 devices at once</li>
//               <li>Download content</li>
//             </ul>
//             <button>Choose Plan</button>
//           </div>
//         </div>
//       </section>

//       {/* About */}
//       <section id="about" ref={aboutRef} className="about-section">
//         <h2>About CineStream</h2>
//         <p>
//           At CineStream, we are passionate about bringing the world's best cinematic experiences to your screen. Our mission is to provide
//           unlimited entertainment with unparalleled quality and convenience. Join millions of happy viewers today!
//         </p>
//       </section>

//       {/* FAQ */}
//       <section id="faq" ref={faqRef} className="faq-section">
//         <h2>Frequently Asked Questions</h2>
//         <div className="faq-content">
//           <div className="faq-item">
//             <strong>Is there a free trial?</strong>
//             <p>Yes! We offer a 30-day free trial for all new users to explore CineStream.</p>
//           </div>
//           <div className="faq-item">
//             <strong>Can I cancel anytime?</strong>
//             <p>Absolutely. You can cancel or switch plans at any time directly from your account settings.</p>
//           </div>
//           <div className="faq-item">
//             <strong>What devices are supported?</strong>
//             <p>CineStream is available on smart TVs, game consoles, streaming media players, mobile devices, and web browsers.</p>
//           </div>
//         </div>
//       </section>
//     </div>
//   );
// }

import React, { useEffect, useRef } from "react";
import * as amplitude from '@amplitude/analytics-browser';
import mixpanel from 'mixpanel-browser'; // ✅ Import Mixpanel
import useGoogleAnalytics from "../hooks/useGoogleAnalytics";
import useThriveStackUser from "../hooks/useThriveStack";
import '../App.css';

mixpanel.init('43f9c0eccb3559f9470220274efd875f'); // ✅ Replace with your actual token

export default function MovieStreamPage() {
  useGoogleAnalytics();
  useThriveStackUser();

  const handleGetStartedClick = () => {
    // ✅ Amplitude tracking
    amplitude.track('Click: Get Started Button', {
      location: 'Hero Section',
    });

    // ✅ Mixpanel tracking
    mixpanel.track('Click: Get Started Button', {
      location: 'Hero Section',
    });

    window.location.href = "/login";
  };
  window.thriveStack.track([{
    "event_name": "Get Started Button",
    "properties": {
        "feature_name": "export_report",
        "user_role": "admin"
    },
    "user_id": "18f716ac-37a4-464f-adb7-3cc30032308c",
    "timestamp": "2025-07-21T07:42:12.293Z",
    "context": {
        "group_id": "ac8db7ba-5139-4911-ba6e-523fd9c4704b"
    }
}]);

  const trendingMovies = [
    { title: "The Cosmic Journeys", img: "https://m.media-amazon.com/images/M/MV5BNjA5NDk0Nzk1OF5BMl5BanBnXkFtZTgwMjk1NjE0MzE@._V1_FMjpg_UX1000_.jpg" },
    { title: "Mystery of the Old House", img: "https://picsum.photos/id/1040/300/440" },
    { title: "City of Shadows", img: "https://picsum.photos/id/1042/300/440" },
    { title: "Whispers in the Wind", img: "https://picsum.photos/id/1047/300/440" },
  ];

  const heroRef = useRef(null);
  const productOverviewRef = useRef(null);
  const moreReasonsRef = useRef(null);
  const trendingMoviesRef = useRef(null);
  const pricingRef = useRef(null);
  const aboutRef = useRef(null);
  const faqRef = useRef(null);

  useEffect(() => {
    const sections = [
      { id: 'hero', ref: heroRef },
      { id: 'product-overview', ref: productOverviewRef },
      { id: 'more-reasons', ref: moreReasonsRef },
      { id: 'trending-movies', ref: trendingMoviesRef },
      { id: 'pricing', ref: pricingRef },
      { id: 'about', ref: aboutRef },
      { id: 'faq', ref: faqRef },
    ];

    const observerOptions = {
      root: null,
      rootMargin: '0px',
      threshold: 0.5,
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          // ✅ Amplitude tracking
          amplitude.track('View: Section', {
            section_id: entry.target.id,
          });

          // ✅ Mixpanel tracking
          mixpanel.track('View: Section', {
            section_id: entry.target.id,
          });

          // ✅ ThriveStack tracking
      if (window.thriveStack && typeof window.thriveStack.track === 'function') {
        window.thriveStack.track([{
          event_name: "feature_used",
          properties: {
            feature_name: entry.target.id,
            user_role: "admin", // Replace with actual role if needed
          },
          user_id: "18f716ac-37a4-464f-adb7-3cc30032308c", // Replace with dynamic user
          timestamp: new Date().toISOString(),
          context: {
            group_id: "ac8db7ba-5139-4911-ba6e-523fd9c4704b",
          }
        }]);
      }

          window.location.hash = entry.target.id;
        }
      });
    }, observerOptions);

    sections.forEach(section => {
      if (section.ref.current) {
        observer.observe(section.ref.current);
      }
    });

    return () => {
      sections.forEach(section => {
        if (section.ref.current) {
          observer.unobserve(section.ref.current);
        }
      });
    };
  }, []);

  return (
    <div className="page-container">
      {/* Hero Section */}
      <section id="hero" ref={heroRef} className="hero-section">
        <h1>Introducing CineStream 🎬</h1>
        <p>
          Your ultimate destination for endless entertainment. Stream movies and shows anytime, anywhere!
        </p>
        <button onClick={handleGetStartedClick}>Get Started</button>
      </section>

      {/* Product Overview */}
      <section id="product-overview" ref={productOverviewRef} className="product-overview-section">
        <img
          src="https://picsum.photos/id/1015/800/600"
          alt="CineStream Interface"
          className="product-image"
        />
        <div>
          <h2>Why CineStream?</h2>
          <ul className="product-features-list">
            <li className="feature-item">Vast library of movies and TV shows</li>
            <li className="feature-item">Stunning 4K Ultra HD streaming</li>
            <li className="feature-item">Ad-free viewing experience</li>
            <li className="feature-item">Personalized recommendations</li>
          </ul>
        </div>
      </section>

      {/* More Reasons to Join */}
      <section id="more-reasons" ref={moreReasonsRef} className="more-reasons-section">
        <h2>More Reasons to Love CineStream ❤️</h2>
        <div className="reasons-grid">
          <div className="reason-card">
            <h3>Enjoy on your TV 📺</h3>
            <p>Watch on smart TVs, PlayStation, Xbox, Chromecast, Apple TV, Blu-ray players, and more.</p>
          </div>
          <div className="reason-card">
            <h3>Download your shows to watch offline 📥</h3>
            <p>Save your favorites easily and always have something to watch.</p>
          </div>
          <div className="reason-card">
            <h3>Watch everywhere 🌍</h3>
            <p>Stream unlimited movies and TV shows on your phone, tablet, laptop, and TV.</p>
          </div>
        </div>
      </section>

      {/* Trending Movies */}
      <section id="trending-movies" ref={trendingMoviesRef} className="trending-movies-section">
        <h2>Now Trending 🔥</h2>
        <div className="movie-grid">
          {trendingMovies.map((movie, i) => (
            <div key={i} className="movie-card">
              <img src={movie.img} alt={movie.title} className="movie-poster" />
              <p>{movie.title}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Pricing */}
      <section id="pricing" ref={pricingRef} className="pricing-section">
        <h2>Simple, Transparent Pricing</h2>
        <div className="pricing-grid">
          <div className="pricing-card">
            <h3>Standard</h3>
            <p>$12.99/month</p>
            <ul>
              <li>HD available</li>
              <li>Stream on 2 devices at once</li>
            </ul>
            <button onClick={() => {
                mixpanel.track('Click: Choose Plan', {
                plan_type: 'Standard',
                price: '12.99',
              });
            }}>
              Choose Standard Plan
            </button>
          </div>
          <div className="pricing-card premium">
            <h3>Premium</h3>
            <p>$19.99/month</p>
            <ul>
              <li>4K Ultra HD available</li>
              <li>Stream on 4 devices at once</li>
              <li>Download content</li>
            </ul>
            <button onClick={() => {
              mixpanel.track('Click: Choose Plan', {
                plan_type: 'Premium',
                price: '19.99',
              });
            }}>
              Choose Premium Plan
            </button>

          </div>
        </div>
      </section>

      {/* About */}
      <section id="about" ref={aboutRef} className="about-section">
        <h2>About CineStream</h2>
        <p>
          At CineStream, we are passionate about bringing the world's best cinematic experiences to your screen. Our mission is to provide
          unlimited entertainment with unparalleled quality and convenience. Join millions of happy viewers today!
        </p>
      </section>

      {/* FAQ */}
      <section id="faq" ref={faqRef} className="faq-section">
        <h2>Frequently Asked Questions</h2>
        <div className="faq-content">
          <div className="faq-item">
            <strong>Is there a free trial?</strong>
            <p>Yes! We offer a 30-day free trial for all new users to explore CineStream.</p>
          </div>
          <div className="faq-item">
            <strong>Can I cancel anytime?</strong>
            <p>Absolutely. You can cancel or switch plans at any time directly from your account settings.</p>
          </div>
          <div className="faq-item">
            <strong>What devices are supported?</strong>
            <p>CineStream is available on smart TVs, game consoles, streaming media players, mobile devices, and web browsers.</p>
          </div>
        </div>
      </section>
    </div>
  );
}

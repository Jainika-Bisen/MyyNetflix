// import React, { useEffect } from 'react';
// import '../ProductPage.css';
// import useGoogleAnalytics from "../hooks/useGoogleAnalytics";

// const sections = [
//   {
//     id: 'featured',
//     title: '🎬 Featured',
//     movies: [
//       {
//         title: 'Inception',
//         description: 'A mind-bending thriller where dream invasion becomes reality.',
//         image: 'https://m.media-amazon.com/images/I/81p+xe8cbnL._AC_SY679_.jpg',
//       },
//       {
//         title: 'The Matrix',
//         description: 'A hacker learns the world he lives in is a simulated reality.',
//         image: 'https://m.media-amazon.com/images/I/51EG732BV3L.jpg',
//       },
//       {
//         title: 'Interstellar',
//         description: 'A team travels through a wormhole in space in search of a new home.',
//         image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSngBJ0B7UDrLUkDlp6DCQLsEYuWR-DiHwbnxFFCniB3HiP3f3NZmR1-lKSC34ge6YXu4LX',
//       },
//     ],
//   },
//   {
//     id: 'sci-fi',
//     title: '👾 Sci-Fi',
//     movies: [
//       {
//         title: 'Stranger Things',
//         description: 'A group of kids uncover a secret government experiment and a parallel world.',
//         image: 'https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcQWPh6PeuTgtO_Zzmap6eXJrwBro7Rpz-VOBSqo_7j1-CW9rmEhD0fGArmbXSoWphgcr4ml',
//       },
//       {
//         title: 'Black Mirror',
//         description: 'A dystopian anthology series exploring technology’s dark side.',
//         image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcREoncavSYcIWL538NkEiWg36nV9AIhDCHoyLIk4yQY4ThFutizyIuUvgsIp0nI1DEtNW4&usqp=CAU',
//       },
//       {
//         title: 'The Mandalorian',
//         description: 'A bounty hunter navigates the outer reaches of the galaxy.',
//         image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTPz4zyHFlnCZr0RuXDKfJOhPB83w0jh_RJ1utNuTGMd1-apSkHVSGEsfZ17_D31rtkhQpZ',
//       },
//     ],
//   },
//   {
//     id: 'drama',
//     title: '🎭 Drama',
//     movies: [
//       {
//         title: 'Breaking Bad',
//         description: 'A chemistry teacher turns to making meth to secure his family\'s future.',
//         image: 'https://m.media-amazon.com/images/I/81s6DUyQCZL._AC_SY679_.jpg',
//       },
//       {
//         title: 'The Crown',
//         description: 'Chronicles the reign of Queen Elizabeth II.',
//         image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQWlSpRD1I_NMYu-MCArckLJiScz_IMIIptwJka9z_BePejlihr1URVPBparZH5CTvg4bk&usqp=CAU',
//       },
//       {
//         title: 'Mindhunter',
//         description: 'FBI agents develop criminal profiling by interviewing serial killers.',
//         image: 'https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcTwhe-riGVdAXk25j_3m-T-U1iQAq7GB50444CfI8mhEvhmFH1cqfgMk3ge0vECxwwt5mHnJwnPyLPSy7xUWa3Yqayy2cYSkwhINunwmZcS',
//       },
//     ],
//   },
// ];

// const ProductPage = ({ onLogout }) => {
//   useGoogleAnalytics();
//   useEffect(() => {
//     const observer = new IntersectionObserver(
//       (entries) => {
//         entries.forEach(entry => {
//           if (entry.isIntersecting) {
//             window.history.replaceState(null, '', `#${entry.target.id}`);
//           }
//         });
//       },
//       { threshold: 0.5 }
//     );

//     sections.forEach(section => {
//       const el = document.getElementById(section.id);
//       if (el) observer.observe(el);
//     });

//     return () => observer.disconnect();
//   }, []);

//   return (
//     <div className="product-container">
//       {/* Optional Sticky Nav */}
//       <div className="sticky-nav">
//         {sections.map(sec => (
//           <a key={sec.id} href={`#${sec.id}`}>{sec.title}</a>
//         ))}
//       </div>

//       {sections.map(section => (
//         <div key={section.id} id={section.id} className="movie-section">
//           <h2>{section.title}</h2>
//           <div className="movie-list">
//             {section.movies.map((movie, index) => (
//               <div className="movie-card" key={index}>
//                 <img src={movie.image} alt={movie.title} />
//                 <h3>{movie.title}</h3>
//                 <p>{movie.description}</p>
//               </div>
//             ))}
//           </div>
//         </div>
//       ))}

//       <div className="logout-container">
//         <button onClick={onLogout}>Logout</button>
//       </div>
//     </div>
//   );
// };

// export default ProductPage;

import React, { useEffect, useState } from 'react';
import '../ProductPage.css';
import useGoogleAnalytics from "../hooks/useGoogleAnalytics";
import mixpanel from 'mixpanel-browser';

// Initialize Mixpanel once (ensure project token is set elsewhere)
mixpanel.init('43f9c0eccb3559f9470220274efd875f'); // Replace with actual token
window.thriveStack.track([{
        "event_name": "signed_up",
        "properties": {
            "user_email": "john.doe@acme.xyz",
            "user_name": "John Doe",
            "utm_campaign": "customer_success",
            "utm_medium": "referral",
            "utm_source": "twitter",
            "utm_term": "free_trial"
        },
        "user_id": "18f716ac-37a4-464f-adb7-3cc30032308c",
        "timestamp": "2025-07-21T07:33:42.220Z"
}]);

window.thriveStack.track([{
        "event_name": "account_created",
        "properties": {
            "account_domain": "acme.xyz",
            "account_id": "ac8db7ba-5139-4911-ba6e-523fd9c4704b",
            "account_name": "Acme"
        },
        "user_id": "18f716ac-37a4-464f-adb7-3cc30032308c",
        "timestamp": "2025-07-21T07:36:33.813Z",
        "context": {
            "group_id": "ac8db7ba-5139-4911-ba6e-523fd9c4704b"  // Ensure this matches the account_id used in the event_name
        }
}]);

window.thriveStack.track([{
        "event_name": "account_added_user",
        "properties": {
            "account_name": "Acme",
            "user_email": "john.doe@acme.xyz"
        },
        "user_id": "18f716ac-37a4-464f-adb7-3cc30032308c",
        "timestamp": "2025-07-21T07:38:16.804Z",
        "context": {
            "group_id": "ac8db7ba-5139-4911-ba6e-523fd9c4704b"
        }
    }]);
    
    

const allMovies = [
  { title: 'Inception', genre: 'Sci-Fi', description: 'A mind-bending thriller.', image: 'https://picsum.photos/id/1003/200/300' },
  { title: 'Titanic', genre: 'Drama', description: 'An epic love story.', image: 'https://picsum.photos/id/1020/200/300' },
  { title: 'The Matrix', genre: 'Sci-Fi', description: 'Reality is a simulation.', image: 'https://picsum.photos/id/1033/200/300' },
  { title: 'The Godfather', genre: 'Crime', description: 'The rise of a mafia family.', image: 'https://picsum.photos/id/1011/200/300' },
];

const sections = [
  {
    id: 'featured',
    title: '🎬 Featured',
    movies: [
      {
        title: 'Inception',
        description: 'A mind-bending thriller where dream invasion becomes reality.',
        image: 'https://m.media-amazon.com/images/I/81p+xe8cbnL._AC_SY679_.jpg',
      },
      {
        title: 'The Matrix',
        description: 'A hacker learns the world he lives in is a simulated reality.',
        image: 'https://m.media-amazon.com/images/I/51EG732BV3L.jpg',
      },
      {
        title: 'Interstellar',
        description: 'A team travels through a wormhole in space in search of a new home.',
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSngBJ0B7UDrLUkDlp6DCQLsEYuWR-DiHwbnxFFCniB3HiP3f3NZmR1-lKSC34ge6YXu4LX',
      },
    ],
  },
  {
    id: 'sci-fi',
    title: '👾 Sci-Fi',
    movies: [
      {
        title: 'Stranger Things',
        description: 'A group of kids uncover a secret government experiment and a parallel world.',
        image: 'https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcQWPh6PeuTgtO_Zzmap6eXJrwBro7Rpz-VOBSqo_7j1-CW9rmEhD0fGArmbXSoWphgcr4ml',
      },
      {
        title: 'Black Mirror',
        description: 'A dystopian anthology series exploring technology’s dark side.',
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcREoncavSYcIWL538NkEiWg36nV9AIhDCHoyLIk4yQY4ThFutizyIuUvgsIp0nI1DEtNW4&usqp=CAU',
      },
      {
        title: 'The Mandalorian',
        description: 'A bounty hunter navigates the outer reaches of the galaxy.',
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTPz4zyHFlnCZr0RuXDKfJOhPB83w0jh_RJ1utNuTGMd1-apSkHVSGEsfZ17_D31rtkhQpZ',
      },
    ],
  },
  {
    id: 'drama',
    title: '🎭 Drama',
    movies: [
      {
        title: 'Breaking Bad',
        description: 'A chemistry teacher turns to making meth to secure his family\'s future.',
        image: 'https://m.media-amazon.com/images/I/81s6DUyQCZL._AC_SY679_.jpg',
      },
      {
        title: 'The Crown',
        description: 'Chronicles the reign of Queen Elizabeth II.',
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQWlSpRD1I_NMYu-MCArckLJiScz_IMIIptwJka9z_BePejlihr1URVPBparZH5CTvg4bk&usqp=CAU',
      },
      {
        title: 'Mindhunter',
        description: 'FBI agents develop criminal profiling by interviewing serial killers.',
        image: 'https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcTwhe-riGVdAXk25j_3m-T-U1iQAq7GB50444CfI8mhEvhmFH1cqfgMk3ge0vECxwwt5mHnJwnPyLPSy7xUWa3Yqayy2cYSkwhINunwmZcS',
      },
    ],
  },
];

const ProductPage = ({ onLogout }) => {
  useGoogleAnalytics();

  const [searchQuery, setSearchQuery] = useState('');
  const [filteredMovies, setFilteredMovies] = useState([]);

  const handleLogout = () => {
    mixpanel.track('Click: Logout');
    onLogout(); // call the actual logout function
  };

  const handleProfileClick = () => {
    mixpanel.track('Click: Profile Icon');
    alert("Profile clicked (demo)");
  };

  const handleSearch = (e) => {
    const query = e.target.value.toLowerCase();
    setSearchQuery(query);

    const allSectionMovies = sections.flatMap(sec => sec.movies);
    const matches = allSectionMovies.filter(movie =>
      movie.title.toLowerCase().includes(query) ||
      movie.description.toLowerCase().includes(query)
    );

    setFilteredMovies(matches);
    console.log('Hello')
    mixpanel.track('Search Performed', {
      query,
      results: matches.length,
    });
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            const sectionId = entry.target.id;
            window.history.replaceState(null, '', `#${sectionId}`);

            // ✅ Track section view with Mixpanel
            mixpanel.track('View: Product Section', {
              section_id: sectionId,
            });
          }
        });
      },
      { threshold: 0.5 }
    );

    sections.forEach(section => {
      const el = document.getElementById(section.id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div className="product-container">
      <div className="top-bar">
        <input
          type="text"
          placeholder="Search for movies..."
          value={searchQuery}
          onChange={handleSearch}
          className="search-bar"
        />
        <div className="profile-icon" onClick={handleProfileClick}>
          <img
            src="https://cdn-icons-png.flaticon.com/512/1144/1144760.png"
            alt="Profile"
            style={{ width: 32, height: 32, cursor: 'pointer' }}
          />
        </div>
      </div>
      <div className="sticky-nav">
        {sections.map(sec => (
          <a
            key={sec.id}
            href={`#${sec.id}`}
            onClick={() => {
                mixpanel.track('Click: Product Section Link', {
                section_id: sec.id,
                section_title: sec.title,
              });

              // ✅ ThriveStack tracking
              // if (window.thriveStack && typeof window.thriveStack.track === 'function') {
              //   window.thriveStack.track([{
              //     event_name: "feature_used",
              //     properties: {
              //       feature_name: `click_${sec.id}_section`, // e.g., click_featured_section
              //       user_role: "admin", // Replace with dynamic role if needed
              //     },
              //     user_id: "18f716ac-37a4-464f-adb7-3cc30032308c", // Replace with actual user ID
              //     timestamp: new Date().toISOString(),
              //     context: {
              //       group_id: "ac8db7ba-5139-4911-ba6e-523fd9c4704b" // Optional group/org ID
              //     }
              //   }]);
              // }
            }}
          >
            {sec.title}
          </a>
        ))}
      </div>

      {/* Render filtered movies or sections */}
      {searchQuery ? (
        <div className="movie-section" id="search-results">
          <h2>🔍 Search Results</h2>
          <div className="movie-list">
            {filteredMovies.map((movie, index) => (
              <div className="movie-card" key={index}>
                <img src={movie.image} alt={movie.title} />
                <h3>{movie.title}</h3>
                <p>{movie.description}</p>
              </div>
            ))}
          </div>
        </div>
      ) : (
        sections.map(section => (
          <div key={section.id} id={section.id} className="movie-section">
            <h2>{section.title}</h2>
            <div className="movie-list">
              {section.movies.map((movie, index) => (
                <div className="movie-card" key={index}>
                  <img src={movie.image} alt={movie.title} />
                  <h3>{movie.title}</h3>
                  <p>{movie.description}</p>
                </div>
              ))}
            </div>
          </div>
        ))
      )}

      <div className="logout-container">
        <button onClick={handleLogout}>Logout</button>
      </div>
    </div>
  );
};

export default ProductPage;

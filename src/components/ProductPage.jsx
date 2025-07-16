import React, { useEffect } from 'react';
import '../ProductPage.css';
import useGoogleAnalytics from "../hooks/useGoogleAnalytics";

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
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            window.history.replaceState(null, '', `#${entry.target.id}`);
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
      {/* Optional Sticky Nav */}
      <div className="sticky-nav">
        {sections.map(sec => (
          <a key={sec.id} href={`#${sec.id}`}>{sec.title}</a>
        ))}
      </div>

      {sections.map(section => (
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
      ))}

      <div className="logout-container">
        <button onClick={onLogout}>Logout</button>
      </div>
    </div>
  );
};

export default ProductPage;

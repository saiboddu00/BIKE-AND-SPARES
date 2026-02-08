import React from 'react';

const Hero = () => {
  return (
    <div id="home" className="hero-section">
      <div className="hero-overlay">
        <div className="hero-content">
          <h1>Complete Bike Tools & Spare Parts Store</h1>
          <p>Premium Quality Parts for Your Two-Wheeler</p>
          <button className="cta-button">Shop Now</button>
        </div>
      </div>

      <style>{`
        .hero-section {
          height: 80vh;
          background-image: url('/assets/hero_mechanic.png'); /* Will be generated */
          background-size: cover;
          background-position: center;
          position: relative;
          display: flex;
          align-items: center;
          justify-content: center;
          text-align: center;
        }
        .hero-overlay {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: rgba(0, 0, 0, 0.7); /* Dark overlay */
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .hero-content {
          padding: 1rem;
          max-width: 800px;
          z-index: 1;
        }
        .hero-content h1 {
          font-size: 2.5rem;
          margin-bottom: 1rem;
          color: var(--text-white);
          text-transform: uppercase;
          text-shadow: 2px 2px 4px rgba(0,0,0,0.5);
        }
        .hero-content p {
          font-size: 1.2rem;
          margin-bottom: 2rem;
          color: var(--text-gray);
        }
        .cta-button {
          padding: 1rem 2rem;
          background-color: var(--primary-color);
          color: white;
          border: none;
          font-size: 1.1rem;
          font-weight: 600;
          border-radius: 4px;
          cursor: pointer;
          transition: transform 0.2s, background-color 0.2s;
        }
        .cta-button:hover {
          transform: translateY(-2px);
          background-color: #d90000;
        }
        @media (min-width: 768px) {
          .hero-content h1 {
            font-size: 3.5rem;
          }
        }
      `}</style>
    </div>
  );
};

export default Hero;

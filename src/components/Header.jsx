import React, { useState } from 'react';
import { FaShoppingCart, FaSearch, FaBars, FaTimes } from 'react-icons/fa';

const Header = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className="header">
            <div className="container header-container">
                <div className="logo">
                    BikeTools<span>&Spares</span>
                </div>

                <div className="desktop-nav">
                    <a href="#home">Home</a>
                    <a href="#repair-tools">Tools</a>
                    <a href="#engine-parts">Spares</a>
                    <a href="#contact">Contact</a>
                </div>

                <div className="header-icons">
                    <FaSearch className="icon" />
                    <FaShoppingCart className="icon" />
                    <div className="mobile-toggle" onClick={() => setIsOpen(!isOpen)}>
                        {isOpen ? <FaTimes /> : <FaBars />}
                    </div>
                </div>
            </div>

            {isOpen && (
                <div className="mobile-menu">
                    <a href="#home" onClick={() => setIsOpen(false)}>Home</a>
                    <a href="#repair-tools" onClick={() => setIsOpen(false)}>Tools</a>
                    <a href="#engine-parts" onClick={() => setIsOpen(false)}>Spares</a>
                    <a href="#contact" onClick={() => setIsOpen(false)}>Contact</a>
                </div>
            )}

            <style>{`
        .header {
          background-color: var(--bg-card);
          padding: 1rem 0;
          position: sticky;
          top: 0;
          z-index: 1000;
          box-shadow: 0 2px 10px rgba(0,0,0,0.3);
        }
        .header-container {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 0 1rem;
          max-width: 1200px;
          margin: 0 auto;
        }
        .logo {
          font-size: 1.5rem;
          font-weight: 800;
          color: var(--text-white);
        }
        .logo span {
          color: var(--primary-color);
        }
        .desktop-nav {
          display: none;
          gap: 2rem;
        }
        .desktop-nav a {
          font-weight: 500;
          transition: color 0.3s;
        }
        .desktop-nav a:hover {
          color: var(--primary-color);
        }
        .header-icons {
          display: flex;
          align-items: center;
          gap: 1.5rem;
          font-size: 1.2rem;
        }
        .icon {
          cursor: pointer;
          transition: color 0.3s;
        }
        .icon:hover {
          color: var(--primary-color);
        }
        .mobile-toggle {
          display: block;
          cursor: pointer;
        }
        .mobile-menu {
          background-color: var(--bg-card);
          padding: 1rem;
          display: flex;
          flex-direction: column;
          gap: 1rem;
          border-top: 1px solid var(--border-color);
        }
        @media (min-width: 768px) {
          .desktop-nav {
            display: flex;
          }
          .mobile-toggle {
            display: none;
          }
        }
      `}</style>
        </nav>
    );
};

export default Header;

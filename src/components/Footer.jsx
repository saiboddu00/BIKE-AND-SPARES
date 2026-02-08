import React from 'react';
import { FaFacebook, FaInstagram, FaTwitter, FaYoutube } from 'react-icons/fa';

const Footer = () => {
    return (
        <footer className="footer-section">
            <div className="container footer-content">
                <div className="footer-logo">
                    BikeTools<span>&Spares</span> Store
                </div>

                <div className="social-links">
                    <a href="#"><FaFacebook /></a>
                    <a href="#"><FaInstagram /></a>
                    <a href="#"><FaTwitter /></a>
                    <a href="#"><FaYoutube /></a>
                </div>

                <div className="copyright">
                    <p>© 2026 BikeTools & Spares Store. All rights reserved.</p>
                </div>
            </div>

            <style>{`
        .footer-section {
           background-color: #111;
           padding: 3rem 1rem;
           margin-top: auto;
           border-top: 1px solid var(--border-color);
        }
        .footer-content {
           display: flex;
           flex-direction: column;
           align-items: center;
           gap: 1.5rem;
           text-align: center;
        }
        .footer-logo {
           font-size: 1.25rem;
           font-weight: 700;
           color: var(--text-white);
        }
        .footer-logo span {
           color: var(--primary-color);
        }
        .social-links {
           display: flex;
           gap: 1.5rem;
        }
        .social-links a {
           font-size: 1.5rem;
           color: var(--text-gray);
           transition: color 0.3s;
        }
        .social-links a:hover {
           color: var(--primary-color);
        }
        .copyright {
           color: #666;
           font-size: 0.9rem;
        }
      `}</style>
        </footer>
    );
};

export default Footer;

import React from 'react';
import { FaEnvelope, FaPhone, FaMapMarkerAlt } from 'react-icons/fa';

const Contact = () => {
    return (
        <section id="contact" className="section contact-section">
            <div className="container">
                <h2 className="section-title"><span>Contact Support</span></h2>

                <div className="contact-grid">
                    <div className="contact-info">
                        <div className="info-item">
                            <FaEnvelope className="c-icon" />
                            <div>
                                <h4>Email Support</h4>
                                <p>support@biketoolsstore.com</p>
                            </div>
                        </div>
                        <div className="info-item">
                            <FaPhone className="c-icon" />
                            <div>
                                <h4>Call Us</h4>
                                <p>+91 98765 43210</p>
                            </div>
                        </div>
                        <div className="info-item">
                            <FaMapMarkerAlt className="c-icon" />
                            <div>
                                <h4>Visit Us</h4>
                                <p>Hyderabad, India</p>
                            </div>
                        </div>
                    </div>

                    <div className="about-us">
                        <h3>About Us</h3>
                        <p>"We provide complete bike tools and spare parts with affordable prices and quality assurance."</p>
                    </div>
                </div>
            </div>

            <style>{`
        .contact-section {
           background-color: #222;
           padding: 4rem 1rem;
        }
        .contact-grid {
           display: grid;
           grid-template-columns: 1fr;
           gap: 3rem;
        }
        @media (min-width: 768px) {
           .contact-grid {
              grid-template-columns: 1fr 1fr;
           }
        }
        .info-item {
           display: flex;
           align-items: center;
           gap: 1.5rem;
           margin-bottom: 2rem;
           background-color: var(--bg-card);
           padding: 1.5rem;
           border-radius: 8px;
        }
        .c-icon {
           font-size: 2rem;
           color: var(--primary-color);
        }
        .info-item h4 {
           margin: 0 0 0.5rem 0;
           color: var(--text-white);
        }
        .info-item p {
           margin: 0;
           color: var(--text-gray);
        }
        .about-us {
           background-color: var(--bg-card);
           padding: 2rem;
           border-radius: 8px;
           border-left: 4px solid var(--primary-color);
        }
        .about-us h3 {
           margin-top: 0;
           color: var(--text-white);
        }
        .about-us p {
           font-style: italic;
           font-size: 1.1rem;
           line-height: 1.6;
           color: var(--text-gray);
        }
      `}</style>
        </section>
    );
};

export default Contact;

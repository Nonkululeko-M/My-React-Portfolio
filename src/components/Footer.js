// Import necessary packages and icons
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faWhatsapp, faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faPhone, faEnvelope } from '@fortawesome/free-solid-svg-icons'; // Import from free-solid-svg-icons
import './Footer.css'; // Import your CSS file

// Define the Footer component
const Footer = () => {
    return (
        <footer>
            <div className="footerContainer">
                <div className="socialIcons">
                    <a href="https://www.facebook.com/nkulenana.shabalala/"><FontAwesomeIcon icon={faFacebook} /></a>
                    <a href="https://wa.me/+270810547104"><FontAwesomeIcon icon={faWhatsapp} /></a>
                    <a href="https://github.com/Nonkululeko-M?tab=repositories'"><FontAwesomeIcon icon={faGithub} /></a>
                    <a href="https://www.linkedin.com/in/nonkululeko-mzalwana-1a8248271/"><FontAwesomeIcon icon={faLinkedin} /></a>
                    <a href="tel:+270810547104"><FontAwesomeIcon icon={faPhone} /></a>
                    <a href="'mailto:nonkukulekonancy@gmail.com'"><FontAwesomeIcon icon={faEnvelope} /></a>
                </div>
                <div className="footerBottom">
                    <p>Copyright © 2024 Nonkululeko Mzalwana, All rights Reserved.</p>
                </div>
            </div>
        </footer>
    );
}

export default Footer;

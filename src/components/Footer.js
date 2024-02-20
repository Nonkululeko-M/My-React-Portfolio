// Import necessary packages and icons
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faWhatsapp, faGithub, faLinkedin, faPhone, faEnvelope } from '@fortawesome/free-brands-svg-icons';
import './Footer.css'; // Import your CSS file

// Define the Footer component
const Footer = () => {
    return (
        <footer>
            <div className="footerContainer">
                <div className="socialIcons">
                    <a href=""><FontAwesomeIcon icon={faFacebook} /></a>
                    <a href=""><FontAwesomeIcon icon={faWhatsapp} /></a>
                    <a href=""><FontAwesomeIcon icon={faGithub} /></a>
                    <a href=""><FontAwesomeIcon icon={faLinkedin} /></a>
                    <a href=""><FontAwesomeIcon icon={faPhone} /></a>
                    <a href=""><FontAwesomeIcon icon={faEnvelope} /></a>
                </div>
                <div className="footerBottom">
                    <p>Copyright © 2024 Nonkululeko Mzalwana, All rights Reserved.</p>
                </div>
            </div>
        </footer>
    );
}

export default Footer;

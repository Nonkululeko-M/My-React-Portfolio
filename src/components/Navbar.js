// Navbar.js
import React from 'react';

const Navbar = () => {
    return (
        <div className="navbar" id="navbar">
            
           <nav>
        <ul className="nav-links">
          <li className="nav-item">
            <a href="/">Home</a>
          </li>
          <li className="nav-item">
            <a href="/about">About</a>
          </li>
          <li className="nav-item">
            <a href="/services">Skills</a>
          </li>
          <li className="nav-item">
            <a href="/">Project</a>
          </li>
          <li>
            <a href="/">Testimonials</a>
          </li>
          <li className="nav-item">
            <a href="/contact">Contact</a>
          </li>
        </ul>
      </nav>
        </div>
    );
}

export default Navbar;

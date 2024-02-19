import React, { useEffect } from 'react';
import './Testimonials.css';
import VanillaTilt from 'vanilla-tilt';
import chumIM from '../images/chuma.jpeg';
import Limg from '../images/langa.jpeg';

const Testimonials = () => {
  useEffect(() => {
    document.querySelectorAll(".boxx").forEach(function(boxx) {
      VanillaTilt.init(boxx, {
        max: 25,
        speed: 400,
        glare: true,
      });
    });
  }, []);

  return (
    <section id="Testimonials">
      <div className="wrapper">
        <section id="testimonials">
          <header>
            <h2>Testimonials</h2>
          </header>
          <section id = "mycards">
        <div className="boxx">
        
            <div className="cardd">oiyoyui nofjjfhjkhgfjdjhfg
              <img src={Limg} alt="profile" style={{ maxWidth: '50%', maxHeight: '50%' }} />
            </div>
          </div>
          <div className="boxx">
          
            <div className="cardd">Another text
              <img src={Limg} alt="profile" style={{ maxWidth: '50%', maxHeight: '50%' }} />
            </div>
          </div>
         
        
          </section>
        </section>
      </div>
    </section>
  );
};

export default Testimonials;


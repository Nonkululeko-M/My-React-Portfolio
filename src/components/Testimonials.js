import React from 'react';
import './Testimonials.css';
import chumIM from '../images/chuma.jpeg';
import Limg from '../images/langa.jpeg'

const Testimonials = () => {
  return (
    <section id="Testimonials">
      <div className="wrapper">
        <section id="testimonials">
          <header>
            <h2>Testimonials</h2>
          </header>
          <section className= "myslide">
          <div className="wrapperr">
          
            <input type="radio" name="slide" id="c1" checked />

            <label htmlFor="c1" className="cardd">
              <div className="row">
                
                
                <div className="icon">1</div>
                <div className="images"><img src={Limg} alt="Langas Profile" /></div>
                <div className="description">
                  <h4>Langa Madubela </h4>
                  <p>Nonkululeko is a dedicated woman who fights for what she wants. Additionally, she is kind and loving to everybody.</p>
                </div>
              </div>
            </label>
            <input type="radio" name="slide" id="c2" />
            <label htmlFor="c2" className="cardd">
              <div className="row">
              <img src={chumIM} alt="Winter Image" />
                <div className="icon">2</div>
                <div className="description">
                  <h4>Chuma Raxhothi</h4>
                  <p>Nonkululeko Mzalwana has outstanding technical proficiency as well as problem-solving and communication capabilities. Her dedication to producing excellent work and meticulous attention to detail are genuinely admirable</p>
                </div>
              </div>
            </label>
            <input type="radio" name="slide" id="c3" />
            <label htmlFor="c3" className="cardd">
              <div className="row">
                <div className="icon">3</div>
                <div className="description">
                  <h4>Globalization</h4>
                  <p>Help people all over the world</p>
                </div>
              </div>
            </label>
            <input type="radio" name="slide" id="c4" />
            <label htmlFor="c4" className="cardd">
              <div className="row">
                <div className="icon">4</div>
                <div className="description">
                  <h4>New technologies</h4>
                  <p>Space engineering becomes more and more advanced</p>
                </div>
              </div>
            </label>
          </div>
          </section>
        </section>
      </div>
    </section>
  );
};

export default Testimonials;

import React from "react";
import "./testi.css"; // Import the CSS file
import Landmage from "../images/langa.jpeg";
import Chumage from "../images/chuma.jpeg";
import Andy from "../images/andy.jpg"

const Testimonials = () => {
  return (
    <section id="Testimonials">
      <div className="wrapper">
        <section id="testimonials">
        <header><h2>Testimonials</h2></header>
           
          <div className="section__container"> {/* Move the container to wrap the testimonials */}
           
            <div className="section__grid">
              <div className="section__card">
                <span><i className="ri-double-quotes-l"></i></span>
                
               
                <img src={Landmage} alt="user" /> {/* Use imported images */}
                <h5>Langa Madubela</h5>
                <h6> <p>
                "Nonkululeko is a dedicated woman who fights for what she wants. Additionally, she is kind and loving to everybody."
                </p></h6>
              </div>
              <div className="section__card">
                <span><i className="ri-double-quotes-l"></i></span>
                
                
                <img src={Chumage} alt="user" /> {/* Use imported images */}
                <h5>Chuma Raxothi</h5>
                <h6>"Nonkululeko Mzalwana has outstanding technical proficiency as well as problem-solving and communication capabilities. Her dedication to producing excellent work and meticulous attention to detail are genuinely admirable"</h6>
              </div>
              <div className="section__card">
                <span><i className="ri-double-quotes-l"></i></span>
                
                
                <img src={Andy} alt="user" className="larger-image" />

                <h5>Andisiwe Nonkwenkwe</h5>
                <h6> "As a colleague, Nonkululeko is a pleasure to work with, always bringing creativity, enthusiasm, and a positive attitude to the team. Their ability to collaborate effectively and communicate complex ideas clearly makes them a valuable asset to any project."</h6>
              </div>
            </div>
          </div>
        </section>
      </div>
    </section>
  );
}

export default Testimonials;

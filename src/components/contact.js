import React, { useRef } from "react";
import emailjs from 'emailjs-com';
import ReCAPTCHA from "react-google-recaptcha"; // Import ReCAPTCHA component
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faUser, faComment } from '@fortawesome/free-solid-svg-icons'; // Import required icons
import './contact.css';

const Contact = () => {
  const recaptchaRef = useRef(null); // Define recaptchaRef using useRef

  const sendEmail = (event) => {
    event.preventDefault(); // Prevent the default form submission behavior

    // Get the reCAPTCHA token value
    const token = recaptchaRef.current.getValue();

    // Check if the token is available
    if (!token) {
      alert("Please complete the reCAPTCHA challenge.");
      return;
    }

    emailjs.sendForm('service_sjcuoi3', 'template_pfp20wr', event.target, 'x-k10cI_DeGDcCRSf')
      .then((result) => {
        alert("Form successfully submitted:", result.text);
        // Reset the form after successful submission if needed
        event.target.reset();
      }, (error) => {
        alert(error.text);
      });
  };

  return (
    <section id="Contact">
      <div className="wrapper">
        <section id="contact">
          <div className="wrapper">
            <header style={{ textAlign: "center" }}>
              <h2>Contact</h2>
            </header>
            <div className="card">
              <div className="card2">
                <form className="form" onSubmit={sendEmail}>
                  <p id="heading">Get in Touch</p>
                  <div className="field">
                    <FontAwesomeIcon icon={faUser} className="input-icon" />
                    <input
                      type="text"
                      className="input-field"
                      placeholder="Name"
                      autoComplete="off"
                      name="Fullname" // Add name attribute for accessing input value
                    />
                  </div>
                  <div className="field">
                    <FontAwesomeIcon icon={faEnvelope} className="input-icon" />
                    <input
                      type="email"
                      className="input-field"
                      placeholder="Email"
                      autoComplete="off"
                      name="email" // Add name attribute for accessing input value
                    />
                  </div>
                  <div className="field">
                    <FontAwesomeIcon icon={faComment} className="input-icon" />
                    <textarea
                      placeholder="Message"
                      rows="4"
                      className="input-field"
                      name="message" // Add name attribute for accessing input value
                    ></textarea>
                  </div>
                  <ReCAPTCHA
                    ref={recaptchaRef}
                    sitekey="6LcOuXopAAAAAEpd-QFlQ-ldWSZabncBdDDAv9y_"
                   
                    onChange={() => {}} // required prop, but can be empty function
                  />
                  <div className="btn"> {/* Update class to className */}
                    <button type="submit" className="button2">Submit</button> {/* Update class to className */}
                  </div>
                  
                </form>
              </div>
            </div>
          </div>
        </section>
      </div>
    </section>
  );
};

export default Contact;

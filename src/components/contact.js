import React, { useState, useRef } from "react";
import emailjs from 'emailjs-com';
import ReCAPTCHA from "react-google-recaptcha"; // Import ReCAPTCHA component
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faUser, faComment } from '@fortawesome/free-solid-svg-icons'; // Import required icons
import './contact.css';

const Contact = () => {
  const [user, setUser] = useState({
    FullName: '',
    email: '',
    message: ''
  });

  const recaptchaRef = useRef(null); // Define recaptchaRef using useRef

  const sendEmail = async (event) => {
    event.preventDefault(); // Prevent the default form submission behavior

    // Get the reCAPTCHA token value
    const token = recaptchaRef.current.getValue();

    // Check if the token is available
    if (!token) {
      alert("Please complete the reCAPTCHA challenge.");
      return;
    }

    try {
      // Send email using emailjs
      const emailResult = await emailjs.sendForm('service_sjcuoi3', 'template_pfp20wr', event.target, 'x-k10cI_DeGDcCRSf');
      console.log("Email sent successfully:", emailResult.text);

      // Send data to Firebase database
      const options = {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          FullName: user.FullName,
          email: user.email,
          message: user.message
        })
      };

      const res = await fetch('https://my-project-9354-1708517442743-default-rtdb.firebaseio.com/UserData.json', options);
      if (res.ok) {
        alert('Message Sent Successfully');
        setUser({ FullName: '', email: '', message: '' }); // Clear form fields on success
      } else {
        throw new Error('Error Occurred');
      }
    } catch (error) {
      console.error(error);
      alert('Error Occurred');
    }
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
                      name="FullName" // Update input name to match state key
                      value={user.FullName}
                      onChange={(e) => setUser({ ...user, FullName: e.target.value })}
                    />
                  </div>
                  <div className="field">
                    <FontAwesomeIcon icon={faEnvelope} className="input-icon" />
                    <input
                      type="email"
                      className="input-field"
                      placeholder="Email"
                      autoComplete="off"
                      name="email" // Update input name to match state key
                      value={user.email}
                      onChange={(e) => setUser({ ...user, email: e.target.value })}
                    />
                  </div>
                  <div className="field">
                    <FontAwesomeIcon icon={faComment} className="input-icon" />
                    <textarea
                      placeholder="Message"
                      rows="4"
                      className="input-field"
                      name="message" // Update input name to match state key
                      value={user.message}
                      onChange={(e) => setUser({ ...user, message: e.target.value })}
                    ></textarea>
                  </div>
                  <div className="recaptcha-container">
                    <ReCAPTCHA
                      ref={recaptchaRef}
                      sitekey="6LcOuXopAAAAAEpd-QFlQ-ldWSZabncBdDDAv9y_"
                      onChange={() => {}} // required prop, but can be empty function
                    />
                  </div>
                  <div className="btn">
                    <button type="submit" className="button2">Submit</button>
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

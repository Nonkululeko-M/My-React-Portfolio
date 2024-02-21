import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faUser, faComment } from '@fortawesome/free-solid-svg-icons'; // Import required icons
import './contact.css';

const Contact = () => {
  const submitForm = (event) => {
    event.preventDefault(); // Prevent the default form submission behavior
    // Access form input values
    const name = event.target.elements.name.value;
    const email = event.target.elements.email.value;
    const message = event.target.elements.message.value;

    // You can perform validation here if needed

    // Log the form data
    console.log("Name:", name);
    console.log("Email:", email);
    console.log("Message:", message);

    // Reset the form after submission if needed
    event.target.reset();
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
                <form className="form" onSubmit={submitForm}>
                  <p id="heading">Get in Touch</p>
                  <div className="field">
                    <FontAwesomeIcon icon={faUser} className="input-icon" />
                    <input
                      type="text"
                      className="input-field"
                      placeholder="Name"
                      autoComplete="off"
                      name="name" // Add name attribute for accessing input value
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
                  <div class="btn">
                    <button type="submit" class="button2">Submit</button>
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

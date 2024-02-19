import React from "react";
import "./contact.css"; // Import the CSS file containing styles

const Contact = () => {
    return (
        <div className="contact" id="contact">
            <h3>Contact</h3>
            <section id="contact">
                <div className="wrapper">
                    <div className="col-a">
                        <header>
                            <h2>Contact</h2>
                        </header>
                        <div className="content">
                            <div id="Container">
                                <form className="form">
                                    <div id="login-lable">Get in Touch</div>
                                    <input className="form-content" type="text" placeholder="Email" />
                                    <input className="form-content" type="password" placeholder="Message" />
                                    <button>Submit</button>
                                </form>

                                <div id="rays">
                                    <svg
                                        fill="none"
                                        viewBox="0 0 299 152"
                                        height="9em"
                                        width="18em"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        {/* SVG paths and definitions */}
                                    </svg>
                                </div>

                                <div id="emiter">
                                    <svg
                                        fill="none"
                                        viewBox="0 0 160 61"
                                        height="61"
                                        width="160"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        {/* SVG paths and definitions */}
                                    </svg>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default Contact;

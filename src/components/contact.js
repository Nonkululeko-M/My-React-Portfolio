import React from "react";

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
                    <ul>
                      <li>
                        <a href="mailto: lucyanovidio@gmail.com" title="Enviar e-mail">
                          

                          lucyanovidio@gmail.comhgjhjgkiiul
                        </a>
                      </li>
                      <li>
                        <a href="tel:+5521971602369" title="Fazer ligação">
                          <img
                            src="./assets/icons/celular.svg"
                            alt="Ícone de celular."
                            id="cel"
                          />
                          +55 21 97160-2369
                        </a>
                      </li>
                    </ul>

                    <a
                      className="button"
                      title="Me chama no zap!"
                      href="https://api.whatsapp.com/send?phone=5521971602369&text=Fala,%20Lucyan!%20Vim%20do%20teu%20portifólio,%20quero%20trabalhar%20contigo!"
                      target="_blank"
                    >
                      <svg
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M16.6 14.0001C16.4 13.9001 15.1 13.3001 14.9 13.2001C14.7 13.1001 14.5 13.1001 14.3 13.3001C14.1 13.5001 13.7 14.1001 13.5 14.3001C13.4 14.5001 13.2 14.5001 13 14.4001C12.3 14.1001 11.6 13.7001 11 13.2001C10.5 12.7001 10 12.1001 9.6 11.5001C9.5 11.3001 9.6 11.1001 9.7 11.0001C9.8 10.9001 9.9 10.7001 10.1 10.6001C10.2 10.5001 10.3 10.3001 10.3 10.2001C10.4 10.1001 10.4 9.9001 10.3 9.8001C10.2 9.7001 9.7 8.5001 9.5 8.0001C9.4 7.3001 9.2 7.3001 9 7.3001C8.9 7.3001 8.7 7.3001 8.5 7.3001C8.3 7.3001 8 7.5001 7.9 7.6001C7.3 8.2001 7 8.9001 7 9.7001C7.1 10.6001 7.4 11.5001 8 12.3001C9.1 13.9001 10.5 15.2001 12.2 16.0001C12.7 16.2001 13.1 16.4001 13.6 16.5001C14.1 16.7001 14.6 16.7001 15.2 16.6001C15.9 16.5001 16.5 16.0001 16.9 15.4001C17.1 15.0001 17.1 14.6001 17 14.2001C17 14.2001 16.8 14.1001 16.6 14.0001ZM19.1 4.9001C15.2 1.0001 8.9 1.0001 5 4.9001C1.8 8.1001 1.2 13.0001 3.4 16.9001L2 22.0001L7.3 20.6001C8.8 21.4001 10.4 21.8001 12 21.8001C17.5 21.8001 21.9 17.4001 21.9 11.9001C22 9.3001 20.9 6.8001 19.1 4.9001ZM16.4 18.9001C15.1 19.7001 13.6 20.2001 12 20.2001C10.5 20.2001 9.1 19.8001 7.8 19.1001L7.5 18.9001L4.4 19.7001L5.2 16.7001L5 16.4001C2.6 12.4001 3.8 7.4001 7.7 4.9001C11.6 2.4001 16.6 3.7001 19 7.5001C21.4 11.4001 20.3 16.5001 16.4 18.9001Z"
                          fill="white"
                        />
                      </svg>
                      WhatsApp
                    </a>
                  </div>
                </div>

                <div className="col-b">
                  <img src="./assets/images/celular-2.png" alt="Ícone de celular." />
                </div>
              </div>
            </section>
         </div>
    );
}
export default Contact;

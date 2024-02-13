import React from 'react';
import myop from '../images/figma.svg'

const Project = () => {
  return (
    <section id="Projects">
      <div className="wrapper">
        <section id="projects">
          <div className="wrapper">
            <h2>Projetos</h2>
            <div className="content">
              <div className="cards">
                <div className="card">
                  <h3>Barkery Website</h3>
                  <div className="img-wrapper">
                    <img
                      src={myop}
                      alt="Barkery"
                    />
                    <div className="buttons">
                      <a
                        href="https://github.com/squad-30/OrangeEvolution-Squad30"
                        target="_blank"
                        rel="noopener noreferrer"
                        title="Repositório no Github"
                      >
                        {/* GitHub SVG */}
                      </a>
                      <a
                        href="https://orangeevolution-squad30.up.railway.app"
                        target="_blank"
                        rel="noopener noreferrer"
                        title="Ver Projeto"
                      >
                        {/* View Project SVG */}
                      </a>
                    </div>
                  </div>
                  <p>Plataforma de estudos desenvolvida na Hackathon do Programa de Formação 4 da FCamara.</p>
                  <p>HTML - CSS - JS - NodeJS - Express - SQLite</p>
                </div>
                <div className="card">
                  <h3>Orange Evolution</h3>
                  <div className="img-wrapper">
                    <img
                      src={myop}
                      alt="GIF do projeto Orange Evolution."
                    />
                    <div className="buttons">
                      <a
                        href="https://github.com/squad-30/OrangeEvolution-Squad30"
                        target="_blank"
                        rel="noopener noreferrer"
                        title="Repositório no Github"
                      >
                        {/* GitHub SVG */}
                      </a>
                      <a
                        href="https://orangeevolution-squad30.up.railway.app"
                        target="_blank"
                        rel="noopener noreferrer"
                        title="Ver Projeto"
                      >
                        {/* View Project SVG */}
                      </a>
                    </div>
                  </div>
                  <p>Plataforma de estudos desenvolvida na Hackathon do Programa de Formação 4 da FCamara.</p>
                  <p>HTML - CSS - JS - NodeJS - Express - SQLite</p>
                </div>
              </div>
              
            </div>
          </div>
        </section>
      </div>
    </section>
  );
}

export default Project;

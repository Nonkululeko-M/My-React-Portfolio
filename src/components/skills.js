import React from 'react';
import JavaImage from '../images/java (1).png'
import pythonImage from '../images/python.png'
import ReactImage from '../images/react.png';

const Skills = () => {
  return (
    <section id="knowledge">
      <div className="wrapper">
        <header>
          <h2>Skills</h2>
        </header>
        <div className="content">
          <div className="cards">
            <div className="card">
              <img src= {JavaImage} alt="HTML Icon" />
              <h3>Java</h3>
              
            </div>
            <div className="card">
              <img src="./assets/images/css.png" alt="CSS Icon" />
              <h3>CSS</h3>
              
            </div>
            <div className="card">
              <img src={ReactImage} alt="React Icon" />
              <h3>React</h3>
            </div>
            <div className="card">
              <img src="./assets/images/js.png" alt="Java Icon" />
              <h3>Java</h3>
            </div>
            <div className="card">
              <img src={pythonImage} alt="Python Icon" />
              <h3>Python</h3>
            </div>
            <div className="card">
              <img src="./assets/images/js.png" alt="JavaScript Icon" />
              <h3>JavaScript</h3>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Skills;

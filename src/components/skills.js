import React from 'react';
import JavaImage from '../images/java (1).png'
import pythonImage from '../images/python.png'
import ReactImage from '../images/react.png';
import figmaImage from '../images/figma.png'
import JSimage from '../images/javascript.png'
import cssImage from '../images/css-3.png'

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
              <img src={cssImage} alt="CSS Icon" />
              <h3>CSS</h3>
              
            </div>
            <div className="card">
              <img src={ReactImage} alt="React Icon" />
              <h3>React</h3>
            </div>
            <div className="card">
              <img src= {figmaImage} alt="Figma Icon" />
              <h3>Figma</h3>
            </div>
            <div className="card">
              <img src={pythonImage} alt="Python Icon" />
              <h3>Python</h3>
            </div>
            <div className="card">
              <img src={JSimage} alt="JavaScript Icon" />
              <h3>JavaScript</h3>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Skills;

import React, { useState } from 'react';
import JavaImage from '../images/java (1).png';
import pythonImage from '../images/python.png';
import ReactImage from '../images/react.png';
import figmaImage from '../images/figma.png';
import JSimage from '../images/javascript.png';
import cssImage from '../images/css-3.png';

const Skills = () => {
  const [ratings, setRatings] = useState({
    Java: 0,
    CSS: 0,
    React: 0,
    Figma: 0,
    Python: 0,
    JavaScript: 0
  });

  const handleHover = (skill, stars) => {
    setRatings({
      ...ratings,
      [skill]: stars
    });
  };

  const resetRating = (skill) => {
    setRatings({
      ...ratings,
      [skill]: 0
    });
  };

  return (
    <section id="knowledge">
      <div className="wrapper">
        <header>
          <h2>Skills</h2>
        </header>
        <div className="content">
          <div className="cards">
            <div className="card" onMouseEnter={() => handleHover('Java', 4)} onMouseLeave={() => resetRating('Java')}>
              <img src={JavaImage} alt="Java Icon" />
              <h3>Java</h3>
              {ratings.Java > 0 && (
                <div className="stars">
                  {[...Array(5)].map((_, index) => (
                    <span key={index} className={index < ratings.Java ? "gold" : "white"}>★</span>
                  ))}
                </div>
              )}
            </div>
            <div className="card" onMouseEnter={() => handleHover('CSS', 4)} onMouseLeave={() => resetRating('CSS')}>
              <img src={cssImage} alt="CSS Icon" />
              <h3>CSS</h3>
              {ratings.CSS > 0 && (
                <div className="stars">
                  {[...Array(5)].map((_, index) => (
                    <span key={index} className={index < ratings.CSS ? "gold" : "white"}>★</span>
                  ))}
                </div>
              )}
            </div>
            <div className="card" onMouseEnter={() => handleHover('React', 3)} onMouseLeave={() => resetRating('React')}>
              <img src={ReactImage} alt="React Icon" />
              <h3>React</h3>
              {ratings.React > 0 && (
                <div className="stars">
                  {[...Array(5)].map((_, index) => (
                    <span key={index} className={index < ratings.React ? "gold" : "white"}>★</span>
                  ))}
                </div>
              )}
            </div>
            <div className="card" onMouseEnter={() => handleHover('Figma', 4)} onMouseLeave={() => resetRating('Figma')}>
              <img src={figmaImage} alt="Figma Icon" />
              <h3>Figma</h3>
              {ratings.Figma > 0 && (
                <div className="stars">
                  {[...Array(5)].map((_, index) => (
                    <span key={index} className={index < ratings.Figma ? "gold" : "white"}>★</span>
                  ))}
                </div>
              )}
            </div>
            <div className="card" onMouseEnter={() => handleHover('Python', 3)} onMouseLeave={() => resetRating('Python')}>
              <img src={pythonImage} alt="Python Icon" />
              <h3>Python</h3>
              {ratings.Python > 0 && (
                <div className="stars">
                  {[...Array(5)].map((_, index) => (
                    <span key={index} className={index < ratings.Python ? "gold" : "white"}>★</span>
                  ))}
                </div>
              )}
            </div>
            <div className="card" onMouseEnter={() => handleHover('JavaScript', 4)} onMouseLeave={() => resetRating('JavaScript')}>
              <img src={JSimage} alt="JavaScript Icon" />
              <h3>JavaScript</h3>
              {ratings.JavaScript > 0 && (
                <div className="stars">
                  {[...Array(5)].map((_, index) => (
                    <span key={index} className={index < ratings.JavaScript ? "gold" : "white"}>★</span>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;

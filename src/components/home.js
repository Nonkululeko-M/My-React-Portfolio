import React from 'react';
import Iimages from '../images/IMG_7145.jpg'
import Linkin from '../images/25231.png'
import Giticon from '../images/174857.png'

const Home = () => {
  const handleDownloadCV = () => {
    window.open('./CV/Nonkululeko.pdf');
  };

  const handleContactInfo = () => {
    window.location.href = './#contact';
  };

  const handleLinkedInClick = () => {
    window.location.href = 'https://www.linkedin.com/in/nonkululeko-mzalwana-1a8248271/';
  };

  const handleGithubClick = () => {
    window.location.href = 'https://github.com/Nonkululeko-M?tab=repositories';
  };

  return (
    <div className="home" id="home">
    
      <div className="section__pic-container">
        <img src={Iimages} alt="MY profile picture" />
      </div>  
      <div className="section__text">
        <p className="section__text__p1">Hello, I'm</p>
        <h1 className="title">Nonkululeko Mzalwana</h1>
        <p className="section__text__p2">Frontend Developer</p>
        <div className="btn-container">
          <button className="btn btn-color-2" onClick={handleDownloadCV}>
            Download CV
          </button>
          <button className="btn btn-color-1" onClick={handleContactInfo}>
            Contact Info
          </button>
        </div>
        <div id="socials-container">
          <img
            src={Giticon}
            alt="My LinkedIn profile"
            className="icon"
            onClick={handleLinkedInClick}
          />
          <img
            src={Linkin}
            alt="My Github profile"
            className="icon"
            onClick={handleGithubClick}
          />
        </div>
      </div>
      
    </div>
  );
};

export default Home;

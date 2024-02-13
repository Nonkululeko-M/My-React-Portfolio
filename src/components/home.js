import React from 'react';
import myprofile from '../images/IMG_7145.jpg'

const Home = () => {
  return (
    <section id="home">
      <div className="wrapper">
        <div className="col-a">
          <header>
            <h4> Hello 👋🏾</h4>
            <h1>I'm Nonkululeko Mzalwana</h1>
          </header>
          <div className="content">
            <p className="line typing">Software Developer</p>
            <a className="button" href="#contact"> Contact ME </a>
          </div>
        </div>

        <div className="col-b">
          <img
            src={myprofile}
            alt="Profile picture"
            id="notebook-1"
          />
          <img
            src={myprofile}
            alt="My Picture"
            id="notebook-2"
          />
          <img
            src={myprofile}
            alt="My Profile picture"
            id="notebook-2-white"
          />
          <img
            src={myprofile}
            alt="my pic"
            id="vidro"
          />
        </div>
      </div>
    </section>
  );
}

export default Home;

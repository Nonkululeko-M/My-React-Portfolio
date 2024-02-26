import React from 'react';
import myprofile from '../images/IMG_7145.jpg'
import CV from '../images/Nonkululeko.pdf'

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
            <a className="button" href={CV} download onClick={() => window.open(CV)}>Download CV</a>


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
          alt="Profile picture"
          id= "notebook-2-white"
          />
        </div>
      </div>
    </section>
  );
}

export default Home;

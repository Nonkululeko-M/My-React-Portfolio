import React from 'react';
import myPicture from '../images/IMG_7145.jpg'

const AboutSection = () => {
  return (
    <section id="about">
      <p className="section__text__p1">Get To Know More</p>
      <h1 className="title">About Me</h1>
      <div className="section-container">
        <div className="section__pic-container">
          <img
            src={myPicture}
            alt="Profile picture"
            className="about-pic"
          />
        
        </div>
        <div className="about-details-container" style={{ textAlign: 'left' }}>
          <div className="about-containers">
            <div className="details-container">
              <img
                src="/pictures/exper-icon.jfif"
                alt="Experience icon"
                className="icon"
              />
              <h3>Experience</h3>
              <p style={{ marginBlock: '2.4rem' }}>2+ years <br />General Assistant</p>
            </div>
            <div className="details-container">
              <img
                src="/pictures/edu.png"
                alt="Education icon"
                className="icon"
              />
              <h3>Education</h3>
              <p style={{ marginBlock: '2.4rem' }}>National Diploma <br />Information Technology</p>
            </div>
          </div>
          <div className="text-container">
            <p>
              "Hello! I'm Nonkululeko Mzalwana, a passionate and creative software developer on a mission to turn innovative ideas into reality. With a solid foundation in Java, JavaScript, Python, and more, I thrive in both front-end and back-end development. What sets me apart is not just my technical expertise, but my commitment to continuous learning and adaptability.

              I'm a recent graduate with a National Diploma in Information Technology, specializing in Communication Networks. My journey into software development started as a General Assistant, where I honed my customer service skills and transitioned into the dynamic world of coding through a Software Development Program with CapaCiti.

              I bring a unique blend of technical proficiency and a knack for problem-solving. Whether it's crafting clean code, collaborating with cross-functional teams, or diving into the latest tech trends, I'm eager to contribute to innovative projects. Let's connect and explore how my skills and passion can add value to your team!"
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;

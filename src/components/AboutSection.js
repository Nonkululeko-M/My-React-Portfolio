import React from 'react';
import mY from '../images/IMG_7145.jpg'

const AboutSection = () => {
  return (
    <section id="about">
      <div className="wrapper">
        <div className="col-a">
          <header>
            <h2>About Me </h2>
          </header>
          <div className="content">
            <p>
            "Hello! I'm Nonkululeko Mzalwana, a passionate and creative software developer on a mission to turn innovative ideas into reality. With a solid foundation in Java, JavaScript, Python, and more, I thrive in both front-end and back-end development. What sets me apart is not just my technical expertise, but my commitment to continuous learning and adaptability.

I'm a recent graduate with a National Diploma in Information Technology, specializing in Communication Networks. My journey into software development started as a General Assistant, where I honed my customer service skills and transitioned into the dynamic world of coding through a Software Development Program with CapaCiti.

I bring a unique blend of technical proficiency and a knack for problem-solving. Whether it's crafting clean code, collaborating with cross-functional teams, or diving into the latest tech trends, I'm eager to contribute to innovative projects. Let's connect and explore how my skills and passion can add value to your team!"
            </p>
          </div>
        </div>

        <div className="col-b">
          <img
            src={mY}
            alt="Nonkululeko Mzalwana image"
          />
        </div>
      </div>
    </section>
  );
}

export default AboutSection;

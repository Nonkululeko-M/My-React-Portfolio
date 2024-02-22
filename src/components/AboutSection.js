import React from 'react';
import mY from '../images/IMG_7145.jpg'
import { BiAward, BiBriefcaseAlt } from 'react-icons/bi';
import nkuleh from '../images/nkule.jpg'


const AboutSection = () => {
  return (
    <section id="about">
      <div className="wrapper">
        <div className="col-a">
          <header>
            <h2>About Me </h2>
          </header>
          <div className="content">
          <div className="about_info grid"> {/* Container for information */}
            {/* Box for experience */}
            <div className="about_box">
                {/* Icon for experience */}
               
                <BiAward className="about_icon"size={30}  />
                {/* Title for experience */}
                <h3 className="about_title">Experience</h3>
                {/* Subtitle for experience */}
                <span className="about_subtitle">-Experience 2+  years General Assistant</span>
                <span className='abouttext'>-6 mnths Software Developer Intern</span>
            </div>

            {/* Box for completed projects */}
            <div className="about_box">
                {/* Icon for completed projects */}
                <BiBriefcaseAlt className="about_icon" size={30} />
                {/* Title for completed projects */}
                <h3 className="about_title">Education</h3>
                {/* Subtitle for completed projects */}
                <span className="about_subtitle">National Diploma:
Information Technology in Communication Networks </span>
            </div>

            {/* Box for support */}
           
            </div> 
            <p>
            "Hello! I'm Nonkululeko Mzalwana, a passionate and creative software developer on a mission to turn innovative ideas into reality. With a solid foundation in Java, JavaScript, Python, and more, I thrive in both front-end and back-end development. What sets me apart is not just my technical expertise, but my commitment to continuous learning and adaptability.

I'm a recent graduate with a National Diploma in Information Technology. My journey into software development started as a General Assistant, where I honed my customer service skills and transitioned into the dynamic world of coding through a Software Development Program with CapaCiti.

I bring a unique blend of technical proficiency and a knack for problem-solving. Let's connect and explore how my skills and passion can add value to your team!"
            </p>
          </div>
        </div>

        <div className="col-b">
          <img
            src={nkuleh}
            alt="Nonkululeko Mzalwana image"
          />
        </div>
      </div>
    </section>
  );
}

export default AboutSection;

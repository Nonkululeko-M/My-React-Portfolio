// App.js
import React from 'react';
import './App.css';
import Navbar from './components/Navbar'; // Corrected component name and path
import Home from './components/Home'; // Assuming you have a Home component
import AboutSection from './components/AboutSection';
import Skills from './components/skills';
import Project from './components/Project';
import Testimonial from './components/Testimonial';
import Contact from './components/Contact';


const App = () => {
  return (
    <div>
      <Home /> {/* Corrected component name */}
      <Navbar /> {/* Corrected component name */}
      <AboutSection />
      <Skills />
      <Project/>
      <Testimonial/>
      <Contact/>
    </div>
  );
}

export default App;

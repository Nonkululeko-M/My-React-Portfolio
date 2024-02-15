// App.js
import React from 'react';
import './App.css';
import Navbar from './components/Navbar'; // Corrected component name and path
import Home from './components/Home'; // Assuming you have a Home component
import AboutSection from './components/AboutSection';
import Skills from './components/skills';
import Project from './components/Project';
import Contact from './components/Contact';
import Testiomonials from './components/Testimonials';


const App = () => {
  return (
    <div>
      <Home /> {/* Corrected component name */}
      <Navbar /> {/* Corrected component name */}
      <AboutSection />
      <Skills />
      <Project/>
      <Testiomonials/>
      <Contact/>
      
    </div>
  );
};

export default App;

// App.js
import React from 'react';
import './App.css';
import Navbar from './components/Navbar'; // Corrected component name and path
import Home from './components/home'; // Assuming you have a Home component
import AboutSection from './components/AboutSection';
import Skills from './components/skills';
import Project from './components/project';
import Contact from './components/contact';
import Testiomonials from './components/Testimonials';
import Footer from './components/Footer';
import ToggleSwitch from './components/light';



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
      <Footer/>
      <ToggleSwitch/>
     
      
    </div>
  );
};

export default App;


// App.js
import React from 'react';
import './App.css';
import Navbar from './components/Navbar'; // Corrected component name and path
import Home from './components/Home'; // Assuming you have a Home component
import about from './components/about';
const App = () => {
  return (
    <div>
      <Home /> {/* Corrected component name */}
      <Navbar /> {/* Corrected component name */}
      <about />
    </div>
  );
}

export default App;

import React from 'react';
import Home from './home';
import MapComponent from '../components/maps';
import '../styles/styleee.css'; // Import the CSS file

function Frontpage() {
  return (
    <div className="page-container">
      <div className="home-container">
        <Home />
      </div>
      <div className="map-container">
        <MapComponent />
      </div>
    </div>
  );
}

export default Frontpage;

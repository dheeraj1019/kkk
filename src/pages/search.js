import React from 'react';
import { assets } from '../images/images';
import '../styles/search.css';
import MapComponent from '../components/maps';

const BookRideSearch = () => {
  return (
    <div className="book-ride-container">
      {/* Left side: Arrow and Map */}
      <div className="left-side">
        <button className="back-button">
          <img src={assets.bacck} alt="Back" />
        </button>
        <MapComponent /> {/* Map component on the left */}
      </div>

      {/* Right side: Form fields */}
      <div className="right-side">
        <div className="input-container">
          <div className="location-input">
            <div className="pickup-dot" />
            <input type="text" className="input-field" placeholder="Pickup Location" />
          </div>

          <button className="via-button">+ Via</button>

          <div className="location-input drop-location">
            <div className="drop-square" />
            <input type="text" className="input-field" placeholder="Drop Location" />
          </div>
        </div>

        <button className="saved-location-button">Saved Location</button>
      </div>
    </div>
  );
};

export default BookRideSearch;

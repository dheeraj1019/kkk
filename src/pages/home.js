import React, { useState } from 'react'; // Import useState
import '../styles/home.css'; 
import { assets } from '../images/images'; // Adjust the path according to your project structure
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const [inputValue, setInputValue] = useState(''); // State for the input value
  const [fontFamily, setFontFamily] = useState('Arial'); // State for the font family
  const nav=useNavigate();
  // Function to handle input change
  const handleInputChange = (event) => {
    setInputValue(event.target.value);
    // Change the font family based on the input
    if (event.target.value.length > 5) {
      setFontFamily('Comic Sans MS'); // Change to desired font if more than 5 characters
    } else {
      setFontFamily('Arial'); // Default font
    }
  };

  return (
    <div className="home-container">
      <div className="header">
        <h2 className="journey-title">JOURNEY MATE</h2>
        <img
          className="profile-pic"
          src="https://upload.wikimedia.org/wikipedia/commons/6/6b/Ratan_Tata_2011_%28The_TCS_Story_Launch_-_CII%29_%28cropped%29.jpg"
          alt="Profile"
        />
      </div>
      
      {/* Button container for horizontal arrangement */}
      <div className="button-container">
        <button onClick={()=>nav('/search')} className="search-button">
          <img
            className="button-image"  // Added class for button image
            src={assets.scc} // Replace with your image URL
            alt="Navigate to Cab Search"
          />
        </button>
        <button className="search-button">
          <img
            className="button-image"  // Added class for button image
            src={assets.caab} // Replace with your image URL
            alt="Navigate to Scooty Search"
          />
        </button>
        <button className="search-button">
          <img
            className="button-image"  // Added class for button image
            src={assets.calen} // Replace with your image URL
            alt="Navigate to Car Search"
          />
        </button>
        <button className="search-button">
          <img
            className="button-image"  // Added class for button image
            src={assets.settings} // Replace with your image URL
            alt="Navigate to More Search"
          />
        </button>
      </div>

      <div className="input-container">
        <input
          type="text"
          className="input-field"
          placeholder="Enter destination"
          value={inputValue} // Bind the input value to state
          onChange={handleInputChange} // Handle input change
          style={{ fontFamily: fontFamily }} // Apply dynamic font
        />
      </div>
    </div>
  );
};

export default Home;

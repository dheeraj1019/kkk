import React, { useRef, useEffect } from 'react';
import { Loader } from '@googlemaps/js-api-loader';

function MapComponent({ address }) {
  const mapRef = useRef(null);

  useEffect(() => {
    const loader = new Loader({
      apiKey: process.env.REACT_APP_GOOGLE_MAPS_API_KEY, // Make sure this environment variable is set
      version: "weekly",
    });

    loader
      .load()
      .then(() => {
        // Check if window.google and window.google.maps are defined
        if (window.google && window.google.maps && mapRef.current) {
          const map = new window.google.maps.Map(mapRef.current, {
            center: { lat: 37.7749, lng: -122.4194 }, // Default center location
            zoom: 10,
          });

          const geocoder = new window.google.maps.Geocoder();
          geocoder.geocode({ address }, (results, status) => {
            if (status === "OK" && results[0]) {
              map.setCenter(results[0].geometry.location);
              new window.google.maps.Marker({
                map,
                position: results[0].geometry.location,
              });
            } else {
              console.error(`Geocode failed: ${status}`);
            }
          });
        } else {
          console.error("Google Maps API or mapRef is not accessible.");
        }
      })
      .catch((error) => {
        console.error("Google Maps API failed to load:", error);
      });
  }, [address]);

  return <div style={{ height: "500px", width: "100%" }} ref={mapRef} />;
}

export default MapComponent;

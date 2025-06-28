// WeatherDisplay.js
import React from 'react';

function WeatherDisplay({ weather }) {
  const { temperature, conditions } = weather;

  const tempStyle = {
    color: temperature > 20 ? 'red' : 'blue',
  };

  return (
    <div>
      <p>
        Temperature: <span style={tempStyle}>{temperature}°C</span>
      </p>
      <p>Conditions: {conditions}</p>
    </div>
  );
}

export default WeatherDisplay;

import { useState } from 'react';

const WeatherForecast = () => {
 const [selectedCity, setSelectedCity] = useState('Paris');

 return (
    <div className="forecast-container">
      <h1>Météo France</h1>
      <div className="search-container">
        <input
          type="text"
          placeholder="Rechercher une ville, un pays.."
          onChange={(e) => setSelectedCity(e.target.value)}
        />
      </div>
      <h2>{selectedCity}</h2>
      {/* Add the remaining content of the forecast */}
    </div>
 );
};

export default WeatherForecast;
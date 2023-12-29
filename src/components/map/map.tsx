import React, { useState } from 'react';
import { GoogleMap, Marker, InfoWindow } from '@react-google-maps/api';
import { Box } from '@chakra-ui/react';
import SearchBar from '@/components/searchBar/search';

// Interface representing the structure of a City
interface City {
  id: number;
  name: string;
  latitude: number;
  longitude: number;
  temperature: number;
}

const MapWithWeather = () => {
  const [mapCenter, setMapCenter] = useState({ lat: 46.6031, lng: 1.8883 });
  const [selectedCity, setSelectedCity] = useState<City | null>(null);

  // Replace this with the actual structure of your cities array
  const [cities, setCities] = useState<City[]>([
    { id: 1, name: 'City1', latitude: 40.7128, longitude: -74.006, temperature: 25 },
    { id: 2, name: 'City2', latitude: 34.0522, longitude: -118.2437, temperature: 28 },
    // Add more cities as needed
  ]);

  const handleCitySelect = (city: City) => {
    setSelectedCity(city);
    setMapCenter({ lat: city.latitude, lng: city.longitude });
  };

  const handleSearch = async (searchQuery: string) => {
    try {
      // Replace the URL with the actual endpoint of your weather API
      const response = await fetch(
        `https://api.exampleweather.com/data?q=${searchQuery}&apikey=8c756447e156bdb757c8dc60c3bbe24c`
      );

      if (response.ok) {
        const data = await response.json();
        const city: City = {
          id: data.id,
          name: data.name,
          latitude: data.coord.lat,
          longitude: data.coord.lon,
          temperature: data.main.temp,
        };

        setSelectedCity(city);
        setMapCenter({ lat: city.latitude, lng: city.longitude });
      } else {
        console.error('City not found');
      }
    } catch (error) {
      console.error('Error fetching city data', error);
    }
  };

  return (
    <Box>
      <SearchBar onSearch={handleSearch} />

      <GoogleMap
        center={mapCenter}
        zoom={6}
        mapContainerStyle={{ height: '500px', width: '100%' }}
      >
        {selectedCity && (
          <InfoWindow
            position={{ lat: selectedCity.latitude, lng: selectedCity.longitude }}
            onCloseClick={() => setSelectedCity(null)}
          >
            <div>
              <h2>{selectedCity.name}</h2>
              <p>Temperature: {selectedCity.temperature}°C</p>
            </div>
          </InfoWindow>
        )}

        {/* Use the mapped cities array */}
        {cities.map((city) => (
          <Marker
            key={city.id}
            position={{ lat: city.latitude, lng: city.longitude }}
            onClick={() => handleCitySelect(city)}
          />
        ))}
      </GoogleMap>
    </Box>
  );
};

export default MapWithWeather;

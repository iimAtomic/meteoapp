import React, { useState, useEffect } from "react";
import axios from "axios";
import { GoogleMap, useLoadScript, Marker, InfoWindow } from "@react-google-maps/api";

interface WeatherData {
  name: string;
  main: {
    temp: number;
  };
  weather: {
    description: string;
    icon: string;
  }[];
}

interface Region {
  name: string;
  coordinates: { lat: number; lng: number };
}

const regions: Region[] = [
 { name: "Paris", coordinates: { lat: 48.8566, lng: 2.3522 } },
  { name: "Marseille", coordinates: { lat: 43.2965, lng: 5.3698 } },
  { name: "Lyon", coordinates: { lat: 45.75, lng: 4.85 } },
  { name: "Toulouse", coordinates: { lat: 43.6047, lng: 1.4442 } },
  { name: "Nice", coordinates: { lat: 43.7102, lng: 7.2620 } },
  { name: "Nantes", coordinates: { lat: 47.2184, lng: -1.5536 } },
  { name: "Strasbourg", coordinates: { lat: 48.5734, lng: 7.7521 } },
  { name: "Montpellier", coordinates: { lat: 43.6110, lng: 3.8767 } },
  { name: "Bordeaux", coordinates: { lat: 44.8378, lng: -0.5792 } },
  { name: "Lille", coordinates: { lat: 50.6292, lng: 3.0573 } },
  { name: "Rennes", coordinates: { lat: 48.1173, lng: -1.6778 } },
  { name: "Reims", coordinates: { lat: 49.4432, lng: 1.0999 } },
  { name: "Le Havre", coordinates: { lat: 49.4938, lng: 0.1077 } },
  { name: "Saint-Étienne", coordinates: { lat: 45.4397, lng: 4.3872 } },
  { name: "Toulon", coordinates: { lat: 43.1242, lng: 5.9280 } },
  { name: "Angers", coordinates: { lat: 47.4784, lng: -0.5632 } },
  { name: "Grenoble", coordinates: { lat: 45.1885, lng: 5.7245 } },
  { name: "Dijon", coordinates: { lat: 47.3220, lng: 5.0415 } },
  { name: "Nîmes", coordinates: { lat: 43.8367, lng: 4.3601 } },
  { name: "Aix-en-Provence", coordinates: { lat: 43.5297, lng: 5.4474 } },
  { name: "Saint-Denis", coordinates: { lat: 48.9356, lng: 2.3376 } },
  // Ajoutez d'autres régions de la France avec leurs coordonnées
];

const WeatherMap: React.FC = () => {
  const [weatherDataList, setWeatherDataList] = useState<WeatherData[]>([]);
  const [selectedMarker, setSelectedMarker] = useState<WeatherData | null>(null);
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: "AIzaSyAwjPsWJyl34bEJdPQ9HhHXbWmy1fzvtds",
  });

  useEffect(() => {
    const fetchDataForRegions = async () => {
      const appid = "b8789f5073342c8ec0bba1a945278ae5";
      const requests = regions.map(async (region) => {
        try {
          const response = await axios.get(
            `https://api.openweathermap.org/data/2.5/weather?lat=${region.coordinates.lat}&lon=${region.coordinates.lng}&appid=${appid}&units=metric`
          );
          return { ...response.data, name: region.name } as WeatherData;
        } catch (error) {
          console.error(`Error fetching weather data for ${region.name}:`, error);
          return null;
        }
      });

      const weatherDataArray = await Promise.all(requests);
      setWeatherDataList(weatherDataArray.filter((data) => data !== null));
    };

    fetchDataForRegions();
  }, []);

  const handleMarkerClick = (weatherData: WeatherData) => {
    setSelectedMarker(weatherData);
  };

  const handleInfoWindowClose = () => {
    setSelectedMarker(null);
  };

  if (!isLoaded) return <div>Loading...</div>;

  return (
    <>
      {weatherDataList && (
        <GoogleMap
          zoom={6}
          center={{ lat: 46.6031, lng: 1.8883 }}
          mapContainerStyle={{ width: "700px", height: "600px", alignContent:"center" }}
        >
          {weatherDataList.map((weatherData, index) => (
            <Marker
              key={index}
              position={{
                lat: regions[index].coordinates.lat,
                lng: regions[index].coordinates.lng,
              }}
              icon={{
                url: `https://openweathermap.org/img/wn/${weatherData.weather[0].icon}.png`,
                scaledSize: new window.google.maps.Size(40, 40),
                origin: new window.google.maps.Point(0, 0),
                anchor: new window.google.maps.Point(20, 20),
              }}
              onClick={() => handleMarkerClick(weatherData)}
            />
          ))}
          {selectedMarker && (
            <InfoWindow
              position={{
                lat: regions.find((region) => region.name === selectedMarker.name)?.coordinates.lat || 0,
                lng: regions.find((region) => region.name === selectedMarker.name)?.coordinates.lng || 0,
              }}
              onCloseClick={handleInfoWindowClose}
            >
              <div style={{ textAlign: "center" }}>
                <p style={{ color: "black" }}>{selectedMarker.name}</p>
                <p style={{ color: "black" }}>{selectedMarker.weather[0].description}</p>
                <p style={{ color: "black" }}>{selectedMarker.main.temp}°C</p>
                <img
                  src={`https://openweathermap.org/img/wn/${selectedMarker.weather[0].icon}.png`}
                  alt="Weather Icon"
                />
              </div>
            </InfoWindow>
          )}
        </GoogleMap>
      )}
    </>
  );
};

export default WeatherMap;

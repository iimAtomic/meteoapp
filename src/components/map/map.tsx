import React, { useEffect, useState } from "react";
import { GoogleMap, useLoadScript, Marker } from "@react-google-maps/api";
import axios from "axios";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSun, faCloud, faCloudRain, IconDefinition } from "@fortawesome/free-solid-svg-icons";
import styles from "./geo.module.css";

interface Location {
  lat: number;
  lon: number;
}

interface TemperatureData {
  temp: number;
}

interface LocationWithTemperature extends Location {
  temperatureType: "sunny" | "cloudy" | "rainy";
}

const temperatureIcons: Record<string, IconDefinition> = {
  sunny: faSun,
  cloudy: faCloud,
  rainy: faCloudRain,
};

function Map() {
  const centerOfFrance: google.maps.LatLngLiteral = { lat: 48.866667, lng: 2.333333 };
  const [locationsWithTemperature, setLocationsWithTemperature] = useState<LocationWithTemperature[]>([]);
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: "AIzaSyAwjPsWJyl34bEJdPQ9HhHXbWmy1fzvtds",
  });

  // ...

  useEffect(() => {
    const fetchData = async () => {
        const latitude = 50.814; 
        const longitude = 15.709; 
        const apiKey = "8afd059573ed4e24048f85ea956e2aa2"; 
    
        try {
            const response = await axios.get(
                `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${apiKey}`
            );
    
            console.log(response.data);
    
            const { coord, main, weather } = response.data;
    
            if (!coord || !main || !weather) {
                console.error("Données de localisation, de température ou de conditions météorologiques non valides :", response.data);
                return;
            }
    
            const { lat, lon } = coord;
            const temperature = main.temp;
            const weatherCondition = weather[0].main; 
    
            if (lat === undefined || lon === undefined || isNaN(lat) || isNaN(lon)) {
                console.error("Position non valide :", response.data);
                return;
            }
    
            let temperatureType: "sunny" | "cloudy" | "rainy" = "sunny";
    
            if (weatherCondition === "Rain") {
                temperatureType = "rainy";
            } else if (weatherCondition === "Clouds") {
                temperatureType = "cloudy";
            }
    
            const locationData: LocationWithTemperature = { lat, lon, temperatureType };
            setLocationsWithTemperature([locationData]);
        } catch (error) {
            console.error("Erreur lors de la récupération des données de température :", error);
        }
    };
    
    

    fetchData();
}, []);

// ...


    if (!isLoaded) return <div>Loading...</div>;

   // ...

return (
    <GoogleMap zoom={6} center={centerOfFrance} mapContainerClassName={styles.mapcontainer}>
        {locationsWithTemperature.map((location) => {
    const { lat, lon, temperatureType } = location;
    const markerKey = `${lat}-${lon}`;

    if (!temperatureIcons[temperatureType]) {
        console.error("Type de température non valide :", temperatureType);
        return null;
    }

    console.log("Temperature Type:", temperatureType); // Ajoutez cette ligne pour vérifier le type de température

    return (
        <Marker
            key={markerKey}
            position={{ lat, lng: lon }}
            icon={{
                url: "", // Laissez l'URL vide, car vous utilisez FontAwesome
                scaledSize: new window.google.maps.Size(40, 40),
                anchor: new window.google.maps.Point(20, 20), // Ajustez la position de l'icône sur le marqueur
            }}
>
    <FontAwesomeIcon icon={temperatureIcons[temperatureType]} />
</Marker>

            );
        })}
    </GoogleMap>
);

}

export default Map;



export interface City {
    name: string;
    coordinates: {
      lat: number;
      lng: number;
    };
  }
  
  const cities: City[] = [
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
  ];
  
  export default cities;
  
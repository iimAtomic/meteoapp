

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
    // Ajoutez d'autres villes ici
  ];
  
  export default cities;
  
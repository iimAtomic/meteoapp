import axios from 'axios';

export default async function handler(req: any, res: any) {
  const { query } = req.query;

  try {
    const response = await axios.get(
      `https://api.openweathermap.org/data/2.5/weather?q=${query}&appid=1131910f4549888232cb5784114c6247`
    );

    const weatherData = response.data;
    res.status(200).json(weatherData);
  } catch (error) {
    res.status(500).json({ error: 'Erreur lors de la récupération des données météorologiques.' });
  }
}

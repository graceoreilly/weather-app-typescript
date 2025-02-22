import React, { useState, useEffect } from "react";
import Header from "./components/Header/Header";
import CurrentWeather from "./components/CurrentWeatherCard.tsx/CurrentWeatherCard";
// import Router from "./components/Router/Router";
//import FiveDayForecast from "./components/FiveDayForecast/FiveDayForecast";

const API_KEY = import.meta.env.VITE_APP_API_KEY;

interface WeatherData {
  name: string;
  main: {
    temp: number;
    feels_like: number;
    humidity: number;
  };
  weather: {
    main: string;
    description: string;
  }[];
  wind: {
    speed: number;
  };
}

const App: React.FC = () => {
  const [data, setData] = useState<WeatherData | null>(null);
  const [location, setLocation] = useState("");

//React.ChangeEvent<HTMLInputElement> indicates that the event is a change event on an input element
  function handleInputChange(e: React.ChangeEvent<HTMLInputElement>) {
    setLocation(e.target.value);
  }

  async function fetchWeather(location: string) {
    if (location.trim() !== "") {
      const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&units=Metric&appid=${API_KEY}`;
      const res = await fetch(url);
      const searchData = await res.json();
      setData(searchData);
      setLocation("");
    }
  }

  useEffect(() => {
    // Fetch weather data for London when the component mounts
    fetchWeather("London");
  }, []);

  function handleKeyDown(e: React.KeyboardEvent<HTMLInputElement>) {
    if (e.key === "Enter") fetchWeather(location);
  }

  return (
    <div>
      <Header
        location={location}
        onInputChange={handleInputChange}
        onKeyDown={handleKeyDown}
        onFetchWeather={() => fetchWeather(location)}
      />
      {data && <CurrentWeather data={data} />}
    </div>
  );
};

export default App;

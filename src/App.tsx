import React from "react";
import Header from "./components/Header/Header";
import CurrentWeather from "./components/CurrentWeatherCard.tsx/CurrentWeatherCard";
import FiveDayForecast from "./components/FiveDayForecast/FiveDayForecast";

const App: React.FC = () => {
  return (
    <div>
      <Header />
      <CurrentWeather />
      <FiveDayForecast />
    </div>
  );
};

export default App;

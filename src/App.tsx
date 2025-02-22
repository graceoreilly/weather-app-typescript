import React from "react";
import Header from "./components/Header/Header";
import CurrentWeather from "./components/CurrentWeatherCard.tsx/CurrentWeatherCard";
// import Router from "./components/Router/Router";
import { useState, useEffect } from "react";
//import FiveDayForecast from "./components/FiveDayForecast/FiveDayForecast";

const API_KEY = import.meta.env.VITE_APP_API_KEY;


const App: React.FC = () => {
    const [data, setData] = useState({});
    const [location, setLocation] = useState("")

     function handleInputChange(e) {
        setLocation(e.target.value)
      }
    
      async function fetchWeather (location) {
        if (!location) 
          return;
        const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&units=Metric&appid=${API_KEY}`;
        const res = await fetch(url);
        const searchData = await res.json();
        console.log(searchData)
        setData(searchData);
        setLocation("")
      };
      
    
      useEffect(() => {
        //This function is executed after the component mounts
        fetchWeather("London");
        //The empty array means this effect runs only once
      }, []);
    
      function handleKeyDown(e) {
        if(e.key === "Enter") fetchWeather(location);
      }

  return (
    <div>
      <Header 
      location={location}
      data={data}
      onInputChange={handleInputChange}
      onFetchWeather={() => fetchWeather(location)}
      />
      <CurrentWeather
      data={data}
       />
      {/* <FiveDayForecast /> */}
    </div>
  );
};

export default App;

import { useState, useEffect } from "react";
import styles from "../../WeatherApp/WeatherApp.module.css";

// const API_ENDPOINT = import.meta.env.VITE_APP_API_ENDPOINT;
const API_KEY = import.meta.env.VITE_APP_API_KEY;

// async function search() {
//   const [data, setData] = useState({})
//   const url = `https://api.openweathermap.org/data/2.5/weather?q=London&appid=${API_KEY}`
//   const res = await fetch(url);
//   const searchData = await res.json;
//   console.log(searchData)
// }

function CurrentWeather() {
  const [data, setData] = useState({});

  const fetchWeather = async () => {
    const url = `https://api.openweathermap.org/data/2.5/weather?q=London&appid=${API_KEY}`;
    const res = await fetch(url);
    const searchData = await res.json();
    setData(searchData);
    console.log(searchData);
  };

  useEffect(() => {
    fetchWeather();
  }, []);

  return (
    <div className={styles.appContainer}>
      <div>
        <section className={styles.currentWeather}>
          <h2>Current Weather</h2>
          <button onClick={fetchWeather}>CLICK HERE FOR DATA</button>
        </section>
        <section className={styles.currentWeather}>
          <h2>Current Weather</h2>
          <div className={styles.weatherInfo}>
            <div className={styles.temperature}>
              <span className={styles.temp}>22°C</span>
              <span className={styles.feelsLike}>Feels like: 24°C</span>
            </div>
            <div className={styles.weatherIcon}>
              <div className={styles.sun}></div>
              <div className={styles.cloud}></div>
            </div>
            <div className={styles.details}>
              <p className={styles.condition}>Partly Cloudy</p>
              <p className={styles.humidity}>Humidity: 60%</p>
              <p className={styles.wind}>Wind: 5 km/h</p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default CurrentWeather;
import { useState } from "react";
import styles from "../../WeatherApp/WeatherApp.module.css";

const API_ENDPOINT = import.meta.env.VITE_APP_API_KEY;

function CurrentWeather() {
  const [weatherNow, setWeatherNow] = useState(null)

  async function handleClick() {
    const response = await fetch(API_ENDPOINT)
    const data = await response.json();
    setWeatherNow(data)
  }

return <>
<div onClick={handleClick} className={styles.appContainer}>
{weatherNow ? (
          <div>
            <p>{JSON.stringify(weatherNow)}</p>
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
        ) : (
          <p>Click to fetch current weather</p>
        )}
</div>
</>
}

export default CurrentWeather;
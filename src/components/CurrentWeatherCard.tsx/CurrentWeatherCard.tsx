import styles from "../../WeatherApp/WeatherApp.module.css";


function CurrentWeather({data}) {
  

  return (
    <div className={styles.appContainer}>
      <div>
        {/* <section className={styles.currentWeather}>
          <h2>Current Weather</h2>
          <button>CLICK HERE FOR DATA</button>
        </section> */}
        <section className={styles.currentWeather}>
          <h2>Current Weather</h2>
          <div className={styles.weatherInfo}>
            <div className={styles.temperature}>
              <span className={styles.temp}>{data.main ? `${Math.floor(data.main.temp)}°C` : "Loading weather..."}</span>
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
"use client"
import styles from "./WeatherApp.module.css"

//Specifing the type as React.ReactElement ensures the function returns a valid React Element
function WeatherApp(): React.ReactElement {

  return (
    <div className={styles.appContainer}>
      <main>
        <section className={styles.forecast}>
          <h2>5-Day Forecast</h2>
          <div className={styles.forecastContainer}>
            <div className={styles.forecastDay}>
              <p className={styles.day}>Mon</p>
              <div className={`${styles.forecastIcon} ${styles.sunny}`}></div>
              <p className={styles.forecastTemp}>25°C</p>
            </div>
            <div className={styles.forecastDay}>
              <p className={styles.day}>Tue</p>
              <div className={`${styles.forecastIcon} ${styles.cloudy}`}></div>
              <p className={styles.forecastTemp}>22°C</p>
            </div>
            <div className={styles.forecastDay}>
              <p className={styles.day}>Wed</p>
              <div className={`${styles.forecastIcon} ${styles.rainy}`}></div>
              <p className={styles.forecastTemp}>18°C</p>
            </div>
            <div className={styles.forecastDay}>
              <p className={styles.day}>Thu</p>
              <div className={`${styles.forecastIcon} ${styles.stormy}`}></div>
              <p className={styles.forecastTemp}>16°C</p>
            </div>
            <div className={styles.forecastDay}>
              <p className={styles.day}>Fri</p>
              <div className={`${styles.forecastIcon} ${styles.sunny}`}></div>
              <p className={styles.forecastTemp}>23°C</p>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}

export default WeatherApp


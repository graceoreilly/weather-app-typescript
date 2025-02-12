"use client"

import React, { useState } from "react"
import styles from "./WeatherApp.module.css"
import { Search, Droplets, Wind, Sunrise, Sunset } from "lucide-react"

const WeatherApp: React.FC = () => {
  const [city, setCity] = useState("")

  return (
    <div className={styles.appContainer}>
      <header className={styles.header}>
        <h1>SnazzyWeather</h1>
        <div className={styles.searchBar}>
          <input
            type="text"
            placeholder="Search for a city..."
            value={city}
            onChange={(e) => setCity(e.target.value)}
          />
          <button>
            <Search size={20} />
          </button>
        </div>
      </header>
      <main>
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


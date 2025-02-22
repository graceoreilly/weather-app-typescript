import styles from "../../WeatherApp/WeatherApp.module.css";
import { Search } from "lucide-react";

function Header({location, data, onInputChange, onKeyDown, onFetchWeather}) {

    return (
    <>
     <div className={styles.appContainer}>
      <header className={styles.header}>
        <h1>Weather</h1>
        <div className={styles.searchBar}>
          <input
            type="text"
            placeholder="Search for a city..."
            value={location}
            onChange={onInputChange}
            onKeyDown={onKeyDown}
          />
          <button onClick={onFetchWeather}>
            <Search size={20} />
          </button>
        </div>
        <div>
        <p>Location: {data.name}</p>
        <p>Temperature: {data.main ? `${Math.floor(data.main.temp)}°` : null}</p>
      </div>
      </header>
      </div>
    </>
    )
}

export default Header;
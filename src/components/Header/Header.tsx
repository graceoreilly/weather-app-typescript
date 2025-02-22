import styles from "../../WeatherApp/WeatherApp.module.css";
import { Search } from "lucide-react"

function Header() {
    return <>
     <div className={styles.appContainer}>
      <header className={styles.header}>
        <h1>Weather</h1>
        <div className={styles.searchBar}>
          <input
            type="text"
            placeholder="Search for a city..."
          />
          <button>
            <Search size={20} />
          </button>
        </div>
      </header>
      </div>
    </>
}

export default Header;
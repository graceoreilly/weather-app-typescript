import styles from "../../WeatherApp/WeatherApp.module.css";
import { Search } from "lucide-react";

interface HeaderProps {
  location: string;
  onInputChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onKeyDown: (e: React.KeyboardEvent<HTMLInputElement>) => void;
  onFetchWeather: () => void;
}

const Header: React.FC<HeaderProps> = ({ location, onInputChange, onKeyDown, onFetchWeather }) => {
  return (
    <div className={styles.appContainer}>
      <header className={styles.header}>
        <h1>Weather</h1>
        <div className={styles.searchBar}>
          <input
            type="text"
            placeholder="Search for a location..."
            value={location}
            onChange={onInputChange}
            onKeyDown={onKeyDown}
          />
          <button onClick={onFetchWeather}>
            <Search size={20} />
          </button>
        </div>
      </header>
    </div>
  );
};

export default Header;
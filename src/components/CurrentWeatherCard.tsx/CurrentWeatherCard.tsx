import styles from "../../WeatherApp/WeatherApp.module.css";
import sunny from "../../assets/sunny.png";
import rainy from "../../assets/rainy.png";
import snowy from "../../assets/snowy.png";
import cloudy from "../../assets/cloudy.png";

interface WeatherData {
  name: string;
  main: {
    temp: number;
    feels_like: number;
    humidity: number;
  };
  weather: {
    main: string;
    description: string;
  }[];
  wind: {
    speed: number;
  };
}

interface CurrentWeatherProps {
  data: WeatherData;
}

const CurrentWeather: React.FC<CurrentWeatherProps> = ({ data }) => {
  const weatherImages: { [key: string]: string } = {
    Clear: sunny,
    Clouds: cloudy,
    Rain: rainy,
    Snow: snowy,
    Haze: cloudy,
    Mist: cloudy,
  };

  const weatherImage = data.weather ? weatherImages[data.weather[0].main as keyof typeof weatherImages] : undefined;

  return (
    <div className={styles.appContainer}>
      <div>
        <section className={styles.currentWeather}>
          <h2>{data.name}</h2>
          <div className={styles.weatherInfo}>
            <div className={styles.temperature}>
              <span className={styles.temp}>
                {data.main ? `${Math.floor(data.main.temp)}°C` : null}
              </span>
              <span className={styles.feelsLike}>
                Feels like: {data.main ? `${Math.floor(data.main.feels_like)}°C` : null}
              </span>
            </div>
            <div className={styles.weatherIcon}>
              <img src={weatherImage || ""} alt="picture showing weather" />
            </div>
            <div className={styles.details}>
              <p className={styles.condition}>
                {data.weather ? `${data.weather[0].main}` : null}
              </p>
              <p className={styles.humidity}>
                Humidity: {data.main ? data.main.humidity : null}
              </p>
              <p className={styles.wind}>
                Wind: {data.wind ? data.wind.speed : null}
              </p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default CurrentWeather;
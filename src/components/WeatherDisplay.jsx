import useWeatherContext from "../hooks/useWeatherContext";
import ForecastCard from "./ForecastCard";

const WeatherDisplay = () => {
  // const { weatherData: conditions } = useWeatherContext();
  const { weatherData } = useWeatherContext();

  // console.log(weatherData);

  // if (!weatherData) {
  //   return <div>Enter...</div>; // Or any other loading indicator
  // }

  return (
    <main className="display">
      <h2>Current Weather Display</h2>

      <ForecastCard conditions={weatherData} />
    </main>
  );
};

export default WeatherDisplay;

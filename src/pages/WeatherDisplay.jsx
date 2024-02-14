import useWeatherContext from "../hooks/useWeatherContext";
import ForecastCard from "../components/ForecastCard";
import Search from "../components/Search";

const WeatherDisplay = () => {
  // const { weatherData: conditions } = useWeatherContext();
  const { weatherData } = useWeatherContext();

  // console.log(weatherData);

  // if (!weatherData) {
  //   return <div>Enter...</div>; // Or any other loading indicator
  // }

  return (
    <main>
      <Search />

      <div className="display">
        <h2>Current Weather Display</h2>

        <ForecastCard conditions={weatherData} />
      </div>
    </main>
  );
};

export default WeatherDisplay;

import FiveDaysForecast from "./components/FiveDaysForecast";
import Search from "./components/Search";
import WeatherDisplay from "./components/WeatherDisplay";

function App() {
  return (
    <div>
      <h1>WEATHER APP</h1>

      <Search />

      <WeatherDisplay />

      <FiveDaysForecast />
    </div>
  );
}

export default App;

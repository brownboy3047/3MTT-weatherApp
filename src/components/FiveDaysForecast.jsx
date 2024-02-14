// import { useEffect, useState } from "react";
import useWeatherContext from "../hooks/useWeatherContext";
import ForecastCard from "./ForecastCard";

// const BASE_URL = "https://api.openweathermap.org/data/2.5/";

// const API_KEY = "f5ef12432afd65201ccaf5b59349d758";

const FiveDaysForecast = () => {
  const { forecastData } = useWeatherContext();
  //   const [forecastData, setforecastData] = useState([]);

  //   useEffect(() => {
  //     const fetchData = async () => {
  //       const res = await fetch(
  //         `${BASE_URL}forecast?q=${searchInput}&appid=${API_KEY}`
  //       );
  //       const data = await res.json();

  //       setforecastData(data.list);

  //       //   console.log(data.list);
  //     };

  //     fetchData();
  //   }, [searchInput]);

  if (!forecastData) return;

  return (
    <div>
      <h2>Five days/3 hours weather forecast</h2>

      <div className="fore">
        {forecastData.map((forecast, i) => (
          <ForecastCard key={i} conditions={forecast} />
        ))}
      </div>
    </div>
  );
};

export default FiveDaysForecast;

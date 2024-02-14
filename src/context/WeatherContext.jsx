import { createContext, useState } from "react";

export const WeatherContext = createContext();

// const BASE_URL = "https://api.openweathermap.org/data/2.5/"

// const API_KEY = "f5ef12432afd65201ccaf5b59349d758"

export const WeatherContextProvider = ({ children }) => {
  const [searchInput, setSearchInput] = useState("");
  const [weatherData, setWeatherData] = useState({});
  const [forecastData, setforecastData] = useState([]);

  return (
    <WeatherContext.Provider
      value={{
        searchInput,
        setSearchInput,
        weatherData,
        setWeatherData,
        forecastData,
        setforecastData,
      }}
    >
      {children}
    </WeatherContext.Provider>
  );
};

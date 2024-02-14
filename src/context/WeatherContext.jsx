import { createContext, useState } from "react";

export const WeatherContext = createContext();

const BASE_URL = "https://api.openweathermap.org/data/2.5/";

const API_KEY = "f5ef12432afd65201ccaf5b59349d758";

export const WeatherContextProvider = ({ children }) => {
  const [searchInput, setSearchInput] = useState("");
  const [weatherData, setWeatherData] = useState({});
  const [forecastData, setforecastData] = useState([]);

  const handleSearch = async () => {
    try {
      const res1 = await fetch(
        `${BASE_URL}weather?q=${searchInput}&appid=${API_KEY}`
      );

      const data1 = await res1.json();

      setWeatherData(data1);
      console.log(data1);

      setSearchInput("");
    } catch (err) {
      console.log(err.message);
    }
  };

  return (
    <WeatherContext.Provider
      value={{
        searchInput,
        setSearchInput,
        weatherData,
        setWeatherData,
        forecastData,
        setforecastData,
        handleSearch,
      }}
    >
      {children}
    </WeatherContext.Provider>
  );
};

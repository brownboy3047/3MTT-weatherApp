import { useContext } from "react";
import { WeatherContext } from "../context/WeatherContext";

const useWeatherContext = () => {
  const context = useContext(WeatherContext);

  if (context === undefined)
    throw new Error(
      "WeatherContext is not used within the WeatherContextProvider"
    );
  return context;
};

export default useWeatherContext;

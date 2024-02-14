import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
// import useWeatherContext from "../hooks/useWeatherContext";
import ForecastCard from "../components/ForecastCard";

// const BASE_URL = "https://api.openweathermap.org/data/2.5/";

const API_KEY = "f5ef12432afd65201ccaf5b59349d758";

const FiveDaysForecast = () => {
  //   const { forecastData } = useWeatherContext();

  const [forecastData, setforecastData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  const { id } = useParams();

  const navigate = useNavigate();

  useEffect(() => {
    const controller = new AbortController();

    const fetchData = async () => {
      try {
        setIsLoading(true);
        setError("");
        const res = await fetch(
          `https://api.openweathermap.org/data/2.5/forecast?id=${id}&appid=${API_KEY}`,
          { signal: controller.signal }
        );

        if (!res.ok) {
          throw new Error("Something went wrong with the fetching of data");
        }

        const data = await res.json();

        setforecastData(data.list);
        setIsLoading(false);
        setError("");

        // console.log(data.list);
      } catch (err) {
        if (err.name !== "AbortError") {
          console.log(err.message);
          setError(err.message);
        }
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();

    return () => controller.abort();
  }, [id]);

  const goBack = () => {
    navigate(-1);
  };

  //   if (!forecastData) return;

  return (
    <div className="five-days">
      <button onClick={goBack}>Go Back</button>

      <h2>Five days/3 hours weather forecast</h2>

      {isLoading && <p>Loading...</p>}

      {!isLoading && !error && (
        <div className="fore">
          {forecastData.map((forecast, i) => (
            <ForecastCard key={i} conditions={forecast} />
          ))}
        </div>
      )}

      {error && <p style={{ color: "red" }}>{error}</p>}
    </div>
  );
};

export default FiveDaysForecast;

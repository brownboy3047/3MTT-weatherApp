import useWeatherContext from "../hooks/useWeatherContext";

const BASE_URL = "https://api.openweathermap.org/data/2.5/";

const API_KEY = "f5ef12432afd65201ccaf5b59349d758";

const Search = () => {
  const { searchInput, setSearchInput, setWeatherData, setforecastData } =
    useWeatherContext();

  const handleSearch = async () => {
    try {
      const res1 = await fetch(
        `${BASE_URL}weather?q=${searchInput}&appid=${API_KEY}`
      );

      const data1 = await res1.json();

      setWeatherData(data1);
      console.log(data1);

      //second fetch for 5 days forecast
      const res2 = await fetch(
        `${BASE_URL}forecast?q=${searchInput}&appid=${API_KEY}`
      );
      const data2 = await res2.json();

      setforecastData(data2.list);

      console.log(data2.list);

      setSearchInput("");
    } catch (err) {
      console.log(err.message);
    }
  };

  return (
    <header>
      <input
        type="text"
        placeholder="Search city/location..."
        value={searchInput}
        onChange={(e) => setSearchInput(e.target.value)}
      />

      <button onClick={handleSearch}>Search</button>
    </header>
  );
};

export default Search;

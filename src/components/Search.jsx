import { Link } from "react-router-dom";
import useWeatherContext from "../hooks/useWeatherContext";

const Search = () => {
  const { searchInput, setSearchInput, handleSearch } = useWeatherContext();

  return (
    <header className="head">
      <Link to="/" className="head-logo">
        <h1>WEATHER APP</h1>
      </Link>

      <div className="head-search">
        <input
          type="text"
          placeholder="Search city/location..."
          value={searchInput}
          onChange={(e) => setSearchInput(e.target.value)}
        />

        <button onClick={() => handleSearch()}>Search</button>
      </div>
    </header>
  );
};

export default Search;

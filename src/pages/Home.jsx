import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="home">
      <div className="home-container">
        <p>
          The Weather App is your trusty sidekick when it comes to staying
          informed about the ever-changing weather conditions. Whether
          you&apos;re planning a picnic, deciding what to wear, or just curious
          about the forecast, this app has got you covered with all the
          essential weather information you need.
        </p>

        <Link to="weather" className="home-link">
          <button> Check City weather</button>
        </Link>
      </div>
    </div>
  );
};

export default Home;

// const formatDate = (date) =>
//   new Intl.DateTimeFormat("en", {
//     day: "numeric",
//     month: "long",
//     year: "numeric",
//     weekday: "long",

import { Link } from "react-router-dom";

//     hour: "numeric",
//     minute: "numeric",
//     second: "numeric",
//     hour12: false,
//   }).format(new Date(date));

const ForecastCard = ({ conditions }) => {
  if (!conditions.visibility) {
    return <div>Enter a city above...</div>; // Or any other loading indicator
  }

  return (
    <ul>
      {conditions.name && (
        <li>
          <strong>Name: </strong> {conditions.name}
        </li>
      )}
      <li>
        <strong>Temperature: </strong> {conditions.main.temp}k
      </li>
      <li>
        <strong>Humidity: </strong>
        {conditions.main.humidity}%
      </li>
      <li>
        <strong>Wind-Speed: </strong>
        {conditions.wind.speed}m/s
      </li>
      <li>
        <strong>Icon: </strong>
        {conditions.weather[0].icon}
      </li>
      {conditions.dt_txt && (
        <li>
          <strong>Time: </strong>
          {conditions.dt_txt}
        </li>
      )}
      {/* <li>{formatDate(conditions.dt)}</li> */}

      {conditions.id && (
        <Link to={`${conditions.id}`}>
          <button className="card-btn">Click to check 5 days forecast</button>
        </Link>
      )}
    </ul>
  );
};

export default ForecastCard;

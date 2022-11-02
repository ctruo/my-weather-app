import React from "react";
import "./ForecastCard.css";
import Detail from "../Details/Detail";

function ForecastCard(props) {
  const {
    dt_txt,
    main: { temp, humidity },
    weather: [{ description, icon }],
    wind: { speed },
  } = props.data;

  let rain = props.data.rain
    ? props.data.rain["1h"] || props.data.rain["3h"]
    : 0;

  let iconURL = "http://openweathermap.org/img/wn/" + icon + "@2x.png";

  const days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  const dateFormatted = dt_txt.replace(/-/g, "/");
  let currDay = new Date(dateFormatted).getDay();
  const weekday = days[currDay];

  return (
    <div className="card">
      <h3 className="weekday">{weekday}</h3>
      <img src={iconURL} alt="weather-forecast-icon"></img>
      <div className="details">
        <Detail
          attribute={description.charAt(0).toUpperCase() + description.slice(1)}
          info={`${temp}\u00B0 F`}
        />
        <Detail attribute={"Wind Speed"} info={`${speed} m/s`} />
        <Detail attribute={"Humidity"} info={`${humidity} %`} />
        <Detail attribute={"Precipitation"} info={`${rain}mm`} />
      </div>
    </div>
  );
}

export default ForecastCard;

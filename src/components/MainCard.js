import React from "react";
import "./MainCard.css";
import Detail from "./Detail";
import ForecastCard from "./ForecastCard";
import DateTime from "./DateTime";
import convertTime from "./converTimeFunction";

function MainCard(props) {
  const { weatherData, forecastData, setDashboard } = props;
  const { dashboard } = props; //non constant dashboard that we need to update

  const {
    city,
    country,
    iconURL,
    temp,
    desc,
    tempMax,
    tempMin,
    windSpeed,
    rain,
    sunrise,
    sunset,
    humidity,
  } = weatherData;

  return (
    <div className="main-card">
      <div className="card-top">
        <div className="location">
          <h1>{city + ","}</h1>
          <h1>{country}</h1>
        </div>
        <button
          className="dash-button"
          onClick={() => setDashboard([...dashboard, weatherData])} //on click append current main display data to dashboard
          type="submit"
        >
          Add to MyDashboard
        </button>
      </div>
      <DateTime />
      <div className="content">
        <div className="main-display">
          <div className="main-details">
            <h1 className="today">Today</h1>
            <img src={iconURL} alt="weather-icon" />
            <div className="temp-description">
              <h2>{`${temp}\u00B0 F`}</h2>
              <p>{desc.charAt(0).toUpperCase() + desc.slice(1)}</p>
            </div>
          </div>
          <div className="more-details">
            <Detail attribute={"High"} info={`${tempMax}\u00B0 F`} />
            <Detail attribute={"Wind Speed"} info={`${windSpeed} m/s`} />
            <Detail attribute={"Sunrise"} info={convertTime(sunrise)} />
            <Detail attribute={"Sunset"} info={convertTime(sunset)} />
            <Detail attribute={"Low"} info={`${tempMin}\u00B0 F`} />
            <Detail attribute={"Precipitation"} info={`${rain}mm`} />
            <Detail attribute={"Humidity"} info={`${humidity} %`} />
          </div>
        </div>
        <div className="forecast-display">
          <div>
            <div className="forecast-heading">
              <h2 className="forecast">5-Day Forecast</h2>
              <span className="forecast-line"></span>
            </div>

            {forecastData.map((data) => (
              <ForecastCard key={data.dt} data={data} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
export default MainCard;

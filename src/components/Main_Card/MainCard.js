import React from "react";
import "./MainCard.css";
import Detail from "../Details/Detail";
import ForecastCard from "../Forecast_Card/ForecastCard";
import DateTime from "../Date_Time/DateTime";
import convertTime from "../Helper_Functions/converTimeFunction";

function removeDuplicates(data) {
  //removes duplicate locations for dashboard
  const dataCities = [];
  data.forEach((element) => dataCities.push(element.city));
  const uniqueCities = [...new Set(dataCities)];

  const filteredData = [];

  for (let i = 0; i < uniqueCities.length; i++) {
    filteredData.push(data.find((element) => element.city === uniqueCities[i]));
  }

  return filteredData;
}

//adds current main data to dashboard when button is clicked
function addToDash(dashboard, setDashboard, weatherData) {
  const filteredData = removeDuplicates([...dashboard, weatherData]); //removes duplicates
  setDashboard(filteredData);

  //WORK IN PROGRESS - local storage for dashboard
  // localStorage.setItem("dashboard", JSON.stringify(filteredData)); //saves dashboard data to local storage
}

function MainCard(props) {
  const { weatherData, forecastData, setDashboard, dashboard } = props;

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
      </div>
      <DateTime />
      <div className="content">
        <div className="main-display">
          <div className="main-details">
            <h1 className="today">Today</h1>
            <div className="temp-description">
              <h2>{`${temp}\u00B0 F`}</h2>
              <p>{desc.charAt(0).toUpperCase() + desc.slice(1)}</p>{" "}
              <img src={iconURL} alt="weather-icon" />
            </div>
          </div>
          <div className="more-details">
            <button
              className="dash-button"
              onClick={() => addToDash(dashboard, setDashboard, weatherData)} //on click append current main display data to dashboard
              type="submit"
            >
              Add to MyDashboard
            </button>
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
  );
}
export default MainCard;

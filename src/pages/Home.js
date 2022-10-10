import React from "react";
import Searchbar from "../components/Searchbar";
import MainCard from "../components/MainCard";
import { getDate } from "../components/DateTime";
import Clock from "react-live-clock";
import "./Home.css";

function Homes(props) {
  const {
    weatherData,
    setWeatherData,
    forecastData,
    setForecastData,
    dashboard,
    setDashboard,
  } = props;

  return (
    <div>
      <Searchbar
        setWeatherData={setWeatherData}
        setForecastData={setForecastData}
      />
      {weatherData.city === "" ? (
        <InitialDisplay />
      ) : (
        <MainCard
          weatherData={weatherData}
          forecastData={forecastData}
          dashboard={dashboard}
          setDashboard={setDashboard}
        />
      )}
    </div>
  );
}

function InitialDisplay() {
  return (
    <div className="initial">
      <div className="initial-time">
        <h1>
          <Clock format={"hh:mm:ss"} ticking={true} />
        </h1>
        <h2 className="initial-ampm">
          {new Date().getHours() < 12 ? "AM" : "PM"}
        </h2>
      </div>
      <h2 className="initial-date">{getDate()}</h2>
    </div>
  );
}

export default Homes;

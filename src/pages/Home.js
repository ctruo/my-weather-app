import React from "react";
import Searchbar from "../components/Searchbar/Searchbar";
import MainCard from "../components/Main_Card/MainCard";
import { getDate } from "../components/Date_Time/DateTime";
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
        <div className="initial-clock">
          <Clock format={"hh:mm:ss"} ticking={true} />
        </div>
        <h2 className="initial-ampm">
          {new Date().getHours() < 12 ? "AM" : "PM"}
        </h2>
      </div>
      <h2 className="initial-date">{getDate()}</h2>
    </div>
  );
}

export default Homes;

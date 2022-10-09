import React from "react";
import Searchbar from "../components/Searchbar";
import MainCard from "../components/MainCard";

function Homes(props) {
  return (
    <div>
      <Searchbar
        setWeatherData={props.setWeatherData}
        setForecastData={props.setForecastData}
      />

      <MainCard
        weatherData={props.weatherData}
        forecastData={props.forecastData}
        dashboard={props.dashboard}
        setDashboard={props.setDashboard}
      />
    </div>
  );
}

export default Homes;

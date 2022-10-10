import React, { useState } from "react";
import "./App.css";
import Home from "../pages/Home";
import Dashboard from "../pages/Dashboard";
import Navbar from "./Navbar";
import { Route, Routes } from "react-router-dom";

function App() {
  const [weatherData, setWeatherData] = useState({
    //weather data object
    city: "",
    country: "",
    iconURL: "",
    temp: "",
    desc: "",
    tempMax: "",
    tempMin: "",
    windSpeed: "",
    rain: "",
    sunrise: "",
    sunset: "",
    humidity: "",
  });

  const [forecastData, setForecastData] = useState([]);

  let [dashboard, setDashboard] = useState([]);

  return (
    <div>
      <Navbar />
      <Routes>
        <Route
          path="/my-weather-app/"
          element={
            <Home
              weatherData={weatherData}
              setWeatherData={setWeatherData}
              forecastData={forecastData}
              setForecastData={setForecastData}
              dashboard={dashboard}
              setDashboard={setDashboard}
            />
          }
        ></Route>
        <Route
          path="/my-weather-app/my-dashboard"
          element={
            <Dashboard dashboard={dashboard} setDashboard={setDashboard} />
          }
        ></Route>
      </Routes>
    </div>
  );
}

export default App;
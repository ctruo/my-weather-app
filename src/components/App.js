import React, { useState } from "react";
import "./App.css";
import Home from "../pages/Home";
import Dashboard from "../pages/Dashboard";
import Navbar from "./Navigation/Navbar";
import { Route, Routes } from "react-router-dom";

function loadTheme() {
  const storedTheme = localStorage.getItem("theme");

  if (storedTheme) {
    localStorage.setItem("theme", storedTheme);
    document.documentElement.setAttribute("data-theme", storedTheme);
  } else {
    //default to day theme
    document.documentElement.setAttribute("data-theme", "day");
  }
}

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

  loadTheme();

  return (
    <div>
      <div className="bg-transition"></div>
      <Navbar />
      <Routes>
        <Route
          path="/"
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
          path="/my-dashboard"
          element={
            <Dashboard dashboard={dashboard} setDashboard={setDashboard} />
          }
        ></Route>
      </Routes>
    </div>
  );
}

export default App;

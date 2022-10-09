import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import "./Searchbar.css";
import { v4 as uuidv4 } from "uuid";

function mainData(url, setWeatherData) {
  fetch(url)
    .then((response) => {
      if (response.ok) return response.json();
      else throw new Error("Status code error :" + response.status);
    })
    .then((data) => {
      const queryData = {
        id: uuidv4(), //unique key
        city: data.name,
        country: data.sys.country,
        iconURL:
          "http://openweathermap.org/img/wn/" +
          data.weather[0].icon +
          "@4x.png",
        temp: data.main.temp,
        desc: data.weather[0].description,
        tempMax: data.main.temp_max,
        tempMin: data.main.temp_min,
        windSpeed: data.wind.speed,
        rain: data.rain ? data.rain["1h"] || data.rain["3h"] : 0, //if no rain set to 0
        sunrise: data.sys.sunrise,
        sunset: data.sys.sunset,
        humidity: data.main.humidity,
      };
      setWeatherData(queryData);
    })
    .catch((error) => {
      console.log(error);
    });
  //fetch API finished
}

//get one temp value for forecastData, ordered by priority day times
function filter(data) {
  let filtered = [];
  let dayDone = [];

  for (let i = 0; i < data.length; i++) {
    let [date, time] = data[i].dt_txt.split(" ");

    if (time === "12:00:00") {
      filtered.push(data[i]);
      dayDone.push(date);
    }
  }
  return filtered;
}

//fetch API for forecastData, filter, and set forecastData state
function forecastData(url, setForecastData) {
  fetch(url)
    .then((response) => {
      if (response.ok) return response.json();
      else throw new Error("Status code error :" + response.status);
    })
    .then((data) => {
      let filteredData = filter(data.list);
      setForecastData(filteredData);
    })
    .catch((error) => console.log(error));
  //fetch API finished
}

function Searchbar(props) {
  const [search, setSearch] = useState("");

  //calls API to retreive weather data based on user input
  function handleSubmit(e) {
    const mainUrl = `https://api.openweathermap.org/data/2.5/weather?q=${search}
      &APPID=${process.env.REACT_APP_API_KEY}&units=imperial`;

    const forecastUrl = `https://api.openweathermap.org/data/2.5/forecast?q=${search}
      &APPID=${process.env.REACT_APP_API_KEY}&units=imperial`;

    mainData(mainUrl, props.setWeatherData);
    forecastData(forecastUrl, props.setForecastData);

    setSearch("");
    e.preventDefault();
  }

  return (
    <div className="searchBar">
      <form action="" id="searchForm" onSubmit={handleSubmit}>
        <input
          type="text"
          name="searchField"
          id="searchField"
          placeholder="Search city"
          autoComplete="off"
          onChange={(e) => setSearch(e.target.value)}
          value={search}
        />
        <button type="submit">
          <FontAwesomeIcon
            icon={faMagnifyingGlass}
            className="fa-xl"
          ></FontAwesomeIcon>
        </button>
      </form>
    </div>
  );
}

export default Searchbar;

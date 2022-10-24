import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import "./Searchbar.css";
import { mainData, forecastData } from "../Helper_Functions/fetchAPI";

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

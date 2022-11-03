import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import "./Searchbar.css";
import { mainData, forecastData } from "../Helper_Functions/fetchAPI"; //functions to get data from API call
import { motion, AnimatePresence } from "framer-motion";

function Searchbar(props) {
  const [search, setSearch] = useState("");
  const [validSearch, setValidSearch] = useState(true);

  //calls API to retreive weather data based on user input
  function handleSubmit(e) {
    if (search === "") {
      //empty input
      setValidSearch(false);
      e.preventDefault();
      return;
    }

    const mainUrl = `https://api.openweathermap.org/data/2.5/weather?q=${search}
      &APPID=${process.env.REACT_APP_API_KEY}&units=imperial`;

    const forecastUrl = `https://api.openweathermap.org/data/2.5/forecast?q=${search}
      &APPID=${process.env.REACT_APP_API_KEY}&units=imperial`;

    mainData(mainUrl, props.setWeatherData, setValidSearch);
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
          className={validSearch ? "" : "invalid-search"}
        />
        <button
          type="submit"
          className={validSearch ? "" : "invalid-search-button"}
        >
          <FontAwesomeIcon
            icon={faMagnifyingGlass}
            className="fa-xl"
          ></FontAwesomeIcon>
        </button>
        <AnimatePresence>
          {!validSearch && (
            <motion.div
              className="invalid-message"
              initial={{ opacity: 0 }}
              animate={{ opacity: "100%" }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
            >
              <h3>Invalid search</h3>
            </motion.div>
          )}
        </AnimatePresence>
      </form>
    </div>
  );
}

export default Searchbar;

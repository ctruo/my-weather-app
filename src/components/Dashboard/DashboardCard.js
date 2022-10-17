import React from "react";
import "./DashboardCard.css";
import convertTime from "../Helper_Functions/converTimeFunction";
import Detail from "../Details/Detail";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faX } from "@fortawesome/free-solid-svg-icons";

function DashboardCard(props) {
  const {
    id,
    city,
    iconURL,
    temp,
    desc,
    tempMax,
    tempMin,
    windSpeed,
    rain,
    sunrise,
    sunset,
  } = props.data;

  const { dashboard, setDashboard } = props;

  function handleDelete() {
    let updatedDashboard = [];

    for (let i = 0; i < dashboard.length; i++) {
      if (dashboard[i].id !== id) {
        updatedDashboard.push(dashboard[i]);
      }
    }

    setDashboard(updatedDashboard);
  }

  return (
    <div className="dashboard-card">
      <button className="delete-button" onClick={handleDelete}>
        <FontAwesomeIcon className={"fa-xl"} icon={faX} />
      </button>

      <h1 className="city">{city}</h1>

      <img src={iconURL} alt="weather-icon" />
      <div className="dashboard-card-desc">
        <h2>{`${temp}\u00B0 F`}</h2>
        <p>{desc.charAt(0).toUpperCase() + desc.slice(1)}</p>
      </div>
      <div className="dashboard-card-details">
        <Detail attribute={"High"} info={`${tempMax}\u00B0 F`} />
        <Detail attribute={"Sunrise"} info={convertTime(sunrise)} />
        <Detail attribute={"Wind Speed"} info={`${windSpeed} m/s`} />
        <Detail attribute={"Low"} info={`${tempMin}\u00B0 F`} />
        <Detail attribute={"Sunset"} info={convertTime(sunset)} />
        <Detail attribute={"Precipitation"} info={`${rain}mm`} />
      </div>
    </div>
  );
}

export default DashboardCard;

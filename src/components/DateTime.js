import React from "react";
import "./DateTime.css";
import Clock from "react-live-clock";

//This function gets the date in format "Weekday, Month Day, Year"
function getDate() {
  let options = {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
  };
  let date = new Date().toLocaleDateString("en-us", options).split(" "); //remove time from date format

  return `${date[0]} ${date[1]} ${date[2]} ${date[3]}`; //Weekday, Month Day, Year format
}

function DateTime() {
  return (
    <div className="date-time">
      <h2>{getDate()}</h2>
      <Clock format={"HH:mm:ss"} ticking={true} />
    </div>
  );
}

export default DateTime;

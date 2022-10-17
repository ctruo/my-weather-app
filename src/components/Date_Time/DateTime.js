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
  };
  let date = new Date().toLocaleDateString("en-us", options).split(" "); //remove time from date format

  return `${date[0]} ${date[1]} ${date[2]} ${date[3]}`; //Weekday, Month Day, Year format
}

function DateTime() {
  return (
    <div className="date-time">
      <h2 className="date">{getDate()}</h2>
      <div className="time">
        <Clock className="clock" format={"hh:mm:ss"} ticking={true} />
        <h2 className="am-pm">{new Date().getHours() < 12 ? "AM" : "PM"}</h2>
      </div>
    </div>
  );
}

export default DateTime;
export { getDate };

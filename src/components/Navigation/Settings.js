import React, { useState } from "react";
import "./Settings.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSun, faCloud, faMoon } from "@fortawesome/free-solid-svg-icons";
import { faSun as faSunReg } from "@fortawesome/free-regular-svg-icons";

function setTheme(theme, bg) {
  if (localStorage.getItem("theme") === theme) {
    return;
  }

  //fading gradient background for smooth transition
  document.querySelector(".bg-transition").style.background = bg;
  document.querySelector(".bg-transition").style.opacity = 1;

  //set theme after fading into new color
  setTimeout(() => {
    localStorage.setItem("theme", theme);
    document.documentElement.setAttribute("data-theme", theme);
  }, 100);

  //remove transition layer
  setTimeout(
    () => (document.querySelector(".bg-transition").style.opacity = 0),
    200
  );
}

function Settings() {
  const [activeTheme, setActiveTheme] = useState(localStorage.getItem("theme"));

  return (
    <ul className="settings">
      <li>
        <h3>Theme</h3>
        <div className="theme-button-list">
          <button
            className={`theme-button day ${
              activeTheme === "day" ? "active-theme-day" : ""
            }`}
            onClick={() => {
              setTheme(
                "day",
                "linear-gradient(rgb(3, 109, 190), rgb(121, 214, 233))"
              );
              setActiveTheme("day");
            }}
          >
            <FontAwesomeIcon icon={faSunReg} className="fa-xl" />
          </button>
          <button
            className={`theme-button evening 
            ${activeTheme === "evening" ? "active-theme-evening" : ""}`}
            onClick={() => {
              setTheme(
                "evening",
                "linear-gradient(rgb(209, 125, 0), rgb(241, 203, 78))"
              );
              setActiveTheme("evening");
            }}
          >
            <FontAwesomeIcon icon={faSun} className="fa-xl" />
          </button>
          <button
            className={`theme-button night 
            ${activeTheme === "night" ? "active-theme-night" : ""}`}
            onClick={() => {
              setTheme(
                "night",
                "linear-gradient(rgb(20, 2, 83), rgb(69, 39, 202))"
              );
              setActiveTheme("night");
            }}
          >
            <FontAwesomeIcon icon={faMoon} className="fa-xl" />
          </button>
          <button
            className={`theme-button cloud 
            ${activeTheme === "cloud" ? "active-theme-cloud" : ""}`}
            onClick={() => {
              setTheme(
                "cloud",
                "linear-gradient(rgb(135, 136, 138), rgb(228, 235, 235))"
              );
              setActiveTheme("cloud");
            }}
          >
            <FontAwesomeIcon icon={faCloud} className="fa-xl" />
          </button>
        </div>
      </li>
      <li>
        <h3>Temperature Scale</h3>
        <div className="temp-scale-list">
          <button className="temp-scale-button">{`\u00B0F`}</button>
          <b className="temp-scale-slash"> / </b>
          <button className="temp-scale-button">{`\u00B0C`}</button>
        </div>
      </li>
    </ul>
  );
}

export default Settings;

import React from "react";
import "./Settings.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSun, faCloud, faMoon } from "@fortawesome/free-solid-svg-icons";
import { faSun as faSunReg } from "@fortawesome/free-regular-svg-icons";

function Settings() {
  return (
    <ul className="settings">
      <li>
        <h3>Theme</h3>
        <div className="theme-button-list">
          <button className="theme-button">
            <FontAwesomeIcon icon={faSunReg} className="fa-xl" />
          </button>
          <button className="theme-button">
            <FontAwesomeIcon icon={faSun} className="fa-xl" />
          </button>
          <button className="theme-button">
            <FontAwesomeIcon icon={faMoon} className="fa-xl" />
          </button>
          <button className="theme-button">
            <FontAwesomeIcon icon={faCloud} className="fa-xl" />
          </button>
        </div>
      </li>
      <li>
        <h3>Temperature Scale</h3>
        <div className="temp-scale-list">
          <button className="temp-scale-button">{`\u00B0F`}</button>
          <b class="temp-scale-slash"> / </b>
          <button className="temp-scale-button">{`\u00B0C`}</button>
        </div>
      </li>
    </ul>
  );
}

export default Settings;

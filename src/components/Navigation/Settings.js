import React from "react";
import "./Settings.css";
import { Link } from "react-router-dom";

function Settings(props) {
  const { setSettingsOpen } = props;
  return (
    <ul className="settings">
      <li>
        <Link
          to="#"
          onMouseOver={() => {
            setSettingsOpen(true);
          }}
        >
          Setting 1
        </Link>
      </li>
      <li>
        <Link
          to="#"
          onMouseOver={() => {
            setSettingsOpen(true);
          }}
        >
          Setting 2
        </Link>
      </li>
      <li>
        <Link
          to="#"
          onMouseOver={() => {
            setSettingsOpen(true);
          }}
        >
          Setting 3
        </Link>
      </li>
      <li>
        <Link
          to="#"
          onMouseOver={() => {
            props.setSettingsOpen(true);
          }}
        >
          Setting 4
        </Link>
      </li>
    </ul>
  );
}

export default Settings;

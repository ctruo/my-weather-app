import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGear } from "@fortawesome/free-solid-svg-icons";
import NavLink from "./NavLink";
import { Link } from "react-router-dom";
import "./DesktopNav.css";
import Settings from "./Settings";

function DesktopNav() {
  const [settingsOpen, setSettingsOpen] = useState(false);
  const [clicked, setClicked] = useState(false);

  console.log(clicked);

  //  onMouseOver={clicked ? () => setSettingsOpen(true) : null}
  //       onMouseOut={() => {
  //         setSettingsOpen(false);

  return (
    <ul className="desktop-nav">
      <NavLink to="/" text="Home" />

      <NavLink to="/my-dashboard" text="MyDashboard" />

      <li>
        <Link
          to="#"
          onClick={() => {
            setSettingsOpen(!settingsOpen);
            setClicked(!clicked);
          }}
        >
          <FontAwesomeIcon icon={faGear} className="fa-lg" />
        </Link>

        {settingsOpen && (
          <Settings setSettingsOpen={setSettingsOpen} setClicked={setClicked} />
        )}
      </li>
    </ul>
  );
}

export default DesktopNav;

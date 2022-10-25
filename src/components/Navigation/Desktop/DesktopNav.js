import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGear } from "@fortawesome/free-solid-svg-icons";
import NavLink from "../NavLink";
import { Link } from "react-router-dom";
import "./DesktopNav.css";
import Settings from "../Settings";

function DesktopNav() {
  const [settingsOpen, setSettingsOpen] = useState(false);

  return (
    <ul className="desktop-nav">
      <NavLink desktopClass="desktop-nav-li" to="/" text="Home" />

      <NavLink
        desktopClass="desktop-nav-li"
        to="/my-dashboard"
        text="MyDashboard"
      />

      <li className="desktop-nav-li">
        <Link
          to="#"
          className={settingsOpen ? "active-page" : null}
          onClick={() => {
            setSettingsOpen(!settingsOpen);
          }}
        >
          <FontAwesomeIcon icon={faGear} className="fa-lg" />
        </Link>

        <Settings settingsOpen={settingsOpen} />
      </li>
    </ul>
  );
}

export default DesktopNav;

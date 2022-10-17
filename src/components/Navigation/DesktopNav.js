import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGear } from "@fortawesome/free-solid-svg-icons";
import NavLink from "./NavLink";
import { Link } from "react-router-dom";
import "./DesktopNav.css";

function DesktopNav() {
  return (
    <ul className="desktop-nav">
      <NavLink to="/" text="Home" />

      <NavLink to="/my-dashboard" text="MyDashboard" />

      <li>
        <Link href="/">
          <FontAwesomeIcon icon={faGear} className="fa-lg" />
        </Link>
      </li>
    </ul>
  );
}

export default DesktopNav;

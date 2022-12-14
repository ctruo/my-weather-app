import React from "react";
import "./Navbar.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCloudSunRain } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import DesktopNav from "./Desktop/DesktopNav";
import MobileNav from "./Mobile/MobileNav";

function Navbar() {
  return (
    <header>
      <nav>
        <Link to="/" className="logo">
          <FontAwesomeIcon
            icon={faCloudSunRain}
            className="fa-2x"
          ></FontAwesomeIcon>
          <h1>MyWeather</h1>
        </Link>

        <DesktopNav id="desktop-navbar" />

        {/* Used for placing mobile nav dropdown under navbar for phone view*/}
        <div className="phone-nav-bg"></div>
        <MobileNav id="mobile-navbar" />
      </nav>
    </header>
  );
}

export default Navbar;

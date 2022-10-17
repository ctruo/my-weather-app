import React from "react";
import "./Navbar.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGear, faCloudSunRain } from "@fortawesome/free-solid-svg-icons";
import { Link, useMatch, useResolvedPath } from "react-router-dom";

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

        <ul>
          <NavLink to="/" text="Home"></NavLink>

          <NavLink to="/my-dashboard" text="MyDashboard"></NavLink>

          <li>
            <Link href="/">
              <FontAwesomeIcon
                icon={faGear}
                className="fa-lg"
              ></FontAwesomeIcon>
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

//custom components to show style for active page in navbar
function NavLink(props) {
  const { to, text } = props;
  const resolvedPath = useResolvedPath(to);

  const active = useMatch({ path: resolvedPath.pathname, end: true });

  return (
    <li className={active ? "active-page" : ""}>
      <Link to={to}>{text}</Link>
    </li>
  );
}

export default Navbar;

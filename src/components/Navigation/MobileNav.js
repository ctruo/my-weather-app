import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import NavLink from "./NavLink";
import "./MobileNav.css";

function openMenu() {
  return (
    <ul className="mobile-nav-list">
      <span className="mobile-list-line"></span>

      <NavLink to="/" text="Home" />

      <NavLink to="/my-dashboard" text="MyDashboard" />

      <NavLink to="/" text="Settings" />
    </ul>
  );
}

function MobileNav() {
  const [open, setOpen] = useState(false);

  return (
    <div className="mobile-nav">
      <button className="hamburger" onClick={() => setOpen(!open)}>
        <FontAwesomeIcon icon={faBars} className="fa-4x"></FontAwesomeIcon>
      </button>
      {open && openMenu()}
    </div>
  );
}

export default MobileNav;

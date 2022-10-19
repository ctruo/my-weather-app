import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faAngleDown } from "@fortawesome/free-solid-svg-icons";
import NavLink from "../NavLink";
import "./MobileNav.css";
import Settings from "../Settings";

function Menu(props) {
  const [settingsOpen, setSettingsOpen] = useState(false);

  const { closeMenu } = props;

  //open set to false for Settings because we want menu to stay open
  return (
    <ul className="mobile-nav-list">
      <span className="mobile-list-line"></span>

      <NavLink to="/" text="Home" open={true} closeMenu={closeMenu} />

      <NavLink
        to="/my-dashboard"
        text="MyDashboard"
        open={true}
        closeMenu={closeMenu}
      />
      <li>
        <div
          className="setting-menu"
          onClick={() => setSettingsOpen(!settingsOpen)}
        >
          <p>Settings</p>
          <FontAwesomeIcon icon={faAngleDown}></FontAwesomeIcon>
        </div>
        {settingsOpen && <Settings />}
      </li>
    </ul>
  );
}

function MobileNav() {
  const [open, setOpen] = useState(false);

  const closeMenu = () => setOpen(false);

  return (
    <div className="mobile-nav">
      <button className="hamburger" onClick={() => setOpen(!open)}>
        <FontAwesomeIcon icon={faBars} className="fa-3x"></FontAwesomeIcon>
      </button>
      {open && <Menu closeMenu={closeMenu} />}
    </div>
  );
}

export default MobileNav;

import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import NavLink from "./NavLink";
import "./MobileNav.css";

function Menu(props) {
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

      <NavLink to="#" text="Settings" open={false} closeMenu={closeMenu} />
    </ul>
  );
}

function MobileNav() {
  const [open, setOpen] = useState(false);

  const closeMenu = () => setOpen(false);

  console.log(open);

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

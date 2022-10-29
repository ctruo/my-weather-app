import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faAngleDown } from "@fortawesome/free-solid-svg-icons";
import NavLink from "../NavLink";
import "./MobileNav.css";
import Settings from "../Settings";
import { motion, AnimatePresence } from "framer-motion";
import { useMediaQuery } from "react-responsive";

function MobileNav() {
  const [open, setOpen] = useState(false);

  const closeMenu = () => setOpen(false); //closes menu when switching to new page on mobile

  return (
    <div className="mobile-nav">
      <button className="hamburger" onClick={() => setOpen(!open)}>
        <FontAwesomeIcon icon={faBars} className="fa-3x"></FontAwesomeIcon>
      </button>
      <AnimatePresence>
        {open && <Menu closeMenu={closeMenu} />}
      </AnimatePresence>
    </div>
  );
}

function Menu(props) {
  const [settingsOpen, setSettingsOpen] = useState(false);

  const { closeMenu } = props;

  const isPhoneView = useMediaQuery({ query: "(max-width: 550px)" });

  const variants = isPhoneView
    ? { animate: { y: 0 }, exit: { y: "-100%" } }
    : {
        animate: { x: 0 },
        exit: { x: "100%" },
      };

  //open set to false for Settings because we want menu to stay open
  return (
    <motion.ul
      className="mobile-nav-list"
      initial="exit"
      animate="animate"
      exit="exit"
      variants={variants}
      transition={{ type: "linear", duration: 0.5 }}
    >
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
          {/* Used for placing settings menu under links*/}
          <div className="settings-links-bg"></div>
          <p>Settings</p>
          <motion.div
            animate={{ scaleY: settingsOpen ? -1 : 1 }}
            transition={{ duration: 0.2 }}
          >
            <FontAwesomeIcon icon={faAngleDown}></FontAwesomeIcon>
          </motion.div>
        </div>
      </li>
      {<Settings settingsOpen={settingsOpen} />}
    </motion.ul>
  );
}

export default MobileNav;

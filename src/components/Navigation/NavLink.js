import React from "react";
import { Link, useMatch, useResolvedPath } from "react-router-dom";

function setClass(desktopClass, active) {
  let classString = "";

  if (desktopClass) {
    //desktop navbar hover effect only on desktop
    classString += desktopClass;
  }

  if (active) {
    classString += " active-page";
  }

  return classString;
}

//custom components to show style for active page in navbar
function NavLink(props) {
  const { to, text, open, closeMenu, desktopClass } = props;
  const resolvedPath = useResolvedPath(to);

  const active = useMatch({ path: resolvedPath.pathname, end: true });

  //onClick and open prop is only used to close sidebar nav on mobile when navigating to another page
  return (
    <li className={setClass(desktopClass, active)}>
      <Link to={to} onClick={() => open && closeMenu()}>
        {text}
      </Link>
    </li>
  );
}

export default NavLink;

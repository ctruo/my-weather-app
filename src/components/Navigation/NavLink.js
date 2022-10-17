import React from "react";
import { Link, useMatch, useResolvedPath } from "react-router-dom";

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

export default NavLink;

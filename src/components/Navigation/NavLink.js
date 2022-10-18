import React from "react";
import { Link, useMatch, useResolvedPath } from "react-router-dom";

//custom components to show style for active page in navbar
function NavLink(props) {
  const { to, text, open, closeMenu } = props;
  const resolvedPath = useResolvedPath(to);

  const active = useMatch({ path: resolvedPath.pathname, end: true });

  //onClick is only used to close sidebar nav on mobile
  return (
    <li className={active ? "active-page" : ""}>
      <Link to={to} onClick={() => open && closeMenu()}>
        {text}
      </Link>
    </li>
  );
}

export default NavLink;

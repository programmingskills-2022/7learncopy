import React from "react";
import classes from "./Nav.module.css";

import Menu from "./Menu";

const Nav = () => {
  return (
    <nav className={classes.nav}>
      <Menu />
    </nav>
  );
};

export default Nav;

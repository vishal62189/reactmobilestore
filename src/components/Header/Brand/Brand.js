import React from "react";
import { NavLink } from "react-router-dom";

import classes from "./Brand.module.css";

const Brand = () => {
  return (
    <NavLink className="nav-link pl-0" to="/">
      <div className={classes.Name}>MOBILE STORE</div>
    </NavLink>
  );
};

export default Brand;

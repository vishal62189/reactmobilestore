import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from "react-bootstrap/DropdownButton";

import classes from "./NavigationItems.module.css";
import authContext from "../../../context/authContext";

const NavigationItems = (props) => {
  const context = useContext(authContext);
  return (
    <>
      <ul className="navbar-nav">
        {context.isAuthenticated ? (
          <li className={classes.NavigationItem}>
            <DropdownButton
              id="dropdown-basic-button"
              className="d-flex flex-row align-item-center text-white"
              title={context.userName}
              variant="trasparent"
            >
              <Dropdown.Item as="button" onClick={context.onAuthLogot}>
                Logout
              </Dropdown.Item>
            </DropdownButton>
          </li>
        ) : (
          <li className={classes.NavigationItem}>
            <div>
              <NavLink className="nav-link" to="/login">
                Login
              </NavLink>
            </div>
          </li>
        )}
        <li className={classes.NavigationItem}>
          <div>
            <NavLink className="nav-link" to="/cart">
              Cart
            </NavLink>
          </div>
        </li>
      </ul>
    </>
  );
};

export default NavigationItems;

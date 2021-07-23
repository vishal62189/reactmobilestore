import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";

import NavigationItems from "./NavigationItems/NavigationItems";
import Brand from "./Brand/Brand";
import classes from "./Header.module.css";

const Header = () => {
  return (
    <header>
      <Navbar expand="lg" fixed="top" className={classes.Header}>
        <Brand />
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse className="justify-content-end" id="basic-navbar-nav">
          <Nav>
            <NavigationItems />
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </header>
  );
};

export default Header;

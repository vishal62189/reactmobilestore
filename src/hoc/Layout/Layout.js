import React from "react";

import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import classes from "./Layout.module.css";

const Layout = (props) => {
  return (
    <div>
      <Header />
      <main className={classes.Main}>{props.children}</main>
      <Footer />
    </div>
  );
};

export default Layout;

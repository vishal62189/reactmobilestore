import React from "react";

const authContext = React.createContext({
  userName: "",
  isAuthenticated: false,
  onAuthLogin: () => {},
  onAuthLogot: () => {},
});

export default authContext;

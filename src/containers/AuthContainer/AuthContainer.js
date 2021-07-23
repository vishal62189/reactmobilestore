import React, { useContext } from "react";
import { useHistory } from "react-router-dom";

import Auth from "../../components/Auth/Auth";
import AuthContext from "../../context/authContext";

const AuthContainer = () => {
  const context = useContext(AuthContext);
  const history = useHistory();
  const handleAuthLogin = (useName) => {
    context.onAuthLogin(useName);
    history.goBack(1);
  };
  return <Auth onAuthLogin={handleAuthLogin} />;
};

export default AuthContainer;

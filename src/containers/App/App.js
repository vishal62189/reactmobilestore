import { Route, Switch } from "react-router-dom";

import "./App.css";
import AuthContext from "../../context/authContext";
import Layout from "../../hoc/Layout/Layout";
import Dashboard from "../../components/Dashboard/Dashboard";
import ProductListingContainer from "../ProductListingContainer/ProductListingContainer";
import ProductDisplayContainer from "../ProductDisplayContainer/ProductDisplayContainer";
import CartContainer from "../CartContainer/CartContainer";
import AuthContainer from "../AuthContainer/AuthContainer";
import { useState } from "react";

function App() {
  const [authenticate, setAuthenticate] = useState(false);
  const [userName, setUserName] = useState("");

  const handleAuthLogin = (userName) => {
    setAuthenticate(true);
    setUserName(userName);
  };
  const handleAuthLogout = () => {
    setAuthenticate(false);
    setUserName("");
  };
  return (
    <div className="App">
      <AuthContext.Provider
        value={{
          isAuthenticated: authenticate,
          userName: userName,
          onAuthLogin: handleAuthLogin,
          onAuthLogot: handleAuthLogout,
        }}
      >
        <Layout>
          <Switch>
            <Route path="/" exact component={Dashboard} />
            <Route path="/login" exact component={AuthContainer} />
            <Route path="/listing" component={ProductListingContainer} />
            <Route path="/display/:id" component={ProductDisplayContainer} />
            <Route path="/cart" component={CartContainer} />
          </Switch>
        </Layout>
      </AuthContext.Provider>
    </div>
  );
}

export default App;

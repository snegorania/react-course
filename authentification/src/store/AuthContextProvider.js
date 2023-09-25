import React, { useState, useEffect } from "react";

import AuthContext from "./auth-context";

const AuthContextProvider = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const loginHandler = (email, password) => {
    // We should of course check email and password
    // But it's just a dummy/ demo anyways
    setIsLoggedIn(true);
    localStorage.setItem("logIn", "loggedin");
  };

  useEffect(() => {
    if (localStorage.getItem("logIn") === "loggedin") {
      setIsLoggedIn(true);
    }
  }, []);

  const logoutHandler = () => {
    setIsLoggedIn(false);
    localStorage.removeItem("logIn");
  };

  const value = {
    isLoggedIn: isLoggedIn,
    logIn: loginHandler,
    logOut: logoutHandler,
  };
  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export default AuthContextProvider;

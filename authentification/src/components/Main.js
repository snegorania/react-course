import { useContext } from "react";
import React from "react";
import AuthContext from "../store/auth-context";
import Login from "./Login/Login";
import Home from "./Home/Home";

const Main = () => {
    const ctx = useContext(AuthContext)
  return (
    <main>
      {!ctx.isLoggedIn && <Login />}
      {ctx.isLoggedIn && <Home />}
    </main>
  );
};

export default Main;

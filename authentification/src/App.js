import React from "react";

import Main from "./components/Main";
import MainHeader from "./components/MainHeader/MainHeader/MainHeader";
import AuthContextProvider from "./store/AuthContextProvider";

function App() {
  return (
    <AuthContextProvider>
      <MainHeader/>
      <Main/>
    </AuthContextProvider>
  );
}

export default App;

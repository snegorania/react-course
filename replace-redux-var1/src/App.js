import React from "react";
import { Route } from "react-router-dom";
import { Routes } from "react-router-dom";

import Navigation from "./components/Nav/Navigation";
import ProductsPage from "./containers/Products";
import FavoritesPage from "./containers/Favorites";

const App = (props) => {
  return (
    <React.Fragment>
      <Navigation />
      <main>
        <Routes>
          <Route path="/" Component={ProductsPage} exact />
          <Route path="/favorites" Component={FavoritesPage} />
        </Routes>
      </main>
    </React.Fragment>
  );
};

export default App;

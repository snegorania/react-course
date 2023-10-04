import React, { useState } from "react";
import Header from "./components/Layout/Header/Header";
import Cart from "./components/Cart/Cart";
import CartContextProvider from "./store/CartContextProvider";
import Main from "./components/Layout/Main/Main";
import theme from "./theme";
import { ThemeProvider } from "@emotion/react";

function App() {
  const [cartIsShown, setCartIsShown] = useState(false);
  const showCartHandler = () => setCartIsShown(true);
  const closeCartHandler = () => setCartIsShown(false);

  return (
    <ThemeProvider theme={theme}>
      <CartContextProvider>
        {cartIsShown && <Cart onCloseCart={closeCartHandler} />}
        <Header onShowCart={showCartHandler} />
        <Main />
      </CartContextProvider>
    </ThemeProvider>
  );
}

export default App;

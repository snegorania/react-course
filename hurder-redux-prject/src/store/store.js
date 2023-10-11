import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "./cartSlice";
import uiSlice from "./uiSlice";

const combineReducers = {
    cart: cartSlice.reducer,
    ui: uiSlice.reducer
}

const store = configureStore({reducer: combineReducers});

export default store;
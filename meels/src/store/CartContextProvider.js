import React, { useReducer } from "react";
import CartContext from "./cart-context";
import cartReduser from "./cartReduser";

const defaultCart = {
    meals: [],
    totalAmount: 0
}

const CartContextProvider = ({children}) => {

    const [cartState, dispatchCart] = useReducer(cartReduser, defaultCart);

    const addMealHendler = (item) => {
        dispatchCart({type: "ADD_MEAL", payload: item});
    }

    const deleteMealHandler = (id) => {
        dispatchCart({type: "DELETE_MEAL", payload: id});
    }

    const value = {
        meals: cartState.meals,
        totalAmount: cartState.totalAmount,
        addMeal: addMealHendler,
        deleteMeal: deleteMealHandler
    }

    return (
        <CartContext.Provider value={value}>
            {children}
        </CartContext.Provider>
    )
}

export default CartContextProvider;
import React from "react";

const CartContext = React.createContext(() => {
    return {
        meals: [],
        totalAmount: 0,
        addMeal: () => {},
        deleteMeal: () => {}
    }
});

CartContext.displayName = "CartContext";

export default CartContext;
import React, { createContext, useReducer } from "react";
import { DUMMY_PRODUCTS } from '../dummy-products';

export const CartContext = createContext({
  items: [],
  addToCart: () => {},
  updateFromCart: () => {},
});

const cartReducer = (state, action) => {
  if (action.type === "ADD_TO_CART") {
    const updatedItems = [...state.items];

    const existingCartItemIndex = updatedItems.findIndex(
      (cartItem) => cartItem.id === action.payload
    );
    const existingCartItem = updatedItems[existingCartItemIndex];

    if (existingCartItem) {
      const updatedItem = {
        ...existingCartItem,
        quantity: existingCartItem.quantity + 1,
      };
      updatedItems[existingCartItemIndex] = updatedItem;
    } else {
      const product = DUMMY_PRODUCTS.find(
        (product) => product.id === action.payload
      );
      updatedItems.push({
        id: action.payload,
        name: product.title,
        price: product.price,
        quantity: 1,
      });
    }

    return {
      items: updatedItems,
    };
  }

  if (action.type === "UPDATE_FROM_CART") {
    const updatedItems = [...state.items];
    const updatedItemIndex = updatedItems.findIndex(
      (item) => item.id === action.payload.productId
    );

    const updatedItem = {
      ...updatedItems[updatedItemIndex],
    };

    updatedItem.quantity += action.payload.amount;

    if (updatedItem.quantity <= 0) {
      updatedItems.splice(updatedItemIndex, 1);
    } else {
      updatedItems[updatedItemIndex] = updatedItem;
    }

    return {
      items: updatedItems,
    };
  }
  return state;
};

export default function CartContextProvider({ children }) {
  const [cartState, dispatchCart] = useReducer(cartReducer, { items: [] });

  function handleAddItemToCart(id) {
    dispatchCart({ type: "ADD_TO_CART", payload: id });
  }

  function handleUpdateCartItemQuantity(productId, amount) {
    dispatchCart({
      type: "UPDATE_FROM_CART",
      payload: {
        productId,
        amount,
      },
    });
  }

  const value = {
    items: cartState.items,
    addToCart: handleAddItemToCart,
    updateFromCart: handleUpdateCartItemQuantity,
  };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}

import React from "react";
import { useState } from "react";

export const ProductsContext = React.createContext({
  products: [],
  toggleFav: () => {},
});

ProductsContext.displayName = "Products";

const Provider = ({ children }) => {
  const [products, setProducts] = useState([
    {
      id: "p1",
      title: "Red Scarf",
      description: "A pretty red scarf.",
      isFavorite: false,
    },
    {
      id: "p2",
      title: "Blue T-Shirt",
      description: "A pretty blue t-shirt.",
      isFavorite: false,
    },
    {
      id: "p3",
      title: "Green Trousers",
      description: "A pair of lightly green trousers.",
      isFavorite: false,
    },
    {
      id: "p4",
      title: "Orange Hat",
      description: "Street style! An orange hat.",
      isFavorite: false,
    },
  ]);

  const addToFavorite = (productId) => {
    const prodIndex = products.findIndex((p) => p.id === productId);
    const newFavStatus = !products[prodIndex].isFavorite;
    const updatedProducts = [...products];
    updatedProducts[prodIndex] = {
      ...products[prodIndex],
      isFavorite: newFavStatus,
    };
    setProducts(updatedProducts);
  };

  const value = {
    products,
    toggleFav: addToFavorite,
  };

  return (
    <ProductsContext.Provider value={value}>
      {children}
    </ProductsContext.Provider>
  );
};

export default Provider;

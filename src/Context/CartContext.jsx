import React, { createContext, useContext, useEffect, useState } from "react";

const cartContext = createContext();

export const CartProvider = ({ children }) => {
  const cartItems = [];
  const [cartCount, setCartCount] = useState(0);

  const handleAddToCartList = (product, quantity) => {
    cartItems.push({ product: product, quantity: quantity });
    console.log(cartCount)
  };

  const handleRemoveFromCartList = (id) => {
    cartItems.map((item, i) => {
      const { product } = item;
      if (product.id === id) cartItems.splice(i, 1);
    });
  };

  return (
    <cartContext.Provider
      value={{
        cartItems,
        handleAddToCartList,
        cartCount,
        setCartCount,
        handleRemoveFromCartList,
      }}
    >
      {children}
    </cartContext.Provider>
  );
};

export const useCartContext = () => {
  return useContext(cartContext);
};

import React, { createContext, useContext, useState } from "react";

const cartContext = createContext();

export const CartProvider = ({ children }) => {
  const cartItems = [];
  const [cartCount, setCartCount] = useState(0);
  const [discount, setDiscount] = useState(0);
  const [priceSum, setPriceSum] = useState(0);

  const handleAddToCartList = (product, quantity) => {
    cartItems.push({product: product, quantity: quantity})
  };
  return (
    <cartContext.Provider
      value={{
        cartItems,
        handleAddToCartList,
        cartCount,
        setCartCount,
        discount,
        setDiscount,
        priceSum,
        setPriceSum,
      }}
    >
      {children}
    </cartContext.Provider>
  );
};

export const useCartContext = () => {
  return useContext(cartContext);
};

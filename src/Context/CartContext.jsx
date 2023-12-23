import React, { createContext, useContext, useState } from "react";

const cartContext = createContext();

export const CartProvider = ({ children }) => {
  const cartItems = [];
  const [cartCount, setCartCount] = useState(0);
  const [discount, setDiscount] = useState(0);
  const [priceSum, setPriceSum] = useState(0);

  const handleAddToCartList = (product, quantity) => {
    cartItems.push({ product: product, quantity: quantity });
  };

  const handleRemoveFromCartList = (id) => {
    cartItems.map((item, i) => {
      const { product } = item;
      if (product.id === id) cartItems.splice(i, 1);
    });
  };
  const handlePriceSum = (id, price, quantity) => {
    cartItems.map((item, i) => {
      const { product } = item;
      if (product.id === id) setPriceSum(priceSum + price * quantity);
    });
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
        handleRemoveFromCartList,
        handlePriceSum,
      }}
    >
      {children}
    </cartContext.Provider>
  );
};

export const useCartContext = () => {
  return useContext(cartContext);
};

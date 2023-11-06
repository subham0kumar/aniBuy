import React from "react";
import { useContext } from "react";
import { createContext } from "react";

const ProductContext = ({ children }) => {
  const product = createContext();
  return <product.Provider value={""}>{children}</product.Provider>;
};

export default ProductContext;

export const useProductState = () => {
  return useContext(product);
};

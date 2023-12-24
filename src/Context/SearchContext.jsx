import React, { createContext, useContext, useState } from "react";

const searchContext = createContext();

export const SearchProvider = ({ children }) => {
  const [searchTerm, setSearchTerm] = useState("");

  const updateSearchTerm = (term) => {
    setSearchTerm(term);
  };
  return (
    <searchContext.Provider value={{ searchTerm, updateSearchTerm, setSearchTerm }}>
      {children}
    </searchContext.Provider>
  );
};

export const useSearch = () => {
    return useContext(searchContext);
  };

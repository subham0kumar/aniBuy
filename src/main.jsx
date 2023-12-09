import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App.jsx";
import ProductContext from "./Context/ProductContext";
import "./index.css";
import { SearchProvider } from "./Context/SearchContext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <ProductContext>
        <SearchProvider>
          <App />
        </SearchProvider>
      </ProductContext>
    </BrowserRouter>
  </React.StrictMode>
);

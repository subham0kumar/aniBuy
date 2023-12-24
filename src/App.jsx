import { Route, Routes } from "react-router-dom";
import "./App.css";
import Footer from "./Components1/Footer/Footer";
import ScrollToTop from "./Components1/Utility/ScrollToTop";
import CartPage from "./Pages/CartPage";
import FilteredPage from "./Pages/FilteredPage";
import LandingPage from "./Pages/LandingPage";
import ProductPage from "./Pages/ProductPage";
import BuyPage from "./Pages/BuyPage";
import ErrorPage from "./Pages/ErrorPage";


const App = () => {
  return (
    <div>
      <ScrollToTop />
      <Routes>
        <Route path="/" Component={LandingPage} />
        <Route path="/filtered/:page" Component={FilteredPage} />
        <Route path="/product/:index" Component={ProductPage} />
        <Route path="/cart/" Component={CartPage} />
        <Route path="/buy/" Component={BuyPage} />
        <Route path="/error/" Component={ErrorPage} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;

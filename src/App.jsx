import { Route, Routes } from "react-router-dom";
import "./App.css";
import Footer from "./Components1/Footer/Footer";
import InfoBanner from "./Components1/Header/InfoBanner";
import Navbar from "./Components1/Header/Navbar";
import FilteredPage from "./Pages/FilteredPage";
import LandingPage from "./Pages/LandingPage";
import ProductPage from "./Pages/ProductPage";
import CartPage from "./Pages/CartPage";
function App() {
  return (
    <div>
      <InfoBanner />
      <Navbar />
      <Routes>
        <Route path="/" Component={LandingPage} />
        <Route path="/filtered/" Component={FilteredPage} />
        <Route path="/product/" Component={ProductPage} />
        <Route path="/cart/" Component={CartPage} />
      </Routes>

      <Footer />
    </div>
  );
}

export default App;

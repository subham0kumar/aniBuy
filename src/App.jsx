import "./App.css";
import Footer from "./Components1/Footer/Footer";
import InfoBanner from "./Components1/Header/InfoBanner";
import Navbar from "./Components1/Header/Navbar";
import FilteredPage from "./Pages/FilteredPage";
import LandingPage from "./Pages/LandingPage";
import { Routes, Route } from "react-router-dom";
import ProductPage from "./Pages/ProductPage";
function App() {
  return (
    <div>
      <InfoBanner />
      <Navbar />
      <Routes>
        <Route path="/" Component={LandingPage} />
        <Route path="/filtered" Component={FilteredPage} />
        <Route path="/product/index:" Component={ProductPage} />
      </Routes>

      <Footer />
    </div>
  );
}

export default App;

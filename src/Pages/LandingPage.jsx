import React from "react";
import HeroSection from "../Components1/LandingPageComponents/HeroSection";
import LatestDrops from "../Components1/LandingPageComponents/LatestDrops";
import TrendingSection from "../Components1/LandingPageComponents/TrendingSection";
import TopCategorySection from "../Components1/LandingPageComponents/TopCategorySection";
import InfoBanner from "../Components1/Header/InfoBanner";
import Navbar from "../Components1/Header/Navbar";

const LandingPage = () => {
  return (
    <div className="overflow-hidden">
      <InfoBanner />
      <Navbar />
      <HeroSection />
      <LatestDrops />
      <TopCategorySection />
      <TrendingSection />
    </div>
  );
};

export default LandingPage;

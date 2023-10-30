import React from "react";
import HeroSection from "../Components1/LandingPageComponents/HeroSection";
import LatestDrops from "../Components1/LandingPageComponents/LatestDrops";
import TrendingSection from "../Components1/LandingPageComponents/TrendingSection";
import TopCategorySection from "../Components1/LandingPageComponents/TopCategorySection";

const LandingPage = () => {
  return (
    <div>
      <HeroSection />
      <LatestDrops />
      <TopCategorySection />
      <TrendingSection />
    </div>
  );
};

export default LandingPage;

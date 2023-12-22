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
      <span className="flex">
        <img src="public\edrwardFMAB.png" alt="goku" width={450} className=" mix-blend-luminosity opacity-70 hidden xl:block absolute -translate-x-3 -translate-y-2"/>
        <img src="public\goku-nimbus.png" alt="goku" width={450} className=" mix-blend-multiply opacity-70 hidden xl:block absolute -translate-y-28 translate-x-[70vw] bg-blend-multiply"/>
      </span>
      <TopCategorySection />
      <TrendingSection />
    </div>
  );
};

export default LandingPage;

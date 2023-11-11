import React, { useEffect, useState } from "react";
import { BsChevronCompactLeft, BsChevronCompactRight } from "react-icons/bs";

const HeroCaraousel = () => {
  const slides = [
    {
      url: "https://images.bewakoof.com/uploads/category/mobilesite/inside-banner-msite_anime-1693226434.jpg",
    },
    {
      url: "https://www.kiayaaccessories.com/cdn/shop/files/Kiaya-Home-Page-Banner-02-min.webp?v=1680929601&width=3000",
    },
    {
      url: "https://static.wixstatic.com/media/b6c0dc_3051ab9bae9c466a827452e143b2ee48~mv2.jpg/v1/fill/w_640,h_354,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/b6c0dc_3051ab9bae9c466a827452e143b2ee48~mv2.jpg",
    },
    {
      url: "https://bokunotrends.com/cdn/shop/collections/CSM_wide_banner.png?v=1690377985",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const nextSlide = () => {
    const isLastSlide = currentIndex === slides.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  const gotoSlide = (slideIndex) => {
    setCurrentIndex(slideIndex);
  };

  useEffect(() => {
    setTimeout(() => {
      nextSlide();
    }, 5000);
  });

  return (
    <div className="max-w-[1450px] h-[350px] m-auto py-2 px-4 relative group">
      <div
        style={{ backgroundImage: `url(${slides[currentIndex].url})` }}
        className="w-full h-full rounded-2xl bg-center bg-cover duration-500"
      ></div>

      <div className="hidden group-hover:block absolute top-[50%] -translate-x-0 -translate-y-[50%] left-6 text-2xl rounded-full p-2 bg-black/40 text-white cursor-pointer">
        <BsChevronCompactLeft onClick={prevSlide} size={30} />
      </div>
      <div className="hidden group-hover:block absolute top-[50%] -translate-x-0 -translate-y-[50%] right-6 text-2xl rounded-full p-2 bg-black/40 text-white cursor-pointer">
        <BsChevronCompactRight onClick={nextSlide} size={30} />
      </div>
    </div>
  );
};

export default HeroCaraousel;

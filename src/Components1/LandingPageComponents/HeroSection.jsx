import React, { useEffect, useState } from "react";
import { BsChevronCompactLeft, BsChevronCompactRight } from "react-icons/bs";
import { useNavigate } from "react-router-dom";
import { useSearch } from "../../Context/SearchContext";

const HeroCaraousel = () => {
  const { searchTerm, updateSearchTerm } = useSearch();
  const slides = [
    {
      url: "public/Anime-Posters-Web-Banner-1920x730px.jpg",
      name: 'posters',
    },
    {
      url: "public/One-Piece-Store-Web-Banner-1920x950px.jpg",
      name: "one piece",
    },
    {
      url: "public/desktop-wallpaper-naruto-naruto-shippuuden-anime-boy-naruto-ultra-wide.jpg",
      name: 'naruto'
    },
    {
      url: "public/t-_shirt_banner_1920x450.webp",
      name: 'tees'
    },
  ];

  const navigate = useNavigate();
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

  const gotoPage = () => {
    let val = slides[currentIndex].name
    updateSearchTerm(val)
    navigate(`/filtered/:${searchTerm}`)
  };

  useEffect(() => {
    setTimeout(() => {
      nextSlide();
    }, 5000);
    updateSearchTerm('')
  });

  return (
    <div className="max-w-[1450px] h-[350px] m-auto py-2 px-4 relative group">
      <div
        style={{ backgroundImage: `url(${slides[currentIndex].url})` }}
        className="w-full h-full rounded-2xl bg-center bg-cover duration-500"
        onClick={gotoPage}
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

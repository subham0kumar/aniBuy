import React, { useState } from "react";
import Card from "./Card";
import { BsChevronCompactLeft, BsChevronCompactRight } from "react-icons/bs";

const Carousel = ({ data, heading }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const cardsPerPage = 5;

  const totalPages = Math.ceil(data.length / cardsPerPage);

  const handlePrevious = () => {
    setCurrentIndex(currentIndex === 0 ? totalPages - 1 : currentIndex - 1);
  };

  const handleNext = () => {
    setCurrentIndex(currentIndex === totalPages - 1 ? 0 : currentIndex + 1);
  };

  const visibleCards = data.slice(
    currentIndex * cardsPerPage,
    currentIndex * cardsPerPage + cardsPerPage
  );

  return (
    <div className="relative w-full text-center">
      <span className="text-4xl font-agbalumo text-gray-800">{heading}</span>
      <div className= "flex overflow-hidden space-x-4 p-4 m-2 rounded-lg">
        {visibleCards.map((card, index) => (
          <div
            key={index}
            className="w-1/5 py-2 px-2 transition-transform duration-200 translate-x-0"
          >
            {/* Your card content goes here */}
            <Card
              title={card.title}
              description={card.description}
              url={card.url}
            />
          </div>
        ))}
      </div>

      {/* >---------------PAGINATION----------------< */}
      <div className="flex justify-evenly text-center">
        <div className="rounded-full p-2 border-solid border-2 bg-fuchsia-900/30 cursor-pointer">
          <BsChevronCompactLeft onClick={handlePrevious} size={25} color="white" />
        </div>
        <div className="text-center">
          {Array.from({ length: totalPages }).map((_, page) => (
            <button
              key={page}
              onClick={() => setCurrentIndex(page)}
              className={`mx-1 px-4 py-1 text-sm rounded-full cursor-pointer border-solid border-2 ${
                page === currentIndex ? "bg-sky-500" : "bg-red-300"
              }`}
            ></button>
          ))}
        </div>
        <div className="rounded-full p-2 border-solid border-2 bg-fuchsia-900/30 cursor-pointer">
          <BsChevronCompactRight onClick={handleNext} size={25} color="white" />
        </div>
      </div>
    </div>
  );
};

export default Carousel;

import React from "react";
import { Link } from "react-router-dom";
import "swiper/css/bundle";
import { Swiper, SwiperSlide } from "swiper/react";
import Card from "./Card";
import { useState } from "react";
import { useEffect } from "react";

const SwiperDiv = ({ data, heading }) => {
  const [matches, setMatches] = useState(
    window.matchMedia("(min-width: 640px)").matches
  );
  useEffect(() => {
    window
      .matchMedia("(min-width: 640px)")
      .addEventListener("change", (e) => setMatches(e.matches));
  }, []);
  const slideCount = matches ? 5 : 2;
  return (
    <div>
      <span className="text-4xl font-agbalumo text-gray-800">{heading}</span>
      <Swiper
        spaceBetween={10}
        slidesPerView={slideCount}
      >
        <div className="space-x-4 p-4 m-2 rounded-lg">
          {data.map((card, index) => (
            <SwiperSlide key={index}>
              <Link to={`/product/id:${index}`}>
                <Card
                  title={card.title}
                  price={card.price}
                  url={card.url}
                  nprice={card.nPrice}
                />
              </Link>
            </SwiperSlide>
          ))}
        </div>
      </Swiper>
    </div>
  );
};

export default SwiperDiv;
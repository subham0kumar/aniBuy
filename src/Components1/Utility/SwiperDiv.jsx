import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "swiper/css/bundle";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import Card from "./Card";

const SwiperDiv = ({ data, heading }) => {
  const [matches, setMatches] = useState(
    window.matchMedia("(min-width: 640px)").matches
  );

  useEffect(() => {
    window
      .matchMedia("(min-width: 640px)")
      .addEventListener("change", (e) => setMatches(e.matches));
  }, []);

  const slideCount = matches ? 5 : 2.1;
  return (
    <div>
      <span className="text-4xl font-agbalumo text-gray-800">{heading}</span>
      <Swiper
      modules={[Navigation, Pagination, Scrollbar]}
        spaceBetween={10}
        slidesPerView={slideCount}
        navigation
        pagination={{ clickable: true }}
        className="md:block hidden"
      >
        <div className="space-x-4 p-4 m-2 rounded-lg">
          {data.map((card) => (
            <SwiperSlide key={card.id}>
              <Link to={`/product/${card.id}`}>
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
      
      
      <Swiper
      modules={[Navigation, Pagination, Scrollbar]}
        spaceBetween={10}
        slidesPerView={slideCount}
        scrollbar
        className="md:hidden"
      >
        <div className="space-x-4 p-4 m-2 rounded-lg">
          {data.map((card) => (
            <SwiperSlide key={card.id}>
              <Link to={`/product/${card.id}`}>
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

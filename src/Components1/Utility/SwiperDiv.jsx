import React from "react";
import "swiper/css/bundle";
import { Swiper, SwiperSlide } from "swiper/react";
import Card from "./Card";
import { Link, useNavigate } from "react-router-dom";

const SwiperDiv = ({ data, heading }) => {
  const navigate = useNavigate();
  return (
    <div>
      <span className="text-4xl font-agbalumo text-gray-800">{heading}</span>
      <Swiper
        spaceBetween={10}
        slidesPerView={5}
        // onSlideChange={() => console.log("slide change")}
        // onSwiper={(swiper) => console.log(swiper)}
        // {() => navigate(`/product/index:${index}`)}
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

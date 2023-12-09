import React from "react";

const Card = ({ url, title, price, nprice }) => {
  return (
    <div className="flex-col justify-center bg-second border-action border-2 hover:cursor-pointer hover:scale-95 rounded-lg duration-200 m-4 w-full h-[200px] md:h-[325px]">
      <div
        style={{
          backgroundImage: `url(${url})`,
        }}
        className="w-full rounded-t-md aspect-square h-[140px] md:h-[200px] m-auto relative bg-cover bg-no-repeat bg-center"
      ></div>
      <div className="md:pt-6 pt-2 pb-3 h-[125px] font-agbalumo flex text-gray-800 flex-col md:justify-between">
        <h5 className="hidden md:block mb-2 text-lg leading-tight font-md">{title}</h5>
        <h5 className="md:hidden md:mb-2 text-lg leading-tight font-md">{title.substring(0,12)}..</h5>
        <div className=" md:border-t-2 border-solid rounded-t-md border-action flex justify-evenly items-center">
          <span className="md:mb-2 text-lg font-md">₹{price}</span>
          <span className="md:mb-2 line-through text-gray-600">₹{nprice}</span>
        </div>
      </div>
    </div>
  );
};

export default Card;

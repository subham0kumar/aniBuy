import React from "react";

const Card = ({ url, title, price, nprice }) => {
  return (
    <div className="flex-col justify-center bg-action hover:cursor-pointer hover:scale-95 rounded-md  duration-200 m-1 w-full h-[325px]">
      <div
        style={{
          backgroundImage: `url(${url})`,
        }}
        className="w-full rounded-t-md aspect-square h-[200px] m-auto relative bg-cover bg-no-repeat bg-center"
      ></div>
      <div className="pt-6 pb-3 h-[125px] font-agbalumo flex text-gray-800 flex-col justify-between">
        <h5 className="mb-2 text-lg leading-tight font-md">
          {title}
        </h5>
        <div className=" border-t-2 border-solid rounded-t-md border-second flex justify-evenly">
          <span className="mb-2 text-lg font-md">
            ₹{price}
          </span>
          <span className="mb-2 line-through text-gray-600">
            ₹{nprice}
          </span>
        </div>
      </div>
    </div>
  );
};

export default Card;

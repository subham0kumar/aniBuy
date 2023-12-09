import React from "react";

const Card2 = ({ url, title, price, nprice }) => {
  return (
    <div className="flex md:flex-col border-2 border-malibu hover:cursor-pointer hover:scale-95 rounded-lg bg-second duration-200">
      <section className="md:h-[250px] h-[150px] md:w-full w-[150px]">
        <div
          style={{
            backgroundImage: `url(${url})`,
          }}
          className="h-[150px] md:h-[250px] w-full rounded-md rounded-l-md aspect-square m-auto relative bg-cover bg-no-repeat bg-center"
        ></div>
      </section>
      <span className="flex flex-col justfy-end p-2 font-chakra">
        <p className="font-bold hidden md:block">{title}</p>{" "}
        <p className="font-bold md:hidden">{title.substring(0,15)}</p>{" "}
        <span className="flex space-x-4 items-end">
          <p className="text-action2 font-semibold">₹{price}</p>
          <p className="text-red-600 text-sm font-semibold line-through">₹{nprice}</p>
        </span>
      </span>
    </div>
  );
};

export default Card2;

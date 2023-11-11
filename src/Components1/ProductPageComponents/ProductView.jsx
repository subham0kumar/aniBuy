import React from "react";
import { BsCartPlus } from "react-icons/bs";
import { GiTakeMyMoney } from "react-icons/gi";
import PlusMinusCount from "../Utility/PlusMinusCount";
import Stars from "../Utility/Stars";
import { numberWithCommas } from "../../Context/ProductContext";

const ProductView = ({ product }) => {
  const { title, star, description, price, nPrice, url } = product;
  const dicountPercent = 100 - Math.floor((price / nPrice) * 100);
  return (
    <>
      <div className="flex flex-col md:flex-row justify-between md:justify-start md:items-start items-center px-7">
        <div className="flex justify-center m-2 w-[80vw] md:w-1/2">
          <img
            src={url}
            alt={title}
            className="mx-4 md:mx-16 my-2 h-[55vh] rounded-lg w-fit md:h-[80vh]"
          />
        </div>
        <div className="w-[80vw] md:w-1/2 flex justify-center my-4 items-center md:items-start flex-col">
          <span className="text-4xl font-exo font-bold mt-3 text-center">
            {title}
          </span>
          <span>
            <Stars star={star} />
          </span>
          <div className="w-[70%] m-3 font-chakra font-bold text-center md:text-start">
            <span className="text-2xl mr-3">₹{numberWithCommas(price)}</span>
            <span className="line-through text-gray-400">
              ₹{numberWithCommas(nPrice)}
            </span>
            <span className="text-red-600 mx-2">
              -{numberWithCommas(dicountPercent)}%
            </span>
          </div>

          {/* <+++++++++++++++++Cart CRUD+++++++++++++++++> */}
          <div>
            <PlusMinusCount />
          </div>
          <div className="w-[70%] my-6 flex md:flex-row flex-col items-center justify-between md:justify-start text-center font-chakra font-bold">
            <span className="w-[9rem] text-action2 mb-2 flex p-3 bg-second md:m-2 mt-2 rounded-md shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-action hover:text-second hover:scale-105 cursor-pointer active:scale-95">
              <BsCartPlus size={20} className="mr-3" />
              Add to cart
            </span>
            <span className="w-[9rem] md:m-2 mt-2 flex p-3 bg-action rounded-md text-second shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-second hover:text-action md:active:scale-95 md:hover:scale-105 cursor-pointer">
              <GiTakeMyMoney size={25} className="mr-3" />
              Buy Now
            </span>
          </div>

          <p className="font-exo">{description}</p>
        </div>
      </div>
    </>
  );
};

export default ProductView;

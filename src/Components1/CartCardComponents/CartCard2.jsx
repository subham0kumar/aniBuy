import React from "react";
import { useCartContext } from "../../Context/CartContext";
import { Link } from "react-router-dom";
import { FaHeartCirclePlus, FaTrash } from "react-icons/fa6";

const CartCard2 = ({ items, quant }) => {
  const { url, title, price, id } = items;
  const { handleRemoveFromCartList } = useCartContext();
  const removeFromCart = (items, quant) => {
    handleRemoveFromCartList(items, quant);
  };
  return (
    <div className="md:hidden">
      <div className="flex font-rubik my-2">
        <div
          style={{
            backgroundImage: `url(${url})`,
          }}
          className="w-[5rem] md:h-[5rem] h-[6rem] rounded-md aspect-square bg-cover bg-no-repeat bg-center "
        ></div>
        <div className="ml-2 flex flex-col">
          <span className="text-[1rem]">{title.substring(0, 25)}...</span>
          <span className="text-[1rem]">Quantity: {quant}</span>
          <span className="font-semibold">₹ {price}</span>
        </div>
      </div>
      <div className="flex pb-2">
        <Link to={"/cart/"}>
          <span
            className="w-fit  flex px-16 py-2 bg-action rounded-md text-second shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-second hover:text-action md:active:scale-95 md:hover:scale-105 cursor-pointer"
            onClick={() => {
              removeFromCart(id);
            }}
          >
            <FaTrash size={20} />
          </span>
        </Link>
        <span className="w-fit ml-2 flex px-16 py-2 bg-action rounded-md text-second shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-second hover:text-action md:active:scale-95 md:hover:scale-105 cursor-pointer">
          <FaHeartCirclePlus size={20} />
        </span>
      </div>
    </div>
  );
};

export default CartCard2;

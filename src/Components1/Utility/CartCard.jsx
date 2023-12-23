import React, { useEffect } from "react";
import { FaHeartCirclePlus, FaTrash } from "react-icons/fa6";
import { Link } from "react-router-dom";
import { useCartContext } from "../../Context/CartContext";

const CartCard = ({ items, quant }) => {
  const { url, title, price, id } = items;
  const { cartItems, handleRemoveFromCartList, handlePriceSum } =
    useCartContext();
  // useEffect(() => {
  //   handlePriceSum(id, price, quant);
  // },[]);
  const removeFromCart = (items, quant) => {
    handleRemoveFromCartList(items, quant);
  };
  return (
    <>
      <tr className="font-chakra font-bold">
        <td className="w-[18rem]">
          <div className="w-2/3 justify-end flex items-center text-xl">
            <div
              style={{
                backgroundImage: `url(${url})`,
              }}
              className="w-[4rem] md:h-[4rem] h-[6rem] rounded-md aspect-square bg-cover bg-no-repeat bg-center"
            ></div>
            <span className="ml-4">{title.substring(0, 15)}...</span>
          </div>
        </td>
        <td>{quant}</td>
        <td className="text-xl font-bold ">₹ {price}</td>
        <td>
          <Link to={"/cart/"}>
            <span
              className="w-fit mt-2 flex p-2 bg-action rounded-md text-second shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-second hover:text-action md:active:scale-95 md:hover:scale-105 cursor-pointer"
              onClick={() => {
                removeFromCart(id);
              }}
            >
              <FaTrash size={20} />
            </span>
          </Link>
          <span className="w-fit ml-2 mt-2 flex p-2 bg-action rounded-md text-second shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-second hover:text-action md:active:scale-95 md:hover:scale-105 cursor-pointer">
            <FaHeartCirclePlus size={20} />
          </span>
        </td>
      </tr>
    </>
  );
};

export default CartCard;

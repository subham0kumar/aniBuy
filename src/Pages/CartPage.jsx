import React, { useState } from "react";
import Navbar from "../Components1/Header/Navbar";
import CartCard from "../Components1/Utility/CartCard";
import { useCartContext } from "../Context/CartContext";
import { Link } from "react-router-dom";

const CartPage = () => {
  const { cartItems } = useCartContext();
  console.log(cartItems)
  return (
    <>
      <div className="mt-4">
        <Navbar />
      </div>
      {cartItems.length !== 0 ? (
        <div className="flex">
          <div
            className="w-2/3 ml-32 flex items-center shadow-xl rounded-lg p-4"
            style={{
              background:
                "linear-gradient(90deg, rgba(238,153,255,0.5) 32%, rgba(224,231,255,.7) 100%)",
            }}
          >
            <table>
              <thead>
                <tr>
                  <th className="w-[18rem]">PRODUCT</th>
                  <th>QUANTITY</th>
                  <th>PRICE</th>
                  <th>ACTION</th>
                </tr>
              </thead>
              <tbody>
                {cartItems.map((currItem, i) => {
                  const { product, quantity } = currItem;
                  <CartCard
                    items={product}
                    quant={quantity}
                  />;
                // {console.log(quantity, product)}
                })}

                <tr className="flex justify-end space-x-40 font-chakra font-semibold">
                  <td>
                    <Link to={"/cart/"}>
                      <span
                        className="w-fit ml-2 mt-2 flex p-2 bg-action rounded-md text-second shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-second hover:text-action md:active:scale-95 md:hover:scale-105 cursor-pointer"
                        onClick={() => cartItems.splice(0, cartItems.length)}
                      >
                        CLEAR CART
                      </span>
                    </Link>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <div
            className="w-1/3 h-80 mx-8 mr-32 flex flex-col bg-second shadow-xl rounded-lg p-4 font-chakra font-bold"
            style={{
              background:
                "linear-gradient(90deg, rgba(224,231,255,.7) 32%, rgba(238,153,255,.7) 80%)",
            }}
          >
            <span className="text-2xl border-b-2 border-dashed border-black pb-2">
              Price Details
            </span>
            <span className="text-xl border-b-2 border-dashed border-black py-4">
              <h2 className="flex justify-between w-full">
                Price <p>10</p>
              </h2>
              <h2 className="flex justify-between w-full">Discount</h2>
            </span>
            <span className="text-xl py-4">TOTAL AMOUNT</span>
          </div>
        </div>
      ) : (
        <div className="flex justify-center text-2xl items-center">
          No items in Cart
        </div>
      )}
    </>
  );
};

export default CartPage;

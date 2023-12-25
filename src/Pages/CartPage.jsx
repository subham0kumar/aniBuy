import React from "react";
import { Link } from "react-router-dom";
import Navbar from "../Components1/Header/Navbar";
import CartCard from "../Components1/CartCardComponents/CartCard";
import { useCartContext } from "../Context/CartContext";
import CartCard2 from "../Components1/CartCardComponents/CartCard2";

const CartPage = () => {
  const { cartItems } = useCartContext();

  const totalSum = cartItems.reduce((acc, cartItem) => {
    const quantity = cartItem.quantity || 1;
    const productPrice = cartItem.product.price || 0;

    return acc + productPrice * quantity;
  }, 0);

  const totalAmount = cartItems.reduce((acc, cartItem) => {
    const quantity = cartItem.quantity || 1;
    const productPrice = cartItem.product.nPrice || 0;

    return acc + productPrice * quantity;
  }, 0);

  return (
    <>
      <div className="mt-4">
        <Navbar />
      </div>
      {cartItems.length !== 0 ? (
        <div className="flex md:flex-row flex-col">
          <div
            className="mx-2 mt-2 border-action2 border-2 md:w-2/3 md:ml-32 flex items-center shadow-xl rounded-lg p-4"
            style={{
              background:
                "linear-gradient(90deg, rgba(238,153,255,0.5) 32%, rgba(224,231,255,.7) 100%)",
            }}
          >
            <table className="md:block hidden">
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
                  return <CartCard items={product} quant={quantity} key={i} />;
                })}
                <tr className="flex justify-end space-x-40">
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
            <div>
              {cartItems.map((currItem, i) => {
                const { product, quantity } = currItem;
                return <CartCard2 items={product} quant={quantity} key={i} />;
              })}
            </div>
          </div>
          <div
            className="md:w-1/3 mt-4 h-80 mx-2 md:mt-2 md:mx-8 md:mr-32 flex flex-col bg-second shadow-xl rounded-lg p-4 font-rubik border-2 border-action2"
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
                Price <p>₹{totalAmount}</p>
              </h2>
              <h2 className="flex justify-between w-full">
                Discount{" "}
                <p className="text-red-600">-₹{totalAmount - totalSum}</p>
              </h2>
            </span>
            <span className="text-xl py-4">
              <h2 className="flex justify-between w-full">
                TOTAL AMOUNT{" "}
                <p className="text-2xl font-rubik text-action2">₹{totalSum}</p>
              </h2>
            </span>
            <span>
              <Link to={"/buy/"} className="flex justify-center ">
                <span
                  className="w-fit md:ml-2 mt-2 flex px-24 py-2 md:p-2 bg-action rounded-md text-second shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-second hover:text-action md:active:scale-95 md:hover:scale-105 cursor-pointer"
                  onClick={() => cartItems.splice(0, cartItems.length)}
                >
                  PLACE ORDER
                </span>
              </Link>
            </span>
          </div>
        </div>
      ) : (
        <div className="h-[80vh] mt-16 flex justify-start items-center flex-col font-agbalumo">
          <p className="md:text-2xl text-lg">The Cart is EMPTY !!</p>
          <Link to={"/"}>
            <span className="text-xl w-fit md:ml-2 md:mt-4 mt-2 flex px-24 py-3 bg-action rounded-md text-second shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-second hover:text-action md:active:scale-95 md:hover:scale-105 cursor-pointer">
              Continue Shopping
            </span>
          </Link>
        </div>
      )}
    </>
  );
};

export default CartPage;

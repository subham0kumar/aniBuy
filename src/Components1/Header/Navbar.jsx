import React, { useState } from "react";
import { CgClose } from "react-icons/cg";
import { FiSearch } from "react-icons/fi";
import { Link } from "react-router-dom";
import { useProductState } from "../../Context/ProductContext";
import DropdownMenu from "../Utility/DropdownMenu";
import MobileNavbar from "../Utility/MobileNavbar";
import Search from "../Utility/Search";
import { useSearch } from "../../Context/SearchContext";
import { useCartContext } from "../../Context/CartContext";

const Navbar = () => {
  const [showSearch, setShowSearch] = useState(false);
  const { navbarData } = useProductState();
  const { updateSearchTerm } = useSearch();
  const { cartItems } = useCartContext();
  const handleSearch = () => {
    setShowSearch(true);
  };

  const totalCount = cartItems.reduce((acc, cartItem) => {
    const quantity = cartItem.quantity || 1;
    return acc + quantity;
  }, 0);

  return (
    <>
      <div
        className={`${
          showSearch
            ? "fixed translate-y-0 shadow-modal"
            : "absolute -translate-y-[1000px]"
        } w-fit p-6 bg-neutralam rounded-md z-20 left-0 right-0 ml-auto mr-auto transition duration-500 flex`}
      >
        <Search setShowSearch={setShowSearch} />
        <span className="ml-4 hidden md:block hover:cursor-pointer right-0 text-center w-full text-action2">
          <CgClose size={30} onClick={() => setShowSearch(false)} />
        </span>
      </div>
      {/* <-------------------Default mode---------------------> */}
      <div className="hidden rounded-b-md justify-between mb-2 mx-2 px-5 py-2 sm:flex">
        {/* <-------------- LEFT side ----------------> */}

        <div className="flex text-gray-800 font-agbalumo">
          {navbarData.map((listItem, i) => {
            return (
              <DropdownMenu
                key={i}
                menuLabel={listItem.title}
                items={listItem.list}
              />
            );
          })}
          <Link
            to={"/filtered/all"}
            className="hover:bg-neutralamL mx-2 mb-2 px-2 rounded-md"
          >
            All Products
          </Link>
        </div>

        {/* <-------------- CENTER    (▀̿Ĺ̯▀̿ ̿)    ༼ つ ◕_◕ ༽つ (⌐■_■)----------------> */}

        <div>
          <Link to={"/"} onClick={() => updateSearchTerm("")}>
            <span className="font-ukiyo text-gray-800 text-3xl">
              {"Ani (～￣▽￣)～ Buy"}
            </span>
          </Link>
        </div>

        {/* <-------------- RIGHT side ----------------> */}
        <div className="flex cursor-pointer items-center">
          <span
            className="bg-transparent rounded-md px-4 p-1 text-action hover:shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-action hover:text-second md:active:scale-95 md:hover:scale-105 cursor-pointer"
            // onClick={handleSearch}
          >
            <Link to={"/filtered/all"}>
              <FiSearch size={30} />
            </Link>
          </span>
          <div className="flex mx-2 pl-4">
            <span className="material-symbols-outlined text-action px-2">
              <Link to={"/error/"}>account_circle</Link>
            </span>
            <span className="material-symbols-outlined text-action px-2">
              <Link to={"/error/"}>favorite</Link>
            </span>
            <span className="material-symbols-outlined text-action px-2">
              <Link to={"/cart/"}>shopping_cart</Link>
              <span className="-z-10 px-1.5 pb-1.5 pt-1 text-[.7rem] bg-red-400 rounded-full text-second absolute -translate-y-3.5 -translate-x-2.5">
                {totalCount}
              </span>
            </span>
          </div>
        </div>
      </div>

      {/* <========================Mobile Mode======================> */}

      <div className="">
        <MobileNavbar />
      </div>
      {/* <div className="md:hidden flex  items-center justify-center">
        <Search />
      </div> */}
    </>
  );
};

export default Navbar;

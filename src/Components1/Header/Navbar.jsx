import React, { useState } from "react";
import { CgClose, CgMenu } from "react-icons/cg";
import { FiSearch } from "react-icons/fi";
import { MdOutlineShoppingCart } from "react-icons/md";
import { Link } from "react-router-dom";
import DropdownMenu from "../Utility/DropdownMenu";
import TouchDropdown from "../Utility/TouchDropdown";

const data = [
  {
    title: "Category",
    list: [
      "T-shirts",
      "Hoodies",
      "T-shirts2",
      "Hoodies2",
      "T-shirts3",
      "Hoodies3",
    ],
  },
  {
    title: "Anime",
    list: [
      "Dragon Ball Z",
      "One Peice",
      "Naruto",
      "Bleach",
      "Fullmetal Alchemist",
    ],
  },
  {
    title: "Trending",
    list: [
      "Oversized Tees",
      "Gojo figurines",
      "Trash (Sakura)",
      "Oversized Tees",
      "Gojo figurines",
      "Trash (Sakura)",
    ],
  },
];

const Navbar = () => {
  const [showModal, setShowModal] = useState(false);
  const [open, setopen] = useState(null);
  const toggle = (i) => {
    if (open === i) {
      return setopen(null);
    }
    setopen(i);
  };
  return (
    <>
      {/* <-------------------Default mode---------------------> */}
      <div className="hidden rounded-b-md justify-between mb-2 mx-2 px-5 py-2 sm:flex">
        {/* <-------------- LEFT side ----------------> */}

        <div className="flex text-gray-800 font-agbalumo">
          {data.map((listItem, i) => {
            return (
              <DropdownMenu menuLabel={listItem.title} items={listItem.list} />
            );
          })}
        </div>

        {/* <-------------- CENTER    (▀̿Ĺ̯▀̿ ̿)    ༼ つ ◕_◕ ༽つ (⌐■_■)----------------> */}

        <div>
          <Link to={"/"}>
            <span className="font-ukiyo text-gray-800 text-3xl">
              {"Ani (～￣▽￣)～ Buy"}
            </span>
          </Link>
        </div>

        {/* <-------------- RIGHT side ----------------> */}
        <div className="flex cursor-pointer">
          <span>
            <FiSearch size={25} color="#8667F2" />
          </span>{" "}
          <div className="flex mx-2 pl-4">
            <span className="material-symbols-outlined text-action px-2">
              account_circle
            </span>
            <span className="material-symbols-outlined text-action  px-2">
              favorite
            </span>
            <span className="material-symbols-outlined text-action  px-2">
              <Link to={"/cart/"}>shopping_cart</Link>
            </span>
          </div>
        </div>
      </div>

      {/* <========================Mobile Mode======================> */}

      <div className="flex justify-between px-1 m-3 mx-0 w-[95w] sm:hidden shadow-[0_4px_9px_-4px_#3b71ca] text-center">
        <button
          type="button"
          onClick={() => setShowModal(true)}
          className="w-content inline-block text-action px-2 py-1 mr-10 transition duration-150 ease-in-out"
        >
          <CgMenu size={30} />
        </button>
        <div className="mx-5 font-ukiyo text-5xl w-2/3">
          <Link to={"/"}> AB</Link>
        </div>
        <div className="flex items-center justify-around">
          <span className="pr-4">
            <FiSearch size={25} color="#8667F2" />
          </span>
          <span className="px-2">
          <Link to={"/cart/"}><MdOutlineShoppingCart size={25} color="#8667F2" /></Link>
          </span>
        </div>
      </div>
      <div
        className={`h-full w-[90vw] z-50 top-0 transition ease-in-out text-center duration-500 bg-[#e5e7eb] ${
          showModal
            ? "fixed translate-x-0 shadow-[0_4px_9px_150px_rgba(0,0,0,0.7)]"
            : "absolute -translate-x-full"
        }`}
      >
        <div className="p-3 h-[10vh] border-b-2 border-black flex justify-between items-center">
          <span className="font-ukiyo text-3xl">
            <Link to={"/"} onClick={() => setShowModal(false)}>
              AB
            </Link>
          </span>
          <span className="m-3 hover:cursor-pointer text-action2">
            <CgClose size={30} onClick={() => setShowModal(false)} />
          </span>
        </div>
        <div className="mt-4 border-b-2 border-action2">
          {data.map((listItem, i) => {
            return (
              <TouchDropdown
                menuLabel={listItem.title}
                items={listItem.list}
                key={i}
                open={i === open}
                toggle={() => toggle(i)}
              />
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Navbar;

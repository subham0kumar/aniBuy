import React from "react";
import { FiSearch } from "react-icons/fi";
import { Link } from "react-router-dom";
import DropdownMenu from "../Utility/DropdownMenu";

const Navbar = () => {
  const categoryItems = [
    "T-shirts",
    "Hoodies",
    "T-shirts2",
    "Hoodies2",
    "T-shirts3",
    "Hoodies3",
  ];
  const animeList = ["Dragon Ball Z", "One Peice", "Naruto", "Bleach"];
  const trendingList = ["Oversized Tees", "Gojo figurines", "Trash (Sakura)"];
  return (
    <div className="flex rounded-b-md  justify-between mb-2 mx-2 px-5 py-2">
      {/* <-------------- LEFT side ----------------> */}

      <div className="flex text-gray-800 font-agbalumo">
        <span>
          <DropdownMenu menuLabel={"Category"} items={categoryItems} />
        </span>
        <span>
          <DropdownMenu menuLabel={"Shop by Anime"} items={animeList} />
        </span>
        <span>
          <DropdownMenu menuLabel={"Trending"} items={trendingList} />
        </span>
      </div>

      {/* <-------------- CENTER    (▀̿Ĺ̯▀̿ ̿)    ༼ つ ◕_◕ ༽つ (⌐■_■)----------------> */}

      <div>
      <Link to={'/'}><span className="font-ukiyo text-gray-800 text-3xl">{'Ani (～￣▽￣)～ Buy'}</span></Link>
      </div>

      {/* <-------------- RIGHT side ----------------> */}
      <div className="flex cursor-pointer">
        <span>
          <FiSearch size={25} color='#8667F2'/>
        </span>{" "}
        <div className="flex mx-2 pl-4">
          <span className="material-symbols-outlined text-action px-2">
            account_circle
          </span>
          <span className="material-symbols-outlined text-action  px-2">
            favorite
          </span>
          <span className="material-symbols-outlined text-action  px-2">shopping_cart</span>
        </div>
      </div>
    </div>
  );
};

export default Navbar;

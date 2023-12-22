import React from "react";
import { BiSolidChevronDown } from "react-icons/bi";
import { Link } from "react-router-dom";
import { useSearch } from "../../Context/SearchContext";

const DropdownMenu = ({ menuLabel, items }) => {
  const { updateSearchTerm } = useSearch();
  return (
    <div className="group">
      <button className="flex items-end text-center relative mx-2 mb-2 pb-2 pl-2 rounded-md hover:bg-neutralamL">
        {menuLabel}
        <BiSolidChevronDown />
      </button>
      <div className="hidden rounded-md -translate-x-3 bg-neutralam absolute box-border w-fit h-fit min-w-min shadow-3xl z-10 group-hover:block">
        <ul className="flex flex-col">
          {items.map((item, index) => (
            <Link
              to={`/filtered/${item.toLowerCase()}`}
              key={index}
              onClick={() => updateSearchTerm(item)}
            >
              <div
                className="m-1 px-4 width-full p-1 rounded-md hover:cursor-pointer hover:bg-action hover:text-neutral-200"
                key={index}
              >
                {item}
              </div>
            </Link>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default DropdownMenu;

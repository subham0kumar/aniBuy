import React from "react";
import { Collapse } from "react-collapse";
import { AiOutlineArrowRight } from "react-icons/ai";

const TouchDropdown = ({icon, menuLabel, items, open, toggle }) => {
  return (
    <div>
      <div className="w-full flex justify-between">
        <button
          className="w-full relative mb-2 inline-block px-3 rounded-md"
          onClick={toggle}
        >
          <span className="p-4 flex border-b-2 rounded-md shadow-inHeavy text-action2 font-agbalumo bg-neutralam items-center justify-between w-full active:scale-95 duration-200 transition">
            {icon}{menuLabel}{" "}
             <AiOutlineArrowRight className={`transition duration-300 ${open ? "-rotate-90" : "rotate-45"}`} size={20} />
          </span>
        </button>
      </div>
      <Collapse isOpened={open}>
        <div className={"w-full rounded-md "}>
          <ul className="flex flex-col border-b-4 border-second rounded-md">
            {items.map((item, index) => (
              <div
                className="mx-3 px-8 w-[95%] p-1 font-agbalumo  hover:cursor-pointer text-action active:bg-malibu rounded-lg text-sm active:text-neutral-200 active:scale-95 duration-200"
                key={index}
              >
                {item}
              </div>
            ))}
          </ul>
        </div>
      </Collapse>
    </div>
  );
};

export default TouchDropdown;

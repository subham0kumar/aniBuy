import React from "react";

const DropdownMenu = ({ menuLabel, items }) => {
  return (
    <div className="group">
      <button className="relative mb-2 inline-block px-3 rounded-md hover:bg-neutralamL ">{menuLabel}</button>
      <div className="hidden rounded-md -translate-x-3 bg-neutralam absolute box-border w-fit h-fit min-w-min shadow-3xl z-10 group-hover:block">
        <ul className="flex flex-col">
          {items.map((item, index) => (
            <div className = "m-1 px-4 width-full p-1 rounded-md hover:cursor-pointer hover:bg-action hover:text-neutral-200" key={index}>
              {item}
            </div>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default DropdownMenu;

import React, { useState } from "react";
import { FaMinus, FaPlus } from "react-icons/fa6";

const PlusMinusCount = ({count, setCount}) => {
  const handleUpdatePlus = () => {
    setCount(count + 1);
  };
  const handleUpdateMinus = () => {
    if (count !== 0) {
      setCount(count - 1);
    }
  };
  return (
    <>
      <div className="flex rounded-md w-fit m-3">
        <button
          className="px-3 bg-action rounded-l text-second shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-second hover:text-action active:scale-95 hover:scale-105 cursor-pointer"
          onClick={handleUpdateMinus}
        >
          <FaMinus size={12} />
        </button>
        <span className="px-4 bg-second shadow-[0_4px_9px_-4px_#3b71ca] text-action2 text-center font-chakra font-bold p-1">
          {count}
        </span>
        <button
          className="px-3 rounded-r bg-action text-second shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-second hover:text-action active:scale-95 hover:scale-105 cursor-pointer"
          onClick={handleUpdatePlus}
        >
          <FaPlus size={12} />
        </button>
      </div>
    </>
  );
};

export default PlusMinusCount;

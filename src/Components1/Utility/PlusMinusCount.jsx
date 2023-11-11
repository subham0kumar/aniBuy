import React from "react";
import { FaMinus, FaPlus } from "react-icons/fa6";
import { useState } from "react";

const PlusMinusCount = () => {
  const [productCount, setProductCount] = useState(0);

  const handleUpdatePlus = () => {
    setProductCount(productCount + 1);
  };
  const handleUpdateMinus = () => {
    if (productCount !== 0) setProductCount(productCount - 1);
  };
  return (
    <div className="flex rounded-md w-fit m-3">
      <button
        className="px-3 bg-action rounded-l text-second shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-second hover:text-action active:scale-95 hover:scale-105 cursor-pointer"
        onClick={handleUpdateMinus}
      >
        <FaMinus />
      </button>
      <span className="px-8 bg-second shadow-[0_4px_9px_-4px_#3b71ca] text-action2 text-center font-chakra font-bold p-1">
        {" "}
        {productCount}{" "}
      </span>
      <button
        className="px-3 rounded-r bg-action text-second shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-second hover:text-action active:scale-95 hover:scale-105 cursor-pointer"
        onClick={handleUpdatePlus}
      >
        <FaPlus />
      </button>
    </div>
  );
};

export default PlusMinusCount;

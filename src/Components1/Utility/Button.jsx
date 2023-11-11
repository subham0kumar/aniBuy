import React from "react";

const Button = ({ text, heading}) => {
  return (
    <div className="justify-center flex m-3">
      <button
        type="button"
        className="inline-block font-agbalumo rounded text-white bg-action border-solid px-6 pb-2 pt-2.5 text-md font-medium uppercase leading-normal shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-second hover:text-action active:scale-95"
      >
        {heading}{text}
      </button>
    </div>
  );
};

export default Button;

import React from "react";
import { Link } from "react-router-dom";

const ErrorPage = () => {
  return (
    <div>
      <div className="h-[80vh] mt-16 flex justify-start items-center flex-col font-agbalumo">
        <p className="md:text-2xl text-lg">
          Sorry!! this page is currently Unavaiable!
        </p>
        <Link to={"/"}>
          <span className="w-fit md:ml-2 md:mt-4 mt-2 flex px-24 py-3 bg-action rounded-md text-second shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-second hover:text-action md:active:scale-95 md:hover:scale-105 cursor-pointer">
            Continue Shopping
          </span>
        </Link>
      </div>
    </div>
  );
};

export default ErrorPage;

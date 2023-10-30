import React from "react";
import Marquee from "react-fast-marquee";
import { MdOutlineContactSupport } from "react-icons/md";
import { AiOutlineLinkedin } from "react-icons/ai";
import { FiGithub } from "react-icons/fi";
import { Link } from "react-router-dom";

const InfoBanner = () => {
  return (
    <div className="flex  rounded-t-md mt-3 py-2 justify-between mx-2">
      <div className="mx-5 font-ukiyo text-xl">
        <Link to={'/'}> AB</Link>
      </div>
      <div className="mx-5 font-agbalumo w-2/3">
        <Marquee speed={125}>Irashai-mase okyaku-san 🙇‍♂️</Marquee>
      </div>
      <div className=" flex mx-2 pl-4 hover:cursor-pointer">
        <span className="px-2">
          <FiGithub size={25} color='#8667F2'/>
        </span>
        <span className="px-2">
          <AiOutlineLinkedin size={25} color='#8667F2' />
        </span>
        <span className="px-2">
          <MdOutlineContactSupport size={25} color='#8667F2' />
        </span>
      </div>
    </div>
  );
};

export default InfoBanner;

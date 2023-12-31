import React from "react";
import ContactUsForm from "./ContactUsForm";
import { FiGithub } from "react-icons/fi";
import { AiOutlineLinkedin } from "react-icons/ai";
import { LuCopyright } from "react-icons/lu";

const Footer = () => {
  return (
    <div className="mt-2">
      <div className="flex md:flex-row flex-col px-4 justify-evenly bg-gray-600 text-slate-200 py-10">
        <div className="max-w-md text-justify my-2">
          <span className="text-3xl font-agbalumo">About</span>
          <p className="font-rubik">
            Hello, I'm SUBHAM KUMAR, an aspiring React web developer excited to
            share this project that I've crafted independently. This showcase
            reflects my dedication to design and development. Explore my project
            here. I'd greatly appreciate your valuable feedback as I aim for
            continuous improvement. Thank you for your time and insights.
          </p>
        </div>
        <div>
          <span className="text-2xl">Contact ME</span>
          <ul>
            <li
              className="flex cursor-pointer mt-2"
              onClick={() =>
                window.open("https://github.com/subham0kumar", "_blank")
              }
            >
              <FiGithub size={20} />
              <p className="mx-2">GitHub</p>
            </li>
            <li
              className="flex cursor-pointer mt-2"
              onClick={() =>
                window.open("https://linkedin.com/in/subham0kumar", "_blank")
              }
            >
              <AiOutlineLinkedin size={25} />
              <p className="mx-2">LinkedIn</p>
            </li>
          </ul>
        </div>
        <div className="w-1/3 mt-6 h-full">
          <ContactUsForm />
        </div>
      </div>
        <div className="flex font-rubik items-center justify-center text-center text-white bg-black h-full">
          <span className="px-2"><LuCopyright /></span><p>2023 AniBuy, All Rights Reserved</p>
        </div>
    </div>
  );
};

export default Footer;

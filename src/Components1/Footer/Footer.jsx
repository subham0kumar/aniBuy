import React from "react";
import ContactUsForm from "./ContactUsForm";
import { FiGithub } from "react-icons/fi";
import { AiOutlineLinkedin } from "react-icons/ai";

const Footer = () => {
  return (
    <div className="mt-2">
      <div className="flex justify-evenly bg-gray-600 text-slate-200 py-10">
        <div className="max-w-md text-justify">
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
        <div className="w-1/3 h-full">
          <ContactUsForm />
        </div>
      </div>
    </div>
  );
};

export default Footer;

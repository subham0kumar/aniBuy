import React from "react";
import { CgClose, CgMenu } from "react-icons/cg";
import { MdOutlineContactSupport, MdOutlineShoppingCart } from "react-icons/md";
import { Link } from "react-router-dom";
import TouchDropdown from "../Utility/TouchDropdown";
import { useState } from "react";
import { useProductState } from "../../Context/ProductContext";
import { FiGithub } from "react-icons/fi";
import { AiOutlineLinkedin } from "react-icons/ai";

const MobileNavbar = () => {
  const toggle = (i) => {
    if (open === i) {
      return setopen(null);
    }
    setopen(i);
  };
  const [showModal, setShowModal] = useState(false);
  const { navbarData } = useProductState();
  const [open, setopen] = useState(null);
  return (
    <>
      <div className="flex justify-between px-1 m-3 mx-0 w-full md:hidden shadow-[0_4px_9px_-4px_#3b71ca] text-center">
        <button
          type="button"
          onClick={() => setShowModal(true)}
          className="w-content inline-block text-action px-2 py-1 transition duration-150 ease-in-out"
        >
          <CgMenu size={25} />
        </button>
        <div className="mx-5 font-ukiyo text-4xl w-2/3">
          <Link to={"/"}> AB</Link>
        </div>
        <span className="px-2 flex items-center">
          <Link to={"/cart/"}>
            <MdOutlineShoppingCart size={25} color="#8667F2" />
          </Link>
        </span>
      </div>
      <div
        className={`h-full w-[75vw] z-50 top-0 transition ease-in-out text-center duration-500 bg-[#e5e7eb] overflow-y-scroll ${
          showModal
            ? "fixed translate-x-0 shadow-modal"
            : "absolute -translate-x-full"
        }`}
      >
        <div className="p-3 h-[10vh] border-b-2 border-black flex justify-between items-center">
          <span className="font-ukiyo text-3xl">
            <Link to={"/"} onClick={() => setShowModal(false)}>
              AB
            </Link>
          </span>
          <span className="m-3 hover:cursor-pointer text-action2">
            <CgClose size={30} onClick={() => setShowModal(false)} />
          </span>
        </div>

        {/* <++++++++++ Dropdown Menu +++++++++++++++> */}
        <div className="mt-4 border-b-2 border-action2">
          {navbarData.map((listItem, i) => {
            return (
              <TouchDropdown
                menuLabel={listItem.title}
                items={listItem.list}
                key={i}
                icon={listItem.icon}
                open={i === open}
                toggle={() => toggle(i)}
              />
            );
          })}
        </div>

        <div>
          <span>Contact Us</span>
          <div className="flex flex-col items-center justify-center p-3 space-y-2">
            <span
              className="p-4 flex border-b-2 rounded-md shadow-inHeavy text-action2 font-agbalumo bg-neutralam items-center space-x-2 w-full active:scale-95 duration-200 transition cursor-pointer"
              onClick={() =>
                window.open("https://github.com/subham0kumar", "_blank")
              }
            >
              <FiGithub size={30} />
              <p>GitHub @subham0Kumar</p>
            </span>
            <span
              className="p-4 flex border-b-2 rounded-md shadow-inHeavy text-action2 font-agbalumo bg-neutralam items-center space-x-2 w-full active:scale-95 duration-200 transition cursor-pointer"
              onClick={() =>
                window.open("https://linkedin.com/in/subham0kumar", "_blank")
              }
            >
              <AiOutlineLinkedin size={30} /> <p>LinkedIn @subham0kumar</p>
            </span>
            <span
              className="p-4 flex border-b-2 rounded-md shadow-inHeavy text-action2 font-agbalumo bg-neutralam items-center space-x-2 w-full active:scale-95 duration-200 transition cursor-pointer"
              onClick={() => {
                setShowModal(false);
                window.scroll({
                  top: document.body.offsetHeight,
                  left: 0,
                  behavior: "smooth",
                });
              }}
            >
              <MdOutlineContactSupport size={30} />
              <p>Send Us a Message</p>
            </span>
          </div>
        </div>
      </div>
    </>
  );
};

export default MobileNavbar;

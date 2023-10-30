import React from "react";
import ContactUsForm from "./ContactUsForm";

const Footer = () => {
  return (
    <div className="mt-2">
      <div className="flex justify-evenly bg-gray-600 text-slate-200 py-10">
        <div>
          <span className="text-2xl">Links</span>
          <ul>
            <li>Hero</li>
            <li>Hero</li>
            <li>Hero</li>
            <li>Hero</li>
          </ul>
        </div>
        <div>
          <span className="text-2xl">Links</span>
          <ul>
            <li>Hero</li>
            <li>Hero</li>
            <li>Hero</li>
            <li>Hero</li>
          </ul>
        </div>
        <div className="w-1/3 h-full"><ContactUsForm /></div>
      </div>
    </div>
  );
};

export default Footer;

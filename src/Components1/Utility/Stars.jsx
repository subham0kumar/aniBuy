import React from "react";
import { BsStarFill, BsStarHalf, BsStar } from "react-icons/bs";

const Stars = ({ star }) => {
  const ratingStar = Array.from({ length: 5 }, (_, index) => {
    let number = index + 0.5;
    return (
      <span className="flex" key={index}>
        {star >= index + 1 ? (
          <BsStarFill color="yellow" size={20} />
        ) : star >= number ? (
          <BsStarHalf color="yellow" size={20} />
        ) : (
          <BsStar color="yellow" size={20} />
        )}
      </span>
    );
  });

  return (
    <div>
      <span className="flex m-3">
        {ratingStar} <span className="mx-3">{star}</span>
      </span>
    </div>
  );
};

export default Stars;

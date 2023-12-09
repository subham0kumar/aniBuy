import React from "react";
import { NavLink } from "react-router-dom";
import { useProductState } from "../../Context/ProductContext";
import Button from "../Utility/Button";
import SwiperDiv from "../Utility/SwiperDiv";

const LatestDrops = () => {
  const title = "Latest Drops";
  const { products } = useProductState();
  const data = products.filter( (product)=> {
    return product.arrival === true;
  })
  
  return (
    <div className="my-2 p-2">
      <div className="md:p-4 m-2 rounded-lg text-center">
        <SwiperDiv data={data} heading={title} />
        <NavLink to={`/filtered/${'latest-drops'}`}>
          <Button text={"View More"} />
        </NavLink>
      </div>
    </div>
  );
};

export default LatestDrops;

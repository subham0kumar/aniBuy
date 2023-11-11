import React from "react";
import { Link } from "react-router-dom";
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
    <div className="flex-row overflow- items-center justify-center my-2 p-2">
      <div className=" p-4 m-2 rounded-lg text-center">
        <SwiperDiv data={data} heading={title} />
        <Link to={`/filtered/${'latest-drops'}`}>
          <Button text={"View More"} />
        </Link>
      </div>
    </div>
  );
};

export default LatestDrops;

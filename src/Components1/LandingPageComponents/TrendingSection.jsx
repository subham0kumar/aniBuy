import React from "react";
import { Link } from "react-router-dom";
import Button from "../Utility/Button";
import SwiperDiv from "../Utility/SwiperDiv";
import { useProductState } from "../../Context/ProductContext";

const TrendingCaraousel = () => {
  // const navigate = useNavigate();
  const title = "Trending";
  const { products } = useProductState();

  const data = products.filter( (product)=> {
    return product.trending === true;
  });

  return (
    <div className="flex-row items-center justify-center my-2 p-2">
      <div className="p-4 m-2 rounded-lg text-center">
        <SwiperDiv data={data} heading={title} />
        <Link to={`/filtered/${"trending"}`}>
          <Button text={"View More"} />
        </Link>
      </div>
    </div>
  );
};

export default TrendingCaraousel;

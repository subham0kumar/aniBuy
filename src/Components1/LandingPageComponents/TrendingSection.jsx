import React from "react";
import { Link } from "react-router-dom";
import Button from "../Utility/Button";
import SwiperDiv from "../Utility/SwiperDiv";

const TrendingCaraousel = () => {
  // const navigate = useNavigate();
  const title = "Trending";

  const data = [
    {
      title: "Byron Mode Bobble Head",
      description: "",
      price: "₹500",
      nPrice: "₹900",
      category: "figurine",
      url: "https://m.media-amazon.com/images/I/51cGW2oOI0L._AC_UF894,1000_QL80_.jpg",
    },
    {
      title: "Luffy Gear Fourth",
      description: "",
      price: "₹500",
      nPrice: "₹900",
      category: "figurine",
      url: "https://www.rcmart.com/image/cache/product/00121597/00121597-bandai-63903-000-550x550.jpg",
    },
    {
      title: "Goku Mastered UI",
      description: "",
      price: "₹449",
      nPrice: "₹850",
      category: "figurine",
      url: "https://i.ebayimg.com/images/g/7dkAAOSwmItgpLuZ/s-l1200.jpg",
    },
    {
      title: "Itachi Live Size",
      description: "",
      price: "₹8,999",
      nPrice: "₹12,000",
      category: "figurine",
      url: "https://adilsons.org/cdn/shop/products/naruto-uchiha-itachi-figurine-798037_700x700.jpg?v=1587680410",
    },
    {
      title: "White Ichigo",
      description: "",
      price: "₹799",
      nPrice: "₹1299",
      category: "figurine",
      url: "https://m.media-amazon.com/images/I/71rdNWYIDRL.jpg",
    },
  ];

  return (
    <div className="flex-row items-center justify-center my-2 p-2">
      <div className="p-4 m-2 rounded-lg text-center">
        <SwiperDiv data={data} heading={title} />
        <Link to={`/filtered/${title}`}>
          <Button text={"View More"} />
        </Link>
      </div>
    </div>
  );
};

export default TrendingCaraousel;

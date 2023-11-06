import React from "react";
import { Link } from "react-router-dom";
import Button from "../Utility/Button";
import SwiperDiv from "../Utility/SwiperDiv";

const LatestDrops = () => {
  const title = "Latest Drops";

  const data = [
    {
      title: "Byron Mode Bobble Head",
      description: '',
      price: '₹500',
      nPrice: '₹900',
      category: 'figurine',
      url: "https://m.media-amazon.com/images/I/51cGW2oOI0L._AC_UF894,1000_QL80_.jpg",
    },
    {
      title: "Luffy Gear Fourth",
      description: '',
      price: '₹500',
      nPrice: '₹900',
      category: 'figurine',
      url: "https://www.rcmart.com/image/cache/product/00121597/00121597-bandai-63903-000-550x550.jpg",
    },
    {
      title: "Goku Mastered UI",
      description: '',
      price: '₹449',
      nPrice: '₹850',
      category: 'figurine',
      url: "https://i.ebayimg.com/images/g/7dkAAOSwmItgpLuZ/s-l1200.jpg",
    },
    {
      title: "Itachi Lamp",
      description: '',
      price: '₹899',
      nPrice: '₹1200',
      category: 'lamps',
      url: "https://m.media-amazon.com/images/I/610hRmOr25L._AC_UF1000,1000_QL80_.jpg",
    },
    {
      title: "Random anime stickers",
      description: '',
      price: '₹250',
      nPrice: '₹500',
      category: 'figurine',
      url: "https://m.media-amazon.com/images/I/81GcFqMJwDL._AC_UF1000,1000_QL80_.jpg",
    },
  ];

  return (
    <div className="flex-row overflow- items-center justify-center my-2 p-2">
      <div className=" p-4 m-2 rounded-lg text-center">
        <SwiperDiv data={data} heading={title} />
        <Link to={`/filtered/`}>
          <Button text={"View More"} />
        </Link>
      </div>
    </div>
  );
};

export default LatestDrops;

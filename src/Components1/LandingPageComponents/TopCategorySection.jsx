import React from "react";
import { Link } from "react-router-dom";

const data = [
  {
    id: "figurine",
    title: "Figurine",
    imgUrl:
      "https://images.surferseo.art/e8b50a63-bda0-4a47-a59b-3680966a7fd7.jpeg",
  },
  {
    id: "tees",
    title: "Over-sized Tees",
    imgUrl:
      "https://5.imimg.com/data5/SELLER/Default/2022/10/DY/OR/AJ/31943666/back-print-t-shirt.jpeg",
  },
  {
    id: "posters",
    title: "Posters",
    imgUrl:
      "https://images.meesho.com/images/products/200696008/yb8uf_512.webp",
  },
  {
    id: "stickers",
    title: "Stickers",
    imgUrl:
      "https://m.media-amazon.com/images/I/81GcFqMJwDL._AC_UF1000,1000_QL80_.jpg",
  },
  {
    id: "winter wear",
    title: "Winter Wear",
    imgUrl:
      "https://gizmoz.in/cdn/shop/products/roshi-anime-hoodie-320-gsm-541112.gif?v=1692428327&width=533",
  },
  {
    id: "lamps",
    title: "Lamps",
    imgUrl:
      "https://m.media-amazon.com/images/I/610hRmOr25L._AC_UF1000,1000_QL80_.jpg",
  },
];

const TopCategorySection = () => {
  return (
    <div className="flex justify-center p-4 m-2 rounded-lg text-center">
      <div>
        <span className="text-4xl font-agbalumo text-gray-800">
          Top Categories
        </span>
        <div className="grid grid-cols-1 place-content-center gap-x-4 gap-2 mt-2 sm:grid-cols-3 drop-shadow-2xl">
          {data.map((category, index) => (
            <Link to={`/filtered/${category.id}`} key={index}>
              <div className="group">
                <div
                  className="flex items-center justify-center bg-sky-200/[.8] w-[300px] h-[200px] border-black border-2 text-5xl hover:cursor-pointer bg-center bg-cover bg-no-repeat hover:bg-blend-screen bg-blend-overlay md:bg-blend-normal active:scale-95 duration-150"
                  style={{
                    backgroundImage: `url(${category.imgUrl})`,
                  }}
                >
                  <div
                    className="font-agbalumo 
               duration-200 ease-in md:hidden group-hover:block hover:scale-95 h-full w-full"
                  >
                    {category.title}
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TopCategorySection;

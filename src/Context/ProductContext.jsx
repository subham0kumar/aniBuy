import React from "react";
import { useContext } from "react";
import { createContext } from "react";

const product = createContext();

const ProductContext = ({ children }) => {
  const products = [
    {
      id: 0,
      arrival: true,
      trending: true,
      title: "Byron Mode Bobble Head",
      star: '4.2',
      description:
        "Add a touch of whimsy to your collection with this charming figurine. Byron Mode Bobble Head, a perfect blend of art and play, is a trending delight for collectors. Its intricate craftsmanship and vibrant design make it a fantastic choice. Get your hands on it now at an unbeatable price of 500!",
      price: "500",
      nPrice: "900",
      category: "figurine",
      url: "https://m.media-amazon.com/images/I/51cGW2oOI0L._AC_UF894,1000_QL80_.jpg",
    },
    {
      id: 1,
      title: "Luffy Gear Fourth",
      trending: true,
      star: '3.2',
      description:
        "Join the Grand Line adventure with this dynamic Luffy Gear Fourth figurine. Designed for One Piece enthusiasts, it vividly captures the essence of this iconic transformation. Don't miss out on the chance to own this masterpiece, available at a special price of ₹500!",
      price: "500",
      nPrice: "900",
      category: "figurine",
      url: "https://www.rcmart.com/image/cache/product/00121597/00121597-bandai-63903-000-550x550.jpg",
    },
    {
      id: 2,
      title: "Goku Mastered UI",
      trending: true,
      star: '5',
      arrival: true,
      description:
        "Tap into the power of Ultra Instinct with this Goku Mastered UI figurine. Meticulously crafted and bursting with detail, this piece is a must-have for any Dragon Ball aficionado. Don't wait—acquire it today for the incredible price of ₹449!",
      price: "449",
      nPrice: "850",
      category: "figurine",
      url: "https://i.ebayimg.com/images/g/7dkAAOSwmItgpLuZ/s-l1200.jpg",
    },
    {
      id: 3,
      title: "Itachi Lamp",
      trending: true,
      star: '3',
      description:
        "Set the mood with the Itachi Lamp, a trending and stylish addition to any room. This unique lamp boasts exceptional design and lighting quality. Get it now to enhance your space for just ₹899!",
      price: "899",
      nPrice: "1200",
      category: "lamps",
      url: "https://m.media-amazon.com/images/I/610hRmOr25L._AC_UF1000,1000_QL80_.jpg",
    },
    {
      id: 4,
      title: "Random anime stickers",
      star: '4',
      description:
        " Express your love for anime with these fun and colorful stickers. Perfect for personalizing your belongings or sharing with fellow fans, this set of random anime stickers is available for a mere ₹250.",
      arrival: true,
      price: "250",
      nPrice: "500",
      category: "stickers",
      url: "https://m.media-amazon.com/images/I/81GcFqMJwDL._AC_UF1000,1000_QL80_.jpg",
    },
    {
      id: 5,
      title: "Itachi Live Size",
      star: '0',
      trending: true,
      arrival: true,
      description:
        "Elevate your collection with this life-sized Itachi figurine, an absolute necessity for Naruto fans and collectors. Its stunning craftsmanship and remarkable size make it an extraordinary addition to your collection. Act fast to claim this prized possession, priced at ₹8,999!",
      price: "8999",
      nPrice: "12000",
      category: "figurine",
      url: "https://adilsons.org/cdn/shop/products/naruto-uchiha-itachi-figurine-798037_700x700.jpg?v=1587680410",
    },
    {
      id: 6,
      title: "White Ichigo",
      star: '4.6',
      description:
        " Immerse yourself in the world of Bleach with this White Ichigo figurine. With intricate design and superb quality, it's a perfect choice for collectors. Don't miss the opportunity to own this piece of art, available now for ₹799!",
      arrival: true,
      price: "799",
      nPrice: "1299",
      category: "figurine",
      url: "https://m.media-amazon.com/images/I/71rdNWYIDRL.jpg",
    },
  ];
  return <product.Provider value={{ products }}>{children}</product.Provider>;
};

export default ProductContext;

export function numberWithCommas(x) {
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

export const useProductState = () => {
  return useContext(product);
};

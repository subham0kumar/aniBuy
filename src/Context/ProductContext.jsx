import React, { createContext, useContext } from "react";
import { BiCategoryAlt } from "react-icons/bi";
import { TbSquareLetterA } from "react-icons/tb";

const product = createContext();

const ProductContext = ({ children }) => {
  const products = [
    {
      id: 0,
      trending: true,
      title: "Byron Mode Bobble Head",
      anime: "naruto",
      star: "4.2",
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
      anime: "one piece",
      trending: true,
      star: "3.2",
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
      anime: "dragonball",
      star: "5",
      arrival: true,
      description:
        "Tap into the power of Ultra Instinct with this Goku Mastered UI figurine. Meticulously crafted and bursting with detail, this piece is a must-have for any Dragon Ball aficionado. Don't wait—acquire it today for the incredible price of ₹449!",
      price: "449",
      nPrice: "850",
      category: "Figurine",
      url: "https://i.ebayimg.com/images/g/7dkAAOSwmItgpLuZ/s-l1200.jpg",
    },
    {
      id: 3,
      title: "Itachi Lamp",
      anime: "naruto",
      arrival: true,
      star: "3",
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
      star: "4",
      description:
        " Express your love for anime with these fun and colorful stickers. Perfect for personalizing your belongings or sharing with fellow fans, this set of random anime stickers is available for a mere ₹250.",
      price: "250",
      nPrice: "500",
      category: "stickers",
      url: "https://m.media-amazon.com/images/I/81GcFqMJwDL._AC_UF1000,1000_QL80_.jpg",
    },
    {
      id: 5,
      title: "Itachi Live Size",
      anime: "naruto",
      star: "1",
      trending: true,
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
      anime: "bleach",
      star: "4.6",
      description:
        " Immerse yourself in the world of Bleach with this White Ichigo figurine. With intricate design and superb quality, it's a perfect choice for collectors. Don't miss the opportunity to own this piece of art, available now for ₹799!",
      arrival: true,
      price: "799",
      nPrice: "1299",
      category: "figurine",
      url: "https://m.media-amazon.com/images/I/71rdNWYIDRL.jpg",
    },
    {
      id: 7,
      title: "Goku UI hoodie",
      anime: "dragonball",
      star: "4.0",
      description:
        " Anime Printed Cotton Fleece Sweatshirt Hoodies are crafted from premium-quality cotton fleece, ensuring superior softness and comfort for boys during the winter season. Featuring captivating anime prints, these hoodies allow boys to express their unique style and fandom, making a bold fashion statement.",
      arrival: true,
      price: "775",
      nPrice: "1799",
      category: "winter wear",
      url: "https://m.media-amazon.com/images/I/51+BEHks90L._SX569_.jpg",
    },
    {
      id: 8,
      title: "Gojo Satoru Hoodie",
      anime: "jujutsu kaisen",
      star: "3.7",
      trending: true,
      description:
        " Anime Printed Cotton Fleece Sweatshirt Hoodies are crafted from premium-quality cotton fleece, ensuring superior softness and comfort for boys during the winter season. Featuring captivating anime prints, these hoodies allow boys to express their unique style and fandom, making a bold fashion statement.",
      price: "1199",
      nPrice: "1999",
      category: "winter wear",
      url: "https://m.media-amazon.com/images/I/81ZYZa-tsjL._SY741_.jpg",
    },
    {
      id: 9,
      title: "Roronoa Zoro Night Light",
      anime: "one piece",
      star: "4.8",
      trending: true,
      description:
        "  3D LED lamp is combination of art and technology that creates an optical 3D illusion，especially in the dark or take a photograph, the vision thrill will be strong!3D Effect design of the lamp can be seen from a distance, but as you get up close,, you can see the light from a thin acrylic sheet illuminating the room",
      arrival: true,
      price: "3981",
      nPrice: "4999",
      category: "lamps",
      url: "https://m.media-amazon.com/images/I/61K-Cq6y9PS._SX466_.jpg",
    },
    {
      id: 10,
      title: "Itachi-Sasuke goodbye lamp",
      anime: "naruto",
      star: "5",
      trending: true,
      description:
        "  3D LED lamp is combination of art and technology that creates an optical 3D illusion，especially in the dark or take a photograph, the vision thrill will be strong!3D Effect design of the lamp can be seen from a distance, but as you get up close,, you can see the light from a thin acrylic sheet illuminating the room",
      price: "799",
      nPrice: "1999",
      category: "lamps",
      url: "https://m.media-amazon.com/images/I/31yJahFQcML.jpg",
    },
    {
      id: 11,
      title: "Obito X Gedo",
      anime: "naruto",
      star: "5",
      trending: true,
      description:
        " Join the ranks of the Uchiha clan with this Obito X Gedo Mezo Graphic Printed Men's Navy Oversized T-shirt. Style this t-shirt with a pair of stone-washed jeans, sneakers & varsity jacket for a cool look.",
      arrival: true,
      price: "699",
      nPrice: "1399",
      category: "tees",
      url: "https://images.bewakoof.com/t640/men-s-navy-obito-x-gedo-mezo-graphic-printed-oversized-t-shirt-542590-1672986110-1.jpg",
    },
    {
      id: 12,
      title: "Gojo Domain Expansion",
      anime: "jujutsu kaisen",
      star: "5",
      trending: true,
      description:
        " Step into the realm of mystical charm and embrace the captivating allure of Gojo's Domain T-Shirt. Channel the power of Jujutsu Sorcery and elevate your style with this oversized tee, crafted from premium cotton for an ultimate blend of comfort and charm.",
      arrival: true,
      price: "599",
      nPrice: "1299",
      category: "tees",
      url: "https://images.bewakoof.com/t640/men-s-black-gojo-domain-graphic-printed-oversized-t-shirt-520746-1694764572-1.jpg",
    },
    {
      id: 13,
      title: "Naruto Poster",
      anime: "naruto",
      star: "5",
      trending: true,
      description:
        "A3 - 12x18 Inches, A4 – 8.27x11.69 Inches Printed on high-quality gloss finish paper with archival quality inks. Perfect for bedrooms, dorm rooms, kids’ rooms, offices, and more. For wall-to-wall fun, add your personality to everything from dorm rooms to the board room with cool posters. You can also find posters for special occasions and holidays, personalized posters for big celebrations as well!",
      arrival: true,
      price: "599",
      nPrice: "1299",
      category: "posters",
      url: "https://www.epicstuff.com/cdn/shop/products/image_2_1024x1024.jpg?v=1580579889",
    },
    {
      id: 14,
      title: "Zoro Poster",
      anime: "one piece",
      star: "5",
      description:
        "A3 - 12x18 Inches, A4 – 8.27x11.69 Inches Printed on high-quality gloss finish paper with archival quality inks. Perfect for bedrooms, dorm rooms, kids’ rooms, offices, and more. For wall-to-wall fun, add your personality to everything from dorm rooms to the board room with cool posters. You can also find posters for special occasions and holidays, personalized posters for big celebrations as well!",
      arrival: true,
      price: "599",
      nPrice: "1299",
      category: "posters",
      url: "https://www.epicstuff.com/cdn/shop/products/81sb0fy_LRL._SL1500_1024x1024.jpg?v=1660720104",
    },
  ];
  const animeList = [
    "Naruto",
    "One Piece",
    "Dragonball",
    "Bleach",
    "Jujutsu Kaisen",
  ];
  const categoryList = [
    "All",
    "Figurine",
    "Lamps",
    "Posters",
    "Stickers",
    "Tees",
    "Winter Wear",
  ];
  const navbarData = [
    {
      icon: <BiCategoryAlt size={25} />,
      title: "Category",
      list: categoryList,
    },
    {
      icon: <TbSquareLetterA size={25} />,
      title: "Anime",
      list: animeList,
    },
  ];

  return (
    <product.Provider value={{ products, animeList, categoryList, navbarData}}>
      {children}
    </product.Provider>
  );
};
export default ProductContext;

export function numberWithCommas(x) {
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

export const useProductState = () => {
  return useContext(product);
};

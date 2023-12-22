import React from "react";
import { FaAngleRight } from "react-icons/fa6";
import { NavLink, useParams } from "react-router-dom";
import Navbar from "../Components1/Header/Navbar";
import ProductView from "../Components1/ProductPageComponents/ProductView";
import { useProductState } from "../Context/ProductContext";
import { useSearch } from "../Context/SearchContext";
import { useCartContext } from "../Context/CartContext";

const ProductPage = () => {
  const { index } = useParams();
  const { products } = useProductState();
  const filteredProduct = products.find((product) => product.id == index);
  const { category, title } = filteredProduct;
  const { updateSearchTerm } = useSearch();

  return (
    <>
      <div className="pt-6"><Navbar /></div>
      <div className="flex items-center md:px-3 mx-4 font-exo font-semibold">
        <NavLink to={"/"} className="text-action2">
          Home
        </NavLink>{" "}
        <FaAngleRight />{" "}
        <NavLink to={`/filtered/${category}`} onClick={()=> updateSearchTerm(category)} className="text-action2">
          {category}
        </NavLink>{" "}
        <FaAngleRight /> {title}
      </div>
      <ProductView product={filteredProduct} />
    </>
  );
};

export default ProductPage;

import React from "react";
import { NavLink, useParams } from "react-router-dom";
import ProductView from "../Components1/ProductPageComponents/ProductView";
import { useProductState } from "../Context/ProductContext";
import { FaAngleRight, FaAnglesRight } from "react-icons/fa6";

const ProductPage = () => {
  const { index } = useParams();
  const { products } = useProductState();
  const filteredProduct = products.find((product) => product.id == index);
  const { category, title } = filteredProduct;

  return (
    <>
      <div className="flex items-center md:px-3 mx-4 font-exo font-semibold">
        <NavLink to={"/"} className="text-action2">
          Home
        </NavLink>{" "}
        <FaAngleRight />{" "}
        <NavLink to={"/filtered"} className="text-action2">
          {category}
        </NavLink>{" "}
        <FaAngleRight /> {title}
      </div>
      <ProductView product={filteredProduct} />
    </>
  );
};

export default ProductPage;

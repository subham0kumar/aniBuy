import React, { useState } from "react";
import { Link } from "react-router-dom";
import FilterpageNavbar from "../Components1/FilteredPageComponents/FilterpageNavbar";
import Card2 from "../Components1/Utility/Card2";
import MobileNavbar from "../Components1/Utility/MobileNavbar";
import Search from "../Components1/Utility/Search";
import { useProductState } from "../Context/ProductContext";
import { useSearch } from "../Context/SearchContext";
const FilteredPage = () => {
  // const [priceRange, setPriceRange] = useState(2500);
  const { categoryList, animeList, products } = useProductState();
  const { searchTerm, updateSearchTerm } = useSearch();

  const filteredProducts = products.filter(
    (product) =>
      product.anime === searchTerm.toLowerCase() ||
      product.category === searchTerm.toLowerCase() ||
      product.title.toLowerCase().includes(searchTerm)
  );
  return (
    <div>
      <MobileNavbar />
      <div className="md:hidden p-4 flex items-center justify-center">
        <Search />
      </div>
      <div className="py-3 hidden md:block">
        <FilterpageNavbar />
      </div>
      <main className="flex">
        {/* <====================== Left Section =================================> */}
        <div className="px-6 border-action2 border-r-4 border-double hidden md:block">
          <Search />
          <section>
            <section className="w-full flex flex-col my-4 mx-10 font-chakra">
              <p className="text-xl mb-2 font-pacifico">Category</p>
              <ul className="flex flex-col items-start text-md font-semibold space-y-1">
                {categoryList.map((ele, i) => {
                  return (
                    <form key={i}>
                      <label className="flex cursor-pointer">
                        <input
                          id={i}
                          type="radio"
                          value={ele}
                          checked={searchTerm === ele}
                          onChange={(e) => {
                            updateSearchTerm(e.target.value);
                          }}
                          className="appearance-none"
                        />
                        <p
                          className={`${
                            searchTerm === ele
                              ? "underline underline-offset-4 text-action2"
                              : ""
                          }`}
                        >
                          {ele}
                        </p>
                      </label>
                    </form>
                  );
                })}
              </ul>
            </section>
            <section className="w-full flex flex-col my-4 mx-10 font-chakra">
              <p className="text-xl font-pacifico mb-2">Anime</p>
              <ul className="text-md font-semibold space-y-1">
                {animeList.map((ele, i) => {
                  return (
                    <form key={i}>
                      <label className="flex cursor-pointer">
                        <input
                          id={i}
                          type="radio"
                          value={ele}
                          checked={searchTerm === ele}
                          onChange={(e) => {
                            updateSearchTerm(e.target.value);
                          }}
                          className="appearance-none"
                        />
                        <p
                          className={`${
                            searchTerm === ele
                              ? "underline underline-offset-4 text-action2"
                              : ""
                          }`}
                        >
                          {ele}
                        </p>
                      </label>
                    </form>
                  );
                })}
              </ul>
            </section>
            {/* <section className="w-full flex flex-col my-4 mx-10 font-chakra">
              <p className="text-xl font-bold mb-2">Price</p>
              <span className="flex justify-start gap-x-10">
                <input
                  type="range"
                  id="price"
                  min={1}
                  max={5000}
                  value={priceRange}
                  onChange={(e) => {
                    setPriceRange(e.target.value);
                  }}
                  step={10}
                  className="w-2/3"
                />
                <p className="font-semibold">₹{priceRange}</p>
              </span>
              <span className="w-80 flex justify-center p-4">
                <button
                  onClick={(e) => {
                    setPriceRange(2500);
                    updateSearchTerm("");
                  }}
                  className="inline-block font-agbalumo rounded text-white bg-action border-solid px-6 pb-2 pt-2.5 text-md font-medium uppercase leading-normal shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-second hover:text-action active:scale-95"
                >
                  Clear Filter
                </button>
              </span>
            </section> */}
          </section>
        </div>

        {/* <====================== Right Section =================================> */}
        <section className="w-full md:w-2/3 flex flex-col items-center">
          <p className="text-3xl font-pacifico w-full text-center ml-2 p-2">
            Products
          </p>
          <div className="grid grid-cols-1 md:grid-cols-4 place-content-center gap-4 mx-4">
            {searchTerm.toLowerCase() === "all"
              ? products.map((card) => (
                  <div key={card.id}>
                    <Link to={`/product/${card.id}`}>
                      <Card2
                        title={card.title}
                        price={card.price}
                        url={card.url}
                        nprice={card.nPrice}
                      />
                    </Link>
                  </div>
                ))
              : filteredProducts.map((card) => (
                  <div key={card.id}>
                    <Link to={`/product/${card.id}`}>
                      <Card2
                        title={card.title}
                        price={card.price}
                        url={card.url}
                        nprice={card.nPrice}
                      />
                    </Link>
                  </div>
                ))}
          </div>
        </section>
      </main>
    </div>
  );
};

export default FilteredPage;

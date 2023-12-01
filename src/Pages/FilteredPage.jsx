import React from "react";
import { useParams } from "react-router-dom";
import Search from "../Components1/Utility/Search";
import InfoBanner from "../Components1/Header/InfoBanner";
import { useProductState } from "../Context/ProductContext";
import MobileNavbar from "../Components1/Utility/MobileNavbar";
const FilteredPage = () => {
  const { page } = useParams();
  const { categoryList, animeList } = useProductState();
  return (
    <div>
    <MobileNavbar/>
      <div className="py-3 hidden md:block">
        <InfoBanner />
      </div>
      <main className="flex mx-32">
        {/* <====================== Left Section =================================> */}
        <section className="w-1/3 flex flex-col items-center justify-center border-r-4 border-action2 border-double">
          <Search />
          <section className="w-full px-20  flex flex-col my-4 font-chakra">
            <p className="text-xl font-bold mb-2">Category</p>
            <ul className="text-md font-semibold space-y-1">
              <li>
                <a href="http://">All</a>
              </li>
              {categoryList.map((ele) => {
                return (
                  <li>
                    <a href="http://">{ele}</a>
                  </li>
                );
              })}
            </ul>
          </section>
          <section className="w-full px-20  flex flex-col my-4 font-chakra">
            <p className="text-xl font-bold mb-2">Anime</p>
            <ul className="text-md font-semibold space-y-1">
              {animeList.map((ele) => {
                return (
                  <li>
                    <a href="http://">{ele}</a>
                  </li>
                );
              })}
            </ul>
          </section>
        </section>

        {/* <====================== Right Section =================================> */}
        <section className="w-2/3 flex flex-col items-center">
          <p className="text-3xl font-pacifico w-full text-center ml-2 pb-2">
            Products
          </p>
          <div>product grid</div>
        </section>
      </main>
    </div>
  );
};

export default FilteredPage;

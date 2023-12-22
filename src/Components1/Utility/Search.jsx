import React from "react";
import { FiSearch } from "react-icons/fi";
import { Link } from "react-router-dom";
import { useSearch } from "../../Context/SearchContext";

const Search = () => {
  const { searchTerm, updateSearchTerm } = useSearch();
  const handleSearchChange = (event) => {
    updateSearchTerm(event.target.value);
  };
  const handleSearchSubmit = (event) => {
    event.preventDefault();
  };
  const handleSearchReset = () => {
    updateSearchTerm("");
  };
  return (
    <div className="flex flex-row items-center justify-center">
      <span>
        <FiSearch size={20} color="#1463F3" />
      </span>
      <form
        onSubmit={handleSearchSubmit}
        className="md:w-[25em] w-[90svw] flex flex-row justify-around items-center space-x-4 "
      >
        <input
          type="text"
          value={searchTerm}
          placeholder="Search"
          onChange={handleSearchChange}
          className="outline-none rounded-sm p-1 text-center bg-transparent border-b-2 w-[15em] text-action2 border-action2"
        />
        {searchTerm && (
          <button type="button" onClick={handleSearchReset}>
            &#10006;
          </button>
        )}
        <Link to={'/filtered/:page'}>
          <input
            className="hover:bg-second outline-none rounded-md px-4 p-1 hover:text-action hover:shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out bg-action text-second md:active:scale-95 md:hover:scale-105 cursor-pointer"
            type="submit"
            value="Search"
          />
        </Link>
      </form>
    </div>
  );
};
export default Search;

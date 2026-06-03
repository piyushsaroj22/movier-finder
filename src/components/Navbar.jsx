import React from "react";
import { IoSearchSharp } from "react-icons/io5";
import { FaHeart } from "react-icons/fa";

const Navbar = ({
  searchQuery,
  handleSearchChange,
  handleSearchSubmit,
  handleKeyDown,
  favorites,
  showFavorites,
  setShowFavorites,
}) => {
  return (
    <div className="fixed top-0 left-0 w-full bg-gray-900 border-b border-gray-700 z-50">
      <div className="flex flex-col md:flex-row gap-4 items-center justify-between px-4 md:px-12 lg:px-20 lg:py-4 py-1 pb-4">
        <h1 className="text-2xl sm:text-3xl font-bold text-white">
          Movie Finder
        </h1>

        <div className="flex w-full md:w-auto items-center gap-2">
          <input
            type="text"
            placeholder="Search Movies..."
            value={searchQuery}
            onKeyDown={handleKeyDown}
            onChange={handleSearchChange}
            className="flex-1 md:w-72 p-2 rounded-md bg-gray-800 border border-gray-600 text-white"
          />

          <button
            className="p-2 text-3xl bg-blue-600 text-white rounded-md cursor-pointer"
            onClick={handleSearchSubmit}
          >
            <IoSearchSharp />
          </button>

          <button
            className="p-2 text-3xl bg-blue-600 text-white rounded-md relative cursor-pointer"
            onClick={() => setShowFavorites(!showFavorites)}
          >
            <FaHeart />

            {favorites.length > 0 && (
              <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                {favorites.length}
              </span>
            )}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;

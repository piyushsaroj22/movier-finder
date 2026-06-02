import React from "react";
import { FaHeart } from "react-icons/fa";

const MovieCard = ({ movie, favorites, toggleFavorite }) => {
  return (
    <div className="relative bg-gray-800 p-3 rounded-lg shadow-md">
      <img
        src={movie.Poster !== "N/A" ? movie.Poster : "placeholder.jpg"}
        alt={movie.Title}
        className="w-full rounded-lg mb-2"
      />

      <h2 className="text-xl font-semibold text-white">{movie.Title}</h2>

      <p className="text-gray-400">{movie.Year}</p>

      <button
        onClick={() => toggleFavorite(movie)}
        className="absolute bottom-3 right-3 text-2xl"
      >
        <FaHeart
          className={
            favorites.some((fav) => fav.imdbID === movie.imdbID)
              ? "text-red-500"
              : "text-gray-500"
          }
        />
      </button>
    </div>
  );
};

export default MovieCard;

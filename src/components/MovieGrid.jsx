import React from "react";
import MovieCard from "./MovieCard";
import SkeletonLoader from "./SkeletonLoader";

const MovieGrid = ({ loading, movies, favorites, toggleFavorite }) => {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 gap-4 px-4 sm:px-6 md:px-10 lg:px-12 pt-36 md:pt-40">
      {loading ? (
        <SkeletonLoader />
      ) : (
        movies.map((movie) => (
          <MovieCard
            key={movie.imdbID}
            movie={movie}
            favorites={favorites}
            toggleFavorite={toggleFavorite}
          />
        ))
      )}
    </div>
  );
};

export default MovieGrid;

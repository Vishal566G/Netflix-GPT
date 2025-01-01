import React from "react";
import MovieCard from "./MovieCard";
import MovieCardShimmer from "../shimmer/MovieCardShimmer";

const MovieList = ({ title, movies }) => {
  return (
    <div className="px-6 text-white">
      <h1 className="text-3xl py-2">{title}</h1>
      <div className="flex overflow-x-auto scrollbar scrollbar-thumb-gray-700 scrollbar-track-gray-900">
        {Array.isArray(movies) && movies.length > 0 ? (
          movies.map((movie, index) => (
            <div key={movie.id} className="mr-4">
              <MovieCard id={movie.id} posterPath={movie.poster_path} />
            </div>
          ))
        ) : (
          <MovieCardShimmer />
        )}
      </div>
    </div>
  );
};

export default MovieList;

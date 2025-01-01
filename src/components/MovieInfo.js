import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { removeMovieInfo } from "../utils/moviesSlice";
import { ReactComponent as Xmark } from "../utils/xmark.svg";
import { IMG_CDN } from "../utils/constants";

const MovieInfo = () => {
  const dispatch = useDispatch();
  const movieInfo = useSelector((store) => store.movies.movieInfo);

  const handleRemoveInfoClick = () => {
    dispatch(removeMovieInfo());
  };
  return (
    <div className="fixed z-50 mt-[2%] ml-[10%] bg-black text-white h-full overflow-y-auto w-[80%] rounded bg-opacity-90 scrollbar scrollbar-thumb-gray-700 scrollbar-track-gray-900">
      <div className="flex justify-between pt-2 px-2">
        <h1 className="text-5xl font-bold p-4">{movieInfo.title}</h1>
        <div className="cursor-pointer" onClick={handleRemoveInfoClick}>
          <Xmark />
        </div>
      </div>
      <div className="py-2 px-7 flex justify-between">
        <div>
          <h1 className="text-3xl font-bold py-3">Generes</h1>
          {movieInfo?.genres.map((genere) => {
            return (
              <span key={genere.id} className="text-lg text-gray-300">
                {genere?.name} |{" "}
              </span>
            );
          })}
        </div>
        <div className="w-48 pr-4 cursor-pointer">
          <img
            src={IMG_CDN + movieInfo.poster_path}
            alt="Movie_image"
            className="h-72 w-full object-cover rounded hover:border-blue-500 hover:border hover:scale-125 hover:ease-in-out duration-300"
          />
        </div>
      </div>
      <div className="py-2 px-7">
        <p className="text-3xl font-bold py-3">Description</p>
        <span className="text-lg text-gray-300">
          {" "}
          Status: {movieInfo.status} |
        </span>
        <span className="text-lg text-gray-300">
          {" "}
          Language: {movieInfo.original_language} |
        </span>
        <span className="text-lg text-gray-300">
          {" "}
          Released On: {movieInfo.release_date}
        </span>
        <p className="py-3 text-2xl font-semibold text-gray-300">
          {movieInfo.tagline}
        </p>
        <p className="py-3 text-2xl font-semibold text-gray-300">
          {movieInfo.overview}
        </p>
      </div>
    </div>
  );
};

export default MovieInfo;

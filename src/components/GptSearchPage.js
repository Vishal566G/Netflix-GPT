import React from "react";
import GptSearchBar from "./GptSearchBar";
import GptMovieSuggestions from "./GptMovieSuggestions";
import { LOGIN_BACKGROUND } from "../utils/constants";
import MovieInfo from "./MovieInfo";
import { useSelector } from "react-redux";

const GptSearchPage = () => {
  const movieInfo = useSelector((store) => store.movies.movieInfo);

  return (
    <>
      <div className="fixed -z-10">
        <img
          className="h-screen w-screen object-cover"
          src={LOGIN_BACKGROUND}
          alt="background_image"
        />
      </div>
      <div className="">
        {movieInfo && <MovieInfo />}
        <GptSearchBar />
        <GptMovieSuggestions />
      </div>
    </>
  );
};

export default GptSearchPage;

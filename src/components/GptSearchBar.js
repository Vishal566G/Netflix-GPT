import React, { useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import lang from "../utils/languageConstants";
import client from "../utils/openai";
import { API_OPTIONS } from "../utils/constants";
import { addGptMovieResults } from "../utils/gptSlice";

const GptSearchBar = () => {
  const langKey = useSelector((store) => store.config.lang);
  const searchText = useRef(null);
  const dispatch = useDispatch();

  const searchmoveTMDB = async (movie) => {
    try {
      const response = await fetch(
        `https://api.themoviedb.org/3/search/movie?query=${movie}&include_adult=false&language=en-US&page=1`,
        API_OPTIONS
      );

      if (!response.ok) {
        throw new Error(`TMDB API Error: ${response.statusText}`);
      }

      const data = await response.json();
      return data;
    } catch (error) {
      console.error("Error fetching data from TMDB:", error);
      return null; // Return null or an empty object to handle errors gracefully
    }
  };

  const handleGptSearchClick = async () => {
    try {
      console.log(searchText.current.value);

      const gptQuery =
        "Act as a movie recommendation system and suggest some movies for the query: " +
        searchText.current.value +
        ". Only give me names of 5 movies comma seperated like the example result given ahead. Example result: Movie_1, Movie_2, Movie_3, Movie_4, and Movie_5";

      // Make an API call to OpenAI and get movie results
      const chatCompletion = await client.chat.completions.create({
        messages: [{ role: "user", content: gptQuery }],
        model: "gpt-3.5-turbo",
      });

      if (!chatCompletion) {
        throw new Error("Failed to get a response from OpenAI.");
      }

      console.log(chatCompletion.choices?.[0]?.message?.content);
      const gptMovies = chatCompletion.choices?.[0]?.message?.content.split(",");

      // Fetch TMDB results for each movie in parallel
      const promiseArray = gptMovies.map((movie) => searchmoveTMDB(movie.trim()));

      const tmdbResults = await Promise.all(promiseArray);

      console.log(tmdbResults);

      // Dispatch the results to the Redux store
      dispatch(
        addGptMovieResults({ movieNames: gptMovies, movieResults: tmdbResults })
      );
    } catch (error) {
      console.error("Error during GPT or TMDB API call:", error);
      alert("An error occurred while fetching movie recommendations. Please try again later.");
    }
  };

  return (
    <div className="pt-[8%] flex justify-center">
      <form
        className="w-1/2 bg-black grid grid-cols-12"
        onSubmit={(e) => e.preventDefault()}
      >
        <input
          ref={searchText}
          type="text"
          className="p-4 m-4 col-span-9"
          placeholder={lang[langKey].gptSearchPlaceholder}
        />
        <button
          className="col-span-3 m-4 py-2 px-4 bg-red-700 text-white rounded-lg"
          onClick={handleGptSearchClick}
        >
          {lang[langKey].search}
        </button>
      </form>
    </div>
  );
};

export default GptSearchBar;

import { useDispatch } from "react-redux";
import { API_OPTIONS, IMG_CDN } from "../utils/constants";
import { addMovieInfo } from "../utils/moviesSlice";

const MovieCard = ({ posterPath, id }) => {
  const dispatch = useDispatch();

  const handleClick = () => {
    console.log(id);
    getMovieDetails(id);
  };

  if (!posterPath) return null;

  const getMovieDetails = async (id) => {
    const data = await fetch(
      `https://api.themoviedb.org/3/movie/${id}?language=en-US`,
      API_OPTIONS
    );

    const json = await data.json();
    dispatch(addMovieInfo(json));
    console.log(json);
  };

  return (
    <div className="w-48 pr-4 cursor-pointer" onClick={handleClick}>
      <img
        src={IMG_CDN + posterPath}
        alt="Movie_image"
        className="h-72 w-full object-cover rounded hover:scale-125 hover:ease-in-out duration-300"
      />
    </div>
  );
};

export default MovieCard;

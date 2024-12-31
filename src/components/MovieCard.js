import React from "react";
import { IMG_CDN } from "../utils/constants";

const MovieCard = ({ posterPath, id, onClick }) => {
  if (!posterPath) return null;

  const handleClick = () => {
    onClick(id);
  };
  return (
    <div className="w-48 pr-4" onClick={handleClick}>
      <img
        src={IMG_CDN + posterPath}
        alt="Movie_image"
        className="h-72 w-full object-cover rounded"
      />
    </div>
  );
};

export default MovieCard;

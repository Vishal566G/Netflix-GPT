import React from "react";

const VideoTitle = ({ title, overview }) => {
  return (
    <div className="w-screen aspect-video pt-[30%] md:pt-[15%] px-6 md:px-20 absolute text-white bg-gradient-to-r from-black overflow-hidden">
      <h1 className="font-bold text-2xl md:text-4xl lg:text-6xl mb-3">
        {title}
      </h1>
      <p className="hidden 2xl:inline-block py-6 text-lg w-1/4 line-clamp-4 overflow-hidden">
        {overview}
      </p>
      <div className="pt-3 md:pt-0">
        <button className="mx-2 bg-white text-black py-1 px-4 md:px-14 md:py-2 rounded-lg text-xl font-semibold hover:bg-opacity-80">
          Play
        </button>
        <button className="hidden 2xl:inline-block bg-gray-500 text-white px-14 py-2 rounded text-xl bg-opacity-65 font-semibold hover:bg-opacity-30">
          More info
        </button>
      </div>
    </div>
  );
};

export default VideoTitle;

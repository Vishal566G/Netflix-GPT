import React from "react";

const VideoTitle = ({ title, overview }) => {
  return (
    <div className="w-screen aspect-video pt-[20%] px-20 absolute text-white bg-gradient-to-r from-black">
      <h1 className="font-bold text-6xl ">{title}</h1>
      <p className="py-6 text-lg w-1/4 ">{overview}</p>
      <div>
        <button className="mx-2 bg-white text-black px-14 py-2 rounded text-xl font-semibold hover:bg-opacity-80">
          Play
        </button>
        <button className="bg-gray-500 text-white px-14 py-2 rounded text-xl bg-opacity-65 font-semibold hover:bg-opacity-30">
          More info
        </button>
      </div>
    </div>
  );
};

export default VideoTitle;

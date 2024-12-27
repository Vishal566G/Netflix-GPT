import React from "react";

const VideoTitle = ({ title, overview }) => {
  return (
    <div className="pt-40 px-20">
      <h1 className="font-bold text-6xl">{title}</h1>
      <p className="py-6 text-lg w-1/4">{overview}</p>
      <div>
        <button className="mx-2 bg-gray-500 text-white px-14 py-2 rounded text-xl bg-opacity-65">
          Play
        </button>
        <button className="bg-gray-500 text-white px-14 py-2 rounded text-xl bg-opacity-65">
          More info
        </button>
      </div>
    </div>
  );
};

export default VideoTitle;

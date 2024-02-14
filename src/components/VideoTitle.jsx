import React from "react";

const VideoTitle = ({ title, desc }) => {
  return (
    <>
      <div className="w-full aspect-video text-white pt-[10%] px-20 absolute ">
        <h1 className="text-6xl w-1/2 font-bold">{title}</h1>
        <p className="w-1/3 text-xl my-10">{desc}</p>
        <button className="py-2 rounded-md  bg-white px-3 text-black hover:bg-opacity-90">
          Play
        </button>

        <button className="py-2 rounded-md mx-5 bg-slate-600 px-3 text-white hover:bg-slate-700">
          More Info
        </button>
      </div>
    </>
  );
};

export default VideoTitle;

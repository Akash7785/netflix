import React from "react";

const VideoTitle = ({ title, desc }) => {
  return (
    <>
      <div className="w-full aspect-video bg-gradient-to-r from-black text-white pt-[10%] px-20 absolute max-sm:px-5 ">
        <h1 className="text-6xl w-1/2 font-bold max-sm:text-xl max-sm:w-full max-sm:mt-10 ">
          {title}
        </h1>
        <p className="w-1/3 text-xl my-10 line-clamp-6 max-sm:text-xs max-sm:hidden">
          {desc}
        </p>
        <div className="max-sm:mt-[10%]">
          <button className="py-2 rounded-md  bg-white px-3 text-black hover:bg-opacity-90 max-sm:text-sm max-sm:py-1 max-sm:font-semibold max-sm:px-2 max-sm:hidden">
            Play
          </button>
          <button className="py-2 rounded-md mx-5 bg-slate-600 px-3 text-white hover:bg-slate-700 max-sm:text-sm max-sm:py-1max-sm:font-semibold max-sm:px-2 max-sm:mx-0">
            More Info
          </button>
        </div>
      </div>
    </>
  );
};

export default VideoTitle;

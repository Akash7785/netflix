import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addPlayTrailer } from "../utils/movieSlice";

const TrailerPlayer = () => {
  const trailer = useSelector((store) => store.movies.selectedTrailer);

  const dispatch = useDispatch();
  const handleCloseBtn = () => {
    dispatch(addPlayTrailer());
  };
  return (
    <>
      <div className="flex flex-col items-end mt-28 ml-10  absolute bg-black max-sm:ml-0 max-sm:mt-14">
        <button
          className="bg-red-800  rounded-lg m-1 text-white p-2 absolute"
          onClick={handleCloseBtn}
        >
          Close
        </button>
        <iframe
          className="aspect-video h-[80vh] w-[70vw] max-sm:w-[100vw] max-sm:h-[50vh]"
          src={
            "https://www.youtube.com/embed/" +
            trailer.key +
            "?autoplay=1&si=7Z0lCYJAPrKpXgkN"
          }
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        ></iframe>
      </div>
    </>
  );
};

export default TrailerPlayer;

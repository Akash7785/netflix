import React from "react";
import useMovieTrailer from "../hooks/useMovieTrailer";
import { useSelector } from "react-redux";

const VideoBackground = ({ movieId }) => {
  const movieTrailer = useSelector((store) => store.movies?.nowPlayingTrailer);
  console.log(movieTrailer?.key);

  useMovieTrailer(movieId);
  console.log("movieId", movieId);

  return (
    <iframe
      className="w-full aspect-video"
      src={
        "https://www.youtube.com/embed/" +
        movieTrailer?.key +
        "?autoplay=1&mute=1&loop=1"
      }
      title="YouTube video player"
    ></iframe>
  );
};

export default VideoBackground;

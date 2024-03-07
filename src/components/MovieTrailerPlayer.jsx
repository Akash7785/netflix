import React from "react";

const MovieTrailerPlayer = ({ movieId }) => {
  return (
    <div>
      <iframe
        className="w-full aspect-video"
        src={
          "https://www.youtube.com/embed/" +
          movieTrailer?.key +
          "?autoplay=1&mute=1&loop=1"
        }
        title="YouTube video player"
      ></iframe>
    </div>
  );
};

export default MovieTrailerPlayer;

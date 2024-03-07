import React from "react";
import { IMAGE_CDN_URL } from "../utils/constants";
import { Link } from "react-router-dom";

const MovieCard = ({ poster, id }) => {
  if (!poster) return null;

  return (
    <Link to={"/movie?id=" + id}>
      <div className="w-36 mx-2 mb-4">
        <img
          className="rounded-md cursor-pointer w-36 h-52"
          src={IMAGE_CDN_URL + poster}
          // onClick={showMovieDetail}
        />
      </div>
    </Link>
  );
};

export default MovieCard;

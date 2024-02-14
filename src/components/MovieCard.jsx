import React from "react";
import { IMAGE_CDN_URL } from "../utils/constants";

const MovieCard = ({ poster }) => {
  return (
    <div className="w-36 mx-2 mb-4">
      <img className="rounded-md" src={IMAGE_CDN_URL + poster} />
    </div>
  );
};

export default MovieCard;

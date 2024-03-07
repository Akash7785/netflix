import React from "react";
import GptSearchbar from "./GptSearchbar";
import GptMovieSuggestion from "./GptMovieSuggestion";
import backgroundImage from "../assets/IN-en-20240115-trifectadaily-perspective_alpha_website_large.jpg";

const GptSearch = () => {
  return (
    <div>
      <div className="fixed -z-30 ">
        <img
          className="max-sm:h-[100vh] object-cover"
          src={backgroundImage}
          alt="logo"
        />
      </div>
      <GptSearchbar />
      <GptMovieSuggestion />
    </div>
  );
};

export default GptSearch;

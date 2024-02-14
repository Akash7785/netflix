import React from "react";
import MovieCard from "./MovieCard";

const MovieList = ({ title, movies }) => {
  console.log(title, movies?.[0]?.poster_path);

  if (!MovieList) return;

  return (
    <div className="bg-black">
      <h1 className="font-bold text-xl mx-2 p-2 mb-2   text-white">{title}</h1>
      <div className="flex no-scrollbar overflow-x-scroll">
        <div className="flex">
          {movies.map((movie) => (
            <MovieCard key={movie.id} poster={movie?.poster_path} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default MovieList;

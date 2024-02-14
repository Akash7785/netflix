import React from "react";
import MovieList from "./MovieList";
import { useSelector } from "react-redux";

const SecondaryContainer = () => {
  const movies = useSelector((store) => store.movies);

  // console.log("movies", movies);
  // console.log("popularMovies", popularMovies);
  if (
    movies.nowPlayingMovies === null ||
    movies.upcomingMovies === null ||
    movies.popularMovies === null ||
    movies.topRatedMovies === null
  )
    return;
  return (
    <div className="">
      <MovieList title={"Now Playing"} movies={movies.nowPlayingMovies} />
      <MovieList title={"Top Rated"} movies={movies.topRatedMovies} />
      <MovieList title={"Upcoming"} movies={movies.upcomingMovies} />
      <MovieList title={"Popular"} movies={movies.popularMovies} />
    </div>
  );
};

export default SecondaryContainer;

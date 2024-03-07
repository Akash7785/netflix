import React from "react";
import VideoTitle from "./VideoTitle";
import VideoBackground from "./VideoBackground";
import { useDispatch, useSelector } from "react-redux";
import { removeMovieDetail } from "../utils/movieSlice";

const MainContainer = () => {
  const movies = useSelector((store) => store.movies.nowPlayingMovies);
  const dispatch = useDispatch();
  dispatch(removeMovieDetail());

  if (!movies) return;
  const mainMovie = movies[18];

  const { original_title, overview, id } = mainMovie;

  return (
    <div>
      <VideoTitle title={original_title} desc={overview} />
      <VideoBackground movieId={id} />
    </div>
  );
};

export default MainContainer;

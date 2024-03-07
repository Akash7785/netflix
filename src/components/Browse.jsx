import React, { useEffect } from "react";
import Header from "./Header";
import useNowPlayingMovies from "../hooks/useNowPlayingMovies";
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";
import usePopularMovies from "../hooks/usePopularMovies";
import useTopRatedMovies from "../hooks/useTopRated";
import useUpcomingMovies from "../hooks/useUpcoming";
import GptSearch from "./GptSearch";
import { useDispatch, useSelector } from "react-redux";
import MovieDetail from "./MovieDetail";
import { addPlayTrailer } from "../utils/movieSlice";

const Browse = () => {
  const dispatch = useDispatch();
  useNowPlayingMovies();
  usePopularMovies();
  useTopRatedMovies();
  useUpcomingMovies();
  useEffect(() => {
    dispatch(addPlayTrailer());
  }, []);

  const gptPage = useSelector((store) => store.gpt.showGptSearch);

  return (
    <div>
      <Header />
      <div>
        {gptPage ? (
          <GptSearch />
        ) : (
          <>
            <MainContainer />
            <SecondaryContainer />
          </>
        )}
      </div>

      {/*
      MainContainer 
        VideoPlayer
        Title-Heading
      Secondary Container
        Movilist *n
          MovieCard*n
      */}
    </div>
  );
};

export default Browse;

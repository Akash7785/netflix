import { options } from "../utils/constants";
import { useDispatch, useSelector } from "react-redux";
import { addMovieDetail } from "../utils/movieSlice";
import { useEffect } from "react";

const useMovieDetail = (movieId) => {
  const movieDetail = useSelector((store) => store.movies.movieDetail);

  const dispatch = useDispatch();
  const getMovieDetail = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/" + movieId + "?language=en-US",
      options
    );
    const json = await data.json();

    dispatch(addMovieDetail(json));
  };

  useEffect(() => {
    getMovieDetail();
  }, [movieId]);
};

export default useMovieDetail;

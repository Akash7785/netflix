import { useDispatch, useSelector } from "react-redux";
import { options } from "../utils/constants";
import { addRecomendedMovies } from "../utils/movieSlice";
import { useEffect } from "react";

const useRecomendedMovies = (movieId) => {
  const recomendedMovies = useSelector(
    (store) => store.movies.recomendedMovies
  );

  const dispatch = useDispatch();
  const getRecomendedMovies = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/" +
        movieId +
        "/similar?language=en-US&page=1",
      options
    );
    const json = await data.json();

    dispatch(addRecomendedMovies(json.results));
  };

  useEffect(() => {
    getRecomendedMovies();
  }, []);
};

export default useRecomendedMovies;

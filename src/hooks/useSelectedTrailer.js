import { useDispatch, useSelector } from "react-redux";
import { options } from "../utils/constants";
import { addSelectedTrailer } from "../utils/movieSlice";
import { useEffect } from "react";

const useSelectedTrailer = (movieId) => {
  const selectedTrailer = useSelector((store) => store.movies.selectedTrailer);

  const dispatch = useDispatch();
  const getTrailer = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/" +
        movieId +
        "/videos?language=en-US",
      options
    );
    const json = await data.json();
    const filterData = json?.results?.filter(
      (video) => video?.type === "Trailer"
    );
    const trailer = filterData.length ? filterData[0] : json?.results[0];
    dispatch(addSelectedTrailer(trailer));
  };

  useEffect(() => {
    getTrailer();
  }, [movieId]);
};

export default useSelectedTrailer;

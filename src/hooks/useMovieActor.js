import { useDispatch, useSelector } from "react-redux";
import { options } from "../utils/constants";
import { addMovieActors } from "../utils/movieSlice";
import { useEffect } from "react";

const useMovieActor = (id) => {
  const movieActor = useSelector((store) => store.movies.movieActor);
  const dispatch = useDispatch();
  const getMovieActor = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/" + id + "/credits?language=en-US",
      options
    );
    const json = await data.json();

    dispatch(addMovieActors(json.cast.filter((el) => el.profile_path != null)));
  };
  useEffect(() => {
    !movieActor && getMovieActor();
  }, [id]);
};
export default useMovieActor;

import React, { useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import DetailCard from "./DetailCard";
import useMovieDetail from "../hooks/useMovieDetail";
import ActorsCard from "./ActorsCard";
import useMovieActor from "../hooks/useMovieActor";
import MovieCard from "./MovieCard";
import useRecomendedMovies from "../hooks/useRecomendedMovies";
import { useSelector } from "react-redux";
import TrailerPlayer from "./TrailerPlayer";
import useSelectedTrailer from "../hooks/useSelectedTrailer";
import Header from "./HeaderComponent";

const MovieDetail = () => {
  const [movieId] = useSearchParams();
  let params = new URLSearchParams(document.location.search);
  let id = params.get("id");
  useMovieDetail(id);
  useMovieActor(id);
  useRecomendedMovies(id);
  useSelectedTrailer(id);

  const trailerPlayer = useSelector((store) => store.movies.playTrailer);

  const recomendedMovies = useSelector(
    (store) => store.movies.recomendedMovies
  );
  if (!recomendedMovies) return;
  return (
    <>
      <Header />
      {trailerPlayer ? (
        <TrailerPlayer movieId={id} />
      ) : (
        <div className="bg-black text-white ">
          <DetailCard />
          <div>
            <h1 className="text-xl font-bold mb-5 pt-5 mx-5">Actors</h1>
          </div>
          <ActorsCard />
          <div>
            <h1 className="text-xl font-bold my-2 pb-2 mx-5">
              Recomended Movies
            </h1>
          </div>
          <div className="flex overflow-x-scroll   no-scrollbar mx-5">
            {recomendedMovies.map((movies) => (
              <MovieCard
                key={movies.id}
                id={movies.id}
                poster={movies.poster_path}
              />
            ))}
          </div>
        </div>
      )}
    </>
  );
};

export default MovieDetail;

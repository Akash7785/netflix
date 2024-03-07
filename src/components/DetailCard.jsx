import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { HD_IMAGE_CDN_URL } from "../utils/constants";
import { addPlayTrailer } from "../utils/movieSlice";

const DetailCard = () => {
  const detail = useSelector((store) => store.movies.movieDetail);
  const dispatch = useDispatch();

  if (!detail) return;

  const handlePlayTrailer = (movieId) => {
    dispatch(addPlayTrailer(movieId));
  };

  return (
    <>
      <div className="">
        <div
          className="h-[80vh] w-[100%] bg-cover max-sm:w-[100vw] max-sm:h-[35vh] "
          style={{
            backgroundImage: `url(${HD_IMAGE_CDN_URL + detail.backdrop_path})`,
          }}
        >
          <div className="bg-gradient-to-r p-16 flex items-start text-white justify-center  flex-col from-black h-[80vh] w-[100%] max-sm:p-7 max-sm:h-[50vh]">
            <h1 className="text-white text-4xl font-bold max-sm:text-lg max-sm:-mt-14">
              {detail.title}
            </h1>
            <h1 className="mt-5 w-1/2 text-lg line-clamp-4 max-sm:text-xs max-sm:mt-1 max-sm:line-clamp-3">
              {detail.overview}
            </h1>
            <div className="flex mt-5 text-lg max-sm:text-xs max-sm:my-2 ">
              <p className="mx-1">IMDB {detail.vote_average}</p>
              <p className="mx-2">{detail.runtime}min</p>
              <p className="mx-1">{detail.release_date.split("-")[0]}</p>

              {detail.spoken_languages.map((movieLang) => (
                <p key={movieLang.iso_639_1}>| {movieLang.name} |</p>
              ))}
            </div>
            <div className="flex mt-5 max-sm:text-xs max-sm:mt-0">
              {detail.genres.map((genres) => (
                <li className="mx-2" key={genres.id}>
                  {genres.name}
                </li>
              ))}
            </div>
            <button
              className="bg-green-500 p-2 rounded-lg mt-5 font-semibold max-sm:p-1 max-sm:font-normal max-sm:mt-2"
              onClick={handlePlayTrailer}
            >
              Play Trailer
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default DetailCard;

import React, { useRef } from "react";
import lang from "../utils/languageConstant";
import { useDispatch, useSelector } from "react-redux";
import openai from "../utils/openai";
import { options } from "../utils/constants";
import { addSearchedMovies } from "../utils/gptSlice";

const GptSearchbar = () => {
  const inputText = useRef();
  const dispatch = useDispatch();

  const selectedLang = useSelector((store) => store.lang.preferedLanguage);

  const searchTmdbMovies = async (movie) => {
    const data = await fetch(
      "https://api.themoviedb.org/3/search/movie?query=" +
        movie +
        "&include_adult=false&language=en-US&page=1",
      options
    );
    const json = await data.json();
    return json.results;
  };

  const handleGptSearch = async () => {
    const searchQuery =
      "work as a movie recomendation system with value as " +
      inputText.current.value +
      "give only 5 movie list with comma sapareted value as given: Don , Raj , koi mil gya , Gadar , vikram Vaital";
    const GptResult = await openai.chat.completions.create({
      messages: [{ role: "user", content: searchQuery }],
      model: "gpt-3.5-turbo",
    });

    if (!GptResult.choices) {
      // User can provide their api key and use fetaure
    }

    const gptMovies = GptResult.choices[0].message.content.split(",");

    const promiseArray = gptMovies.map((movie) => searchTmdbMovies(movie));

    const searchedMovieList = await Promise.all(promiseArray);

    dispatch(
      addSearchedMovies({
        movieNames: gptMovies,
        movieResults: searchedMovieList,
      })
    );
  };

  return (
    <div className="flex justify-center max-sm:mt-20 max-sm:p-10 ">
      <form
        className="m-[12%] py-2 pr-2 bg-black absolute grid grid-cols-8 rounded-lg max-sm:mx-2 max-sm:col-span-7 "
        onSubmit={(e) => e.preventDefault()}
      >
        <input
          ref={inputText}
          className="p-2 mx-2 col-span-7 rounded-lg max-sm:col-span-6"
          type="text"
          name=""
          id=""
          placeholder={lang[selectedLang].searchInputPlaceholder}
        />
        <button
          className="bg-red-600 text-white rounded-lg py-2 px-4 max-sm:col-span-2"
          onClick={handleGptSearch}
        >
          {lang[selectedLang].search}
        </button>
      </form>
    </div>
  );
};

export default GptSearchbar;

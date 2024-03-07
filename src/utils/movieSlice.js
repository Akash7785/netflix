import { createSlice } from "@reduxjs/toolkit";

const movieSlice = createSlice({
  name: "movies",
  initialState: {
    nowPlayingMovies: null,
    nowPlayingTrailer: null,
    popularMovies: null,
    topRatedMovies: null,
    upcomingMovies: null,
    movieDetail: null,
    movieActors: null,
    recomendedMovies: null,
    selectedTrailer: null,
    playTrailer: false,
  },
  reducers: {
    addNowPlayingMovies: (state, action) => {
      state.nowPlayingMovies = action.payload;
    },
    addTrailerVideo: (state, action) => {
      state.nowPlayingTrailer = action.payload;
    },
    addPopularMovies: (state, action) => {
      state.popularMovies = action.payload;
    },
    addTopRatedMovies: (state, action) => {
      state.topRatedMovies = action.payload;
    },
    addUpcomingMovies: (state, action) => {
      state.upcomingMovies = action.payload;
    },
    addMovieDetail: (state, action) => {
      state.movieDetail = action.payload;
    },
    removeMovieDetail: (state, action) => {
      state.movieDetail = null;
    },
    addMovieActors: (state, action) => {
      state.movieActors = action.payload;
    },
    addRecomendedMovies: (state, action) => {
      state.recomendedMovies = action.payload;
    },
    addSelectedTrailer: (state, action) => {
      state.selectedTrailer = action.payload;
    },
    addPlayTrailer: (state, action) => {
      state.playTrailer = !state.playTrailer;
    },
  },
});

export const {
  addTopRatedMovies,
  addUpcomingMovies,
  addNowPlayingMovies,
  addTrailerVideo,
  addPopularMovies,
  addMovieDetail,
  removeMovieDetail,
  addMovieActors,
  addRecomendedMovies,
  addSelectedTrailer,
  addPlayTrailer,
} = movieSlice.actions;

export default movieSlice.reducer;

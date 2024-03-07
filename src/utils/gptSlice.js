import { createSlice } from "@reduxjs/toolkit";

const gptSlice = createSlice({
  name: "gpt",
  initialState: {
    showGptSearch: false,
    movieResults: null,
    movieNames: null,
    showPassword: false,
  },
  reducers: {
    toggleGpt: (state, action) => {
      state.showGptSearch = !state.showGptSearch;
    },
    addSearchedMovies: (state, action) => {
      const { movieNames, movieResults } = action.payload;
      state.movieNames = movieNames;
      state.movieResults = movieResults;
    },
    toggleShowPassword: (state) => {
      state.showPassword = !state.showPassword;
    },
  },
});

export const { toggleGpt, addSearchedMovies, toggleShowPassword } =
  gptSlice.actions;
export default gptSlice.reducer;

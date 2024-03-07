import { createSlice } from "@reduxjs/toolkit";

const selectedLang = createSlice({
  name: "lang",
  initialState: {
    preferedLanguage: "en",
  },
  reducers: {
    changeLanguage: (state, action) => {
      state.preferedLanguage = action.payload;
    },
  },
});
export const { changeLanguage } = selectedLang.actions;
export default selectedLang.reducer;

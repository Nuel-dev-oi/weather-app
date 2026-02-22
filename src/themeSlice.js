import { createSlice } from "@reduxjs/toolkit";
const savedTheme = JSON.parse(localStorage.getItem("theme"));

const themeSlice = createSlice({
  name: "theme",
  initialState: savedTheme ?? false,
  reducers: {
    //Add your reducers here
    mode: (state) => !state,
  },
});

export const { mode } = themeSlice.actions;
export default themeSlice.reducer;

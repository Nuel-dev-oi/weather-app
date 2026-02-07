import { createSlice } from "@reduxjs/toolkit";

const themeSlice = createSlice({
  name: "theme",
  initialState: false,
  reducers: {
    //Add your reducers here
    mode: (state) => !state,
  },
});

export const { mode } = themeSlice.actions;
export default themeSlice.reducer;

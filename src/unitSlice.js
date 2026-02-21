import { createSlice } from "@reduxjs/toolkit";

const unitSlice = createSlice({
  name: "units",
  initialState: {
    data: null,
  },
  reducers: {
    //Add your reducers here
    selectUnit: (state, action) => {
      state.data = action.payload;
    },
  },
});

export const { selectUnit } = unitSlice.actions;
export default unitSlice.reducer;

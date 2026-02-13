import { createSlice } from "@reduxjs/toolkit";

const weatherSlice = createSlice({
  name: "weather",
  initialState: {
    data: null,
  },
  reducers: {
    //Add your reducers here 
    weatherData: (state, action) => {
      state.data = action.payload;
    },
  },
});

export const { weatherData } = weatherSlice.actions;
export default weatherSlice.reducer;
 
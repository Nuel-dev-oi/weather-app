import { configureStore } from "@reduxjs/toolkit";
import themeReducer from "./themeSlice";
import weatherReducer from "./weatherSlice";

export const store = configureStore({
  reducer: {
    theme: themeReducer,
    weather: weatherReducer,
  },
});

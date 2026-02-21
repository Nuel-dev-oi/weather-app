import { configureStore } from "@reduxjs/toolkit";
import themeReducer from "./themeSlice";
import weatherReducer from "./weatherSlice";
import unitReducer from "./unitSlice";

export const store = configureStore({
  reducer: {
    theme: themeReducer,
    weather: weatherReducer,
    units: unitReducer,
  },
});

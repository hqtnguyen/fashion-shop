import { configureStore } from "@reduxjs/toolkit";
import homeReducer from "../features/Home/HomeSlice";
export const store = configureStore({
  reducer: {
    home: homeReducer,
  },
});

import { configureStore } from "@reduxjs/toolkit";
import menuReducer from "./slices/toggleSlice";
export const store = configureStore({
  reducer: {
    menuReducer: menuReducer,
  },
});

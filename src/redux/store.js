import { configureStore } from "@reduxjs/toolkit";
import menuReducer from "./slices/toggleSlice";
import productSlice from "./slices/productSlice";
export const store = configureStore({
  reducer: {
    menuReducer: menuReducer,
    product: productSlice,
  },
});

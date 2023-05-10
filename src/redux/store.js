import { configureStore } from "@reduxjs/toolkit";
import menuReducer from "./slices/toggleSlice";
import productSlice from "./slices/productSlice";
import editProfile from "./slices/editProfile";
export const store = configureStore({
  reducer: {
    menuReducer: menuReducer,
    product: productSlice,
    editPro : editProfile  
  },
});

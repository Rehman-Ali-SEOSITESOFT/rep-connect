import { configureStore } from "@reduxjs/toolkit";
import menuReducer from "./slices/toggleSlice";
import productSlice from "./slices/productSlice";
import editProfile from "./slices/editProfile";
import popUpToggle from "./slices/togglePopup";
import single_product_slice from "./slices/singleProduct";
import cartItemSlice from "./slices/cartItem";
import productCateWisSlice from "./slices/productCategoryWise";
import updatingSlice from "./slices/updateCart";
import catItemSlice from "./slices/categoryFilter";
import adminSideBarOpned from "./slices/adminSidebar";
export const store = configureStore({
  reducer: {
    menuReducer: menuReducer,
    product: productSlice,
    editPro: editProfile,
    togPop: popUpToggle,
    singleproduct: single_product_slice,
    cartItem: cartItemSlice,
    categoryWisePro: productCateWisSlice,
    updatingCart: updatingSlice,
    categoryFilter: catItemSlice,
    adminSideBarOpned: adminSideBarOpned,
  },
});

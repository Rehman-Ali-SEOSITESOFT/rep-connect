import { createSlice } from "@reduxjs/toolkit";

const profileState = {
  profileImg: null,
};

export const editProfile = createSlice({
  name: "profileImage",
  initialState: profileState,
  reducers: {
    AddImage: (state, action) => {
      //  let imgAddup = [...state.profileImg]
      //  imgAddup = action.payload

      state.profileImg = action.payload;
    },
  },
});

export const { AddImage } = editProfile.actions;
export default editProfile.reducer;

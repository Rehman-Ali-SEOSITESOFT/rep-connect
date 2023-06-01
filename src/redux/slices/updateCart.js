import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  updating: false,
};

export const updatingSlice = createSlice({
  name: "updateingSlice",
  initialState: initialState,
  reducers: {
    updatingState: (state, action) => {
      state.updating = !state.updating;
    },
  },
});

export const { updatingState } = updatingSlice.actions;
export default updatingSlice.reducer;

import { createSlice } from "@reduxjs/toolkit";
import { PostState } from "../../types";

const initialState: PostState = {
  value: [],
};

export const postSlice = createSlice({
  name: "post",
  initialState,
  reducers: {
    setPosts: (state, action) => {
      state.value = action.payload;
    },
  },
});

export const { setPosts } = postSlice.actions;

export default postSlice.reducer;

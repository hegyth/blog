import { createSlice } from "@reduxjs/toolkit";
import { SearchPostState} from "../../types";

const initialState: SearchPostState = {
  value: null,
};

export const searchSlice = createSlice({
  name: "search",
  initialState,
  reducers: {
    setSearchPost: (state, action) => {
      state.value = action.payload;
    },
  },
});

export const { setSearchPost } = searchSlice.actions;

export default searchSlice.reducer;

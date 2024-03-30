import { createSlice } from "@reduxjs/toolkit";
import { ReactionState } from "../../types";

const initialState: ReactionState = {
  value: [],
};

export const reactionSlice = createSlice({
  name: "reaction",
  initialState,
  reducers: {
    setReaction: (state, action) => {
      if (state.value.find((el) => el.id == action.payload.id)) {
        const newState = state.value.map((el) => {
          if (
            el.id == action.payload.id &&
            el.reaction == action.payload.reaction
          ) {
            el.id = 0;
            return el;
          } else if (el.id == action.payload.id) {
            el.reaction = action.payload.reaction;
            return el;
          } else return el;
        });
        state.value = newState;
      } else state.value.push(action.payload);
    },
  },
});

export const { setReaction } = reactionSlice.actions;

export default reactionSlice.reducer;

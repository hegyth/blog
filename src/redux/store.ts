import { configureStore } from "@reduxjs/toolkit";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import postSlice from "./features/postSlice";
import reactionSlice from "./features/reactionSlice";
import searchSlice from "./features/searchSlice";

export const store = configureStore({
  reducer: {
    search: searchSlice,
    post: postSlice,
    reaction: reactionSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

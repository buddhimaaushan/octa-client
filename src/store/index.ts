import { configureStore } from "@reduxjs/toolkit";
import themeReducer from "../reducers/themeSlice";
import dimensionReducer from "../reducers/dimensionSlice";
import tweakReducer from "../reducers/tweakSlice";

const store = configureStore({
  reducer: {
    theme: themeReducer,
    dimension: dimensionReducer,
    tweaks: tweakReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;

export default store;

import { createSlice } from "@reduxjs/toolkit";
import type { RootState } from "../store";

interface TweakState {
  userbar: {
    text: string;
    color: string;
  };
}

const initialState: TweakState = {
  userbar: {
    text: "Followers",
    color: "blue",
  },
};

export const tweakSlice = createSlice({
  name: "userbar",

  initialState,
  reducers: {
    setUserbar: (state, value) => {
      state.userbar = value.payload;
    },
  },
});

export const { setUserbar } = tweakSlice.actions;

export const selectUserbar = (state: RootState) => state.tweaks.userbar;

export default tweakSlice.reducer;

import { createSlice } from "@reduxjs/toolkit";
import type { RootState } from "../store";

interface DimensionState {
  width: number;
  height: number;
}

const initialState: DimensionState = {
  width: window.innerWidth,
  height: window.innerHeight,
};

export const dimensionSlice = createSlice({
  name: "dimension",

  initialState,
  reducers: {
    getWidth: (state) => {
      state.width = window.innerWidth;
    },
    getHeight: (state) => {
      state.height = window.innerHeight;
    },
  },
});

export const { getWidth, getHeight } = dimensionSlice.actions;

export const selectWidth = (state: RootState) => state.dimension.width;
export const selectHeight = (state: RootState) => state.dimension.height;

export default dimensionSlice.reducer;

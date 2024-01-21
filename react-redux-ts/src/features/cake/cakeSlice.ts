import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type InitialState = {
  numOfCakes: number;
};

const initialState: InitialState = {
  numOfCakes: 10,
};

// Created a feature 'Slice' using 'createSlice' which generates actions & reducers.
const cakeSlice = createSlice({
  name: "cake",
  initialState,
  // Performs direct mutations in state using 'Immer' (used before)
  reducers: {
    ordered: (state) => {
      state.numOfCakes--;
    },
    restocked: (state, action: PayloadAction<number>) => {
      state.numOfCakes += action.payload;
    },
  },
});

export default cakeSlice.reducer;
export const { ordered, restocked } = cakeSlice.actions;

import { createSlice } from "@reduxjs/toolkit";
interface StepsState {
    step: number;
}
const initialState: StepsState = {
  step: 1
};

const stepsSlice = createSlice({
  name: "steps",
  initialState,
  reducers: {
    updateStep: (state: StepsState, action) => {
        state.step = action.payload;
      },
  }
});

const { actions, reducer } = stepsSlice;
export const {
  updateStep
} = actions;
export default reducer;

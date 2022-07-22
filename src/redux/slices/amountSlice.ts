import { createSlice } from "@reduxjs/toolkit";
interface AmountState {
    disabled: boolean;
}
const initialState: AmountState = {
  disabled: false
};

const stepsSlice = createSlice({
  name: "amount",
  initialState,
  reducers: {
    updateDisabled: (state: AmountState, action) => {
        state.disabled = action.payload;
      },
  }
});

const { actions, reducer } = stepsSlice;
export const {
  updateDisabled
} = actions;
export default reducer;

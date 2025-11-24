import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

interface SandwichState {
  value: string;
}

const initialState: SandwichState = {
  value: "",
};

const sandwichSlice = createSlice({
  name: "sandwich",
  initialState,
  reducers: {
    addIngredient(state, action: PayloadAction<string>) {
      state.value += action.payload;
    },
    clean(state) {
      state.value = "";
    },
  },
});

export const { addIngredient, clean } = sandwichSlice.actions;
export default sandwichSlice.reducer;

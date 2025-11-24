import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

interface CounterState {
  value: number;
}

const initialState: CounterState = {
  value: 0,
};

export const counterSlice = createSlice({
  name: "counter", // -> name имя кусочка/срез состояния, Redux Toolkit сам создаёт типы action на основе этого имени.
  initialState, //→ Подключаем начальное состояние.
  reducers: {
    //→ Раздел, где мы описываем функции, которые изменяют состояние. Каждый reducer автоматически создаёт action.
    increment(state) {
      state.value += 1;
    },
    decrement(state) {
      state.value -= 1;
    },
    plusOneHundred(state) {
        state.value += 100;
    },
    reset(state) {
        state.value = 0;
    },
    
    // → Пример reducer с параметром.
    // action.payload — это число, которое передаётся в action.
    incrementByAmount(state, action: PayloadAction<number>) {
      state.value += action.payload;
    },
  },
});

export const {increment, decrement, incrementByAmount, plusOneHundred, reset} = counterSlice.actions;
// → Отсюда приходят готовые action creators, которые можно сразу диспатчить.

export default counterSlice.reducer
// → Экспортируем reducer, чтобы подключить его в store.

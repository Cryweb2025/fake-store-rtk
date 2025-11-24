import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { decrement, increment, incrementByAmount, plusOneHundred, reset } from "./counterSlice";

const Counter = () => {
  const value = useAppSelector((state) => state.counter.value); // → Получаем текущий счётчик из Redux.
  const dispatch = useAppDispatch(); // → Берём типизированный dispatch.

  return (
    <div style={{ textAlign: "center", marginTop: "40px" }}>
      <h1>Counter: {value}</h1>
      <div style={{ display: "flex", gap: "10px", justifyContent: "center" }}>
        <button onClick={() => dispatch(increment())}>+1</button>{" "}
        {/* // → Отправляем действие увеличения счётчика. */}
        <button onClick={() => dispatch(decrement())}>-1</button>
        <button onClick={()=>dispatch(incrementByAmount(-10))}>-10</button>
        <button onClick={()=>dispatch(plusOneHundred())}>+100</button>
        <button onClick={()=>dispatch(reset())}>Reset</button>
      </div>
    </div>
  );
};

export default Counter;

import { addIngredient, clean } from "./sandwichSlice";
import type { JSX } from "react";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import sandwichImg from "../../assets/images/sandwich.png";
import styles from "./Sandwich.module.css";

export default function Sandwich(): JSX.Element {
  const sandwich = useAppSelector((state) => state.sandwich.value);
  const dispatch = useAppDispatch();

  function handleAdd(ingredient: string): void {
    dispatch(addIngredient(ingredient));
  }

  return (
    <div>
      <img src={sandwichImg} alt="Sandwich" className={styles.image} />
      <h4 className={styles.title}>Added ingredients:</h4>
      <p>{sandwich}</p>
      <button type="button" onClick={() => handleAdd("Bread 🍞")}>
        Add bread
      </button>
      <button type="button" onClick={() => handleAdd("Cheese 🧀")}>
        Add cheese
      </button>
      <button type="button" onClick={() => handleAdd("Bacon 🥓")}>
        Add bacon
      </button>
      <button type="button" onClick={() => handleAdd("Salad 🥬")}>
        Add salad
      </button>
      <button type="button" onClick={() => dispatch(clean())}>
        Eat now
      </button>
    </div>
  );
}

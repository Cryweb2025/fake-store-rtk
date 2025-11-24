import type { JSX } from "react";
import "./App.css";
import { ProductsList } from "./features/products/ProductsList";

// import Counter from "./features/counter/Counter";
// import Sandwich from "./features/sandwich/Sandwich";

function App(): JSX.Element {
  return (
    <div>
      <ProductsList />
      {/* <Sandwich /> */}
      {/* <Counter /> */}
    </div>
  );
}

export default App;

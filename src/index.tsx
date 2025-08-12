import { Counter } from "./components/Counter";
import { someFn } from "./test";
import {render} from "react-dom";

// someFn(1);

render (
  <div>
      <Counter />
  </div>,
  document.getElementById("root")
);

import App from "components/App";
import { Counter } from "./components/Counter";
import { someFn } from "./test";
import {render} from "react-dom";

// someFn(1);

render (
  <App/>,
  document.getElementById("root")
);

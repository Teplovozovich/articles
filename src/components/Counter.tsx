import React from "react";
import './Counter.scss'

export const Counter = () => {
  const [count, setCount] = React.useState(0);
  return (
    <div>
      <div>{count}</div>
      <button onClick={() => setCount(count + 1)}>increase</button>
      <button onClick={() => setCount(count - 1)}>decrease</button>
    </div>
  );
};

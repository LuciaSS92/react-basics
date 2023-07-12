import React, { useState } from "react";

//Deconstructing
// const rgb = [33, 140, 116]
// const [red, green, blue] = [33, 140, 116]
// console.log(blue)

function CounterApp() {
  const [count, setCount] = useState(0);

  function increase() {
    setCount(count + 1);
  }

  function decrease() {
    setCount(count - 1);
  }

  return (
    <div className="container">
      <h1>{count}</h1>
      <button onClick={decrease}>-</button>
      <button onClick={increase}>+</button>
    </div>
  );
}

export default CounterApp;

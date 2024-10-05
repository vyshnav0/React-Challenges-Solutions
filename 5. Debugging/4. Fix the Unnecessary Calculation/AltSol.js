/* Copy paste this entire code to App.js 
    the useEffect way of solving. the factorial fucntion is only called if the number changes
    even if the state changes(inc changes) the fact isnt calculated unless number change
*/

import "./styles.css";
import { useState, useEffect } from "react";
import React from "react";

export default function CalculateFactorial() {
  const [number, setNumber] = useState(0);
  const [inc, setInc] = useState(0);
  const [factorial, setFactorial] = useState(1);

  // const factorial = factorialOf(number);

  useEffect(() => {
    const res = factorialOf(number);
    setFactorial(res);
    console.log("factorialOf(", number, ") called!");
  }, [number]);

  const onClick = () => setInc((i) => i + 1);
  const onChange = (event) => {
    setNumber(Number(event.target.value));
  };

  return (
    <div>
      Factorial of
      <input type="number" value={number} onChange={onChange} />
      is {factorial}
      <button onClick={onClick}>Re-render</button>
    </div>
  );
}

function factorialOf(n) {
  return n <= 0 ? 1 : n * factorialOf(n - 1);
}

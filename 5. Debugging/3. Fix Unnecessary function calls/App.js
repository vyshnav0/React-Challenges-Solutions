import React, { useState, useEffect } from "react";
import "./styles.css";

const App = () => {
  const [counter, setCounter] = useState(0);
  const [functionCalls, setFunctionCalls] = useState(-1); // Start at -1 to offset the initial render count
  const [otherCounter, setOtherCounter] = useState(0);

  const increment = () => {
    setCounter((prev) => prev + 1);
    console.log("Increment counter");
  };

  const decrement = () => {
    setCounter((prev) => prev - 1);
    console.log("Decrement counter");
  };

  const incrementOtherCounter = () => {
    setOtherCounter((prev) => prev + 1);
    console.log("Increment other counter");
  };

  // Track how many times either counter changes
  useEffect(() => {
    setFunctionCalls((prevCnt) => prevCnt + 1);
  }, [counter, otherCounter]);

  return (
    <div className="App">
      <h1>
        <code>useState() without unnecessary calls</code>
      </h1>
      <h3>Counter Value: {counter}</h3>
      <h3>Other Counter Value: {otherCounter}</h3>
      <h3>{`No of function calls: ${functionCalls}`}</h3>
      <button onClick={decrement}>Decrement -</button>
      <button onClick={increment}>Increment +</button>
      <button onClick={incrementOtherCounter}>Increment Other Counter +</button>
    </div>
  );
};

export default App;
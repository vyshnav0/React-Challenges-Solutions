import "./styles.css";
import { useState } from "react";

export default function App() {
  // let intervalID; we cant use a local variable cz each time the component
  // re-renders, a new intervalID is created, and the previous one is lost.
  const [timer, setTimer] = useState(0)
  const startTimer = () => {
    // here intervalID is defined as window variable, it will be accessible in the whole page of the web
    // in react, it is preferable to use a useRef hook instead of window.variable
    if(window.intervalID) return
    // if an intervalID is already there, then it means the timer is running, so we dont need to 
    // increment the timer, if this condition wasnt there then the timer would just speed up 
    window.intervalID = setInterval(() => {
      setTimer((timer)=> timer + 1)
    }, 1000);
  };
  // setInterval is a function that calls another function repeatedly in the given delay
  // intervalID is the id returned by the setInterval

  const stopTimer = () => {
    clearInterval(window.intervalID)
    // clearInterval is an inbuilt function like setInterval that stops the function thats getting repeated by setInterval
    // intervalID is set to null so that startTimer gets called(refer the if condition)
    window.intervalID = null
  };
  const resetTimer = () => {
    clearInterval(window.intervalID)
    setTimer(0)
    window.intervalID = null

  };
  return (
    <div className="container">
      <h1>Timer</h1>
      <span> {Math.floor(timer/60)} mins </span>
      <span> {timer%60} secs</span>
      <div>
        <button onClick={startTimer}>Start</button>
        <button onClick={stopTimer}>Stop</button>
        <button onClick={resetTimer}>Reset</button>
      </div>
    </div>
  );
}

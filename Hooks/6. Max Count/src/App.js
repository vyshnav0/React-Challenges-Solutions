import "./styles.css";
import { useState, useRef, useEffect } from "react";

export default function App() {
  // When you update a useState variable, React re-renders the component.
  // When you update the current value of a useRef object, it does not cause re-renders.
  // in this specifc question useRef isnt required as using it would be useless
  // each time we update a useRef variable, it isnt rendered, so it wont get updated in the timeleft

  const [showButton, setShowButton] = useState(true);
  const [click, setClick] = useState(0);
  const [timeLeft, setTimeLeft] = useState(10);

  useEffect(() => {
    const intervalID = setInterval(() => {
      setTimeLeft((timeLeft) => {
        if (timeLeft === 0) {
          setShowButton(false);
          return 0; // reset the timer
        }
        return timeLeft - 1;
      });
    }, 1000);
    return () => clearInterval(intervalID);
  }, []);

  const handleClick = () => {
    setClick((click) => click + 1);
  };

  return (
    <div className="App">
      <h1>No of clicks untill timer expires</h1>
      <div className="display">
        <h3>{click}</h3>
        <p>Time left: {timeLeft} seconds</p>
        {showButton && <button onClick={handleClick}>+</button>}
      </div>
    </div>
  );
}

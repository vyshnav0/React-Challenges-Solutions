import React, { useState } from "react";
import "./styles.css";

export default function App() {
  const [isVisible, setIsVisible] = useState(true);
  // initially isVisible is true
  return (
    <div className="App">
      <button onClick={()=>setIsVisible(!isVisible)}>
        {isVisible? "Hide" : "Show"} the text
        {/* if isVisible is true then show make the button as hide and else as show */}
      </button>
      {isVisible && <p>some text that will be toggled</p>}
      {/* shortcicuiting: if isVisible is true then it will show the text and viceversa */}
    </div>
  );
}

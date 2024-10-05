import React from "react";
import { useState } from "react";
import "./styles.css";
import ProgressBar from './ProgressBar.js'

/* Visit www.reactchallenges.live */

/* Instructions: 
   Create a Progress Bar that should fill based on the input percentage value
*/

export default function App() {
  const [progress, setProgress] = useState("");
  const setValuer = (e) => {
    const val = parseInt(Number(e.target.value), 10)
    setProgress(val);
  };
  // console.log(progress);
  return (
    <>
      <div className="App">
        <h1>Progress bar</h1>
        {/* Passing the progress value to the component as props. 
            Here width variable is used as variable to hold the progress and then 
            its passed to Progress component
        */}
        <ProgressBar width={progress} />
        <form>
          <label htmlFor="html">Input Percentage:</label>
          <input id = "html" type="number" min="0" max="100" value ={progress}
           onChange={setValuer} />
           {/*value={progress}= Binds the input to the progress state
              so that each time we make changes to the progress, it shows in the 
              input field too  */}
        </form>
      </div>
    </>
  );
}

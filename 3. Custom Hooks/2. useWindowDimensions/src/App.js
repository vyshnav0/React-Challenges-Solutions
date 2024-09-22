import "./styles.css";
import React from "react";
import { useState, useEffect } from "react";

/* Instruction
 Create a custom hook to track the dimensions of users window while resizing.*/

function useWindowDimensions() {
  // const dimensions = [window.innerWidth, window.innerHeight];
  const [windowDimenstions, setWindowDimenstions] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });
  useEffect(() => {
    const handleResize = ()=>{
      setWindowDimenstions({
      width: window.innerWidth,
      height: window.innerHeight,
      })
    }
    window.addEventListener('resize', handleResize)
    return () => {
      window.removeEventListener('resize', handleResize)
    };
  }, [windowDimenstions]);

  return {
    width: windowDimenstions.width,
    height: windowDimenstions.height,
  };
}

export default function App() {
  const { width, height } = useWindowDimensions();

  return (
    <div className="App">
      <h2>width: {width + "px"}</h2>
      <h2>height: {height + "px"}</h2>
      <p>Resize the window to see dynamic width and height</p>
    </div>
  );
}

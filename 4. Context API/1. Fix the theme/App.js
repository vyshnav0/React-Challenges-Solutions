import React, { useState, useContext, useEffect } from "react";
import "./styles.css";

const ThemeContext = React.createContext("dark");
// creates a context for the theme with default value dark
// useContext hook is needed to access this ThemeContext across components
// This context allows components to share the theme state without props

function Comp1() {
  const { theme } = useContext(ThemeContext);
  // get current value of ThemeContext using useContext and assign to theme(dark or light)
  // we are merely using Comp1 to print what theme is currently on
  return (
    <div>
      <h1>Current Theme: {theme}</h1>
    </div>
  );
}

function Comp2() {
  // Comp2 for setting the theme state using setTheme
  const { setTheme } = useContext(ThemeContext);
  return (
    <div>
      <button onClick={() => setTheme("light")}>Light</button>
      <button onClick={() => setTheme("dark")}>Dark</button>
    </div>
  );
}

export default function App() {
  const [theme, setTheme] = useState("light");

  const themeStyles = {
    // setting the background and font color based on theme
    backgroundColor: theme==="dark" ? "black" : "white",
    color: theme==="dark" ? "white" : "black"
  }
    useEffect(() => {
      // whenever there's a change in theme this useEffect will change style of the whole page body
      document.body.style.backgroundColor = themeStyles.backgroundColor;
      document.body.style.color = themeStyles.color;
    }, [theme])

  return (
    <ThemeContext.Provider value={{ theme, setTheme }} className="App">
      {/* provides the context value for other components that calls using useContext */}
        <Comp1 />
        <Comp2 />
    </ThemeContext.Provider>
  );
}

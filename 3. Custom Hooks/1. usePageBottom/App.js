import "./styles.css";
import { useState, useEffect } from "react";

// Instructions:
// Create a custom Hook to detect if the user scrolled to the bottom of the page

// usePageBottom is a custom hook that returns true if page end is reached
const usePageBottom = () => {
  const [isBottom, setIsBottom] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrolledSoFar = document.documentElement.scrollTop;
      // scrollTop: Represents how much the user has scrolled from the top of the document.
      const windowHeight = document.documentElement.clientHeight;
      // clientHeight: The visible height of the browser's content area (viewport).
      const fullPageHeight = document.documentElement.scrollHeight;
      // scrollHeight: The total height of the content on the page, including what's not visible without scrolling.

      if (scrolledSoFar + windowHeight >= fullPageHeight) setIsBottom(true);
      else setIsBottom(false);
    };
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return isBottom;
  // return value of the hook
};

export default function App() {
  const reachedBottom = usePageBottom();
  console.log("reachedBottom", reachedBottom);

  const [alerted, setAlerted] = useState(false);
  useEffect(() => {
    if (reachedBottom && !alerted) {
      alert("Bottom");
      setAlerted(true);
      const timer = setTimeout(() => {
        setAlerted(false);
      }, 10);
      return () => {
        clearTimeout(timer);
      };
    }
  }, [reachedBottom]);

  let arr = [
    "1",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "10",
    "11",
    "12",
    "13",
    "14",
    "15",
    "16",
    "17",
    "18",
    "19",
  ];
  return (
    <div className="App">
      {/* reachedBottom && alert("REached bottom")      
       Calling like this can result in the alert popping up more than once cz
      user is at the bottm aleardy. Instead refer line 38 onwards*/}

      <h1>Welcome to React Challenges</h1>
      {arr.map((num, index) => (
        <h2 key={index + " " + num}>{num}</h2>
      ))}
      <footer>&copy; 2022 React challenges.live</footer>
    </div>
  );
}

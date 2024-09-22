import * as React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import "./styles.css";

/* reactchallenges.live */

/* Instruction: 
Implment a catch route for all routes which are not under defined routes scope*/

// One simple way to do it is by using * for a path
const Home = () => <h1>Home</h1>;
const Settings = () => <h1>Settings</h1>;

// define a component for error page
const NotFound = () => <h1>404 Page not found!</h1>;

export default function App() {
  return (
    <Router>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/settings">Settings</Link>
        </li>
      </ul>

      <Routes>
        {/* * path means every route that has not been defined */}
        <Route path="*" element={<NotFound />} />

        <Route path="/" element={<Home />} />
        <Route path="/settings" element={<Settings />} />
      </Routes>

      {/* another way would be to use the uselocation hook to get the current location,
          addd all the knows paths to an array and then check current loc is included in the known paths
      */}
    </Router>
  );
}

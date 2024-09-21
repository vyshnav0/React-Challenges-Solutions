import "./styles.css";
import * as React from "react";
import { BrowserRouter as Router, Link } from "react-router-dom";
import { Routes, Route, useParams } from "react-router-dom";

/* Instructions 
  Create two Routes so that the given navigation works.

  When the user navigates to /Ram, they should see "Student: Ram".
  When the user navigates to /ids/1, they should see "Ids : 1".
*/

const Employee = () => {
  const {ename} = useParams();
  // get the Employee name from the paramneter
  return (
    <div className="display">
      <h3>Employee: {ename}</h3>
    </div>
  );
};

const Ids = () => {
  const {id} = useParams();
  return (
    <div className="display">
      <h3>Ids : {id}</h3>
    </div>
  );
};

export default function App() {
  return (
    <Router>
      <h2>Employee</h2>
      <ul>
        <li>
          <Link to="/ram">Ram</Link>
        </li>
        <li>
          <Link to="/lakshman">Lakshman</Link>
        </li>
        <li>
          <Link to="/bheem">Bheem</Link>
        </li>
      </ul>
      <h2>Id's</h2>
      <ul>
        <li>
          <Link to="/Ids/1">1</Link>
        </li>
        <li>
          <Link to="/Ids/2">2</Link>
        </li>
        <li>
          <Link to="/Ids/3">3</Link>
        </li>
        <li>
          <Link to="/Ids/4">4</Link>
        </li>
      </ul>

      <hr />

      <Routes>
        <Route path="Ids/:id" element={<Ids/>}/>
        {/* since id and ename are useParams variables, it is used for passing value through params
            the Ids and Employee components are called with the id and ename set from the value in parameter
        */}
        <Route path=":ename" element={<Employee/>}/>
      </Routes>
    </Router>
  );
}

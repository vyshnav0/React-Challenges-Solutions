import * as React from "react";
import { useNavigate } from "react-router-dom";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./customStyles.css";
import "./styles.css";

/* Instructions :
 Once user enter details and clicks on submit button redirects/switch  him to /routes page */

//  Use Link for user-driven, clickable navigation.
//  Use useNavigate for programmatic, event-based navigation (like form submissions, button clicks).
//  Use <Navigate> for conditional, state-based navigation (like redirecting based on state or props).

// here imperative nav is needed, so we use useNavigate hook
function Results() {
  return (
    <div className="center">
      <h1>Thanks for submitting details...</h1>
    </div>
  );
}

function Form() {
  const [name, setName] = React.useState("");
  const [age, setAge] = React.useState("");
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;

    name === "name" ? setName(value) : setAge(value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate("/results");
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="name">
        Your name
        <input
          type="text"
          value={name}
          onChange={handleChange}
          name="name"
          id="name"
        />
      </label>
      <label htmlFor="age">
        Favorite age
        <input
          type="text"
          value={age}
          onChange={handleChange}
          name="age"
          id="age"
        />
      </label>
      <button type="submit">Submit</button>
    </form>
  );
}

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Form />} />
        {/* add the route to the result comp */}
        <Route path="/results" element={<Results />} />
      </Routes>
    </Router>
  );
}

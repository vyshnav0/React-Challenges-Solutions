import "./styles.css";
import { useState } from "react";

export default function App() {
  const [formData, setFormData] = useState({
    usr: "",
    name: "",
    age: "",
  });
  const [showData, setShowData] = useState(false);

  const handleChange = (e) => {
    setShowData(false);
    // incase we edit the inputs clr all the displayed data
    const { name, value } = e.target;
    // here the name is the name attribute of the input tag(usr, name, age) and
    // value means each value that we input for the corresponding name input
    setFormData({
      ...formData, // spread the formData as a new object
      [name]: value, // update the usr, name and the age property in the
      // new object with values from the value
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    setShowData(true);
  };
  return (
    <div className="App">
      <div className="questions">
        <label htmlFor="usr">
          Enter username
          <input
            type="text"
            name="usr"
            id="usr"
            value={formData.usr}
            onChange={handleChange}
          />
        </label>
        <br />
        <label htmlFor="name">
          Enter your Name
          <input
            type="text"
            name="name"
            id="name"
            value={formData.name}
            onChange={handleChange}
          />
        </label>
        <br />
        <label htmlFor="age">
          Enter age
          <input
            type="number"
            name="age"
            id="age"
            value={formData.age}
            onChange={handleChange}
          />
        </label>
        <br />
        <br />
        <button id="submit-btn" type="submit" onClick={handleSubmit}>
          Submit
        </button>
      </div>

      <div className="datas">
        <h2>Request send to DB with below data</h2>
        <ul>
          {/* refer short cicuiting if you dont get && usage here */}
          <li>Username: {showData && formData.usr}</li>
          <li>Name: {showData && formData.name}</li>
          <li>Age: {showData && formData.age}</li>
        </ul>
      </div>
    </div>
  );
}

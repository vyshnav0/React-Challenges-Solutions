import { useState } from "react";
import "./styles.css";

/*
  INSTRUCTIONS:
  Create a "todo"(add cities) app with the following criteria.
    1. The user can add new cities
    2. The user can remove existing cities items
*/

export default function App() {
// for taking input from the text input
  const [city, setCity] = useState("");
  // after the an input reaches the city variable, we need to add it to a list of cities
  const [cityList, setCityList] = useState([]);

  const addCities = () => {
    //adding city from input to the list
    if(city==="") return 
    setCityList([...cityList, city])
    setCity("")  //clear the text field after clicking the button
  };

  const removeCities = (id)=>{
    setCityList(cityList.filter((_, i)=> i!== id))
    // filter returns an array that matches the condition, i(index) is id
    // _ is each city and i is each index
  };
  console.log(cityList);
  return (
    <div className="App">
      <input type="text" name="add-city" value={city} 
      onChange={(e)=>{
        setCity(e.target.value)
      }}
      placeholder="Add city here"/>
      <span> </span>
      <button id="add-btn" onClick={addCities}>Add</button>
      <br />
      <div className="city-lists">
      <ul>
        {cityList.map((city, i)=>(
          <li key={i}>{city}
          <button id="del-btn" onClick={()=>removeCities(i)}>X</button>
          </li>
          //  if we called removeCitites directly did we did for addCitites then the
          //  function will be executed when the component rendered,
          //  resulting in the city being removed right after it was added.
        ))}
      </ul>
      </div>
    </div>
  );
}

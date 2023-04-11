import React from "react";
import { useState, useEffect } from "react";
// const supabaseUrl = "https://fewzacicwrajmacpxkxo.supabase.co";
// const supabaseKey = import.meta.env.VITE_APP_API_KEY;


export function CreateCrew({supabase}) {

  const [crewName, setCrewName] = useState("");
  const [speed, setSpeed] = useState("");
  const [color, setColor] = useState("");

  const handleSubmit = () => {
    handleCreate();
  };

  const handleCreate = async () => {
    const { data, error } = await supabase.from("crew").insert([{name: crewName, speed: speed, color: color }]);
  };


  return (
    <div className="createCrew">
      <h1>Create a new Crew!</h1>
      <form>
        <div className="formBoxes">
          <label htmlFor="name">Name:</label>
          <input
            onChange={(e) => setCrewName(e.target.value)}
            type="text"
            placeholder="Enter crew name"
          />
        </div>
        <div className="formBoxes">
          <label htmlFor="speed">Speed (km/h):</label>
          <input
            onChange={(e) => setSpeed(e.target.value)}
            type="text"
            placeholder="Enter crew speed"
          />
        </div>
        <div className="formBoxes">
          <select onChange={(e) => setColor(e.target.value)}>
            <option>Select a crew color</option>
            <option value="red">Red</option>
            <option value="blue">Blue</option>
            <option value="green">Green</option>
          </select>
        </div>
      </form>
      <button onClick={handleSubmit}>create</button>
    </div>
  );
}

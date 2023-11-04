import React, { useState } from "react";

export function CreateCrew({ supabase }) {
  const [crewName, setCrewName] = useState("");
  const [speed, setSpeed] = useState("");
  const [color, setColor] = useState(""); // Add this line

  const handleSubmit = async (e) => {
    // Add the async keyword if handleCreate is an async function
    e.preventDefault(); // Prevent default form submit action
    await handleCreate(); // Await the async function call
  };

  const handleCreate = async () => {
    const { data, error } = await supabase
      .from("crew")
      .insert([{ name: crewName, speed: speed, color: color }]);
    if (error) {
      // Handle the error appropriately
      console.error("Error inserting data", error);
    } else {
      // Handle success (e.g., clear form, show message)
      console.log("Data inserted", data);
    }
  };

  return (
    <div className="createCrew">
      <h1>Create a TeamMate</h1>
      <form onSubmit={handleSubmit}>
        {" "}
        {/* Change to onSubmit */}
        <div className="formBoxes">
          <label htmlFor="name">Name:</label>
          <input
            value={crewName} // Add this to control the input
            onChange={(e) => setCrewName(e.target.value)}
            type="text"
            placeholder="Enter crew name"
          />
        </div>
        <div className="formBoxes">
          <label htmlFor="speed">Speed (km/h):</label>
          <input
            value={speed} // Add this to control the input
            onChange={(e) => setSpeed(e.target.value)}
            type="text"
            placeholder="Enter crew speed"
          />
        </div>
        <div className="formBoxes">
          <select value={color} onChange={(e) => setColor(e.target.value)}>
            {" "}
            {/* Add value to control the select */}
            <option value="">Select color</option>{" "}
            {/* Update the default option value */}
            <option value="red">Red</option>
            <option value="blue">Blue</option>
            <option value="green">Green</option>
          </select>
        </div>
        <button type="submit">Create</button> {/* Change to type="submit" */}
      </form>
    </div>
  );
}

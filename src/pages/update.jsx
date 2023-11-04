import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
export function Update({ supabase }) {
  const [crewName, setCrewName] = useState("");
  const [speed, setSpeed] = useState("");
  const [color, setColor] = useState("");
  const { id } = useParams();
  const [currInfo, setCurrInfo] = useState({
    id: "",
    name: "",
    speed: "",
    color: "",
  });
  const handleSubmit = () => {
    handleUpdate();
  };

  const handleUpdate = async () => {
    const { data, error } = await supabase
      .from("crew")
      .update({ name: crewName, speed: speed, color: color })
      .eq("id", id);

    handleRead();
  };

  const handleRead = async () => {
    const { data, error } = await supabase.from("crew").select().eq("id", id);
    data.map((e) => {
      setCurrInfo({
        id: e.id,
        name: e.name,
        speed: e.speed,
        color: e.color,
      });
    });
  };

  useEffect(() => {
    handleRead();
  }, []);

  return (
    <div className="update">
      <h1>Update CrewMate!</h1>
      <div className="currentInfo">
        <h2>Current Info:</h2>
        <h3>Name: {currInfo.name}</h3>
        <h3>Speed: {currInfo.speed}</h3>
        <h3>Color: {currInfo.color}</h3>
      </div>
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
            <option>Select color</option>
            <option value="red">Red</option>
            <option value="blue">Blue</option>
            <option value="green">Green</option>
          </select>
        </div>
      </form>
      <button onClick={handleSubmit}>Update</button>
    </div>
  );
}

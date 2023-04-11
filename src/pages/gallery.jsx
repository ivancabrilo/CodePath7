import { useState, useEffect } from "react";
import { Card } from "../components/cards";
export function Gallery({ supabase }) {
  const [crew, setCrew] = useState([]);
  const readCrew = async () => {
    const { data, error } = await supabase.from("crew").select();
     // Check if the new element already exists in the array   
     data.map((e) => {
        // Check if the new element already exists in the array
        if (!crew.some((c) => c.name === e.name && c.speed === e.speed && c.color === e.color)) {
          setCrew((prevCrew) => [
            {
              name: e.name,
              speed: e.speed,
              color: e.color,
            },
            ...prevCrew
          ]);
        }
        });
  };


  return (
    <div className="gallery">
      <h1>Gallery page</h1>
      <button onClick={readCrew}>Click to Browse</button>
      <div className="cardWrapper">
        {crew &&
          crew?.map((cr) => {
            return <Card name={cr.name} speed={cr.speed} color={cr.color} />;
          })}
      </div>
    </div>
  );
}

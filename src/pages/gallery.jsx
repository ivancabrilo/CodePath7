import { useState, useEffect } from "react";
import { Card } from "../components/cards";
export function Gallery({ supabase }) {
  const [crew, setCrew] = useState([]);
  const [crelength, setCreLength] = useState(0);

  const readCrew = async () => {
    const { data, error } = await supabase.from("crew").select();
     data.map((e) => {
          setCrew((prevCrew) => [
            {
              id : e.id,
              name: e.name,
              speed: e.speed,
              color: e.color,
            },
            ...prevCrew
          ]);
        
        });
  };

  return (
    <div className="gallery">
      <h1>Gallery page</h1>
      <button onClick={readCrew}>Click to Browse</button>
      <div className="cardWrapper">
        {crew &&
          crew.map((cr) => {
            return <Card supabase={supabase} id={cr.id} name={cr.name} speed={cr.speed} color={cr.color} />;
          })}
      </div>
    </div>
  );


}

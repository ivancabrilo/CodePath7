//use params to get the name of the crew member
import { useParams, Link } from "react-router-dom";
import { React, useEffect, useState } from "react";
import { Card } from "../components/cards";
export function AboutCrew({ supabase }) {
  const { id } = useParams();
  useEffect(() => {
    console.log(id);
  }, [id]);
  const [crew, setCrew] = useState([]);

  const readCrew = async () => {
    const { data, error } = await supabase.from("crew").select().eq("id", id);
    data.map((e) => {
      setCrew({
        id: e.id,
        name: e.name,
        speed: e.speed,
        color: e.color,
      });
    });
  };

  useEffect(() => {
    readCrew();
  }, []);

  return (
    <div>
      {crew ? (
        <div>
          <h1>TeamMate: {crew.name}</h1>
          <div className="stats">
            <h1>Stats:</h1>
            <h2>Color: {crew.color}</h2>
            <h2>Speed: {crew.speed}</h2>
          </div>
          <div className="feedback">
            {crew.speed > 5 ? (
              <h2>Fast & Furious!⚡🔥</h2>
            ) : (
              <h2>This teammate can only race against a 🐢</h2>
            )}
          </div>
        </div>
      ) : (
        <h1>loading...</h1>
      )}
      <Link to={`/update/${crew.id}`}>
        <button>Edit TeamMate</button>
      </Link>
    </div>
  );
}

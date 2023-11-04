import {Link } from "react-router-dom"
export function Card({id, name, speed, color, supabase}){

    const handleDelete = async () => {
        const { data, error } = await supabase
            .from("crew")
            .delete()
            .eq("id", id);

            //reload page
            window.location.reload();
    };

    return (
        <div className="card">
            <h2>Name: {name}</h2>
            <h3>Speed: {speed}</h3>
            <h3>Color: {color}</h3>
            <Link to={`/about/${id}`}>About</Link>
            <button onClick={handleDelete} className="deleteBtn">X</button>
        </div>
    )
}

//later

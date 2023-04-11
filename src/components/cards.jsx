
export function Card({name, speed, color}){
    return (
        <div className="card">
            <h1>Name: {name}</h1>
            <h2>Speed: {speed}</h2>
            <h2>Color: {color}</h2>
        </div>
    )
}
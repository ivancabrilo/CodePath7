import { Outlet, Link } from "react-router-dom"
import "../cssStyling/App.css";
export function Dashboard(){

    return(
        <div className="Dashboard">
            <div className="sideBard">
            <h1 >Dashboard</h1>
            <Link to={"/"}>Home</Link>
            <Link to={"/createCrew"}>Create new creaMate!</Link>
            <Link to={"/gallery"}>View Crew Gallery</Link>
            </div>
            <div>
            <Outlet/>
            </div>
        </div>
    )
}


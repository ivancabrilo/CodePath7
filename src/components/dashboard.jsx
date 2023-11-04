import { Outlet, Link } from "react-router-dom";
import "../cssStyling/App.css";
export function Dashboard() {
  return (
    <div className="Dashboard">
      <div className="sideBard">
        <h1>Dashboard</h1>
        <Link to={"/"}>Home</Link>
        <Link to={"/createCrew"}>Cre8 new teammate</Link>
        <Link to={"/gallery"}>Ur team</Link>
      </div>
      <div>
        <Outlet />
      </div>
    </div>
  );
}

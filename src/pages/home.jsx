import "../cssStyling/App.css";
import image from "../assets/team.jpg";
export function Home() {
  return (
    <div className="page">
      <h1>Hi visitor, welcome to team creator!</h1>
      <h3>Create your own team, that will be assigned a secret mission</h3>
      <img src={image} alt="" />
    </div>
  );
}

import "../cssStyling/App.css";
import image from "../assets/team.jpg";
export function Home() {
  return (
    <div className="page">
      <h1>Welcome to the Crewmate Creator!</h1>
      <h3>
        Here is where you can create your very own set of crewmates before
        sending them off into space!
      </h3>
      <img src={image} alt="" />
    </div>
  );
}

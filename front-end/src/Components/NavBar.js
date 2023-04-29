// TODO: Links & where they lead to:
// http://localhost:3000/ -> to home via Tuner link in the top left corner
// http://localhost:3000/songs -> to the songs index list via Songs link in the center of the header
// http://localhost:3000/songs/new -> to new song form via New Song button in the top right corner
import { Link } from "react-router-dom";

export default function NavBar() {
  return (
    <nav>
      <h1>
        {" "}
        <Link to="/">Tuner</Link>{" "}
      </h1>
      <h3>
        <Link to="/songs">Songs 🎶</Link>
      </h3>
      <button>
        <Link to="/songs/new">New Song</Link>
      </button>
    </nav>
  );
}

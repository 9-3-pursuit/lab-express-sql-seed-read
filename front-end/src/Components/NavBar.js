import { Link } from "react-router-dom";

export default function NavBar() {
  return (
    <nav>
      <Link to="/songs"><h1><span>Tuner</span></h1></Link>
      <br/>
      <button>
        <Link  to="/songs/new">New Song</Link>
      </button>
    </nav>
  );
}
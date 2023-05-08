import { Link } from "react-router-dom";

export default function NavBar() {
  return (
    <nav>
      <Link to="/albums"><h1><span>Tuner</span></h1></Link>
      <br/>
      <button>
        <Link  to="/albums/new">New Album</Link>
      </button>
    </nav>
  );
}


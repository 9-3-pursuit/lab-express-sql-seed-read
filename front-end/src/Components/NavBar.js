import { Link } from "react-router-dom";

export default function NavBar() {
  return (
    <nav>
      <header>Tuner</header>
      <h1>
        <Link to="/">Home 🎵</Link> | <Link to="/songs">Songs 🎶</Link> 
      </h1>
      <button>
        <Link to="/songs/new">New Song</Link>
      </button>
    </nav>
  );
}
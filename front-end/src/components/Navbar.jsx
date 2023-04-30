import { Link } from "react-router-dom";

export default function NavBar() {
  return (
    <header className="fixed left-0 top-0 h-16 w-full bg-sky-400">
      <nav className="flex h-full w-full items-center justify-between px-5">
        <Link to="/">
          <h1 className="text-3xl font-bold">Tuner</h1>
        </Link>
        <Link to="/new">
          <button className="rounded-md border bg-white p-2 text-sky-400 sm:hover:bg-sky-400 sm:hover:text-white">
            New
          </button>
        </Link>
      </nav>
    </header>
  );
}

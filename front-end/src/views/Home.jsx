import { Link } from "react-router-dom";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-gray-100 ">
      <h1 className="mb-2 text-3xl"> Welcome to Tuner!</h1>
      <Link to="/songs">
        <button className="rounded-md border bg-sky-400 p-2 text-white sm:hover:bg-white sm:hover:text-sky-400">
          See song list
        </button>
      </Link>
    </main>
  );
}

import { Link } from "react-router-dom";
function Navbar() {
  return (
    <nav className="bg-pink-200 text-white py-4 flex justify-around">
      <h1 className="text-4xl font-bold mb-6">
        <Link to="/">Tuner App</Link>
      </h1>
      <ul className="flex justify-around">
        <li className="cursor-pointer hover:text-gray-300 mr-4">
          <Link
            to="/songs"
            className="bg-pink-400 text-white py-2 px-4 rounded"
          >
            View All Songs
          </Link>
        </li>

        <li className="cursor-pointer hover:text-gray-300">
          <Link
            to="/songs/new"
            className="bg-pink-400 text-white py-2 px-4 rounded"
          >
            Add New Song
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;

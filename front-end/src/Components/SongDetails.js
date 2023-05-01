import { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import axios from "axios";

function SongDetails() {
  const [showSong, setShowSong] = useState({
    name: "",
    artist: "",
    album: "",
    time: "",
    is_favorite: "",
  });

  let { id } = useParams(); // getting index from URL
  let navigate = useNavigate();

  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_API_URL}/songs/${id}`)
      .then((response) => setShowSong(response.data))
      .catch((error) => {
        console.log(error);
        navigate("/not-found");
      });
  }, [id, navigate]);

  function handleDelete() {
    if (window.confirm("Are you sure you want to delete this song ? ")) {
      fetch(`${process.env.REACT_APP_API_URL}/songs/${id}`, {
        method: "DELETE",
      })
        .then(() => {
          navigate("/songs");
        })
        .catch((error) => {
          console.log(error);
          navigate("/not-found");
        });
    }
  }

  return (
    <div
      className="Song-Details container mx-auto px-4 py-8"
      style={{ paddingBottom: "10rem" }}
    >
      <div className="bg-pink-50 border border-red-50 shadow overflow-hidden sm:rounded-lg">
        <div className="px-4 py-5 sm:px-6 my-4">
          <h2 className="text-lg leading-6 font-medium text-gray-900 my-4">
            <strong>Title : </strong>
            {showSong.name}
          </h2>
          <h2 className="text-lg leading-6 font-medium text-gray-900 my-4">
            <strong>Artist : </strong>
            {showSong.artist}
          </h2>
          <h3 className="mt-1 max-w-2xl text-sm text-gray-900 my-4">
            <strong>Album : </strong>
            {showSong.album}
          </h3>
          <h3 className="mt-1 max-w-2xl text-sm text-gray-900 my-4">
            <strong>Duration : </strong>
            {showSong.time}
          </h3>
          {showSong.is_favorite ? (
            <h3 className="mt-1 max-w-2xl text-sm text-gray-900 my-4">
              <strong>Favorite Song : ⭐️ </strong>
            </h3>
          ) : (
            <h3 className="mt-1 max-w-2xl text-sm text-gray-900 my-4">
              <strong>Favorite Song : ❌ </strong>
            </h3>
          )}
        </div>

        <div className="px-4 py-3 bg-pink-100 sm:px-6">
          <div className="flex justify-center">
            <button className="mr-6 inline-flex items-center justify-center px-4 py-2 border border-transparent rounded shadow-sm text-sm font-medium text-white bg-pink-400 hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500">
              <Link to="/songs">Back</Link>
            </button>
            <button className="mr-6 inline-flex items-center justify-center px-4 py-2 border border-transparent rounded shadow-sm text-sm font-medium text-white bg-pink-400 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
              <Link to={`/songs/${id}/edit`}>Edit</Link>
            </button>
            <button
              className="inline-flex items-center justify-center px-4 py-2 border border-transparent rounded shadow-sm text-sm font-medium text-white bg-pink-400 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"
              onClick={handleDelete}
            >
              Delete
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
export default SongDetails;

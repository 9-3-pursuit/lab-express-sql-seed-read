import axios from "axios";
import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";

function SongEditForm() {
  const [editSong, setEditSong] = useState({
    name: "",
    artist: "",
    album: "",
    time: "",
    is_favorite: false,
  });

  let navigate = useNavigate();
  const { id } = useParams();

  function handleTextChange(event) {
    setEditSong({ ...editSong, [event.target.id]: event.target.value });
  }
  function handleCheckboxChange(event) {
    setEditSong({ ...editSong, is_favorite: event.target.checked });
  }

  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_API_URL}/songs/${id}`)
      .then((res) => {
        setEditSong(res.data);
      })
      .catch((error) => {
        console.log("catch", error);
      });
  }, [id]);

  function handleSubmit(event) {
    event.preventDefault();
    axios
      .put(`${process.env.REACT_APP_API_URL}/songs/${id}`, editSong)
      .then(() => {
        navigate(`/songs/${id}`);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  return (
    <div className="p-4 bg-pink-50">
      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="flex justify-between w-full">
          <label htmlFor="name" className="mb-2 text-lg font-medium">
            Song Name :{" "}
          </label>
          <input
            id="name"
            type="text"
            required
            autoFocus
            placeholder="Enter the name of song:"
            className="py-2 px-3 border border-gray-300 rounded-md"
            title="Name of the Song is required"
            onChange={handleTextChange}
            value={editSong.name}
          />
        </div>

        <div className="flex justify-between w-full">
          <label htmlFor="artist" className="mb-2 text-lg font-medium">
            Artist Name :{" "}
          </label>
          <input
            id="artist"
            type="text"
            required
            placeholder="Enter the name of artist:"
            className="py-2 px-3 border border-gray-300 rounded-md"
            title="Artist is required"
            onChange={handleTextChange}
            value={editSong.artist}
          />
        </div>

        <div className="flex justify-between w-full">
          <label htmlFor="album" className="mb-2 text-lg font-medium">
            Album Name :{" "}
          </label>
          <input
            id="album"
            type="text"
            className="py-2 px-3 border border-gray-300 rounded-md"
            placeholder="Enter the name of album:"
            onChange={handleTextChange}
            value={editSong.album}
          />
        </div>

        <div className="flex justify-between w-full">
          <label htmlFor="time" className="mb-2 text-lg font-medium">
            Time :{" "}
          </label>
          <input
            id="time"
            className="py-2 px-3 border border-gray-300 rounded-md"
            type="text"
            placeholder="Enter the duration of the song:"
            onChange={handleTextChange}
            value={editSong.time}
          />
        </div>

        <div className="flex justify-between w-full">
          <label
            htmlFor="is_favorite"
            className="flex items-center mb-2 text-lg font-medium"
          >
            Favorite :{" "}
            <input
              id="is_favorite"
              type="checkbox"
              className="mr-2"
              onChange={handleCheckboxChange}
              checked={editSong.is_favorite}
            />
          </label>
        </div>

        <div className="flex items-center justify-end space-x-4">
          <button
            type="submit"
            onSubmit={handleSubmit}
            className="px-4 py-2 text-white bg-pink-400 rounded-md hover:bg-pink-600 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
          >
            Save
          </button>
          <button
            type="button"
            onClick={() => navigate("/songs")}
            className="px-4 py-2 text-white bg-pink-400 rounded-md hover:bg-pink-600 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2"
          >
            Cancel
          </button>
          <button
            type="reset"
            className="px-4 py-2 text-white bg-pink-400 rounded-md hover:bg-pink-600 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
          >
            {" "}
            Reset
          </button>
        </div>
      </form>
    </div>
  );
}

export default SongEditForm;

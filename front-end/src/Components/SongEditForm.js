import axios from "axios";
import React, { useState, useEffect } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
 const API = process.env.REACT_APP_API_URL;

function SongEditForm() {
  let { id } = useParams();
  let navigate = useNavigate();

  const [editSong, setEditSong] = useState({
    title: "",
    artist: "",
    time: "",
    is_favorite: false,
  });

  const updateSong = (updatedSong) => {
    axios
      .put(`${API}/songs/${id}`, updatedSong)
      .then(
        () => {
          navigate(`/songs/${id}`);
        },
        (error) => console.error(error)
      )
      .catch((c) => console.warn("catch", c));
  };

  const handleTextChange = (event) => {
    setEditSong({ ...editSong, [event.target.id]: event.target.value });
  };

  const handleCheckboxChange = () => {
    setEditSong({ ...editSong, is_favorite: !editSong.is_favorite });
  };

  useEffect(() => {
    axios.get(`${API}/songs/${id}`).then(
      (response) => setEditSong(response.data),
      (error) => navigate(`/not-found`)
    );
  }, [id, navigate]);

  const handleSubmit = (event) => {
    event.preventDefault();
    updateSong(editSong, id);
  };
  return (
    <div className="Edit">
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Name:</label>
        <input
          id="name"
          value={editSong.name}
          type="text"
          onChange={handleTextChange}
          placeholder="Name of Song"
          required
        />
        <label htmlFor="artist">Artist:</label>
        <input
          id="artist"
          value={editSong.artist}
          type="text"
          onChange={handleTextChange}
          placeholder="Name of Artist"
        />
        <label htmlFor="time">Time:</label>
        <input
          id="time"
          value={editSong.time}
          type="text"
          onChange={handleTextChange}
          placeholder="Length of Song..."
        />
        <label htmlFor="is_favorite">Favorite:</label>
        <input
          id="is_favorite"
          type="checkbox"
          onChange={handleCheckboxChange}
          checked={editSong.is_favorite}
        />

        <br />

        <input type="submit" />
      </form>
      <Link to={`/songs/${id}`}>
        <button>Nevermind!</button>
      </Link>
    </div>
  );
}

export default SongEditForm;

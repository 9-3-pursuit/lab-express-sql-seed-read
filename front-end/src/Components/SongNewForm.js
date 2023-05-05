import axios from "axios";
import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { useParams } from "react-router-dom";

const API = process.env.REACT_APP_API_URL;

function SongNewForm() {
  let navigate = useNavigate();
  let { id } = useParams();

  const addSong = (newSong) => {
    axios
      .post(`${API}/songs`, newSong)
      .then(
        () => {
          navigate(`/songs`);
        },
        (error) => console.error(error)
      )
      .catch((c) => console.warn("catch", c));
  };

  const [song, setSong] = useState({
    name: "",
    artist: "",
    album: "",
    time: "",
    is_favorite: false,
  });

  const handleTextChange = (event) => {
    setSong({ ...song, [event.target.id]: event.target.value });
  };

  const handleCheckboxChange = () => {
    setSong({ ...song, is_favorite: !song.is_favorite });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    addSong(song);
  };

  return (
    <div className="New">
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Song Name:</label>
        <input
          id="name"
          value={song.name}
          type="text"
          onChange={handleTextChange}
          placeholder="Name of artist"
          required
        />
        <label htmlFor="artist">Artist:</label>
        <input
          id="artist"
          value={song.artist}
          type="text"
          onChange={handleTextChange}
          placeholder="Name of artist"
          required
        />
        <label htmlFor="time">Time:</label>
        <input
          id="time"
          type="text"
          name="title"
          value={song.time}
          placeholder="title of song"
          onChange={handleTextChange}
        />
        <label htmlFor="album">Album:</label>
        <input
          id="album"
          value={song.album}
          type="text"
          onChange={handleTextChange}
          placeholder="album "
          required
        />

        <label htmlFor="is_favorite">Favorite:</label>
        <input
          id="is_favorite"
          type="checkbox"
          onChange={handleCheckboxChange}
          checked={song.is_favorite}
        />

        <br />

        <button type="submit">Add Song</button>
      </form>
      <button onClick={() => navigate("/songs")}>Cancel</button>
    </div>
  );
}

export default SongNewForm;
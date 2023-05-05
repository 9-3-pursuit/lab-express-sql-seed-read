import axios from "axios";
import { useState, useEffect } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";

const API = process.env.REACT_APP_API_URL;

function SongEditForm() {
  let { id } = useParams();
  let navigate = useNavigate();

  const [song, setSongs] = useState({
    name: "",
    artist:"",
    time:"",
    album: "",
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
    setSongs({ ...song, [event.target.id]: event.target.value });
  };

  const handleCheckboxChange = () => {
    setSongs({ ...song, is_favorite: !song.is_favorite });
  };

  useEffect(() => {
    axios.get(`${API}/songs/${id}`).then(
      (response) => setSongs(response.data),
      (error) => navigate(`/not-found`)
    );
  }, [id, navigate]);

  const handleSubmit = (event) => {
    event.preventDefault();
    updateSong(song, id);
  };
  return (
    <div className="Edit">
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Name:</label>
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
        <label htmlFor="title">Title:</label>
        <input
          id="title"
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

{/* <label htmlFor="name">Time:</label>
        <input
          id="time"
          value={song.time}
          type="time"
          onChange={handleTextChange}
          placeholder="duration of song"
          required
        /> */}
        <label htmlFor="is_favorite">Favorite:</label>
        <input
          id="is_favorite"
          type="checkbox"
          onChange={handleCheckboxChange}
          checked={song.is_favorite}
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

import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

 const API = process.env.REACT_APP_API_URL;

function SongNewForm() {
  let navigate = useNavigate();

  const addNewSong = (newSong) => {
    axios
      .post(`${API}/songs/`, newSong)
      .then(
        () => {
          navigate(`/songs`);
        },
        (error) => console.error(error)
      )
      .catch((c) => console.warn("catch", c));
  };

  const [newAddedSong, setAddedSong] = useState({
    name: "",
    artist: "",
    time: "",
    is_favorite: false,
  });

  const handleTextChange = (event) => {
    setAddedSong({ ...newAddedSong, [event.target.id]: event.target.value });
  };

  const handleCheckboxChange = () => {
    setAddedSong({ ...newAddedSong, is_favorite: !newAddedSong.is_favorite });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    addNewSong(newAddedSong);
  };
  return (
    <div className="New">
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Name:</label>
        <input
          id="name"
          value={newAddedSong.name}
          type="text"
          onChange={handleTextChange}
          placeholder="Name of Song"
          required
        />
        <label htmlFor="artist">Artist:</label>
        <input
          id="artist"
          value={newAddedSong.artist}
          type="text"
          onChange={handleTextChange}
          placeholder="Name of Artist"
          required
        />
        <label htmlFor="time">Time:</label>
        <input
          id="time"
          value={newAddedSong.time}
          type="text"
          onChange={handleTextChange}
          placeholder="Length of Song..."
        />
        <label htmlFor="is_favorite">Favorite:</label>
        <input
          id="is_favorite"
          type="checkbox"
          onChange={handleCheckboxChange}
          checked={newAddedSong.is_favorite}
        />

        <br />
        <input type="submit" />
      </form>
    </div>
  );
}

export default SongNewForm;

import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

// const API = process.env.REACT_APP_API_URL;

function SongNewForm() {
  let navigate = useNavigate();

  const addNewSong = (newSong) => {
    axios
      .post(`http://localhost:3333/songs/`, newSong)
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
        <label htmlFor="songName">Name:</label>
        <input
          id="songName"
          value={newAddedSong.name}
          type="text"
          onChange={handleTextChange}
          placeholder="Name of Song"
          required
        />
        <label htmlFor="songArtist">Artist:</label>
        <input
          id="songArtist"
          value={newAddedSong.artist}
          type="text"
          onChange={handleTextChange}
          placeholder="Name of Artist"
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

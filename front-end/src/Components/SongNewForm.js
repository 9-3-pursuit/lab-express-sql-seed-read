// TODO: http://localhost:3000/songs/new -> show form to ADD a new song
import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function SongNewForm() {
  let navigate = useNavigate();

  const addNewSong = (newSong) => {
    axios
      .post(`http://localhost:3000/songs`, newSong)
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
    album: "",
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
        <label htmlFor="name">Song Name:</label>
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
        <label htmlFor="album">Album:</label>
        <input
          id="album"
          value={newAddedSong.album}
          type="text"
          onChange={handleTextChange}
          placeholder="Album"
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

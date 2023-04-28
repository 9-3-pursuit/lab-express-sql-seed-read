import axios from "axios";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
const API = process.env.REACT_APP_API_URL;

function NewSong() {
  const [song, setSong] = useState({
    name: "",
    artist: "",
    album: "",
    time: "",
    is_favorite: false,
  });
  const navigate = useNavigate();
  const handleChange = (e) => {
    if (e.target.id === "is_favorite")
      setSong({ ...song, is_favorite: e.target.checked });
    else setSong({ ...song, [e.target.id]: e.target.value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post(`${API}/songs`)
      .then(() => navigate("/songs"))
      .catch((e) => console.log(e));
  };
  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="name">Name</label>
      <br />
      <input id="name" type="text" onChange={handleChange} />
      <hr />
      <label htmlFor="artist">Artist</label>
      <br />
      <input id="artist" type="text" onChange={handleChange} />
      <hr />
      <label htmlFor="album">Album</label>
      <br />
      <input id="album" type="text" onChange={handleChange} />
      <hr />
      <label htmlFor="time">Time</label>
      <br />
      <input id="time" type="time" onChange={handleChange} />
      <hr />
      <label htmlFor="is_favorite">Is Favorite</label>
      <input
        id="is_favorite"
        checked={song.is_favorite}
        type="checkbox"
        onChange
      />
      <input type="submit" />
    </form>
  );
}

export default NewSong;
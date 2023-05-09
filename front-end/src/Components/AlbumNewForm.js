import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const API = process.env.REACT_APP_API_URL;

function AlbumNewForm() {
  let navigate = useNavigate();

  const addAlbum = (newAlbum) => {
    axios
      .post(`${API}/albums`, newAlbum)
      .then(
        () => {
          navigate(`/albums`);
        },
        (error) => console.error(error)
      )
      .catch((c) => console.warn("catch", c));
  };

  const [album, setAlbum] = useState({
    name: "",
    artist: "",
    year: "",
    genre: "",
    producer: "",
  });

  const handleTextChange = (event) => {
    setAlbum({ ...album, [event.target.id]: event.target.value });
  };

 

  const handleSubmit = (event) => {
    event.preventDefault();
    addAlbum(album);
  };
  return (
    <div className="New">
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Name:</label>
        <input
          id="name"
          value={album.name}
          type="text"
          onChange={handleTextChange}
          placeholder="Name of Album"
          required
        />
        <label htmlFor="artist">Artist:</label>
        <input
          id="artist"
          type="text"
          required
          value={album.artist}
          placeholder="Artist"
          onChange={handleTextChange}
        />
        <label htmlFor="Year">Year:</label>
        <input
          id="year"
          type="text"
          name="year"
          value={album.year}
          placeholder="Year of edition"
          onChange={handleTextChange}
        />
        <label htmlFor="genre">Genre:</label>
        <input
          id="genre"
          type="text"
          name="year"
          value={album.genre}
          onChange={handleTextChange}
          
        />
        <label htmlFor="producer">Producer:</label>
        <input
          id="producer"
          type="text"
          name="producer"
          value={album.producer}
          onChange={handleTextChange}
          placeholder="Name of Album Producer"
        />

        <br />
        <input type="submit" />
      </form>
    </div>
  );
}

export default AlbumNewForm;
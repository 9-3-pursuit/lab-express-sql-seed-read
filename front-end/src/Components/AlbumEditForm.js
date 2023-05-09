import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";

const API = process.env.REACT_APP_API_URL;

function AlbumEditForm() {
  let { albumId } = useParams();

  let navigate = useNavigate();

  const [album, setAlbum] = useState({
    name: "",
    artist: "",
    year: "",
    genre: "",
    producer: "",
    album_id: albumId,
  });

  const updatedAlbum = (updateAlbum, albumId) => {
    axios
      .put(`${API}/albums/${albumId}`, updateAlbum)
      .then(
        () => {
          navigate(`/albums/${albumId}`);
        },
        (error) => console.error(error)
      )
      .catch((c) => console.warn("catch", c));
  };

  const handleTextChange = (event) => {
    setAlbum({ ...album, [event.target.id]: event.target.value });
  };


  useEffect(() => {
    axios.get(`${API}/albums/${albumId}`)
    .then(
      (response) => setAlbum(response.data),
      //(error) => navigate(`/not-found`)
    );
  }, [albumId]);

  const handleSubmit = (event) => {
    event.preventDefault();
    updatedAlbum(album, albumId);
  };

  return (
    <div className="Edit">
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Song Name:</label>
        <input
          id="name"
          value={album.name}
          type="text"
          onChange={handleTextChange}
          placeholder="Name of Song"
          required
        />
        <br/>
        <label htmlFor="artist">Artist:</label>
        <input
          id="artist"
          type="text"
          value={album.artist}
          onChange={handleTextChange}
          placeholder="Name of Artist"
          required
        />
        <br/>
    
        <br/>
        <label htmlFor="year">Year:</label>
        <input
          id="year"
          type="text"
          name="year"
          value={album.year}
          onChange={handleTextChange}
          placeholder="Year of Album"
          required
        />
        <br/>
        <label htmlFor="genre">Genre:</label>
        <input
          id="genre"
          type="text"
          name="genre"
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
          
        />
        <br/>
        <div className='nav-buttons'>
          <Link to={`/albums/${albumId}`}><button>Back</button></Link> 
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <button type="submit">Submit</button>
        </div>
      </form>
      
    </div>
  );
}

export default AlbumEditForm;
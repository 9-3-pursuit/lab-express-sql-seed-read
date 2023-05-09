
import React from "react";
import { useState, useEffect } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import axios from "axios";

const API = process.env.REACT_APP_API_URL
 
function SongDetails() {
  const [song, setSong] = useState([]);
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    axios.get(`${API}/songs/${id}`)
    .then((response) => {
      console.log(response.data)
      setSong(response.data)
    }).catch((e) => {
      console.warn("catch:", e)
    })
  }, [id]);

  const handleDelete = () => {
   
    deleteSong();
  };

  const deleteSong = () => {
    axios
      .delete(`${API}/songs/${id}`)
      .then(() => {
        navigate(`/songs`);
      })
      .catch((e) => {
        console.warn("catch:", e);
      });
  };

return (
  <article>
    <h1>{song.is_favorite ? <span>⭐️</span> : null} {song.name} - By {song.artist}</h1>
    <h2>
      <span>
        Album:
      </span>
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; {song.album}
    </h2>
    <h3>Time: {song.time}</h3>
    <div className="showNavigation">
      <div>
        <Link to={`/songs`}>
          <button>Back</button>
        </Link>
      </div>
      <div>
        <Link to={`/songs/id/edit`}>
          <button>Edit</button>
        </Link>
      </div>
      <div>
        <button onClick={handleDelete}>Delete</button>
      </div>
    </div>

  </article>
 ) 
}

export default SongDetails;
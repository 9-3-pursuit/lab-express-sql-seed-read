import { useState, useEffect } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import axios from "axios";
import "./Sidebar.css";
const API = process.env.REACT_APP_API_URL;

function SongDetails() {
  const [song, setSong] = useState([]);

  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get(`${API}/songs/${id}`)
      .then((response) => {
        console.log(response.data);
        setSong(response.data);
      })
      .catch((e) => {
        console.warn("catch:", e);
      });
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
    <article className="Song-Details">
      <h3>
        {song.is_favorite ? <span>⭐️</span> : null} {song.name}
      </h3>
      <h5>
        <a href={song.url}>{song.url}</a>
      </h5>
      <h6>{song.artist}</h6>
      <h6>{song.time}</h6>
      <h6>{song.album}</h6>
      <div className="showNavigation">
        <div>
          <Link to={`/songs`}>
            <button>Back</button>
          </Link>
        </div>
        <div>
          <Link to={`/songs/${id}/edit`}>
            <button>Edit</button>
          </Link>
        </div>
        <div>
          <button onClick={handleDelete}>Delete</button>
        </div>
      </div>
      <div>
        <Link to={`/songs/${id}`}>
          {/* <button>View Song</button> */}
        </Link>
      </div>
    </article>
    
  );
}

export default SongDetails;


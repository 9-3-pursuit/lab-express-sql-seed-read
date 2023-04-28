import axios from "axios";
import { useState, useEffect } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import "./SongDetails.css";
const API = process.env.REACT_APP_API_URL;

function SongDetails() {
  const [song, setSong] = useState({});
  const { id } = useParams();
  const navigate = useNavigate();
  useEffect(() => {
    axios
      .get(`${API}/songs/${id}`)
      .then((res) => setSong(res.data))
      .catch((e) => console.log(e));
  }, [id]);
  const handleDelete = () => {
    axios
      .delete(`${API}/songs/${id}`)
      .then(() => navigate("/songs"))
      .catch((e) => console.log(e));
  };
  return (
    <section className="song-details">
      <h3>
        {song.is_favorite ? <span>⭐️</span> : ""} {song.name} - By{" "}
        {song.artist}
      </h3>
      <h4>{song.album}</h4>
      <div>{song.time}</div>
      <div>
        <button>
          <Link to="/songs">Back</Link>
        </button>
        <button>
          <Link to={`/songs/${id}/edit`}>Edit</Link>
        </button>
        <button>
          <Link onClick={handleDelete}>Delete</Link>
        </button>
      </div>
    </section>
  );
}

export default SongDetails;

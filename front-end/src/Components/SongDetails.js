import { useState, useEffect } from "react";
import axios from "axios";
import { useParams, Link } from "react-router-dom";
const API = process.env.REACT_APP_APT_URL;

function SongDetails() {
  const [song, setSong] = useState([]);
  const { id } = useParams;

  useEffect(() => {
    axios
      .get(`${API}/songs/${id}`)
      .then((response) => {
        console.log(response.data);
        setSong(response.data);
      })
      .catch((error) => {
        console.warn("catch:", error);
      });
  }, [id]);
  return (
    <article>
      <h1>Song Details ⤵ </h1>
      <h3>
        Name → {song.name}
        <br></br>
        Favorite ⭐️ {song.is_favorite}
        <br></br>
        Artist → {song.artist}
        <br></br>
        Time → {song.time}
        <br></br>
      </h3>
      <div className="showNavigation">
        <div>
          {" "}
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
          <button>Delete</button>
        </div>
      </div>
    </article>
  );
}

export default SongDetails;

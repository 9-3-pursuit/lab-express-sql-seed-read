import { useState, useEffect } from "react";
import axios from "axios";
import { useParams, Link, useNavigate } from "react-router-dom";
// import FourOFour from "../Pages/FourOFour";

const API = process.env.REACT_APP_API_URL;

function SongDetails() {
  const [songList, setSongList] = useState([]);
  let { id } = useParams();
  let navigate = useNavigate();

  useEffect(() => {
    axios
      .get(`${API}/songs/${id}`)
      .then((response) => {
        console.log(response.data);
        setSongList(response.data);
      })
      .catch((error) => {
        console.warn("catch:", error);
      });
  }, [id]);

  const handleDelete = () => {
    deleteSong();
  };

  const deleteSong = () => {
    axios
      .delete(`${URL}/songs/${ id }`)
      .then(() => {
        navigate("/songs");
      })
      .catch((error) => {
        console.warn("catch:", error);
      });
  };

  return (
    <article>
      <h3>
        {songList.is_favorite ? <span>⭐️</span> : null} {songList.name}
      </h3>

      <h5>
        <span>
          <a href={songList.name}>{songList.artist}</a>
        </span>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; {songList.album}
      </h5>
      <h6>{songList.time}</h6>
      <div className="songNavigation">
        <div>
          {" "}
          <Link to={`/songs`}>
            <button>Back</button>
          </Link>
        </div>
        <div>
          <Link to={`${API}/songs/edit`}>
            <button>Edit</button>
          </Link>
        </div>
        <div>
          <button onClick={handleDelete}>Delete</button>
        </div>
      </div>
    </article>
  );
}

export default SongDetails;

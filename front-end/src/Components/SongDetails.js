import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams, Link, useNavigate } from "react-router-dom";
import FourOFour from "../Pages/FourOFour";
// const API = process.env.REACT_APP_APT_URL;

function SongDetails() {
  const [song, setSong] = useState([]);
  let { index } = useParams();
  let navigate = useNavigate();

  useEffect(() => {
    axios
      .get(`http://localhost:3333/songs/${index}`)
      .then((response) => {
        console.log(response.data);
        setSong(response.data);
      })
      .catch(() => {
        navigate(FourOFour);
      });
  }, [index, navigate]);

  const handleDelete = () => {
    axios
      .delete(`http://localhost:3333/songs/${index}`)
      .then(() => {
        navigate("/songs");
      });
  };

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
          <Link to={`http://localhost:3333/songs/`}>
            <button>Back</button>
          </Link>
        </div>
        <div>
          <Link to={`http://localhost:3333/songs/new`}>
            <button>Edit</button>
          </Link>
        </div>
        <div>
          <button onClick={handleDelete} >Delete</button>
        </div>
      </div>
    </article>
  );
}

export default SongDetails;

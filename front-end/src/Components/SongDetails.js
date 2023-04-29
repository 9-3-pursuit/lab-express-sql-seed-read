import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams, Link, useNavigate } from "react-router-dom";
import FourOFour from "../Pages/FourOFour";

function SongDetails() {
  const [songList, setSongList] = useState([]);
  let { index } = useParams();
  let navigate = useNavigate();

  useEffect(() => {
    axios
      .get(`http://localhost:3333/songs/${index}`)
      .then((response) => {
        // console.log(response.data);
        setSongList(response.data);
      })
      .catch(() => {
        navigate(FourOFour);
      });
  }, [index, navigate]);

  const handleDelete = () => {
    axios.delete(`http://localhost:3333/songs/${index}`)
    .then(() => {
    navigate("/songs");
    });
  };

  return (
    <div className="songDetails">
      <h1>Song Details ⤵</h1>
      <h3>
        Name → {songList.name}
        <br></br>
        Favorite ⭐️ {songList.is_favorite}
        <br></br>
        Artist → {songList.artist}
        <br></br>
        Time → {songList.time}
        <br></br>
      </h3>

      <div className="back-button">
        <Link to={`http://localhost:3000/songs`}>
          <button>Back</button>
        </Link>
      </div>
      <div className="edit-button">
        <Link to={`http://localhost:3000/songs/new`}>
          <button>Edit</button>
        </Link>
      </div>
      <div className="delete-button">
        <button onClick={handleDelete}>Delete</button>
      </div>
    </div>
  );
}

export default SongDetails;

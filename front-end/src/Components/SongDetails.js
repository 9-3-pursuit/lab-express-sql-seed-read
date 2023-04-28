import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams, Link, useNavigate } from "react-router-dom";
import FourOFour from "../Pages/FourOFour";

function SongDetails() {
  const [song, setSong] = useState([]);
  let { id } = useParams();
  let navigate = useNavigate();

  useEffect(() => {
    axios
      .get(`http://localhost:3333/songs/${id}`)
      .then((response) => {
        console.log(response.data);
        setSong(response.data);
      })
      .catch(() => {
        navigate(FourOFour);
      });
  }, [id, navigate]);

//   const handleDelete = () => {
//     axios.delete(`http://localhost:3333/songs/${id}`).then(() => {
//       navigate("/songs");
//     });
//   };

  return (
    <article>
      <h1>Song Details ⤵</h1>
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
        <div className="back-button">
          <Link to={`/songs`}>
            <button>Back</button>
          </Link>
        </div>
        <div className="edit-button">
          <Link to={`/songs/${id}/edit`}>
            <button>Edit</button>
          </Link>
        </div>
        <div className="delete-button">
          <button >Delete</button>
        </div>
      </div>
    </article>
  );
}

export default SongDetails;

// TODO: http://localhost:3000/songs/${id} -> shows selected song

import { useState, useEffect } from "react";
import axios from "axios";
import { Link, useParams } from "react-router-dom";

function SongDetails() {
  const [songList, setSongList] = useState([]);
  let { id } = useParams();

  useEffect(() => {
    axios
      .get(`http://localhost:3333/songs/${id}`)
      .then((response) => {
        console.log(response.data);
        setSongList(response.data);
      })
      .catch((error) => {
        console.warn("catch:", error);
      });
  }, [id]);

  return (
    <article className="Song-Details">
      <h3>
        {songList.is_favorite ? <span>⭐️</span> : null} {songList.name}
      </h3>

      <span>
        <h3>
          Name: {songList.name}
          <br></br>
          Artist: {songList.artist}
          <br></br>
          Album: {songList.album}
          <br></br>
          Time: {songList.time}
          <br></br>
          Favorite: {songList.is_favorite}
          <br></br>
        </h3>
      </span>

      <div className="songNavigation">
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

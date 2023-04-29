import axios from "axios";
// import { useParams, useNavigate } from "react-router-dom";
import React, { useState, useEffect } from "react";
import Song from "./Song";

const API = process.env.REACT_APP_API_URL;

function Songs() {
  const [songs, setSongs] = useState([]);
  // let { index } = useParams();
  // let navigate = useNavigate();

  useEffect(() => {
    axios
      .get(`${API}/songs`)
      .then((response) => {
        setSongs(response.data);
      })
      .catch((error) => {
        console.warn("catch", error);
      });
  }, []);
  return (
    <div className="Songs">
      <h2>All Songs:</h2>
      <section>
        <table>
          <thead>
            <tr>
              <th>Title</th>
              <th>Favorite</th>
              <th>Artist</th>
              <th>Time</th>
            </tr>
          </thead>
          <tbody>
            {songs.map((song) => {
              return <Song key={song.id} song={song} />;
            })}
          </tbody>
        </table>
      </section>
    </div>
  );
}

export default Songs;
